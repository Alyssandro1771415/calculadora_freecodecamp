import React from "react";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Calculator.css";
import { useState, setState } from "react";

function Calculator() {

    const [result, setResult] = useState(0);

    return (
        <div className="text-white" id="calc_canva">
            <div id="window">
                <div id="calc">{result}</div>
            </div>
            <div id="buttons">
                <Button className="button" variant="outline-info">9</Button>
                <Button className="button" variant="outline-info">8</Button>
                <Button className="button" variant="outline-info">7</Button>
                <Button className="button" variant="outline-info">6</Button>
                <Button className="button" variant="outline-info">5</Button>
                <Button className="button" variant="outline-info">4</Button>
                <Button className="button" variant="outline-info">3</Button>
                <Button className="button" variant="outline-info">2</Button>
                <Button className="button" variant="outline-info">1</Button>
                <Button className="button" variant="outline-info">0</Button>
                <Button id="equals" className="button" variant="outline-dark">=</Button>
                <Button className="button" variant="outline-success">+</Button>
                <Button className="button" variant="outline-success">-</Button>
                <Button className="button" variant="outline-success">*</Button>
                <Button className="button" variant="outline-success">/</Button>
                <Button id="clear" className="button" variant="outline-danger">AC</Button>
            </div>
        </div>
    );
}

export default Calculator;
