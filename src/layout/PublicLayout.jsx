import { Outlet } from 'react-router-dom';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function PublicLayout() {
    return (
        <>
            <Header />
       
                <Outlet />
         
            <Footer />
        </>
    );
}