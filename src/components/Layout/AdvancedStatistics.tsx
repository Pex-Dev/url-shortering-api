import iconBrand from "../../images/icon-brand-recognition.svg";
import iconFullyCustomizable from "../../images/icon-fully-customizable.svg";
import iconDetailedrecords from "../../images/icon-detailed-records.svg";

export default function AdvancedStatistics() {
  return (
    <section className="mx-auto max-w-[1120px] px-5 pb-20 md:pb-25">
      <div className="mx-auto w-fit">
        <h2 className="text-3xl md:text-4xl text-app-text-dark text-center font-poppins-bold">
          Advanced Statistics
        </h2>
        <p className="text-app-text text-center leading-7 font-poppins mt-4 lg:max-w-md">
          Track how tour links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      {/* Cards container */}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-20 lg:mt-25">
        {/* Brand recognition card */}
        <div className="flex flex-col md:flex-row ">
          <div className="bg-white rounded-md px-10 pb-10 pt-23 lg:pt-18 relative flex flex-col h-fit">
            <div className="bg-shorten w-23 h-23 rounded-full absolute top-0 left-1/2 right-1/2 lg:left-20 lg:right-auto -translate-1/2 flex items-center justify-center">
              <img src={iconBrand} alt="Icon brand recognition" />
            </div>
            <h3 className="text-app-text-dark font-poppins-bold text-xl text-center lg:text-left">
              Brand Recognition
            </h3>
            <p className="md:text-sm lg:text-base font-poppins text-app-text text-center lg:text-left mt-7 lg:mt-5">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="bg-button w-2 h-10 md:min-w-8 md:h-2 mx-auto md:relative md:translate-y-1/2 md:top-1/2"></div>
        </div>
        {/* Detailed records card */}
        <div className="flex flex-col md:flex-row ">
          <div className="bg-white rounded-md px-10 pb-10 pt-23 lg:pt-18 relative flex flex-col h-fit mt-10 lg:mt-10">
            <div className="bg-shorten w-23 h-23 rounded-full absolute top-0 left-1/2 right-1/2 lg:left-20 lg:right-auto -translate-1/2 flex items-center justify-center">
              <img src={iconDetailedrecords} alt="Icon detailed records" />
            </div>
            <h3 className="text-app-text-dark font-poppins-bold text-xl text-center lg:text-left">
              Detailed Records
            </h3>
            <p className="md:text-sm lg:text-base font-poppins text-app-text text-center lg:text-left mt-7 lg:mt-5">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="bg-button w-2 h-10 md:min-w-8 md:h-2 mx-auto md:relative md:translate-y-1/2 md:top-1/2"></div>
        </div>
        {/* Fully customizable card */}
        <div className="flex flex-col md:flex-row ">
          <div className="bg-white rounded-md px-10 pb-10 pt-23 lg:pt-18 relative flex flex-col h-fit mt-10 md:mt-20">
            <div className="bg-shorten w-23 h-23 rounded-full absolute top-0 left-1/2 right-1/2 lg:left-20 lg:right-auto -translate-1/2 flex items-center justify-center">
              <img src={iconFullyCustomizable} alt="Icon fully customizable" />
            </div>
            <h3 className="text-app-text-dark font-poppins-bold text-xl text-center lg:text-left">
              Fully Customizable
            </h3>
            <p className="md:text-sm lg:text-base font-poppins text-app-text text-center lg:text-left mt-7 lg:mt-5">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
