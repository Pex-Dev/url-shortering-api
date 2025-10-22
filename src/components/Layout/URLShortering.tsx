import { useState, useId } from "react";
import UseShorten from "../../hooks/UseShorten";

export default function URLShortering() {
  const [longURL, setLongURL] = useState<string>("");
  const [copiedURLs, setCopiedURLs] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { loading, shortedURLs, handleShorten } = UseShorten();

  const urlId = useId();

  const handleLongURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLongURL(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (longURL.length === 0) {
      setErrorMessage("Please add a link");
      return;
    } else {
      setErrorMessage(null);
    }
    const error: null | string = await handleShorten(longURL);
    if (error) {
      setErrorMessage(error);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard!");
        if (copiedURLs.some((cURL) => cURL === text)) return;
        setCopiedURLs((cURLs) => [...cURLs, text]);
        setTimeout(() => {
          setCopiedURLs((cURLs) => cURLs.filter((cURL) => cURL != text));
        }, 3000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <section className="relative -top-20 mx-auto max-w-[1120px] px-5">
      <form
        onSubmit={handleFormSubmit}
        className="font-poppins bg-shorten rounded-xl py-5 md:py-8 lg:py-13 px-5 md:px-11 lg:px-16 bg-[url('/images/bg-shorten-mobile.svg')] md:bg-[url('/images/bg-shorten-desktop.svg')] bg-center bg-cover"
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-9">
          {/* Input URL */}
          <input
            type="url"
            name="url"
            id={urlId}
            placeholder="Shorten a link here..."
            onChange={handleLongURLChange}
            disabled={loading}
            className={`bg-white w-full rounded-md p-4 lg:p-4 text-app-text-dark border-2 ${
              errorMessage ? "border-red-500" : "border-transparent"
            }`}
          />
          {/* Submit button */}
          <button
            type="submit"
            className={`font-poppins-bold text-lg transition-colors   rounded-md p-3 lg:p-4 px-10 whitespace-nowrap ${
              loading
                ? "bg-button/30 hover:bg-button-hover/30 text-white/30 hover:cursor-progress"
                : "bg-button hover:bg-button-hover hover:cursor-pointer text-white"
            }`}
          >
            Shorten It!
          </button>
        </div>
        {/* Error Message */}
        {errorMessage && (
          <p className="lg:absolute mt-2 md:mt-0.5 text-red-500 italic">
            {errorMessage}
          </p>
        )}
      </form>
      <ul className="flex flex-col gap-2 mt-5">
        {shortedURLs.length > 0 &&
          shortedURLs.map((shortURL, index) => (
            <li
              key={index}
              className="bg-white rounded-lg font-poppins flex flex-col md:flex-row md:justify-between md:px-4 md:py-4 lg:px-6 lg:py-4"
            >
              <div className="flex items-center border-b border-b-statistics md:border-b-0 overflow-hidden">
                <p className="whitespace-nowrap overflow-hidden text-ellipsis p-3 md:p-0 text-app-text-dark">
                  {shortURL.original_url}
                </p>
              </div>
              <div className="flex flex-col md:items-center md:flex-row md:pl-5 gap-3 md:gap-5 p-3 md:p-0">
                <a href={shortURL.short_url} className="text-button">
                  {shortURL.short_url}
                </a>
                {/* Copy Button */}
                <button
                  type="button"
                  onClick={() => {
                    copyToClipboard(shortURL.short_url);
                  }}
                  className={`hover:cursor-pointer transition-colors rounded-md min-w-[100px] py-2 text-white ${
                    copiedURLs.some((cURL) => cURL === shortURL.short_url)
                      ? "bg-shorten"
                      : "bg-button hover:bg-button-hover"
                  }`}
                >
                  {copiedURLs.some((cURL) => cURL === shortURL.short_url)
                    ? "Copied!"
                    : "Copy"}
                </button>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}
