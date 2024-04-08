import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
// import { Toaster } from 'react-hot-toast';
// import dynamic from 'next/dynamic';

import { SessionWrapper } from '@/components/SessionWrapper';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Laptops for everyone',
    description: 'Buy laptops for yourself',
};

export default function RootLayout({ children }) {
    return (
        <SessionWrapper>
            <html lang="en">
                <body className={inter.className}>
                    <AppRouterCacheProvider>
                        {children}
                    </AppRouterCacheProvider>
                </body>
            </html>
        </SessionWrapper>
    );
}
