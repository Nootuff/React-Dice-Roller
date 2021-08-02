
import React from "react"
import '../styles/Dice.css';

class Dice extends React.Component {
    render() {

        const array = ["one", "two", "three", "four", "five", "six"];
        let numpick = array[this.props.number - 1]; //The passed in "number" props pick a value from the array of strings above, one of those strings will be added to the classname below to complete the fontawesome dice font.  
        let shake = (this.props.shaking) ? "shake" : " "; //Ternary operator, rolling state, true or false is passed in as the "shaking" prop from the RollDice component this determines whether the "shake" class  in dice.css is added which contains the wobble animation in that css. When the roll button is pressed, roll() briefly changes rolling state to true for 1 second so shake class is added & the 1 second shake animation plays. 

        return (
            <div>
                <i className={"fas fa-dice-" + numpick + " " + shake}></i> {/*Notice the curly brackets*/}
            </div>
        )
    }
}

export default Dice