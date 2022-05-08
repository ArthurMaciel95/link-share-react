import * as actions from './actions';

export const reducer = (state, action) => {
   switch (action.type) {
      case actions.USER_LOGIN:
         return { ...state, loading: true, fields: true, }
      case actions.USER_LOGIN_FAIL:
         return { ...state, loading: false, fields: false }
      case actions.USER_LOGOUT:
         return { ...state, loading: false, fields: false, user: null }
      case actions.USER_REFRESH:
         return { ...state, loading: true };
      case actions.USER_REFRESH_SUCCESS:
         return { ...state, loading: false, user: action.payload.data, links: action.payload.data.body.links };
      case actions.VISITOR_REFRESH:
         return { ...state, loading: true };
      case actions.VISITOR_REFRESH_SUCCESS:
         return { ...state, loading: false, visitor: action.payload.data, visitorLinks: action.payload.data.body.links };
      case actions.HANDLE_MODAL:
         return { ...state, showModal: action.payload };
      case actions.HANDLE_LOADING:
         return { ...state, loading: action.payload };
      case actions.HANDLE_FIELDS:
         return { ...state, fields: true };
   }
   throw new Error('Action is not defined!');
}