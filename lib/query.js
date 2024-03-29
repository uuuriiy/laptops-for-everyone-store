'use server';

import { prisma } from '@/lib/prisma';

export const checkUserExistance = async (email, username) =>
    await prisma.user.findUnique({
        where: { email, username },
    });

export const createUser = async (data) => await prisma.user.create({ data });

export const verifyEmail = (email) =>
    prisma.user.update({
        where: { email },
        data: {
            emailVerifiedAt: new Date(),
            emailVerifToken: null,
        },
    });

export const emailVerificationTokenUpdate = async (email, emailVerifToken) =>
    await prisma.user.update({
        where: { email },
        data: { emailVerifToken },
    });

export const findUserByEmail = async (email) =>
    await prisma.user.findFirst({
        where: {
            email,
        },
    });

export const getUser = async (email) => {
    try {
        return await findUserByEmail(email);
    } catch (error) {
        console.error('Failed to fetch user:', error);

        throw new Error('Failed to fetch user.');
    }
};

export const isUsersEmailVerified = async (email) => {
    const user = await prisma.user.findFirst({
        where: { email },
    });

    if (!user) return true;

    if (!user?.emailVerifiedAt)
        throw new EmailNotVerifiedError(`EMAIL_NOT_VERIFIED:${email}`);

    return true;
};
