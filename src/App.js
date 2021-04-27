import GlobalStyle from './globalStyle/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import DropMenu from './components/DropMenu/DropMenu';
import Foodie from './pages/Foodie';
import Home from './pages/Home';
import Take5 from './pages/Take5';

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
          <Route path='/foodie' exact component={Foodie} />
          <Route path='/take5' exact component={Take5} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
