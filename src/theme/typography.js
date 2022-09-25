const MuiTypography = (theme) => ({
  styleOverrides: {
    root: {
      [theme.breakpoints.down('md')]: {
        marginBottom: '20px',
      },
    },
  },
});

export default MuiTypography;
