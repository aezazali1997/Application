import React from 'react';
import clsx from 'clsx';
import { useTheme, Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, Button, Menu, MenuItem, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ListButton } from './ListButton/ListButton'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Route, Routes } from 'react-router-dom'
import Projects from '../Projects/Projects'
import AddProject from '../AddProject/AddProject';
import { LIST } from '@constants';
import { EditProject } from '../EditProject/EditProject'
import { useStyles } from './Sidebat.style';

const Sidebar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = React.useState(false);

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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
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
          <Route path="/new">
            <AddProject />
          </Route>
          <Route path="/edit/:id">
            <EditProject />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Routes>
      </main>
    </div>
  );
}
export default Sidebar;