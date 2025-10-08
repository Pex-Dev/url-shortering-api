import working from "../../images/illustration-working.svg";

export default function Hero() {
  return (
    <section className="mt-7 md:mt-15 flex flex-col md:flex-row-reverse md:items-center">
      <div className="overflow-hidden md:overflow-visible">
        <img
          src={working}
          alt="Illustration working"
          className="relative min-w-lg md:min-w-auto -right-5 md:-right-24 lg:-right-40"
        />
      </div>

      <div className="px-5 mt-6 md:mt-0">
        <h1 className="font-poppins-bold text-center md:text-left text-app-text-dark text-[2.60rem] lg:text-6xl leading-13 lg:leading-18">
          More than just shorten links
        </h1>
        <p className="text-app-text text-center md:text-left leading-7 font-poppins mt-4 lg:max-w-md">
          Build tour brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <li className="w-full flex">
          <a
            href="#"
            className="bg-button hover:bg-button-hover rounded-full w-full max-w-3xs mx-auto md:mx-0 font-poppins text-center md:text-left text-lg text-white py-4 md:py-3 md:px-8 md:max-w-48 mt-6"
          >
            Get Started
          </a>
        </li>
      </div>
    </section>
  );
}
