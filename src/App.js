import "./App.scss";
import TypescriptPlayground from "./typescript/TypescriptPlayground.tsx";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="subcontainer">
          {/* Typescript */}
          <TypescriptPlayground />
          {/* Sass */}
          <div className="testOne">Test 1</div>
          <div className="testTwo">Test 2</div>
          <div className="testThree">Test 3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
