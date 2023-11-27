import { useContext } from "react";
import { GlobalContext } from "../components/context/GlobalContent";
import { useNavigate } from 'react-router-dom';



export function LoginPage() {
  const { updateLoginStatus } = useContext(GlobalContext);

  function setSignedIn(event) {
    event.preventDefault();
    updateLoginStatus(true);
    navigate('/')
  }
  const { isLogedIn } = useContext(GlobalContext);
  const navigate= useNavigate()

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
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required=""
            autofocusname=""
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button onClick={setSignedIn} className="btn btn-lg btn-primary btn-block" type="submit" >Sign in</button>
          <p className="mt-5 mb-3 text-muted">© 2023</p>
        </form>
      </div>
    </div>
  
    );
}
