import React from "react";
import {Spotlight} from "../Styled_Component/style";
import "../../App.css";
import "../../App.css";
import Trending_NFT_Carousel from "./Trending_NFT_Carousel";

const
    Trending_NFT = () => {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <Spotlight>
                        <div className="col">
                            <div className="Spotlight_handler">
                                <span className="spotlight">Trending NFTs</span>
                            </div>
                        </div>
                    </Spotlight>
                </div>

                {/* */}
                <div className="row main_handler mt-5">
                    <div className="col">
                        <Trending_NFT_Carousel/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Trending_NFT;