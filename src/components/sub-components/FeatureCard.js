import React from 'react'
import Images from '../composable-components/Images'
import Button from '../composable-components/Button'

const FeatureCard = ({features}) => {
    return (
        <div className="feature_wrapper">
            <h2>Features </h2>
            <div className="features_single">
            {
                features.map((data,i)=>{
                    return(
                    <div className="featuress" key={i.toString()}>
                    <Images src={data[0].src} alt={data[0].alt} />
                    <div className="inputs_wrapper">
                    <p>{data[0].pdata}</p>
                    <Button text={data[0].text} />
                  
                    </div>
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default FeatureCard


