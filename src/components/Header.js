import {contextapp} from '../App'
import { useContext } from 'react';





const Header=()=>{

const parentcontext=useContext(contextapp);

console.log(parentcontext)

return(

<>
<h1>Hello {parentcontext.Maneesh}</h1>
</>

)

}

export default Header;