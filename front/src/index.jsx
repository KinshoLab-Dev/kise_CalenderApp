import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard/container";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import Navigation from "./components/Navigation/container"

const store = createStore(rootReducer);

dayjs.locale("ja");

const App = () => (
  <Provider store={store}>
    <Navigation/>
    <CalendarBoard />
  </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));