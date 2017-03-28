import React from 'react';

export default class CSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const selectedColors = this.props.colors.filter ( item => item.selected);
    return (

      <ul className="list-group">{

        selectedColors.map(item=>(
          <li key={item.id} className="list-group-item">
              {item.slug}
  
          </li>
        ))
      }
      </ul>

    );
  }
}
