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
          <Route path="/currently_reading" component={MyReadsPage}/>
          <Route path="/read" component={ReadPage}/>
          <Route path="/want_to_read" component={WantToReadPage}/>
          <Route path="/search" component={SearchPage}/>
        </Switch>
      <GlobalStyle/>
    </BookProvider>
  </BrowserRouter>
  );
}

export default App;
