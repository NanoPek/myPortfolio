import React from 'react';

function SkillContainer(props) {



    return (
        <div className={"w-full border-myRose border-r-2 border-t-2 p-3 flex flex-col justify-between"}>
            <div>
                <p className={"text-center text-xl text-bold border-b-2 border-myRose border-dashed "}> {props.name}</p>
                <div className={"grid grid-cols-3 grid-rows-3 gap-2 mt-4"}>
                    {props.skills.map((value, index) => {
                        return <div key={index} className={"text-white py-1 px-2 text-xs rounded-xl flex justify-center items-center w-24 "} style={{backgroundColor: value[1]}}><p>{value[0]}</p></div>
                    })}
                </div>
            </div>
            {props.thirdWeb && props.isWeb3 &&
                <div className={"mt-4"}>
                    <p className={"text-center text-xl text-bold "}>Web3 related </p>
                    <div className={"grid grid-cols-3 gap-2 mt-4"}>
                        {props.thirdWeb.map((value, index) => {
                            return <div key={index} className={"text-white py-1 px-2 text-xs rounded-xl flex  justify-center items-center w-24 "} style={{backgroundColor: value[1]}}><p>{value[0]}</p></div>
                        })}
                    </div>
                </div>


            }


        </div>
    );
}

export default SkillContainer;