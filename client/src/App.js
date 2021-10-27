import { Route, Switch } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";
import AddContact from "./pages/AddContact";
import ContactList from "./pages/ContactList";
import Error from "./pages/Error";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacts" component={ContactList} />
        <Route
          path={["/addcontact", "/editcontact/:id"]}
          component={AddContact}
        />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
