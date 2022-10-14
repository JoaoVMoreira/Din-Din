import { createContext, useEffect, useState } from "react";
import firebase from "../firebaseConnection";

export const AuthContext = createContext({})

function AuthProvider({ children }){
    const[auth, setAuth] = useState(null)
    
    useEffect(()=>{
        function LocalStorageInteraction() {
            const storageUser = localStorage.getItem('sistemaUser')

            if (storageUser){
                setAuth(JSON.parse(storageUser))
            }
        }
        LocalStorageInteraction()
    },[])
    
    async function CadastraItens(titulo, valor, tipo, categoria, descricao) {

        if (titulo !== '' && valor !== '' && tipo !== '' && categoria !== ''){
            await firebase.firestore().collection('dados')
            .add({
                titulo: titulo,
                valor: valor,
                tipo: tipo,
                categoria: categoria,
                descricao: descricao
            })
            .then(()=>{
                alert('dados cadastrados')
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }

    async function cadastraUser(email, senha, nome){
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
                .then( async (value) => {
                    alert('Cadastro efetuado')
                    let uid = value.user.uid

                    await firebase.firestore().collection('users')
                    .doc(uid).set({
                        nome: nome,
                        email: email
                    })
                    .then(()=> {
                        let data={
                            uid: uid,
                            nome: nome,
                            email: value.user.email
                        }

                        setAuth(data)
                        storageUser(data)
                    })
                    
                })
                .catch((error)=>{
                    console.log(error)
                })
    }

    async function LogarUser(email, senha){
        await firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(async (value)=> {
            let uid = value.user.uid

            const perfil = firebase.firestore().collection('users')
            .doc(uid).get()

            let data = {
                uid: uid,
                email: email
            }
            setAuth(data)
            storageUser(data)
        })
        .catch((error)=>{
            alert(error)
            console.log(error)
        })
    }

    function storageUser(data){
        localStorage.setItem('sistemaUser', JSON.stringify(data))
    }

    async function Deslogar(){
        await firebase.auth().signOut
        setAuth(null)
        storageUser(null)
    }

    return(
        <AuthContext.Provider value={{ signed: !!auth, auth, cadastraUser, Deslogar, LogarUser, CadastraItens}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider