import React from "react";

import {
	FiGitBranch, FiGithub, FiLinkedin, FiTwitter, FiMail, FiStar,
} from "react-icons/fi";

function Footer(props: {darkModded: boolean}) {
	const { darkModded } = props;
	return (
		<div className="flex flex-col items-center py-6 gap-4 w-screen dark:bg-darkblue dark:text-white ">
			<div className="flex items-center gap-4 text-xl ">
				<a href="https://github.com/NanoPek" className="hover:text-myRose transition-colors" aria-label="github"><FiGithub /></a>
				<a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9mie-carrez/" className="hover:text-myRose transition-colors" aria-label="linkedin"><FiLinkedin /></a>
				<a href="https://twitter.com/NanoPekTo" className="hover:text-myRose transition-colors" aria-label="twitter"><FiTwitter /></a>
				<a href="mailto:nanopek.pro@gmail.com" className="hover:text-myRose transition-colors" aria-label="mail"><FiMail /></a>
			</div>
			<a href="https://github.com/NanoPek/myPortfolio" className="text-sm flex flex-col items-center hover:text-myRose transition-colors ">
				<p>
					Designed & Built by @
					{darkModded ? "Nano" : "Jeremie Carrez"}
					{" "}
					- contact : nanopek.pro@gmail.com
				</p>
				<div className="flex items-center">
					<FiStar className="text-md" />
					<p>&nbsp;Star &&nbsp;</p>
					<FiGitBranch className="text-md" />
					<p>&nbsp;Fork</p>
				</div>

			</a>

		</div>
	);
}

export default Footer;
