import { PropsWithChildren } from 'react';

import Menu from '@mui/material/Menu';

interface Props {
  open: boolean;
  onClose: VoidFunction;
  anchorEl?: any;
}

const Submenu = ({ children, open, onClose, anchorEl }: PropsWithChildren<Props>) => {
  return (
    <Menu
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      elevation={0}
      classes={{
        paper: '!shadow !min-w-[210px] rounded-md !bg-widget',
      }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{
        transform: 'translateX(-16px) translateY(-10px)',
        '& .MuiMenu-list': {
          padding: 0,
          color: 'var(--text)',
        },
      }}
    >
      {children}
    </Menu>
  );
};

export default Submenu;
