import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    background-color: ${({ theme }) => theme.bgPrimary};
    color: ${({ theme }) => theme.textPrimary};
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
    transition: background-color 0.4s ease, color 0.4s ease;
  }

  /* Custom scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.bgPrimary};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.textMuted};
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.accentIndigo};
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  section {
    padding: 6rem 0;
    position: relative;
  }

  /* Responsive font definitions */
  @media (max-width: 768px) {
    html {
      font-size: 15px;
    }
    .container {
      padding: 0 1.5rem;
    }
    section {
      padding: 4rem 0;
    }
  }
`;
export default GlobalStyles;
