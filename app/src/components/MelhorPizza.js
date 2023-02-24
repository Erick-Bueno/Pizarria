import styles from './../styles/melhorpizza.module.css'
import styles2 from './../styles/Home.module.css'
export default function MelhorPizza(){
    return(
        <section className={styles.fundo} >
            <article className={styles.contFundo}>
                <h1 className={styles2.fonte}>MELHOR <span className={styles2.sabor}>PIZZA</span> DA CIDADE</h1>
                <p className={styles.pa}>NOSSA COMIDA E FRESCA E SIMPLES. AS PIZZAS SÃO FEITAS TODA MANHÃ.TODOS OS NOSSOS RECHEIOS TAMBEM SÃO PREPARADOS DIARIAMENTE COM PRODUTOS DE EXTREMA QUALIDADE DOS MELHORES MERCADOS POSSIVEIS. QUANDO VOCÊ VISITAR OU PEDIR ONLINE. SUA PIZZA VAI SER PREPARADA POR UMA PESSOA DE EXTREMA TECNICA E EXCELÊNCIA NA COZINHHA.</p>
                <section className={styles2.contbtn}><button className={styles2.comprar}>COMPRAR AGORA</button> <span className={styles2.contSeta}><button className={styles2.verMenu}>VER O MENU</button> <img className={styles2.seta} src='/images/seta.png' width={15}/></span></section>
       
            </article>
            <img className={styles.massa} src='/images/LOG2.webp'/>
        </section>
    )
}