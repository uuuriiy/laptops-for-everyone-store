'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';

import { emailVerifyIcons, emailIconsStylesProps } from '@/utils/form';

export const VerifyIcon = () => {
    const path = usePathname();
    const [iconSize, setIconSize] = useState(null);
    const isMobile = useMediaQuery(emailIconsStylesProps.mediaQuery);

    useEffect(() => {
        setIconSize(
            isMobile
                ? emailIconsStylesProps.small
                : emailIconsStylesProps.large,
        );
    }, [isMobile]);

    return iconSize && emailVerifyIcons(iconSize)[path].icon;
};
