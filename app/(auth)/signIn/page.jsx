import { Suspense } from 'react';
import { Form } from '@/components/Form/Form';
export const maxDuration = 5;

export default function SignInPage() {
    return (
        <Suspense>
            <Form />
        </Suspense>
    );
}
