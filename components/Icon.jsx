import IconButton from '@mui/material/IconButton';

import { breakpoints } from '@/utils/index';

const iconStyles = ([defaultSize = '40px', mediaSize = '25px']) => ({
    [breakpoints.tablet]: {
        fontSize: defaultSize,
    },
    [breakpoints.mobile]: {
        fontSize: mediaSize,
    },
});

export const Icon = ({
    iconContainerStyles = {},
    iconCustomSizes = [],
    iconColor,
    Icon,
    onClick = () => {},
}) => (
    <IconButton sx={iconContainerStyles} onClick={onClick}>
        <Icon.type sx={{ ...iconStyles(iconCustomSizes), color: iconColor }} />
    </IconButton>
);
