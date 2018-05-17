import React, { Component } from 'react';
import ListLover from './Listlover'


class StarWars extends Component {

  constructor() {
    super ()
    this.state = {
      lovers: []
    }
  }
  render() {
    return <div><ListLover lovers= {this.state.lovers}/></div>
  
  }
  componentDidMount() {
    const url = 'https://akabab.github.io/starwars-api/api/all.json'
    fetch(url)
      .then(res => res.json())
      .then(loverRes =>{this.setState(prevState => ({ lovers : loverRes }))})
  }

}

export default StarWars;