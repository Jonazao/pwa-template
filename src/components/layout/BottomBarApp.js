import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import menuItems from './navigationConfig';

export default function BottomBarApp() {
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

  const handleOnChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels value={value} onChange={handleOnChange} sx={{ overflowX: 'auto' }}>
        {menuItems.map((item) => {
          return (
            <BottomNavigationAction
              key={item.value}
              label={item.label}
              value={item.value}
              icon={<item.icon />}
              component={Link}
              to={item.url}
            />
          );
        })}
      </BottomNavigation>
    </Paper>
  );
}
