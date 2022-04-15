import ProjectShowcaser from "./components/ProjectShowcaser";
import React, {useState} from "react";

import icon_web2 from "./assets/icon_web2.jpg"
import icon_web3 from "./assets/icon_web3.jpg"

import {FiArrowDown, FiMail} from 'react-icons/fi';
import SkillContainer from "./components/SkillContainer";
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import Footer from "./components/Footer";



function App() {

    const [darkModded, setDarkModded] = useState(false);

    const skillsTab = [
        {
            name:"Techs",
            skills:[["Python","#3776aa"],["Java","#ed0000"],["C","#283395"],["JavaScript","#efd81d"],["React","#61DAFB"],["Vue","#42B883"],["Nuxt","#00DC82"],["Node.js","#83cd29"],["Strapi","#8E75FF"],["Sanity.io","#f03e2f"],["Sass, SCSS","#c76494"],["Tailwind","#38bdf8"]],
            thirdWeb:[["Solidity","#363636"],["ThirdWeb","#7908b8"]]
        },
        {
            name:"Tools & else",
            skills:[["Notion","#37352f"],["Figma","#eb4c1d"],["Gsuite","#4285f4"],["Jetbrains","#000000"]],
            thirdWeb:[["HardHat","#f4db00"],["Remix","#2684a2"],["Polygon","#8247e5"]]
        }
    ]


    const toggleDarkMode = () => {
        setDarkModded(! darkModded);
        document.getElementById("root").classList.toggle('dark')
    };


  return (
      <div className={`${darkModded ? "dark w-screen " : "w-screen "}`}>
          <header className={"sticky top-0 left-0 w-screen h-16 shadow-lg  bg-white dark:bg-darkblue flex justify-between items-center "}>
              <div className={"h-full flex items-center cursor-pointer border-myRose hover:font-bold transition "} onClick={toggleDarkMode}>
                  <img src={ darkModded ? icon_web3 : icon_web2} className={"rounded-3xl max-h-12 mx-2 "}/>
                  <p className={"text-web3-grad text-center dark:text-web3-gradd"}> 	&#x27F5; Switch to { darkModded ? "web2" : "web3"}</p>
              </div>
              <div className={"mr-3 text-3xl flex gap-4 lg:mr-8 dark:text-white"}>
                  <a href={"mailto:jeremcarrez@gmail.com"} className={"hover:text-myRose transition-colors"}><FiMail/></a>
                  <a href={"https://github.com/NanoPek"} className={"hover:text-myRose transition-colors"}><FiGithub/></a>
                  <a href={"https://www.linkedin.com/in/j%C3%A9r%C3%A9mie-carrez/"} className={"hover:text-myRose transition-colors"}><FiLinkedin/></a>
                  <a href={"https://twitter.com/NanoPekTo"} className={"hover:text-myRose transition-colors"}><FiTwitter/></a>

              </div>
          </header>
          <div className={"w-screen  dark:bg-darkblue dark:text-white "} >
              <div className={" px-6 flex flex-col items-center flex flex-col justify-between  "}>
                  <div className={"pt-12 flex flex-col gap-2 lg:gap-5 lg:px-16  xl:px-32 2xl:px-64"}>
                      <p className={" text-xl"} >
                          Hey, my name is
                      </p>
                      <h1 className={"text-4xl font-bold lg:text-7xl"}>
                          {darkModded ? "Nano" : "Jeremie Carrez"}.
                      </h1>
                      <h2 className={"text-2xl font-bold lg:text-4xl"}>
                          I build things for web2 and web3.
                      </h2>
                      <p className={"text-justify mt-2 text-sm lg:text-lg"}>
                          Passionate about computer science, I'm a full-stack french developer spending most of my time learning about new technologies and developing various projects.
                      </p>
                  </div>
                  <div className={"w-full flex flex-col items-center"}>
                      <h2 className={"text-2xl text-myRose mb-4 font-bold dark:text-web3-grad "}>
                          My skills
                      </h2>
                      <div className={"flex flex-col justify-evenly border-b-2 border-l-2 border-myRose lg:flex-row"}>
                          {skillsTab.map((value, index) => {
                              return <SkillContainer key={index} name={value.name} skills={value.skills} thirdWeb={value.thirdWeb} isWeb3={darkModded}/>
                          })}
                      </div>
                  </div>
                  <div className={"flex flex-col items-center my-6"}>
                      <p className={"text-xl text-myRose font-bold dark:text-web3-grad "}>
                          Discover my projects!
                      </p>
                      <FiArrowDown className={"text-5xl mt-4 text-myRose  animate-bounce  "}/>
                  </div>
                  {/*                  <div className={"text-myRose bg-myRose rounded-lg p-1  mt-6  hover:text-white dark:border-web3-grad"}>
                      <div className={"bg-white rounded-lg w-full h-full  hover:bg-myRose dark:bg-darkblue dark:hover:bg-transparent"}>
                          <button className={"w-full h-full px-8 py-4 dark:text-web3-grad dark:hover:text-white"}>
                              Check out my projects!
                          </button>
                      </div>
                  </div>*/}
              </div>
              <div className={"flex flex-col px-6"}>
                  <div className={"flex items-center"}>
                      <div className={"border-t border-darkblue flex-grow "}/>
                      <h2 className={"text-3xl text-myRose font-semibold px-1 dark:text-web3-grad "}>
                          My Projects
                      </h2>
                      <div className={"border-t border-darkblue flex-grow"}/>
                  </div>
                  {darkModded ?

                      <div className={"grid grid-cols-1 items-center mt-6 gap-4 lg:grid-cols-2 xl:grid-cols-3"}>
                          <ProjectShowcaser
                              name={"opensea"}
                              bigName={"Opensea Marketplace Clone"}
                              description={"A Kirby themed Opensea (NFT trading platform) clone on Rinkeby Testnet. An account is linked to each address that sign to the website, enabling profile modification. \n NFT reselling and buying is implemented"}
                              skills={[["full-stack","#FF782C"],["React","#61DAFB"],["Sanity.io","#f03e2f"],["Solidity","#363636"],["ThirdWeb","#7908b8"],["Tailwind","#38bdf8"]]}
                              github={"https://github.com/NanoPek/kirby-marketplace"}
                              externalLink={"https://kirby-marketplace.vercel.app/"}
                          />
                          <ProjectShowcaser
                              name={"DAO"}
                              bigName={"Kirby's DAO"}
                              description={"A Kirby themed DAO on Rinkeby Testnet. Mint a NFT to access and vote in the DAO. DAO's Token repartion is showed as well as all proposals currently available."}
                              skills={[["full-stack","#FF782C"],["React","#61DAFB"],["Solidity","#363636"],["ThirdWeb","#7908b8"]]}
                              github={"https://github.com/NanoPek/buildspace-dao-starter"}
                              externalLink={"https://kirby-s-dao.vercel.app/"}
                          />
                          <ProjectShowcaser
                              name={"ENS"}
                              bigName={"Custom ENS Domain Provider"}
                              description={"A Custom .kirby ENS Domain Provider on Mumbai ( L2 Polygon Testnet). Mint a custom .kirby domain and link it with another link, a custom text or a gif. All domains are showed in the website and accessible by anyone."}
                              skills={[["full-stack","#FF782C"],["React","#61DAFB"],["Polygon","#8247e5"],["Solidity","#363636"],["ThirdWeb","#7908b8"]]}
                              github={"https://github.com/NanoPek/domain-starter"}
                              externalLink={"https://kirby-domain.vercel.app/"}
                          />
                      </div> :

                      <div className={"grid grid-cols-1 items-center mt-6 gap-4 lg:grid-cols-2"}>
                          <ProjectShowcaser
                              name={"pieces"}
                              bigName={"Customizable Coin System"}
                              description={"A web app / PWA to gamify and reward events participation.\n" +
                                  "Profile creation, item shop and leaderboard implemented, coins are given via a smart QR code system scanned at every event."}
                              skills={[["full-stack","#FF782C"],["Vue","#42B883"],["Nuxt","#00DC82"],["Strapi","#8E75FF"],["Tailwind","#38bdf8"]]}
                          />
                          <ProjectShowcaser
                              name={"hi7haut"}
                              bigName={"Showcase website"}
                              description={"A website to present a student association and post news and articles."}
                              skills={[["design","#FF7BAF"],["Vue","#42B883"],["Nuxt","#00DC82"]]}
                              externalLink={"https://www.hi7haut.fr/"}
                              github={"https://github.com/NanoPek/hi7haut-vitrine"}
                          />
                          <ProjectShowcaser
                              name={"cadavrexquis"}
                              bigName={"CadavrExquis"}
                              description={'A game website where players can play the graphical version of "Cadavre Exquis"  online.'}
                              skills={[["React","#61DAFB"],["Node.js","#83cd29"],["p5.js","#ed225d"]]}
                          />
                          <ProjectShowcaser
                              name={"portfolio"}
                              bigName={"This portfolio :)"}
                              description={"My personal e-portfolio ! Don't forget to check my web3 projects 🦄"}
                              skills={[["design","#FF7BAF"],["React","#61DAFB"],["Tailwind","#38bdf8"]]}
                              github={"https://github.com/NanoPek/myPortfolio"}
                          />
                      </div>

                  }
                  <div className={"text-myRose  flex   my-6    justify-center"}>
                      <div className={"bg-myRose p-1 rounded-lg hover:text-white dark:border-web3-grad xl:w-1/5 2xl:w-1/4"}>
                          <div className={"bg-white rounded-lg  h-full  hover:bg-myRoseEluded dark:bg-darkblue dark:hover:bg-transparent transition-colors "} onClick={toggleDarkMode}>
                              <button className={"w-full h-full font-bold px-8 py-4 dark:text-web3-grad dark:hover:text-white  "}>
                                  My {darkModded ? "web2" : "web3"} Projects!
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <Footer darkModded={darkModded}/>
      </div>
      )
}

export default App;
