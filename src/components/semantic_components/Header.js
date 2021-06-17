import React from 'react'
import Navbar from '../composable-components/Navbar'


const Header=()=>{

const navElements=["Home","About","me"]

// const parentcontext=useContext(contextapp);



return(

<>
<header className="app_header">

    <Navbar navElements={navElements}/>

</header>
</>

)

}

export default Header;