import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'บทที่ 1 Basic Computing',
    path: '/pam2542/page1',
    icon: <AiIcons.AiFillCaretRight/>,
    cName: 'nav-text'
  },
  {
    title: 'บทที่ 2 Linear Equations',
    path: '/pam2542/page2',
    // icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'บทที่ 3 Interpolation',
    path: '/pam2542/page3',
    // icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'บทที่ 4 Differentiation',
    path: '/pam2542/page4',
    // icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'บทที่ 5 Integration',
    path: '/pam2542/page5',
    // icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'บทที่ 6 Root-finding',
    path: '/pam2542/page6',
    // icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
