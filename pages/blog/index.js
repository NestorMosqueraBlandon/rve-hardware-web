import Layout from "../../components/Layout";
import data from "../../data";
import styles from '../../styles/Blog.module.css'

export default function index() {
    return (
        <Layout>
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
                    <img src="/mine.jpg" alt="" />
                </picture>
                <div>
                    <span>Gaming</span>
                    <h2>Como crear un server de Minecraft gratis y alojarlo online</h2>
                    <p>Como crear un servidor de MInecraft gratis y alojarlo en linea usando plataformas de servers de Minecraft como Aternos</p>
                    <button>Ver mas</button>
                </div>
            </div>

            <div className={styles.bloglist}>
                {data.blogs.map((blog) => (
                    <div className={styles.blogitem}>
                        <picture>
                            <img src={blog.img} alt={blog.title} />
                        </picture>
                        <span className={styles.blogcategory}>{blog.category}</span>
                        <h2>{blog.title}</h2>
                        <p>{blog.subtitle}</p>
                        <span className={styles.blogdate}>{blog.date}</span>
                    </div>
                ))}
            </div>
        </Layout>
    )
}
