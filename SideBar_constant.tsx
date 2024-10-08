import { BsHouseDoor, BsKanban, BsPerson, BsCart } from 'react-icons/bs'; 
import { SideNavItem } from './types/types';
import { CiCircleMore } from "react-icons/ci";

export const SideBarItems: SideNavItem[] = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <BsHouseDoor size={25} />,
    },
    {
        title: 'Account',
        path: '/account',
        icon: <BsPerson size={25} />,
        subMenu: true,
        subMenuItems: [
            {
                title: 'Profile',
                path: '/account/profile',
                icon: <BsPerson size={20} />,
            },
            {
                title: 'Settings',
                path: '/account/settings',
                icon: <BsPerson size={20} />,
            },
        ],
    },
    {
        title: 'Products',
        path: '/products',
        icon: <BsKanban size={25} />,
        subMenu: true,
        subMenuItems: [
            {
                title: 'All Products',
                path: '/products',
                icon: <BsKanban size={20} />,
            },
            {
                title: 'New Product',
                path: '/products/new',
                icon: <BsKanban size={20} />,
            },
            {
                title: 'Categories',
                path: '/products/categories',
                icon: <BsKanban size={20} />,
            },
        ],
    },
    {
        title: 'Orders',
        path: '/orders',
        icon: <BsCart size={25} />,
        subMenu: true,
        subMenuItems: [
            {
                title: 'All Orders',
                path: '/orders',
                icon: <BsCart size={20} />,
            },
            {
                title: 'Pending Orders',
                path: '/orders/pending',
                icon: <BsCart size={20} />,
            },
            {
                title: 'Completed Orders',
                path: '/orders/completed',
                icon: <BsCart size={20} />,
            },
        ],
    },
    {
        title: 'Help',
        path: '/help',
        icon: <CiCircleMore size={25} />,
        subMenu: true,
        subMenuItems: [
            {
                title: 'FAQs',
                path: '/help/faqs',
                icon: <CiCircleMore size={20} />,
            },
            {
                title: 'Contact Support',
                path: '/help/contact',
                icon: <CiCircleMore size={20} />,
            },
        ],
    },
];
