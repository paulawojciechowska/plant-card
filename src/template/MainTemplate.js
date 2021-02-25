import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Navbar from 'components/organisms/Navbar/Navbar';


const MainTemplate = ({children}) => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
        <>
            <Navbar />
            {children}
        </>
    </ThemeProvider>
  </div>
);

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
}
export default MainTemplate;