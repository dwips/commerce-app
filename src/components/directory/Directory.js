import React, { Component } from 'react';
import dataDirectory from './directory.data';

import MenuItem from '../menu-item/MenuItem';

import './directory.styles.scss';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: dataDirectory,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
