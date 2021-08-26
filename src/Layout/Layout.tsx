import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { SnackbarProvider } from 'notistack';
import {
  MenuIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  AccountCircleIcon,
  useTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Drawer,
  Divider,
  List,
} from '@shared';
import { Routes, Route } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { Projects } from '@components/Projects/Projects';
import { EditProject } from '@components/EditProject/EditProject';
import { AddProject } from '@components/AddProject/AddProject';
import { ViewProject } from '@components/ViewProject/ViewProject'
import { Buttons } from '@constants';
import { SideBarButton } from './SideBarButton/SideBarButton';
import { styles } from './Layout.style';

export const Layout = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const [user, setUser] = useState<string | undefined>('');
  const classes = styles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const [open, setOpen] = useState(false);

  const logout = async () => {
    try {
      oktaAuth.tokenManager.clear();
      await oktaAuth.signOut();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (authState?.isAuthenticated) {
      oktaAuth.getUser().then((info) => {
        setUser(info.name);
      });
    }
  }, [authState, oktaAuth]);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          <Button
            className={classes.userProfile}
            color="inherit"
            onClick={handleClick}
          >
            <AccountCircleIcon />
          </Button>
          <Menu
            keepMounted
            open={openMenu}
            anchorEl={anchorEl}
            onClose={handleClose}
          >
            <MenuItem>{user ? user : ''}</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {Buttons.map((button, index) => (
            <SideBarButton key={index} button={button} />
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <SnackbarProvider>
          <Routes>
            <Route path="/new" element={<AddProject />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/view" element={<ViewProject />} />
            <Route path="/edit/:id" element={<EditProject />} />
            <Route path="/" element={<div><Typography align="center" variant="h2">Welcome to the Dashboard</Typography><br />
              <Typography align="center" variant="h4">Mr. {user}</Typography>
            </div>} />
          </Routes>
        </SnackbarProvider>
      </main>
    </div>
  );
};
