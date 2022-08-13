const initialState = {
    isAuth: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH': {
            return {...state, isAuth: action.isAuth}
        }
        default: {
            return state
        }
    }
}

export const userIsAuth = {
    type: 'SET_AUTH',
    isAuth: true
}

export const userIsNotAuth = {
    type: 'SET_AUTH',
    isAuth: false
}