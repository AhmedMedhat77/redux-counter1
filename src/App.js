import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/counter/Counter";
import useApp from "./useApp";

function App() {
  const { count, onDecrement, onIncrement } = useApp();
  
  const c = useSelector(s=> s.count);
  console.log({...c});
  return (
    <div className="App">
      <Counter
        count={count}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
      />
    </div>
  );
}

export default App;
