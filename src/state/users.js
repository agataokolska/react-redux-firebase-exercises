import { database } from '../firebaseConfig'

const SET_USERS = 'users/SET_USERS'

const userAction = (data) => ({ type: SET_USERS, data })

const initialState = {
    users: null,

}

export const initUserSyncAction = () => (dispatch, getState) => {
    database.ref('/jfddl5-users')
        .on(
            'value',
            snapshot => {
                dispatch(userAction(snapshot.val()))
            }
        )
}
export const stopUserSyncAction = () => (dispatch, getState)=> {
    database.ref('/jfddl5-users').off()
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.data
            }
        default:
            return state
    }
}