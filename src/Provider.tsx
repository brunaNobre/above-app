// import { IntlProvider } from 'react-intl';
// import { BrowserRouter as Router } from 'react-router-dom';

import ThemeProvider from 'src/design/ThemeProvider';

import App from './App';

const Provider: React.FC = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default Provider;
