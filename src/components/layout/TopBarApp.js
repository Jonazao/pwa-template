import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import menuItems from './navigationConfig';

export default function TopBarApp() {
  const location = useLocation();
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    const selectedItem = menuItems.find((item) => location.pathname.includes(item.url));
    if (selectedItem) {
      setValue(selectedItem.value);
    }
  }, [value, location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Muy Deli
          </Typography>
          <Tabs
            TabIndicatorProps={{ sx: { background: 'white' } }}
            textColor="white"
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
      </AppBar>
      <Toolbar />
    </Box>
  );
}
