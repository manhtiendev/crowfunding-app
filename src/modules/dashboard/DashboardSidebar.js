import {
  IconCampaign,
  IconDarkmode,
  IconDashboard,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from 'components/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authLogOut } from 'store/auth/auth-slice';

const sideBarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: 'Dashboard',
    url: '/',
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: 'Campaign',
    url: '/campaign',
  },
  {
    icon: <IconPayment></IconPayment>,
    title: 'Payment',
    url: '/payment',
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: 'Withdraw',
    url: '/withdraw',
  },
  {
    icon: <IconProfile></IconProfile>,
    title: 'Profile',
    url: '/profile',
  },
  {
    icon: <IconLogout></IconLogout>,
    title: 'Logout',
    url: '/logout',
  },
  {
    icon: <IconDarkmode></IconDarkmode>,
    title: 'Light/Dark',
    url: '#',
    onClick: () => {},
  },
];

const DashboardSidebar = () => {
  const navLinkClass =
    'flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 last:mt-auto last:bg-white last:shadow-sdprimary';
  const dispatch = useDispatch();
  return (
    <div className='flex-shrink-0 -ml-[14px] w-full md:w-[76px] flex flex-col rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,213,213,0.15)] px-[14px] py-10'>
      {sideBarLinks.map((link) => {
        if (link.url === '/logout') {
          return (
            <button onClick={() => dispatch(authLogOut())} className={navLinkClass}>
              <span>{link.icon}</span>
              <span className='md:hidden'>{link.title}</span>
            </button>
          );
        }
        return (
          <NavLink
            to={link.url}
            key={link.title}
            className={({ isActive }) =>
              isActive
                ? `${navLinkClass} bg-primary text-primary bg-opacity-20`
                : `${navLinkClass} text-icon-color`
            }
          >
            <span>{link.icon}</span>
            <span className='md:hidden'>{link.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default DashboardSidebar;
