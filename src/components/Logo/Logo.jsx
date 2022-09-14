import './Logo.css';

import useMediaQuery from '../../hooks/useMediaQuery';

const Logo = () => {
  const isWidthMax1500 = useMediaQuery('(max-width: 1300px)');
  const logoText = isWidthMax1500 ? 'C' : 'C14';

  return <div className='Logo'>{logoText}</div>;
};

export default Logo;
