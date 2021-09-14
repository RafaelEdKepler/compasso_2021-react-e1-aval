import React, {useEffect} from 'react'
import Header from './components/Header';
import { GlobalStyle } from './global/style';
import { getMyBooks } from './api';
import { BookProvider } from './hooks/useBook';
import MyReadsPage from './pages/MyReadsPage/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReadPage from './pages/ReadPage';
import WantToReadPage from './pages/WantToReadPage';
import SearchPage from './pages/SearchPage';

export const App = () => {


  return (
    <BrowserRouter>
      <BookProvider>
        <Switch>
          <Route path="/" exact={true} component={MyReadsPage}/>
          <Route path="/Read" exact={true} component={ReadPage}/>
          <Route path="/WantToRead" exact={true} component={WantToReadPage}/>
          <Route path="/search" exact={true} component={SearchPage}/>
        </Switch>
      <GlobalStyle/>
    </BookProvider>
  </BrowserRouter>
  );
}

export default App;
