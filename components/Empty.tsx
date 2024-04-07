import Image from 'next/image';

import dark from '@/public/assets/empty_dark.svg';
import light from '@/public/assets/empty_light.svg';
import Spring from '@/components/Spring';
import { useTheme } from '@/contexts/themeContext';

const Empty = ({ text = 'Nothing found' }) => {
  const { theme } = useTheme();

  return (
    <Spring className="flex flex-1 flex-col items-center justify-center gap-3" type="slideUp">
      <Image className="max-w-[180px]" src={theme === 'light' ? light : dark} alt="Empty" />
      <p className="text-sm font-body text-gray">{text}</p>
    </Spring>
  );
};

export default Empty;
