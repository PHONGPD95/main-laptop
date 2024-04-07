import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import Logo from '@/components/Logo';
import ROUTES, { ADMIN_ROUTE } from '@/constants/routes';
import { useSidebar } from '@/contexts/sidebarContext';
import Collapse from '@mui/material/Collapse';

import Drawer from './styles';

const Sidebar = () => {
  const { width } = useWindowSize();
  const { open, setOpen } = useSidebar();
  const [active, setActive] = useState('Dashboard');
  const isPermanent = width >= 1920;

  useEffect(() => {
    window.addEventListener('resize', () => {
      setActive('');
    });

    return () => {
      window.removeEventListener('resize', () => {
        setActive('');
      });
    };
  }, []);

  return (
    <Drawer
      id="appMenu"
      anchor="left"
      transitionDuration={350}
      open={open}
      variant={isPermanent ? 'permanent' : 'temporary'}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <Logo />
      <nav className="menu">
        {ROUTES.map((route, index) => {
          return (
            <Fragment key={route.name}>
              {route.links && (
                <>
                  <div>
                    <div
                      className={`menu_item ${active === route.name ? 'active' : ''}`}
                      onClick={() => setActive(active === route.name ? '' : route.name)}
                    >
                      <div className="flex items-center gap-2.5">
                        <i className={`icon icon-${route.icon}`} />
                        <span className="text">{route.name}</span>
                      </div>
                      <button className="xl:hidden 4xl:block" aria-label="Toggle submenu">
                        <i className="icon icon-caret-right-solid" />
                      </button>
                    </div>
                    <Collapse in={active === route.name} timeout="auto" unmountOnExit>
                      <div className="submenu flex flex-col gap-2.5">
                        {route.links.map((link) => {
                          return (
                            <Link
                              className="submenu_item menu_item"
                              href={`${ADMIN_ROUTE}${link.path}`}
                              key={link.name}
                            >
                              <span className="flex items-center gap-2.5">
                                <i className="icon icon-circle-solid" />
                                <span>{link.name}</span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </Collapse>
                  </div>
                  {index === ROUTES.length - 2 && <span className="menu_divider" />}
                </>
              )}
              {!route.links && (
                <>
                  <Link className="menu_item" href={`${ADMIN_ROUTE}${route.path}`}>
                    <div className="flex items-center gap-2.5">
                      <i className={`icon icon-${route.icon}`} />
                      <span className="text">{route.name}</span>
                    </div>
                  </Link>
                  {index === ROUTES.length - 2 && <span className="menu_divider" />}
                </>
              )}
            </Fragment>
          );
        })}
      </nav>
    </Drawer>
  );
};

export default Sidebar;
