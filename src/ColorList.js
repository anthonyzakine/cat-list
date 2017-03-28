import React, {Component} from 'react';

export default class ColorList extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (

      <ul className="list-group">{
         this.props.colors.map( item =>(
            <li key={item.id} onClick={(e) =>this.props.selectColor(item)} className="list-group-item " ><img src={item.url}/><i className="fa fa-cog" aria-hidden="true"></i>{item.slug}</li>))
        }
      </ul>
    );
  }
}
