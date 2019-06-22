import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// SASS
import "./app.scss";

export class App extends Component {
    state = {
        bill: Number,
        tip: Number,
        result: 0
    };

    componentWillUnmount() {
        this.clearCalc();
    }

    handleInputChange = input => {
        this.setState({
            bill: +input
        });
    };

    handleTipChange = input => {
        this.setState(
            {
                tip: +input
            },
            this.calculateResult
        );
    };

    calculateResult = () => {
        const { bill, tip } = this.state;
        let result = bill * (tip * 0.01);
        result.toFixed(2);
        result = "$" + result;
        this.setState({
            result: result
        });
    };

    clearCalc = () => {
        this.setState({
            bill: 0,
            tip: 0,
            result: 0
        });
    };

    render() {
        return (
            <div>
                <Container maxWidth="sm">
                    <Paper className="main">
                        <form className="form-inputs-group">
                            <TextField
                                type="number"
                                
                                className="input-item"
                                placeholder="Insert Bill ex: 12.45"
                                value={this.state.bill}
                                onChange={e =>
                                    this.handleInputChange(e.target.value)
                                }
                            />
                            <TextField
                                type="number"
                                
                                className="input-item"
                                placeholder="Insert tip percentage ex: 15%"
                                value={this.state.tip}
                                onChange={e =>
                                    this.handleTipChange(e.target.value)
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
