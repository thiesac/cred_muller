import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(4, 52, 44)', //green
        },
        secondary: {
            main: 'rgba(210, 181, 121)', //golden
        },
        customColor: {
            main: 'rgba(33, 67, 53, 1)', // background green
        },
    },
    typography: {
        fontFamily: 'var(--font-mono)',
    },
});

export default theme;
