import styles from '../styles/Layout.module.css'
export default function Sidebar(){
    return (
        <sidebar className={styles.side}>
            <ul>
                <li>
                    <a href="">MENU</a>
                </li>
                <li>
                    <a href="">LOCALIZAÇÃO</a>
                </li>
                <li>
                    <a href="">PREÇOS</a>
                </li>
                <li>
                    <a href="">PROMOÇÕES</a>
                </li>
            </ul>
            <section>
                NOS <span className={styles.siga}>SIGA</span>:
            </section>
            <section className={styles.contImg}>
                <a href="https://www.instagram.com/sabordaluapizzaria/?hl=pt" target='_blank'><img src='/images/insta.png' width={24} className={styles.instagram}/></a>
                <img className={styles.facebuk}  src='/images/facebookred.png'/> 
               
            </section>
        </sidebar>
    )
}