"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
	return (
		<section className="section h-96 flex items-center mt-24 lg:mt-0 sm:mt-14">
			<div className="flex flex-col px-2 lg:flex-row items-center p-2 w-full">
				{/* Header Explanation */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className="flex-1 text-center lg:text-left">
					<h1 className="text-2xl font-extrabold md:text-4xl">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-700">
							Hello, I&apos;m
						</span>
						<br />
						<span className="leading-tight md:leading-normal">
							<TypeAnimation
								sequence={[
									"Coding Jiyoung",
									1000,
									"Software Engineer",
									1000,
									"FullStack Developer",
									1000,
								]}
								wrapper="span"
								speed={10}
								repeat={Infinity}
							/>
						</span>
					</h1>
				</motion.div>

				{/* Header Image */}
				<div className="flex mt-8 lg:mt-0">
					<Image
						src="/ch.png"
						alt="My Character"
						height={300}
                        width={300}
						className="rounded-full"
					/>
				</div>
			</div>
		</section>
	);
};

export default Header;
