import Layout from "../components/Layout";
import styles from '../styles/Login.module.css'
import Link from 'next/link';
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Store } from "../Store";
import { useMutation, gql } from "@apollo/client";
import Cookies from "js-cookie";

export default function Login() {

    const router = useRouter();

    const { state, dispatch } = useContext(Store);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    console.log(password)
    console.log(email)

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(proxy, result) {
            console.log(result)
            dispatch({ type: "USER_LOGIN", payload: result.data.signin })
            Cookies.set("userInfo", result.data.signin)
            router.push("/tournament")
        },
        variables: {
            email, password
        }
    })


    const onSubmit = (event) => {
        event.preventDefault();
        loginUser();
    }

    return (
        <Layout logo="../img/logo/logo.svg">

            <div className={styles.section}>
                <h2>Iniciar sesión</h2>
                <p>Bienvenido de nuevo</p>

                <form onSubmit={onSubmit} className={styles.form}>
                    <div className={styles.formgroup}>
                        <label htmlFor="">CORREO</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styles.formgroup}>
                        <label htmlFor="">CONTRASEÑA</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className={styles.formgroupbtn}>
                        <input type="submit" value="Iniciar sesión" />
                    </div>
                </form>
                <div className={styles.loginregister}>
                    ¿No tienes una cuenta? <Link href="/register"><a>Registrarse</a></Link>
                </div>
            </div>
        </Layout>
    )
}

const LOGIN_USER = gql`

mutation signin($email: String!, $password: String!){
    signin(email: $email, password: $password){
        id email username points, firstname, lastname, createdAt
    }   
}
`