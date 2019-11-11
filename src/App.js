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
      anterior: "",
      open: false,
      title: {
        fontWeight: 'bold'
      },
      mapLatLong: []
    }
  }

  setCoord = (nome, sending) => {
    this.setState({mapLatLong: {nome, sending}})
  }

  isMenuOpen = (state) => {
      if (!state.isOpen) {
        this.setOpen(false)
      }
    }

  setOpen = (bool) => {
    this.setState({open: bool})
  }

  sendToMap = (obj) => {

    clearInterval(this.state.anterior);
    
    var timer = setInterval(()=>{
      getPosition(obj)
      .then(data=>{
        this.setState({
          bus: data.data,
          contador: false
        })
      })
    }, 1000)

    this.setState({anterior: timer})

  }

  render(){
    const { bus, open, title, mapLatLong } = this.state
    return (
      <div className="body">
        <header>
          <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={()=>{
                      this.setOpen(!open)
                    }}
                  >
                    <span className="navbar-toggler-icon"></span>
            </button> 
            <div className="row">
              <h4 className="title" style = {title}>
                CheckBus
              </h4>
              <h4 className ="d-none d-md-block" style = {title}>
              &nbsp;-&nbsp;A melhor opção para achar o seu busão
              </h4>
            </div>
              &nbsp;
          </nav>
        </header>   
        
        <div id='item'>
          <Sidebar setCoord = {this.setCoord} open = {open} isMenuOpen = {this.isMenuOpen} sendToMap = {this.sendToMap} />
        </div>

        <div className="ReactLeafletMap" >
          <ReactLeafletMap mapLatLong = {mapLatLong} bus = {bus}/>
        </div>
        
      </div>
    );
  }
}
