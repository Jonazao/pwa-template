import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from '@mui/material/styles';

import menuItems from './navigationConfig';

export default function TopBarApp() {
  const theme = useTheme();
  const location = useLocation();
  const [value, setValue] = React.useState(false);
  React.useEffect(() => {
    const pathSegmenets = location.pathname.split('/').filter((v) => v !== '');
    const selectedItem = menuItems.find((item) => pathSegmenets.some((path) => item.url.includes(`/${path}`)));
    if (selectedItem) {
      setValue(selectedItem.value);
    } else {
      setValue(false);
    }
  }, [value, location]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const TopBarToolbar = () => {
    return (
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Muy Deli
        </Typography>
        <Tabs
          sx={{ color: theme.palette.primary.contrastText }}
          textColor="inherit"
          TabIndicatorProps={{ sx: { background: theme.palette.primary.contrastText } }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {menuItems.map((item) => {
            return (
              <Tab
                key={item.value}
                iconPosition="start"
                label={item.label}
                value={item.value}
                icon={<item.icon />}
                component={Link}
                to={item.url}
              />
            );
          })}
        </Tabs>
      </Toolbar>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <TopBarToolbar />
      </AppBar>
      <TopBarToolbar />
    </Box>
  );
}
