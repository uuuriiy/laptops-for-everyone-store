import { useState } from 'react';

import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

import { NavSideList } from './NavSideList';
import { Icon } from '../Icon';

import { headerIconsColor } from '@/utils/header';
import { breakpoints } from '@/utils/index';

const StyledDrawerContent = styled('div')({
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
});

const StyledButtonContainer = styled('div')({
    display: 'flex',
    justifyContent: 'flex-start',
});

const burgerMenuStyles = {
    display: 'none',
    [breakpoints.tablet]: {
        display: 'block',
        marginLeft: '15px',
    },
};

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setIsOpen(open);
    };

    return (
        <>
            <Icon
                iconContainerStyles={burgerMenuStyles}
                iconColor={headerIconsColor.white}
                Icon={<MenuIcon />}
                onClick={toggleDrawer(true)}
            />
            <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
                <StyledDrawerContent>
                    <StyledButtonContainer>
                        <Icon
                            iconColor={headerIconsColor.white}
                            Icon={<CloseIcon />}
                            onClick={toggleDrawer(false)}
                        />
                    </StyledButtonContainer>
                    <NavSideList toggleDrawer={toggleDrawer} />
                </StyledDrawerContent>
            </Drawer>
        </>
    );
};
