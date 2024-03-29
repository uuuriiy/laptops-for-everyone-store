import Image from 'next/image';
import Link from 'next/link';

import { styled } from '@mui/material/styles';

import { breakpoints } from '@/utils/index';
import logo from '@/assets/logo.png';

const StyledLogoContainer = styled(Link)({
    width: '15%',
    textDecoration: 'none',
    flexGrow: 1,

    [breakpoints.tablet]: {
        width: '50%',
        height: '100%',
        flexGrow: 'initial',
    },

    [breakpoints.mobile]: {
        width: '60%',
        height: '100%',
        flexGrow: 'initial',
    },
});

const StyledLogo = styled(Image)({
    height: '100%',
    width: '100%',
});

export const Logo = () => (
    <StyledLogoContainer href="/">
        <StyledLogo
            src={logo}
            width={0}
            height={0}
            sizes="100vw"
            priority
            alt="Laptops for everyone logo"
        />
    </StyledLogoContainer>
);
