import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = { displaySound: "" };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  playSound(e) {
    e.target.children[0].play();
    this.setState({ displaySound: e.target.id });
  }

  handleKeyDown(event) {
    const audio = document.getElementById(event.key.toUpperCase());
    if (audio) {
      audio.play();
    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.state.displaySound), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "heater1", onClick: this.playSound }, /*#__PURE__*/
      React.createElement("audio", { id: "Q", className: "clip", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" }), "Q"), /*#__PURE__*/


      React.createElement("button", { className: "drum-pad", id: "heater2", onClick: this.playSound }, /*#__PURE__*/
      React.createElement("audio", { id: "W", className: "clip", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" }), "W"), /*#__PURE__*/


      React.createElement("button", { className: "drum-pad", id: "heater3", onClick: this.playSound }, /*#__PURE__*/
      React.createElement("audio", { id: "E", className: "clip", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" }), "E"), /*#__PURE__*/


      React.createElement("button", { className: "drum-pad", id: "heater4", onClick: this.playSound }, /*#__PURE__*/
      React.createElement("audio", { id: "A", className: "clip", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" }), "A"), /*#__PURE__*/


      React.createElement("button", { className: "drum-pad", id: "Clap", onClick: this.playSound }, /*#__PURE__*/
      React.createElement("audio", { id: "S", className: "clip", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" }), "S"), /*#__PURE__*/


      React.createElement("button", { className: "drum-pad", id: "OpenHH", onClick: this.playSound }, /*#__PURE__*/
      React.createElement("audio", { id: "D", className: "clip", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" }), "D"), /*#__PURE__*/


      React.createElement("button", { className: "drum-pad", id: "KickNHat", onClick: this.playSound }, /*#__PURE__*/
      React.createElement("audio", { id: "Z", className: "clip", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" }), "Z"), /*#__PURE__*/


      React.createElement("button", { className: "drum-pad", id: "Kick", onClick: this.playSound }, /*#__PURE__*/
      React.createElement("audio", { id: "X", className: "clip", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" }), "X"), /*#__PURE__*/


      React.createElement("button", { className: "drum-pad", id: "ClosedHH", onClick: this.playSound }, /*#__PURE__*/
      React.createElement("audio", { id: "C", className: "clip", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" }), "C"), /*#__PURE__*/


      React.createElement("br", null)));


  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));