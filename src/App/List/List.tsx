// UI components
import { Box, styled } from '@mui/material';

// hooks
import { useEffect } from 'react';

// components
import { getFilters } from '../Filter/getFilters';
import Game from './Game';

// store
import { setMaxPage } from '../../Store/Slice/dataSlice';
import { useAppDispatch, useAppSelector } from '../../Store/store';

export default function List({ data }: any) {
    // hooks
    const { page, selectedFilters } = useAppSelector((state) => state.data);

    const dispatch = useAppDispatch();

    // conts
    const filteredData: any = getFilters(data, selectedFilters);

    const sliceBy = {
        start: (page - 1) * 10,
        end: 10 + (page - 1) * 10,
    } as { start: number; end: number };

    // dispatch
    useEffect(() => {
        dispatch(setMaxPage(Math.ceil(filteredData.length / 10)));
    }, [filteredData]);

    return (
        <BoxSX className="list">
            {filteredData.slice(sliceBy.start, sliceBy.end).map((item: any) => (
                <Game key={item.id} item={item} />
            ))}
        </BoxSX>
    );
}

const BoxSX = styled(Box)({
    width: '100%',
    display: 'grid',
    flexWrap: 'wrap',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '50px',
});
