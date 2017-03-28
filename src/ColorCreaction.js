import React from 'react';

export default class ColorCreaction extends React.Component {
  state = {
    url :''
  }

  changeHandler = (e)=>{
    this.setState({
      url:e.target.value
    })
  }
  render() {
    return (<div>
      <h1>Création de couleurs</h1>

      <div>
        <label htmlFor="url">Color name</label>
        <input type= "text" name="name" value={this.state.name} />
        <label htmlFor="url">Color hex</label>
        <input type= "text" name="color" value={this.state.color} />
        <button onClick={ () => this.props.addColor(this.state.unamerl,this.state.color) } >Ajouter couleur</button>
      </div>

    </div>);
  }
}
