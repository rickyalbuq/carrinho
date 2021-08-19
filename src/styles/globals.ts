import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 16px;
  }
  
  * {
    margin: 0;
    padding: 0;
    font-weight: 400;
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.colors.bgLow};
    color: ${({ theme }) => theme.colors.txtMedium};
    font-family: 'Poppins', sans-serif;
  }
`;
