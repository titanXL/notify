export default function (state = null, action) {
    switch(action.type){
        case 'SHOW_NOTIFICATIONS':
        return {
            ...state,
            show: !state.show
        }
        case 'HIDE_NOTIFICATIONS':
        return {
            ...state,
            show: false
        }
        default: return state
    }
}