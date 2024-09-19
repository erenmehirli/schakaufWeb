import { Route, Routes } from "react-router-dom";
import Sayfa from "../pages/Sayfa";

const RoutePath = () => {
    return (
        <Routes>
            <Route path='/sayfa' element={<Sayfa />} />
        </Routes>
    );
}

export default RoutePath;