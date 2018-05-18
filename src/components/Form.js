import React from "react";

import ListLover from "./Listlover";

class FormCher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      hairColor: "",
      hairOptions: [],
      eyeOptions: [],
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
    const url = "https://akabab.github.io/starwars-api/api/all.json";
    fetch(url)
      .then(res => res.json())
      .then(loverRes => {
        this.setState(prevState => ({
          lovers: loverRes,
          selectedLovers: loverRes,
          hairOptions: [
            "",
            ...new Set(loverRes.map(lover => lover.hairColor || "non défini"))
          ],
          eyeOptions: [
            "",
            ...new Set(loverRes.map(lover => lover.eyeColor || "non défini"))
          ]
        }));
      });
  }

  myfilterLovers() {
    console.log("filter");
    console.log(this.state.gender);
    const myListLover = this.state.lovers
      .filter(
        myLover =>
          this.state.gender === "" || myLover.gender === this.state.gender
      )
      .filter(
        myLover =>
          this.state.hairColor === "" ||
          myLover.hairColor === this.state.hairColor ||
          (!myLover.hairColor && this.state.hairColor === "non défini")
      )
      .filter(
        myLover =>
          this.state.eyeColor === "" ||
          myLover.eyeColor === this.state.eyeColor ||
          (!myLover.eyeColor && this.state.eyeColor === "non défini")
      );
    // .filter(myLover => this.state.eyeColor === '' || myLover.eyeColor === this.state.eyeColor)
    console.log(myListLover);
    // ?? comment je met mylistLover dans le state selectedLovers(this.setState(prevState => ))
    this.setState(prevState => ({
      selectedLovers: myListLover
    }));
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
              {this.state.hairOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Choose the Eye Color :
            <select
              value={this.state.eyeColor}
              onChange={this.handleEyeChange}
            >
              {this.state.eyeOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </form>
        <ListLover lovers={this.state.selectedLovers} />
        {/* afficher la liste filtrée(this.state.selectedLovers) avec ListLover */}
      </div>
    );
  }
}

export default FormCher;
