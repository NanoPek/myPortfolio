import React from "react";
import { Skill } from "./ProjectShowCaser";

function SkillContainer(props: {
    name: string;
    skills: Skill[];
    isWeb3: boolean;
    thirdWeb?: Skill[] | undefined;
}) {
	const {
		name, skills, thirdWeb, isWeb3,
	} = props;

	return (

		<div className="w-full border-myRose border-r-2 border-t-2 p-3 flex flex-col justify-between">
			<div>
				<p className="text-center text-xl text-bold border-b-2 border-myRose border-dashed ">
					{" "}
					{name}
				</p>
				<div className="grid grid-cols-3 grid-rows-3 gap-2 mt-4">
					{skills.map((value) => (
						<div
							key={value.name}
							className="text-white py-1 px-2 text-xs rounded-xl flex justify-center items-center w-24 "
							style={{ backgroundColor: value.color }}
						>
							<p>{value.name}</p>
						</div>
					))}
				</div>
			</div>
			{thirdWeb && isWeb3 && (
				<div className="mt-4">
					<p className="text-center text-xl text-bold ">Web3 related </p>
					<div className="grid grid-cols-3 gap-2 mt-4">
						{thirdWeb.map((value) => (
							<div
								key={value.name}
								className="text-white py-1 px-2 text-xs rounded-xl flex justify-center items-center w-24"
								style={{ backgroundColor: value.color }}
							>
								<p>{value.name}</p>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

SkillContainer.defaultProps = {
	thirdWeb: undefined,
};

export default SkillContainer;
