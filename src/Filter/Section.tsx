// UI components
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Chip,
    Container,
    Divider,
    Typography,
} from '@mui/material';
import { styled } from '@mui/system';

// store
import { addFilter, removeFilter, setPage } from '../Store/Slice/dataSlice';
import { useAppDispatch, useAppSelector } from '../Store/store';

interface IProps {
    children: string;
    section: string;
}

interface IDispatch {
    section: string;
    value: string;
}

export default function Section({ children, section }: IProps) {
    // hooks
    const { [section]: filters } = useAppSelector(
        (state) => state.data.filters
    );
    const { [section]: selectedFilters } = useAppSelector(
        (state) => state.data.selectedFilters
    );

    const dispatch = useAppDispatch();

    // dispatch
    const handleAddFilter = ({ section, value }: IDispatch) => {
        dispatch(setPage(1));
        dispatch(addFilter({ section, value }));
    };

    const handleRemoveFilter = ({ section, value }: IDispatch) => {
        dispatch(setPage(1));
        dispatch(removeFilter({ section, value }));
    };

    return (
        <Accordion elevation={3}>
            <AccordionSummary>{children}</AccordionSummary>

            <AccordionDetails>
                <BoxSX>
                    <ContainerSX>
                        {filters.map((filter: any) => (
                            <Chip
                                key={filter}
                                label={filter}
                                variant="outlined"
                                onClick={() =>
                                    handleAddFilter({
                                        section: section,
                                        value: filter,
                                    })
                                }
                            />
                        ))}

                        {filters.length === 0 && (
                            <Typography fontSize={'14px'} sx={{ opacity: 0.5 }}>
                                You used all
                            </Typography>
                        )}
                    </ContainerSX>

                    <Divider sx={{ width: '100%' }} />

                    <ContainerSX>
                        {selectedFilters.map((filter: any) => (
                            <Chip
                                key={filter}
                                label={filter}
                                variant="filled"
                                onDelete={() =>
                                    handleRemoveFilter({
                                        section: section,
                                        value: filter,
                                    })
                                }
                            />
                        ))}

                        {selectedFilters.length === 0 && (
                            <Typography fontSize={'14px'} sx={{ opacity: 0.5 }}>
                                No one is selected
                            </Typography>
                        )}
                    </ContainerSX>
                </BoxSX>
            </AccordionDetails>
        </Accordion>
    );
}

export const BoxSX = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    width: '50vw',
});

export const ContainerSX = styled(Container)({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
});
