import React from "react";
import ReactDOM from "react-dom";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessageText: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      newMessageText: event.target.value,
    });
  }

  handleSubmit(event) {
    const { messages, newMessageText } = this.state;
    this.setState({
      messages: [...messages, { text: newMessageText }],
      newMessageText: "",
    });

    event.preventDefault();
  }

  render() {
    const { messages, newMessageText } = this.state;

    return (
      <div className="chat">
        <ul className="chat__messages">
          {messages.map((message) => (
            <li key={message.text}>{message.text}</li>
          ))}
        </ul>
        <form className="chat__form" onSubmit={this.handleSubmit}>
          <input
            className="chat__input"
            type="text"
            onChange={this.handleChange}
            value={newMessageText}
          />
          <button className="chat__submit" type="submit">
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Chat />, rootElement);
