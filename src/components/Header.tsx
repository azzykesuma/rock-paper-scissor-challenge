import { useContext } from "react";
import logo from "../assets/images/logo-bonus.svg";
import { GameStatus } from "../App";
const Header = () => {
  const { score } = useContext(GameStatus);
  return (
    <header className="border-2 border-headerOutline p-4 flex justify-between items-center rounded md:w-1/2 md:mx-auto">
      <img src={logo} alt="logo" className="w-20" fetchPriority="high" />
      <div className="bg-white shadow-lg rounded-md py-3 px-6 flex flex-col items-center">
        <h1 className="text-scoreText font-semibold">SCORE</h1>
        <p className="font-bold text-3xl text-darkText">{score ? score : 0}</p>
      </div>
    </header>
  );
};

export default Header;
