import { Navigate, Route, Routes } from "react-router-dom";
// import Page404 from "../../SharedArea/Page404/Page404";
// import Loadable from "react-loadable";
// import PleaseWait from "../../SharedArea/PleaseWait/PleaseWait";
// import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
// import Logout from "../../AuthArea/Logout/Logout";
import Home from "../../HomeArea/Home/Home";

function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            {/*<Route path="/register" component={Register} exact /> */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/logout" component={Logout} exact /> */}
            {/* <Route path="/admin-home" component={AdminPage} exact/ /> */}
            {/* <Route path="/admin-home/new" component={AddVacation} exact /> */}
            {/* <Route path="/admin-home/update/:uuid" component={UpdateVacation} exact /> */}
            {/* <Route component={Page404} />  */}
        </Routes>
    );
}

export default Routing;