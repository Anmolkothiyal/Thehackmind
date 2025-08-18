import React, { useState } from 'react';
import { Drawer } from 'antd';
import NavItems from './NavItems';

interface NavDrawerProps {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavDrawer = ({ openDrawer, setOpenDrawer }: NavDrawerProps) => {
  const [open, setOpen] = useState(openDrawer);

  const onClose = () => {
    setOpen(false);
    setOpenDrawer(false);
  };

  return (
    <Drawer
      height={320}
      placement='top'
      closable={false}
      onClose={onClose}
      open={open}
    >
      <NavItems view='drawer' />
    </Drawer>
  );
};
