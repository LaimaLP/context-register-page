import { useContext } from "react";
import { GlobalContext } from "../components/context/GlobalContent";

export function HomePage() {
  const { isLogedIn } = useContext(GlobalContext);
  return (
    <>
      {isLogedIn ? (
        <main
          style={{
            height: 400 + "px",
            textAlign: "center",
            marginTop: 10 + "px",
          }}
        >
          {" "}
          
          <p> You logged in!</p>
          <img src="https://static1.squarespace.com/static/5e949a92e17d55230cd1d44f/t/61f4064754df3c2f619cba7f/1643382344447/HelloLight_Mac.png" alt="hello"
            width="350"
            height="350" />
        </main>
      ) : (
        <main
          style={{
            height: 400 + "px",
            textAlign: "center",
            marginTop: 10 + "px",
          }}
        >
          {" "}
          
          <h2> My home page </h2>
          <img src="https://3.imimg.com/data3/SN/SM/MY-8889915/seo-content-development-500x500.jpg" />
        </main>
      )}
    </>
  );
}
