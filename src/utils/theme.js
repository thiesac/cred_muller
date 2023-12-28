import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(4, 52, 44)',
        },
        secondary: {
            main: 'rgba(210, 181, 121, 1)',
        },
    },
    typography: {
        fontFamily: 'var(--font-mono)',
    },
});

export default theme;
