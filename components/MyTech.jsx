"use client";

import { technologies } from "@/app/constants";
import BallCanvas from "./model/Ball";

const MyTech = () => {
	return (
		<div className="grid grid-cols-2 gap-4 items-center md:grid-cols-4 flex-row flex-wrap">
			{technologies.map((tech) => (
				<div
					className="h-28"
					key={tech.name}>
					<BallCanvas icon={tech.icon} />
				</div>
			))}
		</div>
	);
};

export default MyTech;
