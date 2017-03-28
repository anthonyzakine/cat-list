import React,{ Component } from 'react';
import uuid from 'uuid/v1';
import logo from './logo.svg';

import './App.css';
import data from './data.json'
import CatList from './CatList'
import CatSelection from './CatSelection'
import CatCreaction from './CatCreaction'

class App extends Component {

  constructor(props){
    super(props);
    const smartCats = data.cats.map(item => {

      return {...item,selected:false};
    });

    //console.log('smartCats :' ,smartCats)

    this.state={
      cats:smartCats
    }
  }

  selectCat(cat){
    console.log('this :', this);
    const newCats = this.state.cats.map(item =>{

      if(item.id === cat.id){
        item.selected = !item.selected;
      }
      return item
    })
    this.setState({
      cats:newCats
    });
  }

  addCat = (url) =>{

    const id = uuid();
    const strength = Math.round(Math.random()*100)
    console.log('strength : ' ,strength);
    console.log('id : ' ,id);
    console.log('URL : ' ,url);

    this.setState({
      cats: [...this.state.cats, {id,url,strength}]
    },()=>{
      const test= JSON.stringify(this.state.cats[this.state.cats.length-1])
      console.log('Chat add : ', test );
    });
  }

  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Liste de chats</h2>
        </div>
        <p className="App-intro"></p>
        <CatCreaction addCat={this.addCat}/>
        <CatSelection cats ={this.state.cats}/>
        <CatList cats ={this.state.cats} selectCat={this.selectCat.bind(this)}/>

      </div>
    );
  }
}

export default App;
