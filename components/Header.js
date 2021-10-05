import styles from '../styles/Header.module.css'
import Link from 'next/link';
export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        RVE HARDWARE
                    </div>
                    <ul>
                        <li> <Link href="/"><a> Inicio </a></Link> </li>
                        <li>Premium</li>
                        <li>Descargas</li>
                        <li>About</li>
                        <li> <Link href="/blog"><a> Blog </a></Link></li>

                    </ul>
                </div>
                <div>
                <i className='bx bx-world'></i>
                    <select name="" id="" className={styles.select}>
                        
                        <option value="">Idioma</option>
                        <option value="">Espanol</option>
                        <option value="">Ingles</option>
                    </select>
                    <button className={styles.success}>Registrarse</button>
                    <button className={styles.normal}>Iniciar Sesion</button>
                </div>
            </nav>
        </header>
    )
}
