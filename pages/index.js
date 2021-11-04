import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { format, register } from 'timeago.js';
import {ApolloClient, InMemoryCache, gql}from "@apollo/client"

export default function Home({posts}) {

  register('es_ES', (number, index, total_sec) => [
    ['justo ahora', 'ahora mismo'],
    ['hace %s segundos', 'en %s segundos'],
    ['hace 1 minuto', 'en 1 minuto'],
    ['hace %s minutos', 'en %s minutos'],
    ['hace 1 hora', 'en 1 hora'],
    ['hace %s horas', 'in %s horas'],
    ['hace 1 dia', 'en 1 dia'],
    ['hace %s dias', 'en %s dias'],
    ['hace 1 semana', 'en 1 semana'],
    ['hace %s semanas', 'en %s semanas'],
    ['1 mes', 'en 1 mes'],
    ['hace %s meses', 'en %s meses'],
    ['hace 1 año', 'en 1 año'],
    ['hace %s años', 'en %s años']
][index]);


const timeago = timestamp => format(timestamp, 'es_ES');

  return (
    <Layout logo="./img/logo/logo.svg">
      <div className={ styles.banner}></div>
      
      <section className={styles.bannercontent}>
        <div className={styles.left}>

        <h2> <em>&ldquo;Al final, ¿Qué distingue al hombre libre del esclavo? ¿Dinero? ¿Poder? No. El hombre elige. El esclavo obedece&rdquo;, Andrew Ryan (&quot;Bioshock&quot;) </em>  </h2>
        <Link href="/">
          <a>
            Elige ahora <i className='bx bx-right-arrow-alt'></i>
          </a>
        </Link>
        </div>

        {/* <div>
          <img src="./get.png" alt="" />
        </div> */}
      </section>

      <section className={styles.about}>
        <h2>SOBRE NOSOTROS</h2>
        <p className={styles.text}>Creamos las experiencias de entretenimiento y juegos interactivos más épicos. Nuestras plataformas sumergen a los jugadores en mundos nuevos e inimaginables y ofrecen innumerables formas de jugar dentro de ellos. Construimos comunidades que unen a las personas con propósito y pertenencia. Hacemos que cada día sea más divertido con juegos desde Candy Crush ™, Call of Duty® y World of Warcraft® hasta Overwatch®, Hearthstone® y Diablo®. Hay algo para todos. Se necesitan héroes para convertirse en héroes, y quines trabajamos, en Real Vision Hardware, son algunos de los mejores y más brillantes talentos en todo el mundo de la tecnología, los medios y el entretenimiento. El trabajo duro vale la pena y estamos orgullosos de esforzarnos cada dia para lograr nuestros objetivos.</p>
      </section>


      <section className={styles.about}>
      <h2>BLOG</h2>

      <div className={styles.bloglist}>
                {posts.map((post, index) => (
                    <div key={post._id} className={styles.blogitem}>
                        <Link href={`/post/${post.slug}`}>
                            <a>
                        <picture>
                            <img src={post.image? post.image : "./bg.png"} alt={post.title} />
                        </picture>
                        <span className={styles.blogcategory}>{post.category}</span>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <span className={styles.blogdate}>{timeago(post.createdAt)}</span>
                        </a>
                        </Link>
                    </div>
                ))}
            </div>
      </section>

      <section className={styles.about}>


      </section>

      {/* <section className={styles.firssection}>

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
       */}

      {/* <section className={styles.secondsection}>

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
      </section> */}
    </Layout>
  )
}



export async function getServerSideProps(){

  const client = new ApolloClient({
      uri: "https://rveapiql.herokuapp.com",
      cache: new InMemoryCache()
  })

  const {data} = await client.query({
      query: gql`
      query {
        posts{
          title
          description
          createdAt
          sanitizedHtml
          category
          slug
          image
        }
      }
    `
  })

  return {
      props: {
          posts: data.posts
      }
  }
}
