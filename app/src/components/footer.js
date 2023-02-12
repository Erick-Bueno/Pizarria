import styles from '../styles/Footer.module.css'
import styles2 from '../styles/Layout.module.css'
export default function Footer(){
    return (
        <footer className={styles.fut}>
            <section className={styles.rod}>
                <section className={styles.list}>
                    <section>
                        <ul className={styles.footList}>
                        <li className={styles.equipe}>LINKS ÚTEIS:</li>
                            <li><a href="">MENU</a></li>
                            <li><a href="">LOCALIZAÇÃO</a></li>
                            <li><a href="">PREÇOS</a></li>
                            <li><a href="">PROMOÇÕES</a></li>
                        </ul>
                    </section>
                                <section>
                    
                    <ul className={styles.footList}>
                        <li className={styles.equipe}>EQUIPE DE PRODUÇÃO:</li>
                        <li>Erick</li>
                        <li>Matias</li>
                        <li>Arthur</li>
                        <li>Matheus</li>
                        <li>Rogaciano</li>
                        <li>Gabriel</li>
                    </ul>
                    
                    </section>
                </section>
                <section className={styles.ColHor}>
                    <p className={styles.trab}>HORARIOS DE FUNCIONAMENTO:</p>
                    <article className={styles.horas}>
                        <p className={styles.semana}>SEGUNDA</p>
                        <p>18:00 PM TO 22:50 PM</p>
                        <p className={styles.semana}>TERÇA: FECHADO</p>
                        <p className={styles.semana}>QUARTA-SEXTA</p>
                        <p>18:00 PM TO 22:50 PM</p>
                        <p className={styles.semana}>SABADO</p>
                        <p>18:00 PM TO 22:45 PM</p>
                        <p className={styles.semana}>DOMINGO</p>
                        <p>18:00 PM TO 22:50 PM</p>
                    </article>
                
                </section>
            
                <div>
                    <img className={styles.logo} src="/images/pixxa.png" width={150} height={150}/>
                    
                </div>
            </section>
         
            
            <p className={styles.cop}> &reg; 2023 PIZZARIA SABOR DA LUA</p>
            
            
        </footer>
       
       
    )
}