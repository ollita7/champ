import React, { ReactElement, useEffect } from "react";
import { ROUTES } from "../../navigation/constants";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

export interface INotFoundProps {}

//TODO: need to integrate with endpoint
const NotFound: React.FC<INotFoundProps> = ({ ...props }): ReactElement => {
  const navigate = useNavigate();
  
  const notFound = {
    imgSrc: "https://i.stack.imgur.com/6M513.png",
    title: "It's not you, it's us!",
    desc: "Sorry, we couldn't finde the page, But don't worry, you can find plenty of other things on our homepage!"
  }
  const handleNavigateApplicationScreen = () => {
    navigate(`${ROUTES.HOME}`);
  };

  return (
    <div id="notfound" className="page-content">
      <div className="row image">
        <img src={notFound.imgSrc} className='img'/>
      </div>
      <div className="row title">
        <h2>{notFound.title}</h2>
      </div>

      <div className="row desc">
        <h4>{notFound.desc}</h4>
      </div>
      <div className="row image">
        <button className="button-form primary" onClick={handleNavigateApplicationScreen}>
          Take me back to homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
