import React from "react";
import "../../App.css";
import "../Styled_Component/style";
import {Spotlight} from "../Styled_Component/style";
import Spotlight_Carousel from "./Spotlight_Carousel";

const SpotlightProject = () => {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <Spotlight>
                        <div className="col">
                            <div className="Spotlight_handler">
                                <span className="spotlight">Spotlight. <span className="spotlight_next">Projects you'll love</span></span>
                            </div>
                        </div>
                    </Spotlight>
                </div>

            {/* */}
                    <div className="row main_handler mt-5">
                    <div className="col">
                        <Spotlight_Carousel/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default SpotlightProject;