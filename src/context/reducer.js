import * as actions from './actions';

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
        case actions.HANDLE_MODAL:
            return { ...state, showModal: action.payload };
        case actions.HANDLE_LOADING:
            return { ...state, loading: action.payload };
        case actions.HANDLE_FIELDS:
            return { ...state, fields: action.payload };
        case actions.FILE_EXCEL_INFO:
            return { ...state, loading: false, file: action.payload.data }
    }
    throw new Error('Action is not defined!');
}