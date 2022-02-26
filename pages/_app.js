import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
// import '../styles/globals.css';

import { colors } from '../src/utils/theme';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { ...colors },
    background: { ...colors },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
