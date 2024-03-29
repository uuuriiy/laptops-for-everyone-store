import { Suspense } from 'react';

import { Form } from '@/components/Form/Form';
import { VerifyIcon } from '@/components/Verify/VerifyIcon';

export default function Send() {
    return (
        <Suspense>
            <VerifyIcon />
            <Form />
        </Suspense>
    );
}
