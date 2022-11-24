import './MenuMobile.css';

import { Button, SidebarNavItem } from '..';
import { RiCloseLine } from 'react-icons/ri';

import { AiOutlineDollar } from 'react-icons/ai';
import {GiGreenPower} from 'react-icons/gi';
import {RiSendPlaneFill} from 'react-icons/ri';
import {VscFeedback, VscPieChart} from 'react-icons/vsc';
import { ModalContext } from '../../contexts/ModalContext';
import { TiChartLine } from 'react-icons/ti';
import useAuth from '../../hooks/useAuth';
import { useContext } from 'react';

const MenuMobile = () => {
  const { isOpen, handleClose } = useContext(ModalContext);
  const { signout } = useAuth();

  return (
    <>
      {isOpen && (
        <div className='MenuMobile'>
          <div className='menuMobile__navItems'>
            <div>
              <div className='menuMobile__close'>
                <RiCloseLine onClick={handleClose} />
              </div>
              <SidebarNavItem
                to='/assets'
                text='Assets'
                icon={<VscPieChart />}
              />
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
                text='Convert C14 to Offsets'
                icon={<GiGreenPower />}
              />
              <SidebarNavItem
                to='/feedback'
                text='Feedback'
                icon={<VscFeedback />}
              />
              
            </div>
            <Button color='secondary' onClick={signout} size='xl'>
              Log out
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuMobile;
