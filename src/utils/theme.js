import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(4, 52, 44)', //green
        },
        secondary: {
            main: 'rgba(210, 181, 121)', //golden
        },
        backgroundGreen: {
            main: 'rgba(33, 67, 53, 1)', // background green
        },
        backgroundGolden: {
            main: 'rgb(245, 220, 170, 0.819)',
        }
    },
    typography: {
        fontFamily: 'var(--font-mono)',
    },
});

export default theme;
