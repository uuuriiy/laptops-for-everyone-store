import { styled } from '@mui/material/styles';

import { SearchbarComponent } from './SearchbarComponent';
import { breakpoints } from '@/utils/index';

const StyledContainer = styled('div')({
    display: 'block',
    [breakpoints.tablet]: {
        display: 'none',
    },
});

export const SearchBarDesktop = () => (
    <StyledContainer>
        <SearchbarComponent />
    </StyledContainer>
);
