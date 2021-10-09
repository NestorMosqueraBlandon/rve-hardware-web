import Layout from "../../components/Layout";
import Link from 'next/link';
import data from "../../data";
import styles from '../../styles/Blog.module.css'
import {ApolloClient, InMemoryCache, gql}from "@apollo/client"
import { format, register } from 'timeago.js';
export default function Index({posts}) {

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
        <Layout logo="../logo.svg">
            <div className={styles.blogheader}>
                <ul>
                    <li className={styles.active} >Todo</li>
                    <li>Noticias</li>
                    <li>Reviews</li>
                    <li>Gaming</li>
                    <li>Software</li>
                    <li>Hardware</li>
                </ul>
                <input type="text" placeholder="Buscar en el blog" />
            </div>
            <div className={styles.blogbanner}>
                <picture>
                    <img src="/bg.png" alt={posts[posts.length - 1].title} />
                </picture>
                <div>
                    <span>{posts[posts.length - 1].category}</span>
                    <h2> {posts[posts.length - 1].title}</h2>
                    <p>{posts[posts.length - 1].description}</p>
                    <Link href={`/post/${posts[posts.length - 1].slug}`}>Ver mas</Link>
                </div>
            </div>

            <div className={styles.bloglist}>
                {posts.map((post) => (
                    <div key={post.id} className={styles.blogitem}>
                        <Link href={`/post/${post.slug}`}>
                            <a>
                        <picture>
                            <img src={post.img? post.img : "./bg.png"} alt={post.title} />
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
