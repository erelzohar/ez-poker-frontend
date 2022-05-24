import UserModel from "../../../Models/UserModel";
import store from "../../../Redux/Store";
import "./Home.css";

function Home(): JSX.Element {
    const user:UserModel = store.getState().authState.user;
    return (
        <div className="Home">
			<h1>Hello world</h1>
            <h2>{user.email + " " + user.userName + " " + user.token}</h2>
        </div>
    );
}

export default Home;
