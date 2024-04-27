import { IFilters } from '../Store/Slice/dataSlice';

export const getFilters = (data: any, filters: IFilters): any => {
    // copy of data
    let arr: any = [...data];

    // conditions
    if (filters.main.includes('Rate')) {
        arr = rate(arr);
    }

    for (let i = 0; i < filters.platform.length; i++) {
        arr = platform(arr, filters.platform[i]);
    }

    for (let i = 0; i < filters.players.length; i++) {
        arr = players(arr, filters.players[i]);
    }

    for (let i = 0; i < filters.lang.length; i++) {
        arr = lang(arr, filters.lang[i]);
    }

    // return new data
    return arr;
};

// functions

// sort by rating
function rate(arr: any) {
    return arr.sort((a: any, b: any) => b.rating - a.rating);
}

// sort by platforms
function platform(arr: any, platform: string) {
    return arr.filter((item: any) => {
        if (
            item.platforms.find((plat: any) => plat.platform.name === platform)
        ) {
            return item;
        } else {
            return;
        }
    });
}

// sort by players
function players(arr: any, players: string) {
    return arr.filter((item: any) => {
        if (item.tags.find((tag: any) => tag.name === players)) {
            return item;
        } else {
            return;
        }
    });
}

// sort by languages
function lang(arr: any, language: string) {
    return arr.filter((item: any) => {
        if (item.language.find((lang: any) => lang === language)) {
            return item;
        } else {
            return;
        }
    });
}
