'use server';

import * as handlebars from 'handlebars';
import { randomBytes } from 'crypto';
import nodemailer from 'nodemailer';

import { emailVerificationTemplate } from '@/utils/emailVerificationTemplate';
import { BASE_URL } from '@/utils/index';

const compileEmailVerificationTemplate = (url) => {
    const template = handlebars.compile(emailVerificationTemplate);
    const htmlBody = template({ url });

    return htmlBody;
};

export const sendVerificationEmail = async (email, token) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const emailData = {
        from: '"Laptops for everyone" <LapropsForEveryone@gmail.com>',
        to: email,
        subject: 'Email Verification',
        html: compileEmailVerificationTemplate(
            `${BASE_URL}/verify-email?email=${email}&token=${token}`,
        ),
    };

    try {
        await transporter.sendMail(emailData);
    } catch (error) {
        console.error('Failed to send email:', error);
    }
};

export const generateEmailVerificationToken = () =>
    randomBytes(32).toString('hex');
