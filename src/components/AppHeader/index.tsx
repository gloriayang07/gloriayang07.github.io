"use client";
import { useState, useEffect } from "react";
import NavItem from "@/components/NavItem";
import GooseButton from "@/components/GooseButton";
import name from "../../../public/name.svg";
import Image from "next/image";
import Link from "next/link";
import { useViewportWidth } from "@/hooks";
import dynamic from "next/dynamic";
import menu from "./menu.svg";
import Goose from "../Goose";

function AppHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hideGoose, setHideGoose] = useState(false);

  useEffect(() => {
    const gooseState = localStorage.getItem("goose");
    if (gooseState !== undefined) {
      setHideGoose(gooseState === "true");
    }
  }, []);

  const handleClick = () => {
    localStorage.setItem("goose", (!hideGoose).toString());
    setHideGoose(!hideGoose);
  };
  useEffect(() => {
    const closeDropdownOnOutsideClick = (e: any) => {
      if (!e.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("click", closeDropdownOnOutsideClick);
    }

    return () => {
      document.removeEventListener("click", closeDropdownOnOutsideClick);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const isMobile = useViewportWidth();

  return (
    <>
      <header className="sticky top-0">
        <div className="topnav inner flex justify-between items-center">
          <Link className="" href="/">
            <Image src={name} alt="" />
          </Link>

          <div className="flex">
            <div className="dropdown">
              <button onClick={toggleDropdown} className="dropbtn">
                <Image src={menu} alt="" />
              </button>
              <div
                className="dropdown-content flex flex-row"
                style={{
                  display: !isMobile
                    ? "flex"
                    : isDropdownOpen
                    ? "block"
                    : "none",
                }}
              >
                <NavItem href="/" label="About Me" onClick={toggleDropdown} />
                <NavItem
                  href="/experience"
                  label="Experience"
                  onClick={toggleDropdown}
                />
                {/* <NavItem href="/volunteering" label="Volunteering" /> */}
                <NavItem
                  href="/resume"
                  label="Resume"
                  onClick={toggleDropdown}
                />
                <div className="d-block d-md-none">
                  <GooseButton onClick={handleClick} className="mobile-goose" />
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block">
            <GooseButton onClick={handleClick} className="desktop-goose" />
          </div>
        </div>
      </header>
      <Goose hideGoose={hideGoose} />
    </>
  );
}

export default dynamic(() => Promise.resolve(AppHeader), {
  ssr: false,
});
