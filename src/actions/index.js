export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const deleteHero = (hero) => {
    return {
        type: 'HERO_DELETE',
        payload: hero
    }
}

export const addHero = (hero) => {
    return {
        type: 'HERO_ADD',
        payload: hero,
    }
}

export const createFilters = (filters) => {
    return {
        type: 'FILTERS_ADD',
        payload: filters
    }
}

export const filterHeroes = (filter) => {
    console.log(filter);
    return {
        type: 'HEROES_FILTER',
        payload: filter
    }
}

export const setActiveFilter = (filter) => {
    return {
        type: 'SET_ACTIVE_FILTER',
        payload: filter
    }
}