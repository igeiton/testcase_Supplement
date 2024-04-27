// UI components
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    styled,
} from '@mui/material';

// components
import Section from './Section';

// store
import { clearFilters, setPage } from '../Store/Slice/dataSlice';
import { useAppDispatch } from '../Store/store';

export default function Filters() {
    // hooks
    const dispatch = useAppDispatch();

    // dispatch
    const handleClearFilters = () => {
        dispatch(setPage(1));
        dispatch(clearFilters());
    };

    return (
        <AccordionSX elevation={6}>
            <AccordionSummary>Filters</AccordionSummary>

            <AccordionDetails>
                <Section section={'main'}>Sort by:</Section>
                <Section section={'platform'}>Platform:</Section>
                <Section section={'players'}>Players:</Section>
                <Section section={'lang'}>Languages:</Section>

                <ButtonSX
                    onClick={handleClearFilters}
                    color="error"
                    variant={'contained'}
                >
                    Clear all filters
                </ButtonSX>
            </AccordionDetails>
        </AccordionSX>
    );
}

const AccordionSX = styled(Accordion)({
    borderRadius: '3px',
    maxWidth: '100%',
});

const ButtonSX = styled(Button)({
    marginTop: '20px',
    width: '100%',
    opacity: 0.5,
    transition: 'linear 0.3s',
    '&:hover': {
        opacity: 1,
    },
});
