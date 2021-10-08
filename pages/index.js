import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {


  return (
    <Layout>
      <div className={ styles.banner}></div>
      
      <section className={styles.bannercontent}>
        <div>

        <h2> <em>"Al final, ¿Qué distingue al hombre libre del esclavo? ¿Dinero? ¿Poder? No. El hombre elige. El esclavo obedece", Andrew Ryan ('Bioshock') </em>  </h2>
        <Link href="">
          <a>
            Elige ahora <i className='bx bx-right-arrow-alt'></i>
          </a>
        </Link>
        </div>

        <div>
          <img src="./get.png" alt="" />
        </div>
      </section>
      <section className={styles.firssection}>

<div className={styles.games}>
  <div className={styles.img}>
    <img src="/img1.png" alt="" />
  </div>
  <div>

  <h2>Juega diferentes juegos ahora.</h2>

  <p>Juega más de 50 juegos de deportes electrónicos diferentes, <br /> lee las últimas noticias sobre juegos, acumula puntos y diviértete</p>

  <button>Explorar Juegos</button>
  </div>
</div>
</section>
      

      <section className={styles.secondsection}>

        <div className={styles.tournaments}>
          <div className={styles.content}>
            <h2>Juego diferentes torneos</h2>
            <p>Juega más de 50 juegos de deportes electrónicos diferentes, <br /> lee las últimas noticias sobre juegos,  acumula puntos y diviértete</p>
            <button>Empieza la prueba gratis</button>
          </div>
          <div className={styles.img}>
            <img src="/img2.png" alt="" />
          </div>
        </div>
      </section>
      <section className={styles.altsection}>
        <div className={styles.build}>
          <div>
            <h2 className={styles.title}>Construye comunidad, crea ejecuta <br />  tus propias ligas </h2>
            <p>Descarga nuestra app gratis y accede a noticias aun ams facil</p>
            <button>Descargar app</button>
          </div>
          <div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
