
import React from "react";
import Recipes from '../sub-components/Recipes'
import Blindbox from '../sub-components/Blindbox'
import Features from "../sub-components/Features";
import ContactForm from "../sub-components/ContactForm";
import { useLocation } from "react-router-dom";


const Body = () => {

    const location= useLocation();
const props1={style:{outlineColor:"blue"},placeholder:"Subject",title:"Subject"}
const props2={style:{outlineColor:"blue"},placeholder:"Name",title:"Name"}
const props3={style:{outlineColor:"blue"},placeholder:"Email",title:"Email"}

    return (

        <>
                <main className="app_body">

                  {location.pathname=='/' && (<>
                    <Blindbox />
                    <Recipes />
                    <Features features={[1,2,3]} />
                    <ContactForm input_number={[[1,props1],[2,props2],[3,props3]]}/>
                    </>)}

                </main>

        </>

    )

}

export default Body;