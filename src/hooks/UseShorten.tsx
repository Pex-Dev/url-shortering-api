import { useState } from "react";
import type { ShortenURL } from "../types/types";

const saveShortedURLs = (shortedUrls: ShortenURL[]) => {
  //Save in localStorage
  localStorage.setItem("shortedURLs", JSON.stringify(shortedUrls));
};

const loadShortedURls = (): ShortenURL[] => {
  //Get shortedURLs from localStorage
  const shortedURLs = localStorage.getItem("shortedURLs");
  if (!shortedURLs) {
    return [];
  }
  return JSON.parse(shortedURLs);
};

export default function UseShorten() {
  const [loading, setLoading] = useState<boolean>(false);
  const [shortedURLs, setShortedURLs] = useState<ShortenURL[]>(
    loadShortedURls()
  );

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
    saveShortedURLs([
      ...shortedURLs,
      {
        original_url: originalURL,
        short_url: shortURL,
      },
    ]);
  };

  const deleteShortedURl = (shortedURL: ShortenURL) => {
    setShortedURLs((sURLs) => {
      const updatedSURLs: ShortenURL[] = sURLs.filter(
        (sURL) => sURL.original_url !== shortedURL.original_url
      );
      saveShortedURLs(updatedSURLs);
      return updatedSURLs;
    });
  };

  return { loading, shortedURLs, handleShorten, deleteShortedURl };
}
