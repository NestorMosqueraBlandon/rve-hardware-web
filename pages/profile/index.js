import { useRouter } from "next/router";
import Link from "next/link";
import { useContext, useState } from "react";
import LayoutTournament from "../../components/LayoutTournament";
import { Store } from "../../Store";
import styles from '../../styles/Profile.module.css'
import axios from "axios";
import Cookies from "js-cookie";

export default function Profile() {


    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const { redirect } = router.query;

    const { userInfo } = state;

    const [firstname, setFirstname] = useState(userInfo? userInfo.firstname : "")
    const [middlename, setMiddlename] = useState(userInfo? userInfo.middlename: "")

    const [lastname, setLastname] = useState(userInfo? userInfo.lastname: "")
    const [middlelastname, setMiddlelastname] = useState(userInfo? userInfo.middleLastname: "")

    const [email, setEmail] = useState(userInfo? userInfo.email: "")
    const [phone, setPhone] = useState(userInfo? userInfo.phone: "")

    const [image, setImage] = useState();

    const [open, setOpen] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault();
        setOpen(false)
        try{
            const {data} = await axios.post("https://rveapi.herokuapp.com/api/v1/users/update", {userId: email, firstname, lastname, middlename, middlelastname, image})
            dispatch({ type: 'USER_UPDATE', payload: data });
            Cookies.set('userInfo', JSON.stringify(data));
        }catch(err){
            console.log(err)
        }
    }

    const uploadHandler = async (e, imageFIeld = "image") => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append("file", file);
        try{
            dispatch({type: "UPLOAD_REQUEST"});
            const {data} = await axios.post("https://rveapi.herokuapp.com/api/v1/users/upload", bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            dispatch({ type: 'UPLOAD_SUCCESS' });
            setImage(data.secure_url);
        }catch(err)
        {
            console.log(err)
        }
    }

    return (
    <>
    <LayoutTournament>
        {userInfo? (
            <div className={styles.headerProfile}>
                <div className={styles.userdata}>
                    <div className={styles.picture}>
                    <img src={userInfo.photo} alt="" />
                    </div>
                    <h2>{userInfo.firstname}{" "} {userInfo.lastname}</h2>
                    <div className={styles.btns}>
                        <button href="#" onClick={() => setOpen(true)} ><i className='bx bxs-cog'></i></button>
                        <Link href=""><a><i className='bx bxs-bookmark' ></i></a></Link>
                    </div>
                </div>
                <div className={styles.userextra}>
                    <div className={styles.bannerprofile}>
                        <img src="./profile.jpg" alt="" />
                    </div>
                    <ul className={styles.profilemenu}>
                        <li>Torneos</li>
                        <li>Amigos</li>
                        <li>Seguidores</li>
                        <li>Estadisticas</li>
                        <li>Equipos</li>
                    </ul>
                </div>
            </div>
        ): (
            <div></div>
        )}
    </LayoutTournament> 
    <div className={open? styles.modal : styles.modalclose}>
        <div className={styles.modalcontent} >
        <div className={styles.buttonclose} onClick={() => setOpen(false)}><i className='bx bxs-x-circle' ></i></div>

        <form onSubmit={submitHandler} encType="multipart/form-data">
            <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="Primer Nombre"/>
            <input type="text" value={middlename} onChange={(e) => setMiddlename(e.target.value)} placeholder="Segundo Nombre"/>
            <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Primer Apellido"/>
            <input type="text" value={middlelastname} onChange={(e) => setMiddlelastname(e.target.value)} placeholder="Segundo Apellido"/>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} readOnly/>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefono"/>
            <input type="file" name="file" id="file"  onChange={(e) => uploadHandler(e, "featuredImage")} />
            <input type="submit" value="Guardar"  />
        </form>
        </div>

    </div>
    </>
    )
}
