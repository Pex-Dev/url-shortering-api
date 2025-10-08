export default function Nav({ showMenu }: { showMenu: boolean }) {
  return (
    <div
      className={`transition-all relative w-full overflow-hidden ${
        showMenu ? "h-0" : "h-[512px] md:h-auto"
      }`}
    >
      <nav className="flex flex-col md:flex-row w-full absolute md:static md:justify-between bg-menu-mobile md:bg-transparent rounded-lg mt-5 md:mt-0 p-8 md:p-0 text-white font-poppins-bold">
        <ul className="flex flex-col md:flex-row items-center gap-7">
          <li>
            <a href="#" className="hover:text-zinc-900 md:text-zinc-400">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-zinc-900 md:text-zinc-400">
              Princing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-zinc-900 md:text-zinc-400">
              Resources
            </a>
          </li>
        </ul>
        <hr className="text-[#544a6d] mt-7 md:hidden" />
        <ul className="flex flex-col md:flex-row gap-7 items-center mt-7 md:mt-0">
          <li>
            <a href="#" className="hover:text-zinc-900 md:text-zinc-400">
              Login
            </a>
          </li>
          <li className="w-full flex">
            <a
              href="#"
              className="bg-button hover:bg-button-hover rounded-full w-full text-center py-4 md:py-3 md:px-8 md:max-w-48 "
            >
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
