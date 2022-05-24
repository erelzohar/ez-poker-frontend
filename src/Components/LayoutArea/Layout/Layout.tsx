import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element { // JSX.Element = UI Object
    return (
        <BrowserRouter>
            <div className="Layout">

                <header>
                    <Header />
                </header>
                <main>
                    <ToastContainer
                      position="top-center"
                      autoClose={3500}
                      newestOnTop={true}
                      transition={Zoom}
                      theme={'dark'}
                      />
                    <Routing />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default Layout;