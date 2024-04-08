import { useState } from 'react';

import { usePathname } from 'next/navigation';

import { styled } from '@mui/material/styles';

import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';

import CircleIcon from '@mui/icons-material/Circle';

import { inputMediaQueryStyles } from './Form';
import {
    passwordSchema,
    passwordRequirements,
    PASSWORD,
    PATH,
    renderIcons,
} from '@/utils/form';
import { breakpoints } from '@/utils/index';

const StyledRequirementsList = styled('ul')({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px 0px',
    margin: '3px 14px 0',

    [breakpoints.mobile]: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
    },
});

const StyledRequirementsItem = styled('li')(
    ({ specialCharacter, pass, isOnChange }) => ({
        gridColumnStart: specialCharacter ? 1 : 'initial',
        gridColumnEnd: specialCharacter ? 4 : 'initial',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        color: isOnChange ? (pass ? 'green' : '#d32f2f') : 'gray',
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 1.66,
        letterSpacing: '0.03333em',
    }),
);

const StyledIconsContainer = styled('span')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const PasswordInput = ({ error, fieldProps }) => {
    const pathName = usePathname();
    const [showPassword, setShowPassword] = useState(false);
    const [isOnChange, setIsOnChange] = useState(false);
    const [errors, setErrors] = useState(passwordRequirements);
    const type = showPassword ? 'text' : 'password';

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleChangle = (e) => {
        setIsOnChange(true);
        const { error: passwordError } = passwordSchema.safeParse({
            password: e.target.value,
        });
        const passwordErrorFormatted = passwordError?.format().password;

        setErrors(passwordErrorFormatted?._errors[0]);
    };

    const renderErrors = () =>
        typeof errors === 'string' ? (
            <StyledRequirementsItem isOnChange={isOnChange}>
                {errors}
            </StyledRequirementsItem>
        ) : (
            !!errors?.length && (
                <StyledRequirementsList>
                    {errors?.map(({ pass, message, id }) => (
                        <StyledRequirementsItem
                            isOnChange={isOnChange}
                            pass={pass}
                            specialCharacter={
                                id === 'specialCharacter' ||
                                id === 'passwordSize'
                            }
                            key={id}
                        >
                            <StyledIconsContainer>
                                {isOnChange ? (
                                    renderIcons(pass)
                                ) : (
                                    <CircleIcon fontSize="small" />
                                )}
                            </StyledIconsContainer>
                            <span>{message}</span>
                        </StyledRequirementsItem>
                    ))}
                </StyledRequirementsList>
            )
        );

    return (
        <FormControl sx={inputMediaQueryStyles}>
            <InputLabel>{fieldProps.label}</InputLabel>
            <OutlinedInput
                {...fieldProps}
                error={!!error?.length}
                type={type}
                onChange={handleChangle}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
            {pathName === PATH.signUp &&
                fieldProps.id === PASSWORD &&
                renderErrors()}
        </FormControl>
    );
};
