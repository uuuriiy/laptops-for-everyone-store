import { Suspense } from 'react';
import { Verify } from '@/components/Verify/Verify';
import { VerifyIcon } from '@/components/Verify/VerifyIcon';

export default function VerifyEmail() {
    return (
        <Suspense>
            <VerifyIcon />
            <Verify />
        </Suspense>
    );
}
