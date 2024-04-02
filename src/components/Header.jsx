import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Header() {

const navigate = useNavigate()

  const menus = [
    { text: "Home", link: "/" },
    { text: "Contact", link: "/" },
    { text: "About", link: "/" },
    { text: "Forum", link: "/" },
  ];
  return (
    <div className="flex justify-between items-center lg:px-5 lg:h-20 border-2 border-b-blue-500 fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex lg:gap-10 items-center">
        <a href="">
          <img src="./logo.jpeg" alt="logo" className="lg:h-[4.5rem]" />
        </a>
        <nav className="flex lg:gap-5">
          {menus.map((index) => (
            <button onClick={() => navigate(`${index.link}`)}>{index.text}</button>
          ))}
        </nav>
      </div>
      <div className="flex gap-2">
        <Button
          text="Sign Up"
          type="submit"
          onClick={() => console.log("SignUp")}
          className=" bg-blue-500 text-white lg:px-4 lg:py-1 lg:rounded-lg"
        />
        <Button
          text="Sign In"
          type="submit"
          onClick={() => console.log("SignIn")}
          className="border-2 border-blue-500 lg:px-4 lg:py-1 lg:rounded-lg"
        />
      </div>
    </div>
  );
}
