import React,{ Component } from 'react';
import uuid from 'uuid/v1';
import logo from './logo.svg';

import './App.css';
import data from './data.json'
import ColorList from './ColorList'
import ColorSelection from './ColorSelection'
import ColorCreaction from './ColorCreaction'

class App extends Component {

  constructor(props){
    super(props);
    const smartColors = data.colors.map(item => {

      return {...item,selected:false};
    });



    this.state={
      colors:smartColors
    }
  }

  selectColor(color){
    console.log('this :', this);
    const newColors = this.state.colors.map(item =>{

      if(item.id === color.id){
        item.selected = !item.selected;
      }
      return item
    })
    this.setState({
      colors:newColors
    });
  }

  addCat = (name,color) =>{

    const id = uuid();
    console.log('name : ' ,name);
    console.log('id : ' ,id);
    console.log('color : ' ,color);

    this.setState({
      colors: [...this.state.colors, {id,color,name}]
    },()=>{
      const test= JSON.stringify(this.state.colors[this.state.colors.length-1])
      console.log('couleur add : ', test );
    });
  }

  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Ptit Test</h2>
        </div>
        <p className="App-intro"></p>
        <CColorCreaction addColors={this.addColors}/>
        <ColorSelection colors ={this.state.colors}/>
        <ColorList colors ={this.state.colors} selectColor={this.selectColor.bind(this)}/>

      </div>
    );
  }
}

export default App;
