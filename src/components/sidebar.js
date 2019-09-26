import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import NestedList from './itens'
import MenuIcon from '@material-ui/icons/Menu';


export default class Sidebar extends Component{

  render(){
    return (
      <Menu customBurgerIcon={
          <MenuIcon id="menuItem"/>
      }>
        <NestedList sendToMap = {this.props.sendToMap} />        
      </Menu>
    );
  }
};