import Layout from "../components/Layout";
import styles from '../styles/Login.module.css'
import Link from 'next/link';
import { useState } from "react";

export default function Login() {

    const {values, setValues} = useState({
        username: "",
        
        password: "",

    })
    const onSubmit = () => {

    }

    return (
        <Layout logo="../img/logo/logo.svg">
            
            <div className={styles.section}>
                <h2>Iniciar sesión</h2>
                <p>Bienvenido de nuevo</p>

                <form action={onSubmit} className={styles.form}>
                    <div className={styles.formgroup}>
                    <label htmlFor="">CORREO</label>
                    <input type="text" />
                    </div>
                    <div className={styles.formgroup}>
                    <label htmlFor="">CONTRASEÑA</label>
                    <input type="text" />
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
