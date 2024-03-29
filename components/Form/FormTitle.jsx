import { styled } from '@mui/material/styles';

import { breakpoints } from '@/utils/index';

const StyledContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
});

const StyledTitle = styled('label')({
    color: 'black',
    fontSize: '20px',
    lineHeight: '26px',

    [breakpoints.mobile]: {
        fontSize: '16px',
        lineHeight: '22px',
    },
});

const StyledSubTitle = styled('span')({
    color: 'grey',
    fontSize: '16px',
    lineHeight: '22px',

    [breakpoints.mobile]: {
        fontSize: '14px',
        lineHeight: '20px',
    },
});

export const FormTitle = ({ children }) => (
    <StyledContainer>
        <StyledTitle>{children}</StyledTitle>
        <StyledSubTitle>to continue to Laptops for everyone</StyledSubTitle>
    </StyledContainer>
);
