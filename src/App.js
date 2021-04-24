import GlobalStyle from './globalStyle/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import DropMenu from './components/DropMenu/DropMenu';
import Workouts from './pages/Workouts';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <DropMenu />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/workouts' exact component={Workouts} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
