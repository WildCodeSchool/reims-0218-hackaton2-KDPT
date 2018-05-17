import React, { Component } from 'react';


class StarWars extends Component {

  constructor() {
    super ()
    this.state = {
      lovers: []
    }
  }
  render() {
    return <div> lover : </div>
  }
  componentDidMount() {
    const url = 'https://akabab.github.io/starwars-api/api/all.json'
    fetch(url)
      .then(res => res.json())
      .then(loverRes =>{this.setState(prevState => ({ lovers : loverRes }))})
  }

}

export default StarWars;