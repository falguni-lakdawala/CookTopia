

import React from 'react'
import Images from '../../composable-components/Images'
import abhijeet from '../../../assets/team-members/abhijeet.png'
import editicon from '../../../assets/icons/editicon.svg'
import favrecipe from '../../../assets/illustrations/favouriterecipe-not-found.svg'
import favlist from '../../../assets/illustrations/shoppinglist-not-found.svg'


const ProfileCard = () => {
    return (
        <div class="profile">

            <div className="profilecard">

<Images src={abhijeet} alt={"Profile Image"}/>
<div className="profiledata">
    <p >Abhijeet</p>
    <span className="email">

        <p>Email :</p>
        <p>Abhijeet</p>
    </span>

<Images src={editicon} alt={"Edit icon"}/>

</div>
            </div>
            


            <div className="favouriterecipe">
<h2>Favourite Recipe</h2>
<Images src={favrecipe} alt={"Favourite recipe illustration"}/>
            </div>
        

        <div className="shoppinglist">

            <Images src={favlist} alt={"Favourite shopping list"}/>
        </div>
        
        </div>
    )
}

export default ProfileCard
