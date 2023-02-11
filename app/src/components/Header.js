import styles from '../styles/Header.module.css'
export default function Cabeca(){
    return(
        <header className={styles.cabeca}>
            <img className={styles.logo} src="/images/pixxa.png" width={120}/>
            <nav>
                <ul className={styles.ul}>
                    <li><a href="">HOME</a></li>
                    <li><a href="">SOBRE</a></li>
                    <li><a href="">CONTATO</a></li>
                </ul>
            </nav>
            <p className={styles.tele}> <img className={styles.teleph} src='/images/telefone.png' width={30}/>(77)99848-0604</p>
        </header>
    )
}