import Link from 'next/link';
import { useEffect, useState } from 'react';
import Headroom from 'react-headroom';
import { useWindowSize } from 'react-use';

import { useSidebar } from '@/contexts/sidebarContext';
import { useTheme } from '@/contexts/themeContext';
import ModalBase from '@/ui/ModalBase';
import Search from '@/ui/Search';

const AppBar = () => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const { width } = useWindowSize();
  const { theme, toggleTheme } = useTheme();
  const { setOpen } = useSidebar();

  useEffect(() => {
    setSearchModalOpen(false);
  }, [width]);

  return (
    <>
      <Headroom style={{ zIndex: 999 }}>
        <div className="flex items-center justify-between">
          {width < 1920 && (
            <button className="icon text-2xl leading-none" aria-label="Open sidebar" onClick={() => setOpen(true)}>
              <i className="icon-bars-solid" />
            </button>
          )}
          {width >= 768 && <Search wrapperClass="flex-1 max-w-[1054px] ml-5 mr-auto 4xl:ml-0" />}
          <div className="flex items-center gap-5 md:ml-5 xl:gap-[26px]">
            {width < 768 && (
              <button
                className="text-[20px] leading-none text-gray dark:text-gray-red xl:text-2xl"
                aria-label="Open search"
                onClick={() => setSearchModalOpen(true)}
              >
                <i className="icon-magnifying-glass-solid" />
              </button>
            )}
            <button
              className="text-2xl leading-none text-gray dark:text-gray-red"
              aria-label="Change theme"
              onClick={toggleTheme}
            >
              <i className={`icon-${theme === 'light' ? 'sun-bright' : 'moon'}-regular`} />
            </button>
            <div className="relative">
              <Link href="/general-settings">
                <button
                  className="h-8 w-8 rounded-full bg-accent text-widget text-sm flex items-center
                                    justify-center relative xl:w-11 xl:h-11 xl:text-lg"
                  aria-label="Account menu"
                >
                  <i className="icon-user-solid" />
                </button>
              </Link>

              <span className="badge-online" />
            </div>
          </div>
        </div>
      </Headroom>
      {width < 768 && (
        <ModalBase open={searchModalOpen} onClose={() => setSearchModalOpen(false)}>
          <div className="card max-w-[360px] w-full">
            <h3 className="mb-3">Search</h3>
            <Search placeholder="What are you looking for?" />
          </div>
        </ModalBase>
      )}
    </>
  );
};

export default AppBar;
