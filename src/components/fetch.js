import React, { Component } from 'react';


class StarWars extends Component {
  render() {
    return <div> StarWars </div>
  }
  componentDidMount() {
    const url = 'https://akabab.github.io/starwars-api/api/all.json'
    fetch(url)
      .then(res => res.json())
      .then(wars => console.log(wars))
  }

}

export default StarWars;