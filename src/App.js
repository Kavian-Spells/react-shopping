import logo from './logo.svg';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import ShoppingList from './shopping-list.jsx';
import AddItem from './add-item.jsx';

const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path="/" component={ShoppingList}/>
        <Route path="/add" component={AddItem}/>
        <Route component={NoMatch}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
