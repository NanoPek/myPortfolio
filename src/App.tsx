import React, { useState } from "react";

import {
	FiArrowDown, FiMail, FiGithub, FiLinkedin, FiTwitter,
} from "react-icons/fi";
import SkillContainer from "./components/SkillContainer";
import Footer from "./components/Footer";
import ProjectShowCaser from "./components/ProjectShowCaser";

const iconWeb2 = require("./assets/icon_web2.jpg");
const iconWeb3 = require("./assets/icon_web3.jpg");

const skillsTab = [
	{
		name: "Techs",
		skills: [
			{
				name: "JavaScript",
				color: "#efd81d",
			},
			{
				name: "TypeScript",
				color: "#2f74c0",
			},
			{
				name: "React",
				color: "#61DAFB",
			},
			{
				name: "ReactNative",
				color: "#61DAFB",
			},
			{
				name: "Vue",
				color: "#42B883",
			},
			{
				name: "Node.js",
				color: "#83cd29",
			},
			{
				name: "Nuxt",
				color: "#00DC82",
			},
			{
				name: "Python",
				color: "#3776aa",
			},
			{
				name: "Java",
				color: "#e77224",
			},
			{
				name: "Strapi",
				color: "#8E75FF",
			},
			{
				name: "Sass, SCSS",
				color: "#ce679a",
			},
			{
				name: "Tailwind",
				color: "#38bdf8",
			},
		],
		thirdWeb: [
			{
				name: "Solidity",
				color: "#363636",
			},
			{
				name: "Sanity.io",
				color: "#61DAFB",
			},
			{
				name: "ThirdWeb",
				color: "#7908b8",
			},
		],
	},
	{
		name: "Tools & else",
		skills: [
			{
				name: "Notion",
				color: "#37352f",
			},
			{
				name: "Figma",
				color: "#eb4c1d",
			},
			{
				name: "Gsuite",
				color: "#4285f4",
			},
			{
				name: "Jetbrains",
				color: "#000000",
			},
			{
				name: "PWA",
				color: "#e0d7fe",
			},
		],
		thirdWeb: [
			{
				name: "HardHat",
				color: "#f4db00",
			},
			{
				name: "Remix",
				color: "#2684a2",
			},
			{
				name: "Polygon",
				color: "#8247e5",
			},
		],
	},
];

const styles = {
	grid: "grid grid-cols-2 items-center mt-6 gap-4 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3 lg:w-11/12 lg:mx-auto",
};

function App() {
	const [darkModded, setDarkModded] = useState(false);

	const toggleDarkMode = () => {
		setDarkModded(!darkModded);
		// @ts-ignore
		// eslint-disable-next-line no-undef
		document.getElementById("root").classList.toggle("dark-mode");
	};

	return (
		<div className={`${darkModded ? "dark w-screen selection:bg-myRose selection:text-white " : "w-screen selection:bg-myRose selection:text-white"}`}>
			<header className="sticky top-0 left-0 w-screen h-16 shadow-lg  bg-white dark:bg-darkblue flex justify-between items-center ">
				<div
					className="h-full flex items-center cursor-pointer border-myRose hover:font-bold transition "
					role="button"
					tabIndex={0}
					onClick={toggleDarkMode}
					onKeyDown={toggleDarkMode}
				>
					<img src={darkModded ? iconWeb3 : iconWeb2} alt={`Switch to ${darkModded ? "web2" : "web3"}`} className="rounded-3xl max-h-12 mx-2 " />
					<p className="text-web3-grad text-center dark:text-web3-gradd">
						{" "}
						&#x27F5; Switch to
						{" "}
						{ darkModded ? "web2" : "web3"}
					</p>
				</div>
				<div className="mr-3 text-3xl flex gap-4 lg:mr-8 dark:text-white">
					<a href="mailto:nanopek.pro@gmail.com" className="hover:text-myRose transition-colors" aria-label="mail"><FiMail /></a>
					<a href="https://github.com/NanoPek" className="hover:text-myRose transition-colors" aria-label="github"><FiGithub /></a>
					<a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9mie-carrez/" className="hover:text-myRose transition-colors" aria-label="linkedin"><FiLinkedin /></a>
					<a href="https://twitter.com/NanoPekTo" className="hover:text-myRose transition-colors" aria-label="twitter"><FiTwitter /></a>

				</div>
			</header>
			<div className="w-screen  dark:bg-darkblue dark:text-white ">
				<div className=" px-6 flex flex-col items-center flex flex-col justify-between  ">
					<div className=" lg:pt-6 2xl:pt-12 flex flex-col gap-2 2xl:gap-5 lg:px-16  xl:px-32 2xl:px-64">
						<p className=" text-xl">
							Hey, my name is
						</p>
						<h1 className="text-4xl font-bold lg:text-7xl">
							{darkModded ? "Nano" : "Jeremie Carrez"}
							.
						</h1>
						<h2 className="text-2xl font-bold lg:text-4xl">
							I build things for web2 and web3.
						</h2>
						<p className="text-justify mt-2 text-sm lg:text-lg">
							Passionate about computer science,
							I&apos;m a full-stack french developer spending most of my time learning about
							new technologies and developing various projects.
						</p>
					</div>
					<div className="w-full flex flex-col items-center">
						<h2 className="text-2xl text-myRose mb-4 font-bold dark:text-web3-grad ">
							My skills
						</h2>
						<div className="flex flex-col justify-evenly border-b-2 border-l-2 border-myRose lg:flex-row">
							{skillsTab.map((value) => (
								<SkillContainer
									key={value.name}
									name={value.name}
									skills={value.skills}
									thirdWeb={value.thirdWeb}
									isWeb3={darkModded}
								/>
							))}
						</div>
					</div>
					<div className="flex flex-col items-center my-6">
						<p className="text-xl text-myRose font-bold dark:text-web3-grad ">
							Discover my projects!
						</p>
						<FiArrowDown className="text-5xl mt-4 text-myRose  animate-bounce  " />
					</div>
				</div>
				<div className="flex flex-col px-6">
					<div className="flex items-center">
						<div className="border-t border-darkblue flex-grow " />
						<h2 className="text-3xl text-myRose font-semibold px-1 dark:text-web3-grad ">
							My Projects
						</h2>
						<div className="border-t border-darkblue flex-grow" />
					</div>
					{darkModded
						? (
							<div className={styles.grid}>
								<ProjectShowCaser
									name="opensea"
									bigName="Opensea Marketplace Clone"
									description={"A Kirby themed Opensea (NFT trading platform) clone on Rinkeby Testnet. An account is linked to each address that sign to the website, enabling profile modification. \n NFT reselling and buying is implemented"}
									skills={[
										{
											name: "full-stack",
											color: "#FF782C",
										},
										{
											name: "React",
											color: "#61DAFB",
										},
										{
											name: "Sanity.io",
											color: "#61DAFB",
										},
										{
											name: "Solidity",
											color: "#363636",
										},
										{
											name: "ThirdWeb",
											color: "#7908b8",
										},
										{
											name: "Tailwind",
											color: "#38bdf8",
										},
									]}
									github="https://github.com/NanoPek/kirby-marketplace"
									externalLink="https://kirby-marketplace.vercel.app/"
								/>
								<ProjectShowCaser
									name="DAO"
									bigName={"Kirby's DAO"}
									description={"A Kirby themed DAO on Rinkeby Testnet. Mint a NFT to access and vote in the DAO. DAO's Token repartion is showed as well as all proposals currently available."}
									skills={[
										{
											name: "full-stack",
											color: "#FF782C",
										},
										{
											name: "React",
											color: "#61DAFB",
										},
										{
											name: "Solidity",
											color: "#38bdf8",
										},
										{
											name: "Tailwind",
											color: "#363636",
										},
										{
											name: "ThirdWeb",
											color: "#7908b8",
										},
									]}
									github="https://github.com/NanoPek/buildspace-dao-starter"
									externalLink="https://kirby-s-dao.vercel.app/"
								/>
								<ProjectShowCaser
									name="ENS"
									bigName="Custom ENS Domain Provider"
									description="A Custom .kirby ENS Domain Provider on Mumbai ( L2 Polygon Testnet). Mint a custom .kirby domain and link it with another link, a custom text or a gif. All domains are showed in the website and accessible by anyone."
									skills={[
										{
											name: "full-stack",
											color: "#FF782C",
										},
										{
											name: "React",
											color: "#61DAFB",
										},
										{
											name: "Polygon",
											color: "#8247e5",
										},
										{
											name: "Solidity",
											color: "#363636",
										},
										{
											name: "ThirdWeb",
											color: "#7908b8",
										},
									]}
									github="https://github.com/NanoPek/domain-starter"
									externalLink="https://kirby-domain.vercel.app/"
								/>
							</div>
						)
						: (
							<div className={styles.grid}>
								<ProjectShowCaser
									name="pieces"
									bigName="Customizable Coin System"
									description={"A web app / PWA to gamify and reward events participation.\n"
                                  + "Profile creation, item shop and leaderboard implemented, coins are given via a smart QR code system scanned at every event."}
									skills={[
										{
											name: "full-stack",
											color: "#FF782C",
										},
										{
											name: "mobile",
											color: "#ea4c1d",
										},
										{
											name: "Vue",
											color: "#42B883",
										},
										{
											name: "Nuxt",
											color: "#00DC82",
										},
										{
											name: "Strapi",
											color: "#8E75FF",
										},
										{
											name: "Tailwind",
											color: "#38bdf8",
										},
										{
											name: "PWA",
											color: "#e0d7fe",
										},
									]}
								/>
								<ProjectShowCaser
									name="hi7haut"
									bigName="Showcase website"
									description="A website to present a student association and post news and articles."
									skills={[
										{
											name: "design",
											color: "#FF7BAF",
										},
										{
											name: "Vue",
											color: "#42B883",
										},
										{
											name: "Nuxt",
											color: "#00DC82",
										},
									]}
									externalLink="https://www.hi7haut.fr/"
									github="https://github.com/NanoPek/hi7haut-vitrine"
								/>
								<ProjectShowCaser
									name="cadavrexquis"
									bigName="CadavrExquis"
									description={'A game website where players can play the graphical version of "Cadavre Exquis"  online.'}
									skills={[
										{
											name: "React",
											color: "#61DAFB",
										},
										{
											name: "Node.js",
											color: "#83cd29",
										},
									]}
								/>
								<ProjectShowCaser
									name="portfolio"
									bigName="This portfolio :)"
									description={"My personal e-portfolio ! Don't forget to check my web3 projects 🦄"}
									skills={[
										{
											name: "design",
											color: "#FF7BAF",
										},
										{
											name: "React",
											color: "#61DAFB",
										},
										{
											name: "Tailwind",
											color: "#38bdf8",
										},
									]}
									github="https://github.com/NanoPek/myPortfolio"
								/>
							</div>
						)}
					<div className="text-myRose  flex   my-6    justify-center">
						<div className="bg-myRose p-1 rounded-lg hover:text-white dark:border-web3-grad xl:w-1/5 2xl:w-1/4">
							<div
								className="bg-white rounded-lg  h-full  hover:bg-myRoseEluded dark:bg-darkblue dark:hover:bg-transparent transition-colors "
								role="button"
								tabIndex={0}
								onClick={toggleDarkMode}
								onKeyDown={toggleDarkMode}
							>
								<button type="button" className="w-full h-full font-bold px-8 py-4 dark:text-web3-grad dark:hover:text-white  ">
									My
									{" "}
									{darkModded ? "web2" : "web3"}
									{" "}
									Projects!
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer darkModded={darkModded} />
		</div>
	);
}

export default App;
