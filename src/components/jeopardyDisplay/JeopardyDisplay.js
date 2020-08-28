import React from "react";
function JeopardyDisplay(props) {
  return (
    <div>
      <h3>Question:</h3>
      {props.question}
      <h3>Category:</h3>
      {props.category}
      <h3>Value:</h3>
      {props.value}
      <h3>Score:</h3>
      {props.score} <br />
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          value={props.userAnswer}
          placeholder="Submit Your Answer Here!"
          onChange={props.handleInputChange}
        />
        <button onClick={props.handleClick}>Submit!</button>
      </form>
    </div>
  );
}
export default JeopardyDisplay;
