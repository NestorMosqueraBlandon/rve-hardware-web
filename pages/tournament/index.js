import LayoutTournament from "../../components/LayoutTournament";
import styles from '../../styles/Layout.module.css'
import Link from 'next/link';
import TournamentCard from "../../components/TournamentCard";
import GameCard from "../../components/GameCard";

export default function Tournament() {
    return (
        <LayoutTournament>
            <div className={styles.banner}>
                <img src="./newbanner.jpg" alt="" />
                <div className={styles.data}>
                    <div className={styles.type}>
                        <span>Entrada Gratis</span>
                        <span>Liga Ferox Gratis</span>
                        <span>PC</span>
                    </div>
                    <h2>Rainbow Six Siege Deragon tournament</h2>
                    <p>Termina en 4D 3H 43M</p>
                    <button>Leer más</button>
                </div>
            </div>
            <section className={styles.section}>
                <div className={styles.sectionheader}>
                    <h2>Torneos en tendencia</h2>
                    <Link href={`/post`}>Ver todo</Link>
                </div>
                <div className={styles.flex}>
                    <TournamentCard />
                    <TournamentCard />
                    <TournamentCard />
                    <TournamentCard />
                    <TournamentCard />
                    <TournamentCard />
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.sectionheader}>
                    <h2>Explorar Juegos</h2>
                    <Link href={`/post`}>Ver todo</Link>
                </div>
                <div className={styles.flex}>
                    <GameCard image="./img/games-cover/pcg-gta.webp"/>
                    <GameCard image="./img/games-cover/pcg-ark.webp" />
                    <GameCard image ="./img/games-cover/pcg-fortnite2.webp"/>
                    <GameCard image="./img/games-cover/pcg-lol.webp" />
                    <GameCard image="./img/games-cover/pcg-warzone2.webp" />
                    <GameCard image="./img/games-cover/pcg-minecraf2.webp" />
                </div>
            </section>
            <section className={styles.extrasection}>
                <div className={styles.extrapicture}>
                    <img src="./cod.webp" alt="" />
                </div>
                
                <div>

                <h2>Entrenamiento Esport</h2>
                <p>Lleva tu juego al siguiente nivel con entrenamiento profesional de Esports u ofrece tus propios servicios de entrenamiento a través del marketplace.</p>
                <button>Leer más</button>
                </div>

            </section>
            
        </LayoutTournament>
    )
}
