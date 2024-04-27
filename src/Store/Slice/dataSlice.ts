import { createSlice } from '@reduxjs/toolkit';

export interface IFilters {
    [key: string]: string[];
}

const filters = {
    main: ['Rate'],
    platform: [
        'Linux',
        'Nintendo',
        'Nintendo Switch',
        'PC',
        'PS Vita',
        'PlayStation 3',
        'PlayStation 4',
        'PlayStation 5',
        'Xbox',
        'Xbox 360',
        'Xbox One',
        'Xbox Series S/X',
        'iOS',
        'macOS',
    ],
    players: ['Co-op', 'Multiplayer', 'Singleplayer'],
    lang: ['English', 'Russian'],
} as IFilters;

const selectedFilters = {
    main: [],
    platform: [],
    players: [],
    lang: [],
} as IFilters;

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        page: 1 as number,

        maxPage: 10 as number,

        filters: filters,

        selectedFilters: selectedFilters,
    },

    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },

        setMaxPage: (state, action) => {
            state.maxPage = action.payload;
        },

        addFilter: (state, action) => {
            const section = action.payload.section;
            const value = action.payload.value;

            const filter: string | undefined = state.filters[section].find(
                (filter: string) => filter === value
            );

            state.filters[section] = state.filters[section].filter(
                (filter: string) => filter !== value
            );

            // without sort, for UX
            if (filter) {
                state.selectedFilters[section].push(filter);
            }
        },

        removeFilter: (state, action) => {
            const section = action.payload.section;
            const value = action.payload.value;

            const filter: string | undefined = state.selectedFilters[
                section
            ].find((filter: string) => filter === value);

            state.selectedFilters[section] = state.selectedFilters[
                section
            ].filter((filter: string) => filter !== value);

            if (filter) {
                state.filters[section].push(filter);
                state.filters[section].sort((a: string, b: string) => {
                    if (a < b) {
                        return -1;
                    }
                    if (a > b) {
                        return 1;
                    }
                    return 0;
                });
            }
        },

        clearFilters: (state) => {
            state.filters = filters;
            state.selectedFilters = selectedFilters;
        },
    },
});

export const { setPage, setMaxPage, addFilter, removeFilter, clearFilters } =
    dataSlice.actions;

export default dataSlice.reducer;
