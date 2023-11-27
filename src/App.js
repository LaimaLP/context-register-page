import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { PublicLayout } from "./layout/PublicLayout";
import { AuthLayout } from "./layout/AuthLayout";
import { NoPage } from "./pages/NoPage";
import { ContextWrapper } from './components/context/GlobalContent';
import { AccountPage } from "./pages/AccountPage";

function App() {
  return (
    <ContextWrapper>
    <BrowserRouter>
      <Routes>
        <Route Component={PublicLayout}>
          <Route index path="/" element={<HomePage />} />
          <Route path="*" element={<NoPage/>} />
        </Route>
        <Route Component={AuthLayout}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/accountPage" element={<AccountPage />} />

          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ContextWrapper>
  );
}

export default App;

//   <BrowserRouter>
//   <Routes>
//     <Route Component={PublicLayout}>
//       <Route index path="/" element={<HomePage />} />
//       <Route Component={AccountLayout}>
//         <Route path="/account/"{user} element={<UserPage account={user} />} />
//       </Route>
//       <Route path='*' element={<NoPage />} />
//     </Route>
//     <Route Component={AuthLayout}>
//       <Route path="/login" element={<Login />} />
//     </Route>
//   </Routes>
// </BrowserRouter>
