import Link from 'next/link';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { navLinks } from '@/utils/header';

const StyledListItem = styled(ListItem)({
    display: 'block',
});

const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: 'gray',
});

export const NavSideList = ({ toggleDrawer }) => (
    <Box
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
    >
        <List>
            {navLinks.map(({ title, href, icon }) => (
                <StyledListItem key={title} disablePadding>
                    <StyledLink href={href}>
                        <ListItemButton>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={title} />
                        </ListItemButton>
                    </StyledLink>
                </StyledListItem>
            ))}
        </List>
    </Box>
);
