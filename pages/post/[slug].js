import React from 'react'
import {ApolloClient, InMemoryCache, gql}from "@apollo/client"
import Layout from '../../components/Layout';
import styles from '../../styles/Blog.module.css'
export default function blog(props) {
    
    const {post} = props;

    console.log(post[0].title)
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
                    <h2>{post[0].title}</h2>
                    <div className={styles.contentdata}>
                        <span className={styles.blogcategory}> <i className='blue bx bxs-circle'></i> {post[0].category}</span>
                        <span><i className='bx bx-calendar-event'></i> Oct 1, 2021</span>
                    </div>
                    <picture>
                        <img src="./fornite.jpg" alt="" />
                    </picture>
                </div>
                <div></div>
            </div>

            <div className="container" dangerouslySetInnerHTML={{__html:post[0].sanitizedHtml}} ></div>

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

export async function getServerSideProps(context){
    const { params } = context;
    const { slug } = params;

    const client = new ApolloClient({
        uri: "https://rveapiql.herokuapp.com/",
        cache: new InMemoryCache()
    })

    const {data} = await client.query({
        query: gql`
        query {
          post(slug: "${slug}"){
            title
            description
            createdAt
            sanitizedHtml
            category
          }
        }
      `
    })

    return {
        props: {
            post: data.post
        }
    }
}
