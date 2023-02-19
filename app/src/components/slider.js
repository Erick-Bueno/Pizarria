import styles from './../styles/slider.module.css'
import { useRef } from 'react'
export default function slider(){
    let item_atual = 0 
    const pizzas = useRef(null)
    function esquerda(){
        let items = pizzas.current.childNodes
        let total_item = items.length
        item_atual = item_atual - 1
        if(item_atual < 0){
            item_atual= items.length - 1
        }
        items.forEach(function(item){
            item.classList.remove(styles.item_selecionado)
        })
        items[item_atual].classList.add(styles.item_selecionado)
        items[item_atual].scrollIntoView({
            inline:"center",
            behavior:"smooth",
            block:"nearest"
        })
    }
    function direita(){
        let items = pizzas.current.childNodes
        let total_item = items.length

        item_atual = item_atual + 1
        if(item_atual >= total_item){
            item_atual = 0
        }
        items.forEach(function(item){
            item.classList.remove(styles.item_selecionado)
        })
        items[item_atual].classList.add(styles.item_selecionado)
        items[item_atual].scrollIntoView({
            inline:"center",
            behavior:"smooth",
            block:"nearest"
        })
    }
    return (
        <div className={styles.secao}>

            
            <div className={styles.slider}>
                    <button onClick={esquerda} className={`${styles.seta_esquerda}`}><img src='/images/esquerdanova.png' width={20}/></button>
                    <button onClick={direita} className={`${styles.seta_direita}`}><img src='/images/direitanova.png'width={20}/></button>
                             
                    
                <div className={styles.container_pizzas}>
                    
                    <div className={styles.pizzas} ref={pizzas}>
                    
                        <div className={`${styles.item} ${styles.item_selecionado}`}>
                            <div className={styles.image}></div>
                            <h2 className={styles.titulopizza}><span className={styles.corpizza}>PIZZAS </span>ALGUMA COISA</h2>
                        </div>
                    
                        <div className={styles.item}>
                            <div className={styles.image2}></div>
                        
                            <h2 className={styles.titulopizza}><span className={styles.corpizza}>PIZZAS </span>ALGUMA COISA</h2>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.image3}></div>
                            <h2 className={styles.titulopizza}><span className={styles.corpizza}>PIZZAS </span>ALGUMA COISA</h2>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.image4}></div>
                            <h2 className={styles.titulopizza}><span className={styles.corpizza}>PIZZAS </span>ALGUMA COISA</h2>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.image5}></div>
                            <h2 className={styles.titulopizza}><span className={styles.corpizza}>PIZZAS </span>ALGUMA COISA</h2>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.image6}></div>
                            <h2 className={styles.titulopizza}><span className={styles.corpizza}>PIZZAS </span>ALGUMA COISA</h2>
                        </div>
                    </div>    
                </div>
            </div>

        </div>
    )
}