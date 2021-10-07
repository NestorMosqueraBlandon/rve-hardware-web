import Link from 'next/link';

export default function Menu() {
    return (
        <ul>
            <li>
                <Link href="">
                    <a >
                    <i className='bx bx-home'></i>
                    <span>Home</span>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="">
                    <a >
                    <i className='bx bx-podcast' ></i>
                    <span>Descubrir</span>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="">
                    <a >
                    <i className='bx bx-plus-circle' ></i>
                    <span>Compartir</span>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="">
                    <a >
                    <i className='bx bxs-analyse' ></i>
                    <span>Alertas</span>
                    </a>
                </Link>
            </li>
            <li>
                <Link href="">
                    <a >
                    <i className='bx bx-user' ></i>
                    </a>
                </Link>
            </li>

        </ul>
    )
}
