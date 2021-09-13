import React, {useEffect} from 'react'
import Header from './components/Header';
import { GlobalStyle } from './global/style';
import { getMyBooks } from './api';
import { BookProvider } from './hooks/useBook';
import MyReadsPage from './pages/MyReadsPage';

export const App = () => {


  return (
    <BookProvider>
      <MyReadsPage/>
      <GlobalStyle/>
    </BookProvider>
  );
}

export default App;
