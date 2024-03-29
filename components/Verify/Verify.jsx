'use client';

import Link from 'next/link';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

import useEmailVerify from '@/hooks/useEmailVerify';
import { formButtonStyles } from '@/utils/form';

const StyledContainer = styled('section')({
    width: '100%',
    padding: '30px 40px 50px',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    borderRadius: '20px',
});

const StyledTitle = styled('p')({
    display: 'flex',
    justifyContent: 'center',
    color: 'black',
    fontSize: '20px',
    lineHeight: '26px',
    marginBottom: '40px',
});

const StyledLink = styled(Link)({
    ...formButtonStyles,
    textDecoration: 'none',
    color: 'white',
    textAlign: 'center',
});

export const Verify = () => {
    const { isLoading, result } = useEmailVerify();

    return (
        <StyledContainer>
            <StyledTitle>
                {isLoading ? (
                    <CircularProgress color="inherit" size={50} />
                ) : (
                    result
                )}
            </StyledTitle>
            <StyledLink href="/signIn">Back to Login</StyledLink>
        </StyledContainer>
    );
};
