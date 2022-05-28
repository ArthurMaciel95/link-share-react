import * as actions from '../actions';
export const reducer = (state, action) => {
    switch (action.type) {
        case actions.USER_REGISTER:
            return { ...state, loading: true, fields: true };
        case actions.USER_LOGIN:
            return { ...state, loading: true, fields: true, }
        case actions.USER_LOGIN_FAIL:
            return { ...state, loading: false, fields: false, user: null }
        case actions.USER_LOGOUT:
            return { ...state, loading: false, fields: false, user: null }
        case actions.USER_INFO:
            return { ...state, loading: false, user: action.payload.data, links: action.payload.data.body.links };
        case actions.VISITOR_INFO:
            return { ...state, loading: false, fields: false, visitor: action.payload.data, visitorLinks: action.payload.data.body.links };
        case actions.USER_UPDATE:
            return { ...state, loading: true, fields: true };
        case actions.LINK_DELETE: {
            const links = state.links.filter(link => link.id_link !== action.payload);
            return { ...state, links: links, loading: false };
        }
        case actions.HANDLE_MODAL:
            return { ...state, showModal: action.payload };
        case actions.HANDLE_LOADING:
            return { ...state, loading: action.payload };
        case actions.HANDLE_FIELDS:
            return { ...state, fields: action.payload };
        case actions.FILE_EXCEL_INFO:
            return { ...state, loading: false, file: action.payload.data }
        default: return state;
    }
}