import React from 'react';

import { FiGithub } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';

import background from "./../assets/ProjectShowcaseImages/pieces.png"

function ProjectShowcaser(props) {
    return (
        <div className={"w-full h-full  "}>
            <div className={"z-10 w-full px-3 border-2 border-myRose shadow-xl flex flex-col items-center lg:h-full text-center justify-between"} >

                <p className={"font-bold text-myRose mt-4"}>
                    Featured Project
                </p>
                <p className={"font-bold text-2xl "}>
                    {props.bigName}
                </p>
                { props.externalLink ?
                    <a href={props.externalLink}>
                        <img src={require(`./../assets/ProjectShowcaseImages/${props.name}.png`)} className={"my-4 rounded-lg max-h-96 "}/>
                    </a> :

                    <img src={require(`./../assets/ProjectShowcaseImages/${props.name}.png`)} className={"my-4 rounded-lg max-h-96 "}/>
                }
                <p className={"text-justify "}>
                    {props.description}
                </p>
                <div className={"grid gap-2 grid-cols-3 my-4"}>
                    {props.skills.map((value, index) => {
                        return <div key={index} className={"text-white py-1 px-2 text-xs rounded-xl flex justify-center items-center w-24 "} style={{backgroundColor: value[1]}}><p>{value[0]}</p></div>
                    })}
                </div>
                <div className={"flex gap-4 text-xl mb-6 w-full px-6 "}>
                    { props.github &&
                        <a href={props.github}>
                            <FiGithub />
                        </a>
                    }
                    { props.externalLink &&
                        <a href={props.externalLink}>
                            <FiExternalLink/>
                        </a>
                    }


                </div>
            </div>
    </div>
    );
}

export default ProjectShowcaser;