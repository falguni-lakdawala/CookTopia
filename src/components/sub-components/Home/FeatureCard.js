import { Link,useHistory} from "react-router-dom";

const FeatureCard = ({ featuresData }) => {
  const history = useHistory();
  return (
    <div>
      {featuresData.type == 1 ? (
        <div>
          <div className="features-listing-text-cont">
            <div className="title" aria-label="Feature title">
              {featuresData.title}
            </div>
            <div className="desciption" aria-label="Feature description">
              {featuresData.description}
            </div>
            <div className="btn-cont">
							<Link to={featuresData.buttonLink}>
								<button
									title={featuresData.buttonText}
									type="button"
									role="button"
									aria-label="Feature button"
								>
									{featuresData.buttonText}
								</button>
							</Link>
            </div>
          </div>
          <div className="features-listing-image">
            <img
              src={featuresData.src}
              alt={featuresData.title}
              aria-label="Feature image"
              role="img"
              loading="lazy"
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="features-listing-image">
            <img
              src={featuresData.src}
              alt={featuresData.title}
              loading="lazy"
            />
          </div>
          <div className="features-listing-text-cont">
            <div className="title" aria-label="Feature Title">
              {featuresData.title}
            </div>
            <div className="desciption" aria-label="feature description">
              {featuresData.description}
            </div>
            <div className="btn-cont">
							{/* <Link to={featuresData.buttonLink}> */}
								<button
									title={featuresData.buttonText}
									type="button"
									role="button"
									aria-label="Feature button"
                  onClick={()=>{
                    const random=Math.floor(Math.random()*500)
                    history.push({pathname:'/recipecontent',state:{id:random,scrollstat:true}})
                  }}
								>
									{featuresData.buttonText}
								</button>
							{/* </Link> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
