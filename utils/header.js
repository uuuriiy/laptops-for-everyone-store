import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import InventoryIcon from '@mui/icons-material/Inventory';
import ContactsIcon from '@mui/icons-material/Contacts';

import { breakpoints } from './index';

export const navLinks = [
    {
        title: 'Home',
        href: '/',
        icon: <HomeIcon />,
    },
    {
        title: 'About',
        href: '/about',
        icon: <InfoIcon />,
    },
    {
        title: 'Products',
        href: '/products',
        icon: <InventoryIcon />,
    },
    {
        title: 'Contact',
        href: '/contact',
        icon: <ContactsIcon />,
    },
];

export const searchbarProps = {
    inputPlaceholder: 'Search...',
    inputProps: {
        'aria-label': 'search products',
    },
    divider: {
        sx: {
            height: 30,
            m: 0.5,
            background: 'white',
            [breakpoints.tablet]: {
                height: 25,
            },
        },
        orientation: 'vertical',
    },
    searchbarMobileOpenIcon: {
        styles: { border: '1px solid white', borderRadius: '50%' },
        sizes: ['35px', '20px'],
    },
    searchbarIcons: [
        {
            type: 'button',
            sx: {
                p: '10px',
                [breakpoints.mobile]: {
                    p: '8px'
                },
            },
            ariaLabel: 'search',
            sizes: ['24px', '18px'],
            SearchBarIcon: <SearchIcon/>,
        },
        {
            sx: {
                p: '10px',
                [breakpoints.mobile]: {
                    p: '8px'
                },
            },
            ariaLabel: 'shopping cart',
            sizes: ['24px', '18px'],
            SearchBarIcon: <ShoppingCartOutlinedIcon />,
        },
    ],
};

export const headerIconsColor = {
    white: 'white',
    gray: 'gray',
    blue: '#1976d2'
}

export const getNavLinkStyles = (isActive) => ({
    padding: '12px 15px',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 800,
    textTransform: 'uppercase',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,

    ':after': {
        display: 'block',
        position: 'absolute',
        margin: 0,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        content: "'.'",
        color: 'transparent',
        width: '1px',
        height: '1px',
        borderRadius: '50%',
        background: 'transparent',
        WebkitAnimation: isActive ? 'circle .1s ease-in forwards' : '',
      },

    ':hover:after': {
        WebkitAnimation: 'circle 1.5s ease-in forwards',
    },

    ':after, :before': {
        transition: 'all .5s',
    },

    '@-webkit-keyframes circle': {
        '0%': {
          width: '1px',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          margin: 'auto',
          height: '1px',
          zIndex: '-1',
          background: '#eee',
          borderRadius: '100%',
        },
        '100%': {
          background: '#aaa',
          height: '5000%',
          width: '5000%',
          zIndex: -1,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: 'auto',
          borderRadius: 0,
        },
    },

    ':hover': {
        color: '#000',
    },
});
