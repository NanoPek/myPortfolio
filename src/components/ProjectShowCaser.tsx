import React from "react";

import { FiGithub, FiExternalLink } from "react-icons/fi";

export interface Skill {
	name: string;
	color: string;
}

function ProjectShowCaser(props: {
    bigName: string;
    name: string;
    description: string;
    skills: Skill[];
    externalLink?: string | undefined;
    github?: string | undefined;
}) {
	const {
		bigName, name, description, skills, externalLink, github,
	} = props;

	return (
		<div className="w-full h-full ">
			<div className=" h-full w-full px-8 py-4 border-2 border-myRose shadow-xl flex flex-col items-center lg:h-full text-center justify-between">

				<p className="font-bold text-myRose mt-4">
					Featured Project
				</p>
				<p className="font-bold text-2xl ">
					{bigName}
				</p>
				{ externalLink
					? (
						<a href={externalLink}>
							{/* eslint-disable-next-line global-require,import/no-dynamic-require */}
							<img src={require(`./../assets/ProjectShowcaseImages/${name}.png`)} alt={name} className="my-4 rounded-lg lg:max-h-48 2xl:max-h-96 " />
						</a>
					)

					// eslint-disable-next-line global-require,import/no-dynamic-require
					: <img src={require(`./../assets/ProjectShowcaseImages/${name}.png`)} alt={name} className="my-4 rounded-lg lg:max-h-48 2xl:max-h-96 " />}
				<p className="text-justify ">
					{description}
				</p>
				<div className="grid gap-2 grid-cols-3 my-4">
					{skills.map((value) => <div key={value.name} className="text-white py-1 px-2 text-xs rounded-xl flex justify-center items-center w-24 " style={{ backgroundColor: value.color }}><p>{value.name}</p></div>)}
				</div>
				<div className="flex gap-4 text-xl mb-6 w-full px-6 ">
					{ github && (
						<a href={github} className="hover:text-myRose transition-colors" aria-label="github"><FiGithub /></a>
					)}
					{ externalLink && (
						<a href={externalLink} className="hover:text-myRose transition-colors" aria-label="link"><FiExternalLink /></a>
					)}

				</div>
			</div>
		</div>
	);
}

ProjectShowCaser.defaultProps = {
	externalLink: undefined,
	github: undefined,
};

export default ProjectShowCaser;
