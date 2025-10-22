import { useState } from "react";
import type { ShortenURL } from "../types/types";

export default function UseShorten() {
  const [loading, setLoading] = useState<boolean>(false);
  const [shortedURLs, setShortedURLs] = useState<ShortenURL[]>([]);

  const handleShorten = async (longURl: string): Promise<null | string> => {
    const url = "https://spoo.me/";
    const data = new URLSearchParams();
    data.append("url", longURl);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: data,
    };

    try {
      setLoading(true);
      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        return `${data.UrlError}`;
      }

      setLoading(false);
      addShortedURL(longURl, data.short_url);
      return null;
    } catch (error) {
      setLoading(false);
      console.error(error);
      return `${error}`;
    }
  };

  const addShortedURL = (originalURL: string, shortURL: string) => {
    const isInList = shortedURLs.some(
      (shortURL) => shortURL.original_url === originalURL
    );

    if (isInList) return;

    setShortedURLs([
      ...shortedURLs,
      {
        original_url: originalURL,
        short_url: shortURL,
      },
    ]);
  };

  return { loading, shortedURLs, handleShorten };
}
