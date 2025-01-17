'use client';

import { useState, useEffect } from 'react';

const useSubmenu = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    window.addEventListener('resize', handleClose);
  }, []);

  return { anchorEl, open, handleClick, handleClose };
};

export default useSubmenu;
