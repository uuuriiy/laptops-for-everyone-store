import { useState } from 'react';

import { styled } from '@mui/material/styles';

import Drawer from '@mui/material/Drawer';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Icon } from '@/components/Icon';
import { SearchbarComponent } from './SearchbarComponent';

import { searchbarProps, headerIconsColor } from '@/utils/header';
import { breakpoints } from '@/utils/index';

const StyledContainer = styled('div')({
    display: 'none',
    [breakpoints.tablet]: {
        display: 'block',
    },
});

const StyledDrawerContainer = styled('div')({
    width: '100%',
    backgroundColor: 'black',
    marginInline: 'auto',
    padding: '40px 0',
});

const StyledDrawerContent = styled('div')({
    width: '90%',
    marginInline: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const StyledButtonContainer = styled('div')({
    flex: 0.2,
    display: 'flex',
    justifyContent: 'center',
});

export const SearchBarMobile = () => {
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
        <StyledContainer>
            <Icon
                iconContainerStyles={
                    searchbarProps.searchbarMobileOpenIcon.styles
                }
                iconColor={headerIconsColor.white}
                iconCustomSizes={searchbarProps.searchbarMobileOpenIcon.sizes}
                Icon={<SearchIcon />}
                onClick={toggleDrawer(true)}
            />
            <Drawer anchor="top" open={isOpen} onClose={toggleDrawer(false)}>
                <StyledDrawerContainer>
                    <StyledDrawerContent>
                        <StyledButtonContainer>
                            <Icon
                                iconColor={headerIconsColor.white}
                                Icon={<CloseIcon />}
                                onClick={toggleDrawer(false)}
                            />
                        </StyledButtonContainer>
                        <SearchbarComponent />
                    </StyledDrawerContent>
                </StyledDrawerContainer>
            </Drawer>
        </StyledContainer>
    );
};
