import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
    if (isLoggedIn === "" || isLoggedIn === undefined || isLoggedIn === null) {
        return <Navigate to="/" replace />;
    }
    return children;
};
export default Protected;