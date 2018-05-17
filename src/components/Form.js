import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "feature" };
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChangeGender(event) {
    this.setState({ value: event.target.value });
  }
  handleChange(event) {
    this.setState({ value: event.target.hair });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose the gender :
          <select value={this.state.value} onChange={this.handleChangeGender}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Choose the Hair Color :
          <select hair={this.state.value} onChange={this.handleChange}>
            <option hair="blond">Blond</option>
            <option hair="brown">Brown</option>
            <option hair="black">Black</option>
            <option hair="light brown">Light Brown</option>
            <option hair="auburn">Auburn</option>
            <option hair="white">White</option>
            <option hair="red">Red</option>
            <option hair="Gold">gold</option>
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
    );
  }
}

export default Form;
