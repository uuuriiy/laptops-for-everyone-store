import * as zod from 'zod';

import { signIn } from 'next-auth/react';

import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';

import discord from '@/public/discord.png';
import facebook from '@/public/facebook.png';
import google from '@/public/google.png';

import { isUsersEmailVerified } from '@/lib/query';

const PASSWORD = 'password';
const CONFIRM_PASSWORD = 'confirmPassword';

export const PATH = {
    signIn: '/signIn',
    signUp: '/signUp',
    verifyEmailSend: '/verify-email/send',
    verifyEmail: '/verify-email',
    home: '/'
}

export const SIGN_IN = {
    path: PATH.signIn,
    title: 'Sign in',
    subTitle: `Already have an account?`
};
export const SIGN_UP = {
    path: PATH.signUp,
    title: 'Sign up',
    subTitle: `Don't have an account?`,
};

export const RESEND_VERIFICATION_EMAIL = {
    path: PATH.verifyEmailSend,
    title: 'Resend a verification link',
    subTitle: 'A verification link has been sent to your email.',
}

const form_fields = {
    username : {
        id: "username",
        label: "User Name",
        name: "username",
        autoFocus: true,
        inputlabelprops: {style: { fontSize: '16px' }}
    },
    email : {
        id: "email",
        label: "Email Address",
        name: "email",
        autoComplete: "email",
        autoFocus: true,
        inputlabelprops: {style: { fontSize: '16px' }}
    },
    password: {
        id: "password",
        label: "Password",
        name: "password",
        autoComplete: "current-password",
        inputlabelprops: {style: { fontSize: '16px' }}
    },
    confirmPassword: {
        id: "confirmPassword",
        label: "Confirm Password",
        name: "confirmPassword",
        autoComplete: "current-password",
        inputlabelprops: {style: { fontSize: '16px' }}
    }
}

export const FORM = {
    [SIGN_IN.path]: {
        fields: [form_fields.email, form_fields.password],
        title: SIGN_IN.title
    },
    [SIGN_UP.path]: {
        fields: [form_fields.username, form_fields.email, form_fields.password, form_fields.confirmPassword],
        title: SIGN_UP.title,
    },
    [RESEND_VERIFICATION_EMAIL.path]: {
        title: RESEND_VERIFICATION_EMAIL.title,
    }
}

export const showPasswordInput = (id) => 
    id === PASSWORD || id === CONFIRM_PASSWORD;

export const signUpShema = zod.object({
    username: zod.string().min(1, 'Username is required').max(100),
    email: zod.string().min(1, 'Email is required').email('Invalid email'),
    password: zod.string()
        .min(1, 'Password is required')
        .min(8, 'Password must have 8 characters'),
    confirmPassword: zod.string().min(1, 'Password confirmation is required')
})
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        path: ['confirmPassword'],
        message: 'Password do not match'
    });

export const signInShema = zod.object({
    email: zod.string().min(1, 'Email is required').email('Invalid email'),
    password: zod.string()
        .min(1, 'Password is required')
        .min(8, 'Password must have 8 characters'),
});

export const authIconsArray = [
    {
        src: discord,
        alt: 'Discord Icon',
        authentificationMethod: 'discord'
    },
    {
        src: facebook,
        alt: 'Facebook Icon',
        authentificationMethod: 'facebook'
    },
    {
        src: google,
        alt: 'Google Icon',
        authentificationMethod: 'google'
    },
];

export const emailVerifyIcons = (iconsSize) => ({
    [PATH.verifyEmailSend]: {
        icon: <MarkEmailUnreadOutlinedIcon sx={{ fontSize: iconsSize }} color="secondary" />
    },
    [PATH.verifyEmail]: {
        icon: <MarkEmailReadOutlinedIcon sx={{ fontSize: iconsSize }} color="secondary" />
    },
});

export const emailIconsStylesProps = {
    mediaQuery: '(max-width: 767px)',
    small: '100px',
    large: '200px'
};

export const formButtonStyles = {
    background: 'black',
    backgroundImage: 'linear-gradient(#02294F, #090E10)',
    backgroundSize: '100% 20%',
    backgroundRepeat: 'no-repeat',
    padding: '15px 20px',
    color: 'white',
    fontSize: '18px',
    marginBottom: '8px',
    border: '1px solid black',
    borderRadius: '5px',

    ':hover': {
        background: 'white',
        color: 'black',
        opacity: 0.75,
        transition: 'all .7s ease-in-out',
    },

    '@media (max-width: 767px)': {
        fontSize: '14px',

        ':hover': {
            background: 'black',
            color: 'white',
            opacity: 1,
            transition: 'none',
        },
    },
};

export const signInAction = async (_, formData) => {
    const { success, data, error } = signInShema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!success) {
        return {
            errors: error.flatten().fieldErrors,
        };
    }

    try {
        await isUsersEmailVerified(data.email);

        await signIn('credentials', {
            email: data.email,
            password: data.password,
            callbackUrl: '/',
        });
    } catch (error) {
        if (error) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return {
                        errors: 'Invalid credentials.',
                    };
                default:
                    return {
                        errors: 'Something went wrong.',
                    };
            }
        }

        throw error;
    }
};
