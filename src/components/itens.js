import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.black,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList(props) { 

  const classes = useStyles();
  const [corumba, setCorumbaOpen] = React.useState(false);
  const [ladario, setLadarioOpen] = React.useState(false);

  function handleClick(escolha) {
    if(escolha){
      setCorumbaOpen(!corumba)
      props.setCoord("corumba", true)
    }else{
      setLadarioOpen(!ladario)
      props.setCoord("ladario", true)
    }
  }

  function sendRoute(str){
    props.sendToMap(str)
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      
      <ListItem button onClick={() => handleClick(true)}>

        <ListItemText primary="Corumbá" />
        {corumba ? <ExpandLess /> : <ExpandMore />}

      </ListItem>

      <Collapse in={corumba} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItem button className={classes.nested}>

            <ListItemText onClick = {() => sendRoute({
              city: "Corumba",
              route: "Rota1"
            })} primary="Rota 1" />

          </ListItem>

          <ListItem button className={classes.nested}>

            <ListItemText onClick = {() => sendRoute({
              city: "Corumba",
              route: "Rota2",
            })} primary="Rota 2" />

          </ListItem>

        </List>
      </Collapse>

      <ListItem button onClick={() => handleClick(false)}>
        
        <ListItemText primary="Ladário" />
        {ladario ? <ExpandLess /> : <ExpandMore />}

      </ListItem>

      <Collapse in={ladario} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItem button className={classes.nested}>
            <ListItemText onClick = {() => sendRoute({
              city: "Ladario",
              route: "Nova Alianca"
            })} primary="Nova Aliança" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemText onClick = {() => sendRoute({
              city: "Ladario",
              route: "Alta Floresta"
            })} primary="Alta Floresta" />
          </ListItem>

        </List>
      </Collapse>

      <ListItem button onClick={()=>console.log("aa")}>

        <ListItemText primary="Sobre" />

      </ListItem>

      <ListItem button onClick={()=>console.log("aa")}>

        <ListItemText primary="Reclamaçãoes" />

      </ListItem>

    </List>
  );
}
