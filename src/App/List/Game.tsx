// UI components
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, Collapse, IconButton, styled } from '@mui/material';

// hooks
import { useState } from 'react';

// components
import Description from './Components/Description';
import Preview from './Components/Preview';

export default function Game({ item }: any) {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <>
            <CardSX elevation={6}>
                <Preview
                    item={item}
                    setExpanded={() => setExpanded(!expanded)}
                />

                <IconButton onClick={() => setExpanded(!expanded)}>
                    <ExpandMoreIconSX
                        sx={{
                            transition: '0.3s',
                            transform: expanded
                                ? 'rotate(0deg)'
                                : 'rotate(180deg)',
                        }}
                    />
                </IconButton>

                <Collapse
                    in={expanded}
                    sx={{ width: '100%', bgcolor: '#ECECEC' }}
                >
                    <Description item={item} />
                </Collapse>
            </CardSX>
        </>
    );
}

const CardSX = styled(Card)({
    width: '100%',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    transition: '0.3s',
});

const ExpandMoreIconSX = styled(ExpandMoreIcon)({
    '&:hover': {
        cursor: 'pointer',
    },
});
