//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Cards from "./components/Cards";
//import Footer from "./components/Footer";
import scape from "./Shapes.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    scape,
    clickedScape: [],
    score: 0
  };

//when you click on a card ... the Landscape is taken out of the array
  imageClick = event => {
    const currentScape = event.target.alt;
    const scapeClickedAlready =
      this.state.clickedScape.indexOf(currentScape) > -1;

//if you click on a Landscape that has already been selected, the game is reset and cards reordered
    if (scapeClickedAlready) {
      this.setState({
        scape: this.state.scape.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedScape: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available Landscape, your score is increased and cards reordered
    } else {
      this.setState(
        {
          scape: this.state.scape.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedScape: this.state.clickedScape.concat(
            currentScape
          ),
          score: this.state.score + 1
        },
//if you get all 12 pictures corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              scape: this.state.scape.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedScape: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, Cards, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
        {this.state.scape.map(scape => (
            <Cards
              imageClick={this.imageClick}
              id={scape.id}
              key={scape.id}
              image={scape.image}
            />
          ))}
        </div>
        
      </div>
    );
  }
}
export default App;
