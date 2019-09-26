import React, { Component } from 'react'
import './App.css';
import Sidebar from './components/sidebar';
import ReactLeafletMap from './components/map';
import getPosition from './components/operations';

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      bus:[],
      contador: false,
      anterior: ""
    }
  }

  sendToMap = (obj) => {

    clearInterval(this.state.anterior);
    
    var timer = setInterval(()=>{
      getPosition(obj)
      .then(data=>{
        console.log(data.data)
        this.setState({
          bus: data.data,
          contador: false
        })
      })
    }, 1000)

    this.setState({anterior: timer})

  }

  render(){
    const { bus } = this.state
    return (
      <div id="App">
        <header>
          <div id='item'>
            <Sidebar sendToMap = {this.sendToMap} />
          </div>
          <div id="page-wrap">
            <h2>CheckBus - A melhor opção para achar o seu busão</h2>
          </div>
        </header>
        <div>
          <ReactLeafletMap bus = {bus}/>
        </div>
      </div>      
    );
  }
}
