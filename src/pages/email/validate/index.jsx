import react, { useEffect } from "react";
import Loading from "components/loading";
import { useAppContext } from "context/AppContext";
import { useParams } from "react-router-dom";

const EmailConfirm = () => {
    const { emailConfirm } = useAppContext();
    const { email, uuid } = useParams();
    useEffect(() => {
        emailConfirm({ email, uuid });
    }, []);
    return <Loading />;
};

export default EmailConfirm;