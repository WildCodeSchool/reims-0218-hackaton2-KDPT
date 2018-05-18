import React from "react";

import ListLover from "./Listlover";
import { Segment, Form, Statistic, Container } from "semantic-ui-react"

class FormCher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
      hairColor: "",
      hairOptions: [],
      eyeOptions: [],
      skinOptions: [],
      lovers: [],
      selectedLovers: []
    };
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleHairChange = this.handleHairChange.bind(this);
    this.handleEyeChange = this.handleEyeChange.bind(this);
    this.handleSkinChange = this.handleSkinChange.bind(this);
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
    );
  }
  handleSkinChange(event) {
    this.setState({ skinColor: event.target.value }, () =>
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
            ...new Set(loverRes.map(lover => lover.hairColor || "chauve"))
          ],
          eyeOptions: [
            "",
            ...new Set(loverRes.map(lover => lover.eyeColor || "non défini"))
          ],
          skinOptions: [
            "",
            ...new Set(loverRes.map(lover => lover.skinColor || "non défini"))
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
          (!myLover.hairColor && this.state.hairColor === "chauve")
      )
      .filter(
        myLover =>
          this.state.eyeColor === "" ||
          myLover.eyeColor === this.state.eyeColor ||
          (!myLover.eyeColor && this.state.eyeColor === "non défini")
      )
      .filter(
        myLover =>
          this.state.skinColor === "" ||
          myLover.skinColor === this.state.skinColor ||
          (!myLover.skinColor && this.state.skinColor === "non défini")
      )
      ;
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
        <Container>
          <Segment textAlign="left">
            <Form onSubmit={this.handleSubmit}>
              <label>
                <Statistic size="mini">
                  <Statistic.Value>Choose the gender : </Statistic.Value>
                </Statistic>
                <select
                  value={this.state.gender}
                  onChange={this.handleGenderChange}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
              <label>
                <Statistic size="mini">
                  <Statistic.Value>Choose the Hair Color : </Statistic.Value>
                </Statistic>
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
                <Statistic size="mini">
                  <Statistic.Value>Choose the Eye Color : </Statistic.Value>
                </Statistic>
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
              <label>
                <Statistic size="mini">
                  <Statistic.Value>Choose the skin Color : </Statistic.Value>
                </Statistic>
                <select
                  value={this.state.skinColor}
                  onChange={this.handleSkinChange}
                >
                  {this.state.skinOptions.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </Form>
            <ListLover lovers={this.state.selectedLovers} />
            {/* afficher la liste filtrée(this.state.selectedLovers) avec ListLover */}
          </Segment>
        </Container>
      </div>
    );
  }
}

export default FormCher;
