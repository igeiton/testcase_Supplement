// UI components
import { Box, Rating, Typography } from '@mui/material';
import { styled } from '@mui/system';

// components
import CustomModal from './Modal';

interface IProps {
    item: any;
    setExpanded: () => void;
}

export default function Preview({ item, setExpanded }: IProps) {
    return (
        <>
            <BoxSX
                onClick={setExpanded}
                sx={{
                    backgroundImage: `url(${item.background_image})`,
                }}
            />

            <CustomModal item={item} />

            <Typography>{item.name}</Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignSelf: 'center',
                }}
            >
                <Rating
                    name="read-only"
                    value={item.rating}
                    readOnly
                    precision={0.25}
                    size="small"
                />

                <Typography fontSize={'12px'}>{item.rating}</Typography>
            </Box>
        </>
    );
}

const BoxSX = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    flex: '1 0 auto',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '&:hover': {
        cursor: 'pointer',
    },
});
