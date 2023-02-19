import Footer from "./footer"
import Header from './Header'
import Sidebar from "./Sidebar"
import styles from '../styles/Layout.module.css'
import Slider from "./slider"
export default function Layout({children}){
    return(
        <>
            <div className={styles.contGeral}>
                <div  className={styles.contTop} >
               
                        <Header></Header>
                        
                            {children}
                            <Sidebar></Sidebar>
                            
                        


            </div>
                    <Slider></Slider>
              
                    <Footer></Footer>
                
            </div>
        </>
    )
}