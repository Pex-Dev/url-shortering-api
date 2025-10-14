export default function URLShortering() {
  const errorMessage: string | null = null;

  return (
    <section className="relative -top-20 mx-auto max-w-[1120px] px-5">
      <form
        action=""
        className=" font-poppins bg-shorten rounded-xl py-5 md:py-8 lg:py-13 px-5 md:px-11 lg:px-16 bg-[url('/images/bg-shorten-mobile.svg')] md:bg-[url('/images/bg-shorten-desktop.svg')] bg-center bg-cover"
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-9">
          <input
            type="text"
            name="url"
            id="url"
            placeholder="Shorten a link here..."
            className={`bg-white w-full rounded-md p-4 lg:p-4 text-app-text-dark border-2 ${
              errorMessage ? "border-red-500" : "border-transparent"
            }`}
          />
          <button
            type="submit"
            className="font-poppins-bold text-lg transition-colors bg-button hover:bg-button-hover hover:cursor-pointer text-white rounded-md p-3 lg:p-4 px-10 whitespace-nowrap"
          >
            Shorten It!
          </button>
        </div>
        {errorMessage && (
          <p className="md:absolute mt-2 text-red-500  italic">
            {errorMessage}
          </p>
        )}
      </form>
    </section>
  );
}
