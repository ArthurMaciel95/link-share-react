import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { reducer } from "./reducer";
import { toast } from "react-toastify";
import { sha256 } from "utils/encrypt";
import { setNewToken, logOut } from "utils/jwt";
import { Validation } from "utils/validation";
import { UserServices } from "services/api/user";
import { LinksServices } from "services/api/link";
import * as actions from "./actions";

const AppContext = createContext();
const globalState = {
   showModal: false,
   fields: false,
   loading: false,
   user: null,
   visitor: null,
   links: [],
   visitorLinks: [],
}

export const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, globalState);
   const navigate = useNavigate();

   const login = async (form) => {
      dispatch({ type: actions.USER_LOGIN });
      try {
         if (Validation.isEmpty(form)) return toast.warning("Os campos não podem estar vazios");
         if (!Validation.isEmail(form.email)) return toast.warning("Este email não é valido");
         const response = await UserServices.login({
            email: form.email,
            password: await sha256(form.password)
         });
         if (response.data.body.token) {
            setNewToken(response.data.body.token);
            navigate("/home");
         }
      } catch (error) {
         dispatch({ type: actions.USER_LOGIN_FAIL });
         if (error.response !== undefined)
            toast.error(error.response.data.message);
      }
   }
   const logout = () => {
      dispatch({ type: actions.USER_LOGOUT });
      logOut();
   }
   const emailConfirm = async (form) => {
      try {
         if (!form.email || !form.uuid) {
            return toast.error("Link de confirmação invalido!");
            navigate("/", { replace: true });
         }
         const response = await UserServices.emailConfirm(form);
         toast.success("Email confirmado com sucesso!");
         navigate("/", { replace: true });
      } catch (error) {
         if (error.response !== undefined)
            toast.error(error.response.data.message);
         navigate("/", { replace: true });
      }
   }
   const passwordForgot = async (form) => {
      dispatch({ type: actions.HANDLE_FIELDS, payload: true });
      try {
         if (Validation.isEmpty(form)) return toast.warning("Os campos não podem estar vazios");
         if (!Validation.isEmail(form.email)) return toast.warning("Este email não é valido");
         await UserServices.passwordForgot(form.email, 1, null);
         toast.success("Email send with success!");
         navigate("/")
      } catch (error) {
         dispatch({ type: actions.HANDLE_FIELDS, payload: false });
         if (error.response !== undefined)
            toast.error(error.response.data.message);
      }
   }
   const passwordReset = async (form) => {
      dispatch({ type: actions.HANDLE_FIELDS, payload: true });
      try {
         if (Validation.isEmpty(form)) return toast.warning("Os campos não podem estar vazios");
         if (form.password !== form.repeatPassword) return toast.warn('the password field and repeat password must be the same');
         if (!Validation.isPassword(form.password) || !Validation.isPassword(form.repeatPassword))
            return toast.warn("The password must be at least 8 characters long and have an uppercase and lowercase letter between A-Z and a number between 0-9.!");
         await UserServices.passwordForgot(null, 2, {
            passwor: await sha256(form.password),
            jwt: form.jwt,
            token: form.token
         });
         toast.success('password change with success!')
         navigate('/', { replace: true })
      } catch (error) {
         dispatch({ type: actions.HANDLE_FIELDS, payload: false });
         if (error.response !== undefined)
            toast.error(error.response.data.message);
         navigate("/", { replace: true });
      }
   }
   const getUser = async (force = false) => {
      dispatch({ type: actions.HANDLE_LOADING, payload: true });
      try {
         if (globalState.user != null && !force) return;
         const response = await UserServices.refresh();
         dispatch({ type: actions.USER_INFO, payload: { ...response } });
      } catch (error) {
         logOut();
         if (error.response !== undefined)
            toast.error(error.response.data.message);
      }
   }
   const getVisitor = async (nickname, force = false) => {
      dispatch({ type: actions.HANDLE_LOADING, payload: true });
      try {
         if (globalState.visitor != null && !force) return;
         const response = await UserServices.visitor(nickname);
         dispatch({ type: actions.VISITOR_INFO, payload: { ...response } });
      } catch (error) {
         navigate("/error", { replace: true })
         if (error.response !== undefined)
            toast.error(error.response.data.message);
      }
   }

   const addLink = async (form) => {
      dispatch({ type: actions.HANDLE_LOADING, payload: true });
      try {
         if (Validation.isEmpty(form)) return toast.warning("Os campos não podem estar vazios");
         if (!Validation.isUrl(form.url)) return toast.warning("Este link não é valido");
         const response = await LinksServices.create(form);
         toast.success("Link adicionado com sucesso!");
         getUser(true);
      } catch (error) {
         dispatch({ type: actions.HANDLE_LOADING, payload: false });
         if (error.response !== undefined)
            toast.error(error.response.data.message);
      }
   }
   const removeLink = async (id) => {
      dispatch({ type: actions.HANDLE_LOADING, payload: true });
      try {
         const response = await LinksServices.delete(id);
         toast.success("Link removido com sucesso!");
         getUser(true);
      } catch (error) {
         dispatch({ type: actions.HANDLE_LOADING, payload: false });
         if (error.response !== undefined)
            toast.error(error.response.data.message);
      }
   }
   const toggleModal = (status) => dispatch({ type: actions.HANDLE_MODAL, payload: status });
   const toggleLoading = (status) => dispatch({ type: actions.HANDLE_LOADING, payload: status });
   const toggleFields = (status) => dispatch({ type: actions.HANDLE_FIELDS, payload: status });

   return <AppContext.Provider
      value={{
         ...state,
         login,
         logOut,
         getUser,
         getVisitor,
         passwordForgot,
         passwordReset,
         toggleModal,
         toggleLoading,
         toggleFields,
         emailConfirm,
         addLink,
         removeLink
      }}>{children}
   </AppContext.Provider>;
}

export const useAppContext = () => {
   return useContext(AppContext);
}