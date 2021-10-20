import styles from '../styles/Layout.module.css'

export default function StreamCard({image, name}) {
    return (
        <div className={styles.stream}>
            <div className={styles.streamheader}>
                <span><i className='bx bx-heart'></i></span>
                <span><i className='bx bx-dots-horizontal-rounded' ></i></span>
            </div>
            <div>
                <div className={styles.streampicture}>
                    <img src={image} alt="" />
                    <span>N17</span>
                </div>
                <h2>{name}</h2>
                <div className={styles.dots}>
                    <span>VEN Maracaibo</span>
                    <span className="dot"></span>
                    <span>21 Años</span>
                    <span className="dot"></span>
                    <span>50km Away</span>
                </div>
                <div className={styles.streamdata}>
                    <span>
                        <h4>223</h4>
                        <p>JUEGOS</p>
                    </span>
                    <span>
                        <h4>23</h4>
                        <p>AMIGOS</p>
                    </span>
                    <span>
                        <h4>54</h4>
                        <p>TORNEOS</p>
                    </span>
                    <span>
                        <h4>40</h4>
                        <p>VISTAS</p>
                    </span>
                </div>
            </div>
            <div className={styles.streamfooter}>
                <button>Leer más</button>
                <button>Conectarse</button>
            </div>
        </div>
    )
}
