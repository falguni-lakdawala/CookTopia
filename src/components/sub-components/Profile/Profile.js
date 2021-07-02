

import React from 'react'
import Images from '../../composable-components/Images'
import abhijeet from '../../../assets/team-members/abhijeet.png'
import editicon from '../../../assets/icons/editicon.svg'

const ProfileCard = () => {
    return (
        <div class="profile">

            <div className="profilecard">

<Images src={abhijeet} alt={"Profile Image"}/>
<div className="profiledata">
    <p>Abhijeet</p>
    <span className="email">

        <p>Email :</p>
        <p>Abhijeet</p>
    </span>

<Images src={editicon} alt={"Edit icon"}/>

</div>
            </div>
            


            <div className="favouriterecipe">
<h2>Favourite Recipe</h2>

            </div>
        

        <div className="shoppinglist">

            
        </div>
        
        </div>
    )
}

export default ProfileCard
