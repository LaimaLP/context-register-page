import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { PublicLayout } from "./layout/PublicLayout";
import { AuthLayout } from "./layout/AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={PublicLayout}>
          <Route index path="/" element={<HomePage />} />
        </Route>
        <Route Component={AuthLayout}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
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
