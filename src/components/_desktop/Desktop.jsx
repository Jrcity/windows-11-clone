import React from 'react';
import styled from '@emotion/styled';
import {
  Container,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Popover,
  Typography,
} from '@mui/material';

//color theme
import { colors } from '../../utils/theme';
// import images
import wallpaper from '../../../public/images/win11-bg-dark.jpg';

const DesktopContainer = styled(Container)((props) => ({
  // some styles
  height: '100vh',
  overflow: 'hidden',
  background: `url(${props.wallpaper}) no-repeat`,
  backgroundPosition: '100% 100%',
  backgroundSize: 'cover',
}));

const DesktopMenu = styled(Paper)(() => ({
  background: colors.dark.concat('a9'),
  width: 220,
  height: 'fit-content',
}));

export default function Desktop(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [coordinates, setCoordinates] = React.useState(null);
  function handleOpenContext(ev) {
    setAnchorEl(ev.currentTarget);
    ev.preventDefault();
    ev.stopPropagation();
    document
      .getElementById('desktop__menu')
      .removeEventListener('mousemove', getCoordinates);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getCoordinates = React.useCallback((ev) => {
    setCoordinates([ev.clientX, ev.clientY]);
    ev.stopPropagation();
    ev.preventDefault();
  }, []);
  React.useEffect(() => {
    document
      .getElementById('desktop__menu')
      .addEventListener('mousemove', getCoordinates, false);
  }, [getCoordinates]);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const X_COORD = coordinates?.[0];
  const Y_COORD = coordinates?.[1];
  return (
    <DesktopContainer
      id="desktop__menu"
      // onMouseMove={getCoordinates}
      onClick={handleClose}
      aria-describedby={id}
      onContextMenu={handleOpenContext}
      maxWidth="xl"
      wallpaper={wallpaper}
    >
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: Y_COORD,
          horizontal: X_COORD,
        }}
      >
        <DesktopMenu>
          <List>
            <ListItemButton>
              <ListItemText primary="New" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemText primary="Refresh" />
            </ListItemButton>{' '}
            <ListItemButton>
              <ListItemText primary="New" />
            </ListItemButton>{' '}
            <ListItemButton>
              <ListItemText primary="New" />
            </ListItemButton>{' '}
            <ListItemButton>
              <ListItemText primary="New" />
            </ListItemButton>
          </List>
        </DesktopMenu>
      </Popover>
      {props.children}
    </DesktopContainer>
  );
}
