import React from "react";
import Dice from "./Dice";
import '../styles/RollDice.css';

class RollDice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstDice: 1,
            secondDice: 1,
            rolling: false //Set to false as default.
        };
        this.roll = this.roll.bind(this);
    }

    roll() {
        let x = Math.floor((Math.random() * 6) + 1); //These 2 lets create 2 different random numbers, the 2 dice states are set to these numbers below.
        let y = Math.floor((Math.random() * 6) + 1);
        this.setState({ firstDice: x, secondDice: y, rolling: true }); //Rolling state is set to true, displaying different text on the button.
        console.log(x, y)

        setTimeout(() => { this.setState({ rolling: false }) }, 1000); //The setTimeout method calls a function after a specified number of miliseconds. When button is pressed, rolling state is set to true, after 1 second this changes it back to false. 
    }

    render() {
        return (
            <div className="RollDice">
                <h2>Roll 2 d6!</h2>
                <table>
                    <tr>
                        <td>
                            <Dice number={this.state.firstDice} shaking={this.state.rolling} /> {/*Passes the current state of the rolling state as the "shaking" prop as well as the number to be used.*/}
                        </td>
                        <td>
                            <Dice number={this.state.secondDice} shaking={this.state.rolling} />
                        </td>
                    </tr>
                </table>
                <button onClick={this.roll} disabled={this.state.rolling}>{/*disabled disables the button & makes it not clickable, the syntax is true or false to disable it or not, true and false are the possible values of the rolling state above that is being changed by the roll() function so when rolling is true, disabled is true & the botton cannot be used. */}
                    {this.state.rolling ? "Rolling..." : "Roll dice"} {/*This text will change based on the current state which is false by default but is changed for 1 second by the roll() function*/}
                </button>
            </div>
        )
    }
}

export default RollDice