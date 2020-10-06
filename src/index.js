// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// == Import : local
import App from 'src/components/App';
import store from 'src/store';
import theme from 'src/styles/theme';

// == Render
const rootComponent = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);

render(rootComponent, document.getElementById('root'));
