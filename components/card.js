import styles from '../styles/Home.module.css'

export default function Card(props){
    return (
        <>
            <div className={styles.container} style={{backgroundColor: props.color,borderRadius:"10px" }} >
                <div className={styles.empty}>

                </div>
                <div className={styles.card}>
                    <div className={styles.header}>    
                        <h2>{props.type}</h2>
                        <h2><strong>...</strong></h2>
                    </div>
                    <div className={styles.title}>{props.duration}hrs</div>
                    <p>Last Week - {props.prevDuration}hrs</p>
                </div>
            </div>
        </>
    )
}