import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/index.jsx";
import MoviePage from "./pages/MoviePage/";
import { GlobalStyle } from "./styles/global";


function App() {
  return (
      <BrowserRouter>
        <GlobalStyle />

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/movie/:id" component={MoviePage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
