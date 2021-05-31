import { Route } from 'react-router';
import './App.scss';
import { Home } from './components/Home/Home';
import { Win } from './components/win/Win';
import { GameOver } from './components/gameOver/gameOver';
import MainContainer from './components/Main/MainContainer';

const App = () => {
  return (
    <div className="App">
        <Route exact path={['/', '/home']} render={() => <Home />} />
        <Route path='/main' render={() => <MainContainer />} />
        <Route path='/win' render={() => <Win />} />
        <Route path='/gameOver' render={() => <GameOver />} />
    </div>
  );
}

export default App;
