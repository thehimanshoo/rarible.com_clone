import React from "react";
import {HeaderText} from "../Styled_Component/style";

const Header = () => {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div>
                            <HeaderText>
                            <span className="community_handler">
                                <span>
                                    <span>
                                        <span className="multi_color">Community</span>
                                    </span>
                                </span>-centric<br/>NFT marketplace</span>
                            </HeaderText>
                        </div>
                    </div>
                </div>

                {/* ------------------ Search Bar ------------------ */}

                <div className="row search_wrapper">
                    <div className="col-md-6">
                        <div className="input-group rounded">
                            <input type="search" className="form-control rounded" style={{height: "44px"}} placeholder="Search by collection, NFT or user"
                                   aria-label="Search" aria-describedby="search-addon"/>
                            <span className="input-group-text border-0" id="search-addon">
                                   <button className="border-0 search_icon"><i className="fas fa-search"></i></button>
                            </span>
                        </div>
                    </div>
                </div>

                {/* ------------------ Button After Search Bar ------------------ */}
                <div className="row search_wrapper">
                    <div className="col-md-6">
                        <a href="https://rarible.com/explore/ethereum" className="NFT_button">Ethereum</a>
                        <a href="https://rarible.com/explore/flow" className="NFT_button">Flow</a>
                        <a href="https://rarible.com/explore/polygon" className="NFT_button">Polygon</a>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
};
export default Header;