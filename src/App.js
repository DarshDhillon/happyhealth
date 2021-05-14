import GlobalStyle from './globalStyle/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import DropMenu from './components/DropMenu/DropMenu';
import Foodie from './pages/Foodie';
import Home from './pages/Home';
import Take5 from './pages/Take5';
import Workouts from './pages/Workouts';
import Shop from './pages/Shop';
import Contact from './pages/Contact.js';
import Featured from './components/Featured/Featured';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <GlobalStyle />
        <Navbar />
        <DropMenu />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/foodie' component={Foodie} />
          <Route path='/take5' component={Take5} />
          <Route path='/workouts' component={Workouts} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/contact' component={Contact} />
          <Route path='*' component={NotFound} />
        </Switch>
        {/* <Featured /> */}
        <Footer />
      </Router>
    </>
  );
};

export default App;
