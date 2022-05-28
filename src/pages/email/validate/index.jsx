import react, { useEffect,useContext } from "react";
import Loading from "components/loading";
import { AppContext } from "context";
import { useParams } from "react-router-dom";

const EmailConfirm = () => {
    const { emailConfirm } = useContext(AppContext);
    const { email, uuid } = useParams();
    useEffect(() => {
        emailConfirm({ email, uuid });
    }, []);
    return <Loading />;
};

export default EmailConfirm;