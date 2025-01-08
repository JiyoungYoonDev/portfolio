"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HamburgerMenu } from "./design/Nav";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "@/app/constants";

const Navbar = () => {
	const [openNavigation, setOpenNavigation] = useState(false);

	const handleHamburgerMenu = () => {
		setOpenNavigation((prev) => !prev);
	};

	const MenuItems = () => {
		return (
			<ul className="nav-ul">
				{navigation.map((item) => {
					return (
						<li key={item.id} className="nav-li">
							<Link href={item.url} className="nav-li_a" onClick={() => {}}>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
		);
	};

	return (
		<header className="fixed top-0 left-0 right-0 w-full z-50">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between items-center py-5 mx-auto c-space">
					<Link
						className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
						href={"/"}>
						Coding Jiyoung
					</Link>

					{/* Hamburger Menu Icon */}
					<button
						onClick={handleHamburgerMenu}
						className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex">
						<Image
							src={!openNavigation ? "menu/hamburger.svg" : "menu/close.svg"}
							alt="toggle"
							width={24}
							height={24}
						/>
					</button>
                    
					<nav className="sm:flex hidden">
						<MenuItems />
					</nav>
				</div>
			</div>

			{/* For mobile devices */}
			<div
				className={`nav-sidebar ${
					openNavigation ? "max-h-screen" : "max-h-0"
				}`}>
				<nav className="p-5">
					<MenuItems />
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
