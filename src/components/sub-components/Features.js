 

import React from 'react'
import FeatureCard from './FeatureCard'

const Features = ({features}) => {
    return (
        <div className="features">

            <FeatureCard features={[[{src:"https://picsum.photos/100/100?random=1",text:"Search recipes",pdata:"lorem ipsum",}],[{src:"https://picsum.photos/100/100?random=2",text:"Nutritional data",pdata:"lorem ipsum",}],[{src:"https://picsum.photos/100/100?random=3",text:"Search ",pdata:"lorem ipsum",}]]} />

        </div>
    )
}

export default Features
