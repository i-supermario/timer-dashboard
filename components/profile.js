import Image from 'next/image'
import profilepic from '../public/images/image-jeremy.png'
import styles from '../styles/Home.module.css'

export default function Profile(){
    return (
        <>
            <div className={styles.profile}>
                <div className={styles.header}>
                    <div style={{margin:"1rem"}}>
                        <Image className={styles.img} src={profilepic} alt="Profile picture" height={120} width={120}/>
                    </div>
                    <div className={styles.description}>
                        <p>Report for</p> 
                        <div className={styles.title}>Jeremy<br></br>Robson</div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <a href='#'>Daily</a>
                    <a href='#'>Weekly</a>
                    <a href='#'>Monthly</a>
                </div>
            </div>
            
        </>
        
    )
}