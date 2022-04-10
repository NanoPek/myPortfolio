import ProjectShowcaser from "./components/ProjectShowcaser";
import React, {useState} from "react";

import icon_web2 from "./assets/icon_web2.jpg"
import icon_web3 from "./assets/icon_web3.jpg"

import { FiArrowDown } from 'react-icons/fi';

function App() {

    const [darkModded, setDarkModded] = useState(false);


    const toggleDarkMode = () => {
        setDarkModded(! darkModded);
    };


  return (
      <div className={`${darkModded ? "dark" : ""}`}>
          <header className={"sticky  top-0 left-0 w-screen h-16 shadow-lg  bg-white dark:bg-darkblue"}>
              <div className={"h-full flex items-center cursor-pointer "} onClick={toggleDarkMode}>
                  <img src={ darkModded ? icon_web3 : icon_web2} className={"rounded-3xl max-h-12 mx-2 "}/>
                  <p className={"text-web3-grad"}> 	&#x27F5; Switch to { darkModded ? "web2" : "web3"}</p>
              </div>
          </header>
          <div className={"w-screen dark:bg-darkblue dark:text-white "} >
              <div className={"h-[calc(100vh-64px)] px-6 flex flex-col items-center flex flex-col justify-between"}>
                  <div className={"pt-12"}>
                      <p className={" text-xl"} >
                          Hey, my name is
                      </p>
                      <h1 className={"text-4xl font-bold"}>
                          Jeremie Carrez.
                      </h1>
                      <h2 className={"text-3xl font-bold "}>
                          I build things for web2 and web3.
                      </h2>
                      <p className={"text-justify mt-2"}>
                          Passionate about computer science, I spend most of my time learning about new technologies and developing various projects. I'm currently attending optional entrepreneurship courses to discover the entrepreneurial world.
                      </p>
                  </div>
                  <div className={"flex flex-col items-center my-6"}>
                      <p className={"text-xl text-myRose"}>
                          Discover my projects
                      </p>
                      <FiArrowDown className={"text-5xl text-myRose"}/>
                  </div>
                  {/*                  <div className={"text-myRose bg-myRose rounded-lg p-1  mt-6  hover:text-white dark:border-web3-grad"}>
                      <div className={"bg-white rounded-lg w-full h-full  hover:bg-myRose dark:bg-darkblue dark:hover:bg-transparent"}>
                          <button className={"w-full h-full px-8 py-4 dark:text-web3-grad dark:hover:text-white"}>
                              Check out my projects!
                          </button>
                      </div>
                  </div>*/}
              </div>
              <div className={"flex flex-col px-6 pb-16"}>
                  <div className={"flex items-center"}>
                      <div className={"border-t border-darkblue flex-grow "}/>
                      <h2 className={"text-3xl text-myRose font-semibold px-1 "}>
                          My Projects
                      </h2>
                      <div className={"border-t border-darkblue flex-grow"}/>
                  </div>
                  {darkModded ?

                      <div className={"flex flex-col items-center mt-6 gap-4"}>
                          <ProjectShowcaser
                              name={"opensea"}
                              bigName={"Opensea Marketplace Clone"}
                              description={"A Kirby themed Opensea (NFT trading platform) clone on Rinkeby Testnet. An account is linked to each address that sign to the website, enabling profile modification. \n NFT reselling and buying is implemented"}
                              skills={[["full-stack","#FF782C"],["React","#61DAFB"],["Sanity.io","#f03e2f"],["Solidity","#363636"],["ThirdWeb","#7908b8"]]}
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

                      <div className={"flex flex-col items-center mt-6 gap-4"}>
                          <ProjectShowcaser
                              name={"pieces"}
                              bigName={"Customizable Coin System"}
                              description={"A web app / PWA to gamify and reward events participation.\n" +
                                  "Profile creation, item shop and leaderboard implemented, coins are given via a smart QR code system scanned at every event."}
                              skills={[["full-stack","#FF782C"],["Vue","#42B883"],["Nuxt","#00DC82"],["Strapi","#8E75FF"]]}
                          />
                          <ProjectShowcaser
                              name={"hi7haut"}
                              bigName={"Showcase website"}
                              description={"A website to present a student association and post news and articles."}
                              skills={[["design","#FF7BAF"],["Vue","#42B883"],["Nuxt","#00DC82"]]}
                              externalLink={"https://www.hi7haut.fr/"}
                          />
                      </div>

                  }
                  <div className={"text-myRose bg-myRose rounded-lg p-1  mt-6  hover:text-white dark:border-web3-grad"}>
                      <div className={"bg-white rounded-lg w-full h-full  hover:bg-myRose dark:bg-darkblue dark:hover:bg-transparent"} onClick={toggleDarkMode}>
                          <button className={"w-full h-full px-8 py-4 dark:text-web3-grad dark:hover:text-white"}>
                              My {darkModded ? "web2" : "web3"} Projects!
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      )
}

export default App;
