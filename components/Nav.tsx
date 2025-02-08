"use client";

import { useLayoutEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";

export const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const el = document.documentElement;

    if (el.classList.contains("dark")) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleDark = () => {
    const el = document.documentElement;
    el.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={
        "p-4 flex items-center justify-between z-50 bg-card/80 backdrop-blur-sm border-b border-border w-full"
      }
    >
      <div className="flex-1" />
      <div className="flex-1 flex justify-center">
        <Image
          src={isDarkMode ? "/logo-dark.png" : "/logo-light.png"}
          alt="Logo"
          width={130}
          height={31}
          className="h-12 w-auto"
        />
      </div>
      <div className={"flex-1 flex justify-end items-center"}>
        <Button
          onClick={toggleDark}
          variant={"ghost"}
          className={"flex items-center gap-1.5"}
        >
          <span>
            {isDarkMode ? (
              <Sun className={"size-4"} />
            ) : (
              <Moon className={"size-4"} />
            )}
          </span>
          <span>{isDarkMode ? "Light" : "Dark"} Mode</span>
        </Button>
      </div>
    </div>
  );
};
