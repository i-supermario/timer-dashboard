import Profile from "../components/profile"
import styles from "../styles/Home.module.css"
import Card from "../components/card"
import React, { useState } from "react"

const data = require("../public/data.json")
const temp = data.find(temp => temp.title === 'Work')

class Dashboard extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      timeframe: 'daily'
    }
    this.workType = ['Work','Play','Study','Exercise','Social','Self Care']
    this.timeData = {}
    this.workType.forEach( type=> {
      let tempData = data.find(temp => temp.title === type)
      this.timeData[type] = {}
      this.timeData[type] = tempData.timeframes[this.state.timeframe]
    })
    console.log(this.state.timeframe)
  }

  
 
  handleClick(timeframe){
    this.workType.forEach( type=> {
      let tempData = data.find(temp => temp.title === type)
      this.timeData[type] = {}
      this.timeData[type] = tempData.timeframes[timeframe]
    })
    this.setState({timeframe: timeframe})
    console.log(this.timeData)
  }
  
  render(){
    return (
      <>
      <div className={styles.main}>
          <Profile onClick = {(timeframe)=> this.handleClick.bind(this,timeframe)}/>
        <div className={styles.grid}>
          <Card type='Work' duration={this.timeData.Work.current} prevDuration={this.timeData.Work.previous} color='hsl(15, 100%, 70%)'/>
          <Card type='Play' duration={this.timeData.Play.current} prevDuration={this.timeData.Play.previous} color='hsl(195, 74%, 62%)'/>
          <Card type='Study' duration={this.timeData.Study.current} prevDuration={this.timeData.Study.previous} color='hsl(348, 100%, 68%)'/>
          <Card type='Exercise' duration={this.timeData.Exercise.current} prevDuration={this.timeData.Exercise.previous} color='hsl(145, 58%, 55%)'/>
          <Card type='Social' duration={this.timeData.Social.current} prevDuration={this.timeData.Social.previous} color='hsl(264, 64%, 52%)'/>
          <Card type='Self Care' duration={this.timeData['Self Care'].current} prevDuration={this.timeData['Self Care'].previous} color='hsl(43, 84%, 65%)'/>
        </div>
      </div>
    
      </>
      );
  }
  
 
}

export default Dashboard;