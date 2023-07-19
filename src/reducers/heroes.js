const initialState = {
    heroes: [],
    filteredHeroes: [],
    heroesLoadingStatus: 'idle',
}

const heroes = (state = initialState, action, active) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                heroes: action.payload,
                filteredHeroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HERO_DELETE':
            return {
                ...state,
                heroes: state.heroes.filter(hero => hero.id !== action.payload),
                filteredHeroes: state.filteredHeroes.filter(hero => hero.id !== action.payload)
            }
        case 'HERO_ADD':
            return {
                ...state,
                heroes: state.heroes.concat(action.payload),
                filteredHeroes: (action.payload.element === state.activeFilter) ? state.filteredHeroes.concat(action.payload) : state.heroes.filter(hero => hero.element === state.activeFilter)
            }
        default: return state
    }
}

export default heroes;