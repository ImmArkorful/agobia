import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown-now";
import Renderer from "../../components/countdown/Renderer";

const CountDownOne = ({ spaceTopClass, spaceBottomClass, bgImg, dateTime }) => {
  return (
    <div
      className={`funfact-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + bgImg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 ml-auto">
            <div className="funfact-content text-center">
              {/* <div className="timer">@babel/helper-builder-react-jsx
                <Countdown date={new Date(dateTime)} renderer={Renderer} />
              </div> */}
              <div className="funfact-btn btn-hover d-flex flex-row justify-content-around align-items-center">
                <h2>Want to be a seller?</h2>
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                  SIGN UP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CountDownOne.propTypes = {
  bgImg: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default CountDownOne;
