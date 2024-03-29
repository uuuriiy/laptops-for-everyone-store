import { useFormStatus } from 'react-dom';

import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

import { Button } from '../Button';

const StyledLoadingButton = styled(LoadingButton)({
    padding: '25px 20px',
    background: '#D3D3D3',
});

export const SubmitButton = () => {
    const { pending } = useFormStatus();

    return pending ? (
        <StyledLoadingButton
            loading
            loadingIndicator={<CircularProgress color="inherit" size={24} />}
            variant="outlined"
        />
    ) : (
        <Button type="submit">Continue</Button>
    );
};
