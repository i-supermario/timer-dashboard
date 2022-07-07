import Profile from "../components/profile"
import styles from "../styles/Home.module.css"
import Card from "../components/card"

const data = require('../public/data.json')
console.log(data)

export default function Dashboard(){
  const props = {
    'type':'Work',
    'duration':32,
    'prevDuration':36
  }
  return (
    <>
    <div className={styles.main}>
        <Profile />
      <div className={styles.grid}>
        <Card type='Work' duration='32' prevDuration='36' color='hsl(15, 100%, 70%)'/>
        <Card type='Play' duration='32' prevDuration='36' color='hsl(195, 74%, 62%)'/>
        <Card type='Study' duration='32' prevDuration='36' color='hsl(348, 100%, 68%)'/>
        <Card type='Exercise' duration='32' prevDuration='36' color='hsl(145, 58%, 55%)'/>
        <Card type='Social' duration='32' prevDuration='36' color='hsl(264, 64%, 52%)'/>
        <Card type='Self-Care' duration='32' prevDuration='36' color='hsl(43, 84%, 65%)'/>
      </div>
    </div>
   
    </>
    )
 
}