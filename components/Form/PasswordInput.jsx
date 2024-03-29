import { useState } from 'react';

import { styled } from '@mui/material/styles';

import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';

import { inputMediaQueryStyles } from './Form';

const StyledErrorText = styled('p')({
    color: '#d32f2f',
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
    textAlign: 'left',
    margin: '3px 14px 0',
});

export const PasswordInput = ({ error, errorText, fieldProps }) => {
    const [showPassword, setShowPassword] = useState(false);
    const type = showPassword ? 'text' : 'password';

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <FormControl sx={inputMediaQueryStyles}>
            <InputLabel>{fieldProps.label}</InputLabel>
            <OutlinedInput
                {...fieldProps}
                error={error}
                type={type}
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
            {error && <StyledErrorText>{errorText}</StyledErrorText>}
        </FormControl>
    );
};
