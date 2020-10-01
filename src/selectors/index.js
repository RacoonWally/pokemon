import {LIMIT} from "../service";

export const getPagesCount = (pages, limit = 50) => {
    const count = pages / limit
    if (pages % limit === 0) {
        return count;
    } else {
        return count + 1;
    }
};


export const pagesArr = (count) => {
    const arr = [];
    for (let i = 1; i <= count; i++){
        arr.push(i);
    }
    return arr;
};

export const calcOffset = (pageNumber) => {
    return (LIMIT * pageNumber) - LIMIT + 1;
};
