import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { authIconsArray } from '@/utils/form';

const StyledContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
});

export const AuthenticationButtons = () => (
    <StyledContainer>
        {authIconsArray.map(({ src, alt, authentificationMethod }) => (
            <Button
                key={alt}
                onClick={() =>
                    signIn(authentificationMethod, { callbackUrl: '/' })
                }
            >
                <Image src={src} alt={alt} width={25} height={25} />
            </Button>
        ))}
    </StyledContainer>
);
