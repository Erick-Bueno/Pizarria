import styles from '../styles/Header.module.css'
import styles3 from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
export default function Cabeca(){
    const[estiloInicial, SetStyle] = useState()
    const[estiloInicialOver, setEstiloOver] = useState()
    function alterarCoisas(estilo){
        SetStyle(styles.abrirmenu)
        setEstiloOver(styles.mostrarover)
    }
    const[ativo, setarativo] = useState(false)
    function ativar(){
        setarativo(!ativo)
    }
    
       
 
    return(
        <header className={styles.cabeca}>
            <img src='/images/menumobile.png' onClick={ativar}  className={styles.Iconmenu}/>
          
            <section className={`${ativo ? styles.abrirmenu : styles.menuM} ${styles.menuM}`}>
                <h2 className={styles.tituloM}><span className={styles3.sabor}>SABOR</span> DA LUA</h2>
                <ul>
                    
                    <li className={styles.contMenuList}><img className={styles.icon} src='/images/cardapio.png'/><a>MENU</a></li>
                    <li className={styles.contMenuList}><img className={styles.icon} src='/images/home.png'/><a>HOME</a></li>
                    <li className={styles.contMenuList}><img className={styles.icon} src='/images/informacoes.png'/><a>SOBRE</a></li>
                    <li className={styles.contMenuList}><img className={styles.icon} src='/images/telefoneM.png'/><a>CONTATO</a></li>
                    <li className={styles.contMenuList}><img className={styles.icon} src='/images/loc.png'/><a>LOCALIZAÇÃO</a></li>
                    <li className={styles.contMenuList}><img className={styles.icon} src='/images/etiqueta.png'/><a>PREÇOS</a></li>
                    <li className={styles.contMenuList}><img className={styles.icon} src='/images/promocoes.png'/><a>PROMOÇÕES</a></li>
                </ul>
            </section>
            <section className={`${ativo ? styles.mostrarover : styles.overlay} ${styles.overlay}`} onClick = {ativar} ></section>
            <img className={styles.logo} src="/images/pixxa.png" />
            <nav className={styles.Nav}>
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