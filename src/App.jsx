import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navigation bar/Navbar";
import Footer from "./Components/footer/Footer"


const App = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;