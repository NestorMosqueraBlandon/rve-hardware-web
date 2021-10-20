import Layout from "../components/Layout";
import styles from '../styles/Login.module.css'

export default function login() {
    return (
        <Layout logo="../img/logo/logo.svg">
            
            <div className={styles.section}>
                <form action="" className={styles.form}>
                    <div className={styles.formgroup}>
                    <input type="text" placeholder="Usuario" />
                    </div>
                    <div className={styles.formgroup}>
                    <input type="text" placeholder="Contraseña" />
                    </div>
                </form>
            </div>
        </Layout>
    )
}
