import Link from 'next/link';

import { styled } from '@mui/material/styles';

import { breakpoints } from '@/utils/index';

const StyledLinkConteiner = styled('p')({
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'gray',

    a: {
        textDecoration: 'none',
        marginLeft: '5px',
        color: 'blue',
    },

    [breakpoints.mobile]: {
        fontSize: '14px',
    },
});

export const FormLink = ({ formLinkProps: { path, title, subTitle } }) => (
    <StyledLinkConteiner>
        {subTitle}
        <Link href={path}>{title}</Link>
    </StyledLinkConteiner>
);
