// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

// == Import : local
import App from 'src/containers/App';
import store from 'src/store';
import theme from 'src/styles/theme';

// == Render
const rootComponent = (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);

render(rootComponent, document.getElementById('root'));
