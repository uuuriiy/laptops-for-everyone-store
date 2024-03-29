'use server';

import { redirect } from 'next/navigation';
import axios from 'axios';

import { signUpShema } from '@/utils/form';
import {
    generateEmailVerificationToken,
    sendVerificationEmail,
} from '@/lib/mail';
import { emailVerificationTokenUpdate } from '@/lib/query';
import { BASE_URL } from '@/utils/index';

export const signUpAction = async (_, formData) => {
    const { data, success, error } = signUpShema.safeParse({
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
    });

    if (!success) {
        return {
            errors: error.flatten().fieldErrors,
        };
    }

    try {
        await axios.post(`${BASE_URL}/api/user`, data);
    } catch (error) {
        console.error(error);
    }

    redirect(`/verify-email/send?email=${data.email}&verification_sent=1`);
};

export const resendVerificationEmailAction = async (email) => {
    const emailVerificationToken = generateEmailVerificationToken();

    try {
        await emailVerificationTokenUpdate(email, emailVerificationToken);

        await sendVerificationEmail(email, emailVerificationToken);
    } catch (error) {
        return {
            errors: 'Something went wrong.',
        };
    }
};
