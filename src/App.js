import React, {useEffect} from 'react'
import Header from './components/Header';
import { GlobalStyle } from './global/style';
import { getMyBooks } from './api';
import { BookProvider } from './hooks/useBook';
import MyReadsPage from './pages/MyReadsPage/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReadPage from './pages/ReadPage';
import WantToReadPage from './pages/WantToReadPage';

export const App = () => {


  return (
    <BookProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={MyReadsPage}/>
          <Route path="/Read" exact={true} component={ReadPage}/>
          <Route path="/WantToRead" exact={true} component={WantToReadPage}/>
        </Switch>
      </BrowserRouter>
      <GlobalStyle/>
    </BookProvider>
  );
}

export default App;
