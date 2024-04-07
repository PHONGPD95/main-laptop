import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

import dark from '@/public/assets/logo_dark.svg';
import light from '@/public/assets/logo_light.svg';
import { useTheme } from '@/contexts/themeContext';

interface Props {
  imgClass?: string;
  textClass?: string;
}

const Logo = ({ imgClass, textClass }: Props) => {
  const { theme } = useTheme();

  return (
    <Link className="logo" href="/">
      <span className={`logo_img relative ${imgClass || ''}`}>
        <Image src={light} alt="ShopPoint" />
        <Image className={`absolute top-0 left-0 ${theme === 'light' ? 'hidden' : ''}`} src={dark} alt="ShopPoint" />
      </span>
      <h4 className={`logo_text ${textClass || ''}`}>ShopPoint</h4>
    </Link>
  );
};

export default memo(Logo);
