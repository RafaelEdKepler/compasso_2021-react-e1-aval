import React from 'react'
import { GlobalStyle } from './global/style';
import { BookProvider } from './hooks/useBook';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

export const App = () => {
  return (
    <BrowserRouter>
      <BookProvider>
        <Routes/>
      <GlobalStyle/>
    </BookProvider>
  </BrowserRouter>
  );
}

export default App;
