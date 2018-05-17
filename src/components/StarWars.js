import React, { Component } from 'react';
import ListLover from './Listlover'


class StarWars extends Component {

  constructor() {
    super ()
    this.state = {
      
    }
  }
  render() {
    return <div><ListLover lovers= {this.state.lovers}/></div>
  
  }
  

}

export default StarWars;