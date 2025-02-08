"use client";

import { useLayoutEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        <Link href="/">
          <Image
            src={isDarkMode ? "/logo-dark.png" : "/logo-light.png"}
            alt="Logo"
            width={130}
            height={31}
            className="h-12 w-auto"
          />
        </Link>
      </div>
      <div className={"flex-1 flex justify-end items-center gap-2"}>
        <Link href="https://twitter.com" target="_blank">
          <Twitter className="size-4" />
        </Link>
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
        </Button>
      </div>
    </div>
  );
};
