import React from 'react';

export default class CatCreaction extends React.Component {
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
      <h1>Création de chat</h1>

      <div>
        <label htmlFor="url">URL du gif</label>
        <input type= "text" name="url" value={this.state.url} onChange={this.changeHandler} />
        <button onClick={ () => this.props.addCat(this.state.url) } >ADD CAT</button>
      </div>

    </div>);
  }
}
