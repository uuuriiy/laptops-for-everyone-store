import { Fragment } from 'react';
import { styled } from '@mui/material/styles';

import Divider from '@mui/material/Divider';
import { Icon } from '@/components/Icon';

import { searchbarProps, headerIconsColor } from '@/utils/header';
import { breakpoints } from '@/utils/index';

const StyledContent = styled('form')({
    padding: '2px 4px',
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
    background: '#333',
    borderRadius: '20px',
    flexGrow: 1,

    [breakpoints.tablet]: {
        flex: 0.8,
        padding: '10px',
    },

    [breakpoints.mobile]: {
        flex: 0.8,
        padding: '5px',
    },
});

const StyledInput = styled('input')({
    color: 'white',
    background: '#333',
    flex: 1,
    padding: '0 15px',
    border: 'none',

    '::placeholder': {
        color: 'white',
    },

    [breakpoints.tablet]: {
        padding: '10px',
    },

    [breakpoints.mobile]: {
        padding: '5px',

        '::placeholder': {
            fontSize: '14px',
        },
    },
});

export const SearchbarComponent = () => (
    <StyledContent>
        <StyledInput
            placeholder={searchbarProps.inputPlaceholder}
            inputProps={searchbarProps.inputProps}
        />

        {searchbarProps.searchbarIcons.map(
            ({ SearchBarIcon, sizes, ...iconProps }) => (
                <Fragment key={iconProps.ariaLabel}>
                    <Icon
                        iconContainerStyles={iconProps}
                        Icon={<SearchBarIcon.type />}
                        iconCustomSizes={sizes}
                        iconColor={headerIconsColor.blue}
                    />
                    {iconProps.type && <Divider {...searchbarProps.divider} />}
                </Fragment>
            ),
        )}
    </StyledContent>
);
