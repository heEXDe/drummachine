import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {displaySound: ""}
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  playSound(e) {
    e.target.children[0].play();
    this.setState({displaySound: e.target.id});
  };
  
  handleKeyDown(event) {
    const audio = document.getElementById(event.key.toUpperCase());
    if (audio) {
      audio.play();
    }
  }
  
  render(){
    return (
    <div id={"drum-machine"}>
      <div id={"display"}>{this.state.displaySound}</div>
      <button className="drum-pad" id="heater1" onClick={this.playSound}>
        <audio id="Q" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio>
        Q
       </button>
        <button className="drum-pad" id="heater2" onClick={this.playSound}>
          <audio id="W" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio>
          W
        </button>
        <button className="drum-pad" id="heater3" onClick={this.playSound}>
          <audio id="E" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio>
          E
        </button>
        <button className="drum-pad" id="heater4" onClick={this.playSound}>
          <audio id="A" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio>
          A
        </button>
        <button className="drum-pad" id="Clap" onClick={this.playSound}>
          <audio id="S" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></audio>
          S
        </button>
        <button className="drum-pad" id="OpenHH" onClick={this.playSound}>
          <audio id="D" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio>
          D
        </button>
        <button className="drum-pad" id="KickNHat" onClick={this.playSound}>
          <audio id="Z" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></audio>
          Z
        </button>
        <button className="drum-pad" id="Kick" onClick={this.playSound}>
          <audio id="X" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></audio>
          X
        </button>
        <button className="drum-pad" id="ClosedHH" onClick={this.playSound}>
          <audio id="C" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio>
          C
        </button>
      <br />
    </div>
    );
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));

