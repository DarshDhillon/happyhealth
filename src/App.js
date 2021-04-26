import GlobalStyle from './globalStyle/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import DropMenu from './components/DropMenu/DropMenu';
import Workouts from './pages/Workouts';
import Home from './pages/Home';
import Take5 from './pages/Take5';

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <DropMenu />
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/workouts' exact component={Workouts} /> */}
          <Route path='/take5' exact component={Take5} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
