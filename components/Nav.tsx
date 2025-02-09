"use client";

import { useLayoutEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun, Twitter, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Changed to default true

  useLayoutEffect(() => {
    const el = document.documentElement;
    // Add dark class by default
    if (!el.classList.contains("dark")) {
      el.classList.add("dark");
    }
    setIsDarkMode(true);
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
      <div className={"flex-1 flex justify-end items-center gap-4"}>
        <Link href="https://twitter.com" target="_blank">
          <Twitter className="size-5" />
        </Link>
        <Link href="https://github.com/rayjaywolf/luminary" target="_blank">
          <Github className="size-5" />
        </Link>
        <Link onClick={toggleDark} href={"#"}>
          <span>
            {isDarkMode ? (
              <Sun className={"size-5"} />
            ) : (
              <Moon className={"size-5"} />
            )}
          </span>
        </Link>
      </div>
    </div>
  );
};
