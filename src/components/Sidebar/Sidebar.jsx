import './Sidebar.css';

import { Logo, SidebarNavItem } from '..';
import {GiGreenPower} from 'react-icons/gi';
import {VscFeedback, VscPieChart} from 'react-icons/vsc';
import { AiOutlineDollar } from 'react-icons/ai';
import {RiSendPlaneFill} from 'react-icons/ri';
import { TiChartLine } from 'react-icons/ti';
import {MdOutlineBookmarks} from 'react-icons/md';

const Sidebar = () => {
  return (
    <nav className='Sidebar'>
      <Logo />
      <div className='sidebar__nav'>
        <SidebarNavItem to='/assets' text='Assets' icon={<VscPieChart />} />
        <SidebarNavItem to='/trade' text='Trade' icon={<TiChartLine />} />
        <SidebarNavItem to='/pay' text='Send/Receive' icon={<RiSendPlaneFill />} />
        <SidebarNavItem
          to='/deposit'
          text='Deposit'
          icon={<AiOutlineDollar />}
        />
        {/* <SidebarNavItem
                to='/partners'
                text='Partners'
                icon={<AiFillEuroCircle />}
              /> */}
        <SidebarNavItem
                to='/rating'
                text='Convert C14 to Offset'
                icon={<GiGreenPower />}
              />
              <SidebarNavItem
                to='/feedback'
                text='Feedback'
                icon={<VscFeedback />}
              />
              <SidebarNavItem
                to='/learn_more'
                text='C14 Academy'
                icon={<MdOutlineBookmarks />}
              />
              
      </div>
    </nav>
  );
};

export default Sidebar;
