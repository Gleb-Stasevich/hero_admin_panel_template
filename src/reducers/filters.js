const initialState = {
    activeFilter: 'Все',
    filters: []
}

const filters = (state = initialState, action, active) => {
    switch (action.type) {
        case 'SET_ACTIVE_FILTER':
            return {
                ...state,
                activeFilter: action.payload
            }
        case 'FILTERS_ADD':
            return {
                ...state,
                filters: action.payload
            }
        case 'HEROES_FILTER':
            return {
                ...state,
                filteredHeroes: state.heroes.filter(hero => hero.element === action.payload),
            }
        default: return state
    }
}

export default filters;
