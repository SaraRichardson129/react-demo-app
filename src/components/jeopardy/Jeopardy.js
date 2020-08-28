import React, { Component } from "react";
//import our service
import JeopardyService from "../../jeopardyService";
import JeopardyDisplay from "../jeopardyDisplay/JeopardyDisplay";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {
        id: null,
        answer: "",
        question: "",
        value: null,
        airdate: "",
        created_at: "",
        updated_at: "",
        category_id: null,
        game_id: null,
        invalid_count: null,
        category: {
          id: null,
          title: "",
          created_at: "",
          updated_at: "",
          clues_count: null,
        },
      },
      score: 0,
      userAnswer: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({
      userAnswer: event.target.value,
    });
  };

  resetAnswer = (event) => {
    this.setState({
      userAnswer: "",
    });
  };
  handleClick = (event) => {
    let score = this.state.score;
    let userAnswer = this.state.userAnswer;
    let correctAnswer = this.state.data.answer;
    let moneyValue = this.state.data.value;
    if (userAnswer === correctAnswer) {
      this.setState({
        score: (score += moneyValue),
      });
    } else {
      this.setState({
        score: (score -= moneyValue),
      });
    }
    this.resetAnswer();
  };

  handleSubmit = (event) => {
    // alert("Your answer was submitted: " + this.state.userAnswer);
    event.preventDefault();
    this.getNewQuestion();
  };

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    return (
      <JeopardyDisplay
        question={this.state.data.question}
        category={this.state.data.category.title}
        value={this.state.data.value}
        score={this.state.score}
        userAnswer={this.state.userAnswer}
        handleClick={this.handleClick}
        handleSubmit={this.handleSubmit}
        handleInputChange={this.handleInputChange}
      />
    );
  }
}
export default Jeopardy;
