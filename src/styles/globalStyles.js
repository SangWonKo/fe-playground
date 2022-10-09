import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 body {
   font-family: -apple-system, BlinkMacSystemFont, "Noto Sans", "Segoe UI", Roboto, system-ui, "Helvetica Neue", Arial, sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 100%;
    vertical-align: baseline;
   outline:none;
   border:none;
 }
`;

export default GlobalStyles;
