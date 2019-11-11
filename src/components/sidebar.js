import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import NestedList from './itens'
import MenuIcon from '@material-ui/icons/Menu';


export default class Sidebar extends Component{

  render(){
    return (
      <Menu 
        onStateChange={ this.props.isMenuOpen } 
        isOpen={ this.props.open } 
        customBurgerIcon={
            <MenuIcon id="menuItem"/>
        }
      >
        <NestedList setCoord = {this.props.setCoord} sendToMap = {this.props.sendToMap} />        
      </Menu>
    );
  }
};