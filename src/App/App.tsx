// UI components
import { Container, Pagination, styled } from '@mui/material';

// components
import Filters from './Filter/Filters';
import List from './List/List';

// store
import { useGetGamesQuery } from '../Store/Api/data';
import { setPage } from '../Store/Slice/dataSlice';
import { useAppDispatch, useAppSelector } from '../Store/store';

export default function App() {
    // hooks
    const { page, maxPage } = useAppSelector((state) => state.data);

    const dispatch = useAppDispatch();

    const {
        data: data = [],
        isSuccess,
        isFetching,
        isError,
    } = useGetGamesQuery('');

    // dispatch
    const handleSetPage = (e: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value));
    };

    if (isError) {
        return <div>Something went wrong</div>;
    }

    return (
        <ContainerSX
            sx={{
                opacity: isFetching ? 0.5 : 1,
            }}
        >
            <Filters />
            {isSuccess && (
                <>
                    <List data={data} />

                    <Pagination
                        count={maxPage}
                        page={page}
                        onChange={handleSetPage}
                        shape="rounded"
                        size="small"
                        sx={{
                            justifySelf: 'center',
                        }}
                    />
                </>
            )}
        </ContainerSX>
    );
}

const ContainerSX = styled(Container)({
    display: 'grid',
    gridTemplateColumns: '0.5fr',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50px',
    transition: '0.1s',
    padding: '25px 0px',
});
