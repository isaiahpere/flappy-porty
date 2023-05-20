import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const [mode, setMode] = useState("");
  const preferDarkQuery = "(prefer-color-scheme: dark)";

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPreference = window.localStorage.getItem("theme");

    // handle theme preferrence
    const handleChange = () => {
      if (userPreference) {
        let check = userPreference === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // set local storage
  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
