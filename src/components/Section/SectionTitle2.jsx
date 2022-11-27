import './SectionTitle.css';

import { Text } from '..';
import classNames from 'classnames';

const SectionTitle2 = ({ title, subtitle, link, link_name, noBorderBottom }) => {
  const sectionTitleClasses = classNames({
    SectionTitle: true,
    'sectionTitle-noBorderBottom': noBorderBottom,
  });

  return (
    <div className={sectionTitleClasses}>
      <b><Text h1>{title}</Text></b>

      {subtitle && (
        <><div className='sectionTitle__subtitle'>
<Text color='grey'>{subtitle}</Text>
              </div><div className='sectionTitle_link'>
                        <a href={link}>{link_name}</a>
                  </div></>
      )}
    </div>
  );
};

export default SectionTitle2;
