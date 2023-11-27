import { useContext } from "react";
import { GlobalContext } from "../components/context/GlobalContent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function LoginPage(registerUser) {
  const registeredUsers = [
    { email: "laima@laima", password: "laima" },
    { email: "pi@pi", password: "pipi" },
  ];

  const [email, setEmail] = useState("");


  const [password, setPassword] = useState("");

  const { updateLoginStatus } = useContext(GlobalContext);
  const navigate = useNavigate();

 function handleSignedIn(event) {
    event.preventDefault();
   if( validateUser() ){
    updateLoginStatusAndNavigate()
   }else{
    alert("Wrong, try again.")
   }
  }


function validateUser(){
  let isUserValid = false
  for(const item of registeredUsers){
    if(item.email === email && item.password === password){
      isUserValid = true
    }
  }
  return  isUserValid
}


  function updateLoginStatusAndNavigate() {
    updateLoginStatus(true);
    navigate("/");
  }



 
return (
    <div className="vh-100">
      <div className=" text-center d-flex align-items-center justify-content-center">
        <form className="form-signin col-4">
          <img
            className="mb-4"
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
            alt="content"
            width="150"
            height="150"
          />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
          />

          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button
            onClick={handleSignedIn}
            className="btn btn-lg btn-primary btn-block"
            type="submit"
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">© 2023</p>
        </form>
      </div>
    </div>
  );
}
