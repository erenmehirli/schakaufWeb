import { Route, Routes } from "react-router-dom";
import Sayfa from "../pages/Sayfa";
import Login from "../components/Login";
import Home from "../pages/Home";
import SignUp from "../components/SignUp";
import ShoppingCart from "../components/ShoppingCart";
import ProductDetails from "../components/ProductDetails";
import NewCollections from "../components/NewCollections";

const RoutePath = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/shopping-cart' element={<ShoppingCart />} />
            <Route path='/product-details' element={<ProductDetails />} />
            <Route path='/new-collections' element={<NewCollections />} />
        </Routes>
    );
}

export default RoutePath;