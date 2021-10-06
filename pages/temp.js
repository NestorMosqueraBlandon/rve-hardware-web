import Layout from "../components/Layout";
import styles from '../styles/Blog.module.css'
export default function Temp() {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.aside}>
                    <h2>Buscas una PC?</h2>
                    <p>Arma tu computadora gamer o workstation con nosotros.</p>
                    <button>Arma tu PC</button>

                    <h3>Comparte este articulo</h3>
                </div>
                <div className={styles.centercontent}>
                    <h2>Como crear un server de Minecraft gratis y alojarlo online</h2>
                    <div className={styles.contentdata}>
                        <span className={styles.blogcategory}> <i className='blue bx bxs-circle'></i> Gaming</span>
                        <span><i className='bx bx-calendar-event'></i> Oct 1, 2021</span>
                    </div>
                    <picture>
                        <img src="./fornite.jpg" alt="" />
                    </picture>
                </div>
                <div></div>
            </div>

            <p className="container">En Real Vision Hardware encuentras las mejores PCs gamer y computadoras de alto desemepeño armadas para todas las necesidades y presupuestos</p>

            <div className="newsletter">
                <h2><i className='bx bx-paper-plane'></i> Suscribete</h2>
                <p>Para no perderte ninguna novedad sobre gaming, hardware y tecnologia</p>

                <div className="form-group-duo">
                    <input type="email" name="" id="" placeholder="Correo electronico" />
                    <input type="text" placeholder="Nombre" />
                </div>
                <button>Suscribete</button>
            </div>

        </Layout>
    )
}
