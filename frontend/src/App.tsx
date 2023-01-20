import {BrowserRouter} from 'react-router-dom';

import  './shared/forms/TraducoesYup';

import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts';


export const App = () => {

  return (

    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </AppThemeProvider>

  );
};