'use client';

import { styled } from '@mui/material/styles';

const StyledSection = styled('section')({
    background: 'black',
    backgroundImage: 'linear-gradient(#02294F, #000)',
    backgroundSize: '100% 45%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
});

const StyledSectionContent = styled('div')({
    maxWidth: '30%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '@media (max-width: 1079px)': {
        maxWidth: '50%',
    },

    '@media (max-width: 767px)': {
        maxWidth: '70%',
    },
});

export const AuthLayout = ({ children }) => (
    <StyledSection>
        <StyledSectionContent>{children}</StyledSectionContent>
    </StyledSection>
);
