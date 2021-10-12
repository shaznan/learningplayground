import "./App.scss";
import Welcome from "./functionalComponent/Welcome";
import Counter from "./functionalComponent/Counter";
import Parent from "./functionalComponent/PassingMethodProps/Parent";
import { Provider } from "react-redux";
import Posts from "./redux/components/Posts";
import store from "./redux/store";
import Postform from "./redux/components/Postform";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <div className="subcontainer">
            {/* Redux */}
            <Postform />
            <Posts />
            {/* Class component */}
            {/* <Welcome name="shaznan fairoze" age="23" />
          <Counter /> */}
            {/* <Parent /> */}
            {/* <Welcome name="Shazzy" age="24" /> */}
            {/* Sass */}
            {/* <div className="testOne">Test 1</div>
          <div className="testTwo">Test 2</div>
          <div className="testThree">Test 3</div> */}
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
