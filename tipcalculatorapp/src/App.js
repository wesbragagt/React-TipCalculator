import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
// SASS
import "./app.scss";

export class App extends Component {
    state = {
        bill: "",
        tip: "",
        result: ""
    };

    handleInputChange = input => {
        this.setState({
            bill: input
        });
    };

    handleTipChange = (input, next) => {
        this.setState({
            tip: input
        });
        next();
    };

    calculateResult = () => {
        const { bill, tip } = this.state;
        let result = parseFloat(bill) * parseFloat(tip);
        this.setState({
            result: 
        });
    };

    render() {
        return (
            <div>
                <Container maxWidth="sm">
                    <Paper className="main">
                        <form className="form-inputs-group">
                            <TextField
                                className="input-item"
                                placeholder="Insert Bill ex: 12.45"
                                value={this.state.bill}
                                onChange={e =>
                                    this.handleInputChange(e.target.value)
                                }
                            />
                            <TextField
                                className="input-item"
                                placeholder="Insert tip percentage ex: 15%"
                                value={this.state.tip}
                                onChange={e =>
                                    this.handleTipChange(
                                        e.target.value,
                                        this.calculateResult
                                    )
                                }
                            />

                            <span>=</span>
                            <Paper className="result">
                                {this.state.result}
                            </Paper>
                        </form>
                    </Paper>
                </Container>
            </div>
        );
    }
}

export default App;
