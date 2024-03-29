import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/material/styles';

import { navLinks, getNavLinkStyles } from '@/utils/header';
import { breakpoints } from '@/utils/index';

const StyledContainer = styled('nav')({
    flexGrow: 1,

    [breakpoints.tablet]: {
        display: 'none',
    },
});

const StyledList = styled('ul')({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '15px',
});

const StyledListItem = styled('li')({
    display: 'flex',
    alignItems: 'center',
    fontSize: 'calc(12px + 4 * ((100vw - 1080px) / (3000 - 1080)))',
    lineHeight: '22px',
});

const StyledLink = styled(Link)(({ isactivelink }) =>
    getNavLinkStyles(isactivelink),
);

export const Navbar = () => {
    const path = usePathname();
    return (
        <StyledContainer>
            <StyledList>
                {navLinks.map(({ title, href }) => (
                    <StyledListItem key={title}>
                        <StyledLink
                            href={href}
                            isactivelink={href === path ? 1 : 0}
                        >
                            {title}
                        </StyledLink>
                    </StyledListItem>
                ))}
            </StyledList>
        </StyledContainer>
    );
};
