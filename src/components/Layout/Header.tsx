import { useState } from "react";

import Nav from "./Nav";
import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <header className="w-full flex flex-col md:flex-row md:gap-12 md:items-center">
      <div className="flex w-full justify-between md:w-fit">
        <img
          src={logo}
          alt="Shortly"
          className="shrink-0 grow-0 md:w-[130px] "
        />
        <button
          aria-label="Menu navigation"
          onClick={() => setShowMenu((prev) => !prev)}
          className="md:hidden hover:cursor-pointer"
        >
          <img src={menu} alt="Menu" />
        </button>
      </div>
      <Nav showMenu={showMenu} />
    </header>
  );
}
