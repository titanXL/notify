export default function (state = true, action) {
    switch (action.type) {
        case 'SHOW_ADD_FORM':
            return {
                ...state,
                show: !state.show
            }
            case 'HIDE_ADD_FORM':
            return {
                ...state,
                show: false
            }
        default: return state
    }
}