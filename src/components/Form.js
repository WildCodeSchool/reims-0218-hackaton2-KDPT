import React from 'react';
import { Form } from 'semantic-ui-react';
import ListLover from './Listlover';

class FormCher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
      hairColor: '',
      eyeColor: '',
      lovers: [],
      selectedLovers: []
    };
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleHairChange = this.handleHairChange.bind(this);
    this.handleEyeChange = this.handleEyeChange.bind(this);
  }
  handleGenderChange(event) {
    this.setState({ gender: event.target.value }, () =>
      this.myfilterLovers());
  }
  handleHairChange(event) {
    this.setState({ hairColor: event.target.value }, () =>
      this.myfilterLovers()
    );
  }
  handleEyeChange(event) {
    this.setState({ eyeColor: event.target.value }, () =>
      this.myfilterLovers()
    )
  }

  componentDidMount() {
    const url = 'https://akabab.github.io/starwars-api/api/all.json';
    fetch(url)
      .then(res => res.json())
      .then(loverRes => {
        this.setState(prevState => ({
          lovers: loverRes,
          selectedLovers: loverRes
        }));
      });
  }

  myfilterLovers() {
    console.log('filter');
    console.log(this.state.gender);
    const myListLover = this.state.lovers
      .filter(
        myLover =>
          this.state.gender === '' || myLover.gender === this.state.gender
      )
      .filter(
        myLover =>
          this.state.hairColor === '' ||
          myLover.hairColor === this.state.hairColor
      )
      .filter(
        myLover =>
          this.state.eyeColor === '' ||
          myLover.eyeColor === this.state.eyeColor)
    this.setState(prevState => ({ selectedLovers: myListLover }));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Choose the gender :
            <select
              value={this.state.gender}
              onChange={this.handleGenderChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label>
            Choose the Hair Color :
            <select
              value={this.state.hairColor}
              onChange={this.handleHairChange}
            >
              <option value="">Choose a color</option>
              <option value="blond">Blond</option>
              <option value="brown">Brown</option>
              <option value="black">Black</option>
              <option value="light brown">Light Brown</option>
              <option value="auburn">Auburn</option>
              <option value="white">White</option>
              <option value="red">Red</option>
              <option value="Gold">gold</option>
            </select>
          </label>
          <label>
            Choose the eye Color :
            <select
              value={this.state.eyeColor}
              onChange={this.handleEyeChange}
            >
              <option value="">Choose a color</option>
              <option value="blue">blue</option>
              <option value="yellow">yellow</option>
              <option value="light brown">light brown</option>
              <option value="red">red</option>
              <option value="brown">brown</option>
              <option value="hazel">hazel</option>
              <option value="gray-blue">gray-blue</option>
            </select>
          </label>

          {/* <label>
          Choose the eye Color :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="blue">blue</option>
            <option value="yellow">yellow</option>
            <option value="light brown">Light Brown</option>
            <option value="red">red</option>
            <option value="brown">brown</option>
            <option value="hazel">hazel</option>
            <option value="gray-blue">gray-blue</option>
          </select>
        </label> */}


        </form>

        <ListLover lovers={this.state.selectedLovers} />
        {/* afficher la liste filtrée(this.state.selectedLovers) avec ListLover */}
      </div>
    );
  }
}

export default FormCher;
