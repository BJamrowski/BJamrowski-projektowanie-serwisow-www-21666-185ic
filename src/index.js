import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Witaj, świecie!</h1>
        <h2>Aktualny czas: {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function Welcome(props) {
  return <h1>Cześć, {props.name}</h1>;
}
function App() {
  const elements = [<div><Clock/></div>,<div><Welcome name="Enchanded" /></div>];
  return (
    <ul>
      {elements.map(item => <li key = {item.id}>{item}</li>)}
    </ul>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
