import { signOut } from 'next-auth/react';

import { styled } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';

import { Icon } from '../Icon';
import { headerIconsColor } from '@/utils/header';
import { breakpoints } from '@/utils/index';

const StyledContainer = styled('div')({
    marginRight: '20px',
    flexGrow: 1,

    [breakpoints.tablet]: {
        flexGrow: 'initial',
        marginRight: 0,
    },
});

const iconButtonStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    padding: '10px',

    '&:hover': {
        backgroundColor: 'gray',
    },

    [breakpoints.tablet]: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
};

export const LogOutButton = () => (
    <StyledContainer>
        <Icon
            iconContainerStyles={iconButtonStyles}
            iconColor={headerIconsColor.white}
            Icon={<LogoutIcon />}
            onClick={() => signOut()}
        />
    </StyledContainer>
);
