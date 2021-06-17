
import React from 'react'

const Features = ({ feature_card_data }) => {
    return (
        <div className="features_page">

            {
                feature_card_data.map((data, index) => {
                    <FeatureCard src="" alt="" text="" p_text="" style="" />

                }
            })

        </div>
    )
}

export default Features
