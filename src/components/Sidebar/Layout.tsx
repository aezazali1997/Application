import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useTheme, Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, Button, Menu, MenuItem, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ListButton } from './ListButton/ListButton'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Routes, Route } from 'react-router-dom'
import { useOktaAuth, SecureRoute } from '@okta/okta-react'
import Projects from '../Projects/Projects'
import { EditProject } from '../EditProject/EditProject'
import AddProject from '../AddProject/AddProject';
import { LIST } from '@constants';
import { useStyles } from './Layout.style';

const Sidebar = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const [user, setUser] = useState<string | undefined>('');
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const [open, setOpen] = useState(false);
  /* fucntions */
  const logout = async () => {
    try {
      oktaAuth.tokenManager.clear();
      await oktaAuth.signOut()
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    if (authState?.isAuthenticated) {
      oktaAuth.getUser().then(info => {
        setUser(info.name)
      })
    }
  }, [authState, oktaAuth])
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
          <Button className={classes.userProfile} color="inherit" onClick={handleClick}>
            <AccountCircleIcon />
          </Button>
          <Menu
            keepMounted
            open={openMenu}
            anchorEl={anchorEl}
            onClose={handleClose}
          >
            <MenuItem >{user ? user : ''}</MenuItem>
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
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {
            LIST.map((list, index) => (
              <ListButton key={index} list={list} />
            ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <Routes>
          <SecureRoute path="/new" element={<AddProject />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/edit/:id" element={<EditProject />} />
        </Routes>
      </main>
    </div>
  );
}
export default Sidebar;