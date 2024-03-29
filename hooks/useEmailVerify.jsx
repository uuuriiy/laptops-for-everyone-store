'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { findUserByEmail, verifyEmail } from '@/lib/query';

const useEmailVerify = () => {
    const searchParams = useSearchParams();

    const email = searchParams.get('email');
    const token = searchParams.get('token');

    const [isLoading, setIsLoading] = useState(true);
    const [result, setResult] = useState('Error verifying your email');

    useEffect(() => {
        const emailVerification = async () => {
            try {
                if (!email || !token) {
                    throw new Error('Missing required fields');
                }
        
                const { email: userEmail, emailVerifToken } = await findUserByEmail(email);
        
                if (!userEmail) {
                    throw new Error('Invalid verification token');
                }
        
                if (token !== emailVerifToken) {
                    throw new Error('Invalid verification token');
                }
        
                await verifyEmail(userEmail);
        
                setResult('Email verified successfully. Please relogin.');
                setIsLoading(false);
            } catch (error) {
                console.error('Error verifying email:', error);
            }
        }

        emailVerification();
    }, [email, token]);

    return {
        isLoading,
        result
    }
};

export default useEmailVerify;