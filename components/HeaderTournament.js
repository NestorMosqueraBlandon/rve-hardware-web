import styles from '../styles/HeaderTournament.module.css'
export default function HeaderTournament() {
    return (
        <header className={styles.header}>
            <div></div>
            <input type="text" className={styles.searchbar} placeholder="Escribe algo para buscar" />
            <div className={styles.profile}></div>
        </header>
    )
}
