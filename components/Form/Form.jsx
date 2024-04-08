'use client';

import useAuthForms from '@/hooks/useAuthForm';

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import { FormTitle } from './FormTitle';
import { PasswordInput } from './PasswordInput';
import { AuthenticationButtons } from './AuthenticationButtons';
import { Divider } from './Divider';
import { ResendVerificationSubTitle } from './ResendVerificationSubTitle';
import { FormLink } from './FormLink';
import { SubmitButton } from './SubmitButton';
import { SnackBar } from '../Snackbar';

import { RESEND_VERIFICATION_EMAIL, showPasswordInput } from '@/utils/form';
import { breakpoints } from '@/utils/index';

const StyledForm = styled('form')({
    width: '100%',
    padding: '30px 40px 50px',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    borderRadius: '10px',

    [breakpoints.mobile]: {
        gap: '20px',
        padding: '20px 30px 40px',
    },
});

export const inputMediaQueryStyles = {
    [breakpoints.mobile]: {
        '& .mui-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
            fontSize: '14px',
        },

        '& .mui-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            padding: '14px 14px',
        },
    },
};

export const Form = () => {
    const {
        fields,
        title,
        verificationSent,
        formState,
        action,
        showAuthButtons,
        showFormLink,
        formLinkProps,
        snackbarText,
    } = useAuthForms();

    return (
        <>
            <StyledForm action={action}>
                <FormTitle>{title}</FormTitle>
                {verificationSent && (
                    <ResendVerificationSubTitle>
                        {RESEND_VERIFICATION_EMAIL.subTitle}
                    </ResendVerificationSubTitle>
                )}
                {showAuthButtons && (
                    <>
                        <AuthenticationButtons />
                        <Divider />
                    </>
                )}
                {fields?.map((fieldProps) => {
                    const error = formState?.errors[fieldProps.id];

                    return showPasswordInput(fieldProps.id) ? (
                        <PasswordInput
                            key={fieldProps.id}
                            error={error && error[0]}
                            fieldProps={fieldProps}
                        />
                    ) : (
                        <TextField
                            key={fieldProps.id}
                            error={!!error}
                            helperText={error && error[0]}
                            {...fieldProps}
                            sx={inputMediaQueryStyles}
                        />
                    );
                })}
                <SubmitButton />
                {showFormLink && <FormLink formLinkProps={formLinkProps} />}
            </StyledForm>
            {/* <SnackBar open={pending} text={snackbarText} /> */}
        </>
    );
};
