import { Provider } from "react-redux";
import Body from "./components/Body.component";
import appStore from "./utils/appStore.utils";

function App() {
  return (
    <Provider store={appStore}>
      <Body />;
    </Provider>
  );
}

export default App;
