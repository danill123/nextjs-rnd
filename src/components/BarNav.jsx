import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';

export default function BarNav() {
  const [navbarData, setNavbarData] = React.useState([])

  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`).
      then( res => res.json()
        .then(res => {
          setNavbarData(res)
    }));
  }, []);

  return (
      <AppBar position="sticky">
        <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                Unpam Store Chuakz
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {navbarData.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
        </Toolbar>
      </AppBar>
  );
}