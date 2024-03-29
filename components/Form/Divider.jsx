import { styled } from '@mui/material/styles';

const StyledContainer = styled('div')({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
});

const StyledLine = styled('hr')({
    border: '1px solid #d6d6d6',
    width: '100%',
});

const StyledText = styled('span')({
    color: 'grey',
    fontSize: '14px',
    lineHeight: '22px',
});

export const Divider = () => (
    <StyledContainer>
        <StyledLine />
        <StyledText>or</StyledText>
        <StyledLine />
    </StyledContainer>
);
