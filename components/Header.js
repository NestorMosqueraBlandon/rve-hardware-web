import styles from '../styles/Header.module.css'
import Link from 'next/link';
import { useState } from 'react';
export default function Header({logo}) {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <header className={styles.header}>
            <div className={styles.menu} onClick={() => setOpenMenu(!openMenu)}>
              <i className='bx bx-menu' ></i>
            </div>
            <div className={styles.logomobile}>
                <img src="./logo.svg" alt="Real Vision Hardware Logo" />
            </div>
            <div>

            </div>
            <nav className={openMenu? styles.nav : styles.navopen}>
                <button className={styles.navclose} onClick={() => setOpenMenu(!openMenu)}> <i className='bx bxs-x-circle'></i> </button>
                <div className={styles.left}>
                    <div className={styles.logo}>
                    <img src={logo} alt="Real Vision Hardware Logo" />
                    </div>
                    <ul>
                        <li> <Link href="/"><a> Inicio </a></Link> </li>
                        <li>Premium</li>
                        <li>Descargas</li>
                        <li>About</li>
                        <li><Link href="/tournament"><a> Torneos </a></Link></li>
                        <li> <Link href="/post"><a> Blog </a></Link></li>
                    </ul>
                </div>
                <div className={styles.headerfooter}>
                    <div className={styles.fot}>
                    <i className='bx bx-world'></i>
                    <select name="" id="" className={styles.select}>
                        <option value="">Español</option>

                    </select>
                    </div>

                    <button className={styles.success}> <Link href="/register"><a> Registrarse</a></Link></button>
                    <button className={styles.normal}>Iniciar Sesion</button>
                </div>
            </nav>
        </header>
    )
}
