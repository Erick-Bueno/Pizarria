import { Inter } from '@next/font/google'
import { PT_Sans_Narrow } from '@next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@700&display=swap" rel="stylesheet"/>

                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap');
              </style>
                
      </Head>
      <img className={styles.pizzazzona} src='/images/pizzazona.png'/>
      < main className={styles.ma}>
        
        <p className={styles.fonte}><span className={styles.sabor}>SABOR</span> DA LUA,<br/>MELHOR NÃO HÁ </p>
        <p className={styles.slogan}>NOSSO MENU AGRADA QUALQUER TIPO DE GOSTO. <br/> PARE PARA UMA RAPIDA REFEIÇÃO OU RECEBA SUAS <br/> PIZZAS FAVORITAS NA SUA PORTA AGORA MESMO. </p>
        <section className={styles.contbtn}><button className={styles.comprar}>COMPRAR AGORA</button> <span className={styles.contSeta}><button className={styles.verMenu}>VER O MENU</button> <img className={styles.seta} src='/images/seta.png' width={15}/></span></section>
       
      </main>
    
    </>
  )
}
