import logo from "./logo.svg";
import "./App.css";

function App(props) {
  return (
    <div>
      <p>Customer Name: {props.customerName}</p>
      <p>Amount: {props.amount}</p>
    </div>
  );
}

export default App;
