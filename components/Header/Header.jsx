'use client';

import { styled } from '@mui/material/styles';

import { Navbar } from './Navbar';
import { Searchbar } from './SearchBar';
import { LogOutButton } from './LogOutButton';
import { Logo } from './Logo';
import { BurgerMenu } from './BurgerMenu';

import { breakpoints } from '@/utils/index';

const StyledContainer = styled('header')({
    position: 'relative',
    zIndex: 1,
    background: 'black',
});

const StyledContent = styled('div')({
    position: 'sticky',
    margin: '0 auto',
    maxWidth: '1440px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '20px 0',
    gap: '40px',

    [breakpoints.tablet]: {
        display: 'grid',
        gridTemplateColumns: '1fr 4fr .5fr .5fr',
        gap: '10px',
        justifyItems: 'center',
    },
});

export const Header = () => (
    <StyledContainer>
        <StyledContent>
            <BurgerMenu />
            <Logo />
            <Navbar />
            <Searchbar />
            <LogOutButton />
        </StyledContent>
    </StyledContainer>
);
