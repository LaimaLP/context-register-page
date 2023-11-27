import { Outlet } from 'react-router-dom';
import { HeaderSimpli } from '../components/HeaderSimpli';
import { FooterSimpli } from '../components/FooterSimpli';

export function AuthLayout() {
    return (
        <>
            <HeaderSimpli />
           
                <Outlet />
           
            <FooterSimpli />
        </>
    );
}