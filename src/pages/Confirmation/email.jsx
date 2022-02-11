import react, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "components/Loading";
import { UserServices } from "services/api/user";
import { toast } from "react-toastify";

const EmailConfirm = () => {
   const navigate = useNavigate();
   const { email, uuid } = useParams();
   useEffect(() => {
      if (!email || !uuid) {
         return toast.error("Link de confirmação invalido!");
         navigate("/", { replace: true });
      }
      const userService = new UserServices();
      userService
         .emailConfirm(email, uuid)
         .then((res) => {
            toast.success("Email confirmado com sucesso!");
            navigate("/", { replace: true });
         })
         .catch((error) => {
            console.log(error.response);
            if (error.response != undefined) return toast.error(error.response.data.error);
            toast.error("Não foi possível confirmar o seu email!");
            navigate("/", { replace: true });
         });
   }, []);
   return <Loading />;
};

export default EmailConfirm;
