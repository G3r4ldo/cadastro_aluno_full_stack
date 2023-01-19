import { ThemeProvider } from '@emotion/react';
import React from 'react';
import {DefaultTheme} from './../themes/DefaultTheme';


interface IAppThemeProviderProps {

    children: React.ReactNode;
}


export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({children}) => {

  return (
    <ThemeProvider theme={DefaultTheme}>

      {children}
         
    </ThemeProvider>
  );

};