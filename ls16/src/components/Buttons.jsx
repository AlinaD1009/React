import { connect } from "react-redux";
import { plus, minus, plusTen, minusTen, divideByTwo, setZero, setHundred } from "../store/actions/counter";

function Buttons({plusTen, minusTen, divideByTwo, setZero, setHundred }) {
    return (
        <div>
            <h3>Plus 10</h3>
            <button onClick={plusTen}>+10</button>
            <hr />
            <h3>Minus 10</h3>
            <button onClick={minusTen}>-10</button>
            <hr />
            <h3>Rounding</h3>
            <button onClick={divideByTwo}>/2</button>
            <hr />
            <h3>Resetting</h3>
            <button onClick={setZero}>Set 0</button>
            <hr />
            <h3>Resetting 100</h3>
            <button onClick={setHundred}>Set 100</button>
            <hr />
        </div>
    );
}

const mapDispatchToProps = {
    plus, minus, plusTen, minusTen, divideByTwo, setZero, setHundred
};

export default connect(null, mapDispatchToProps)(Buttons);