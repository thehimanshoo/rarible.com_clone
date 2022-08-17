import React from "react";
import "./Rarible_Api.css";
import Slider from "react-slick";

const Rarible_Api = () => {
    const APIs = [{"id":1,"first_name":"tiny dinos","href":"https://marketplace.rawrdao.xyz/","arrow_link":"https://marketplace.rawrdao.xyz/","image":"https://dl.airtable.com/.attachments/27333cd5c29dc8e77e0580387314cbe6/84e1f6aa/tinydinoscover.png?ts=1656562726&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=8c6d1e06458da069","about":"cc0 omnichain nft | 10k fully minted for free | no roadmap, just tiny dinos and vibes #rawr", "vol_value":4.1, "background":"rgb(174, 100, 218) none repeat scroll 0 0", "floor_value":0.11},
        {"id":2,"first_name":"mfers by sartoshi","href":"https://mfers.cool/","arrow_link":"https://mfers.cool/","image":"https://dl.airtable.com/.attachments/95e8f4807b91120ff90ab05c7b23fb5c/c99f5181/mferscover.png?ts=1656562726&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=69a075fd8b429e9a","about":"mfers are generated entirely from hand drawings by sartoshi. this project is in the public domain;", "vol_value":41, "background":"rgb(250, 114, 12) none repeat scroll 0 0", "floor_value":2},
        {"id":3,"first_name":"Robotos","href":"https://market.robotos.art/","arrow_link":"https://market.robotos.art/","image":"https://dl.airtable.com/.attachments/a3a6cb1144eb0e9cabbd5a60f28c84b4/856f394e/Robotos.png?ts=1656562726&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=4dd90dac24a1ca09","about":"Robotos is a collection of algorithmically generated droid characters designed by Pablo Stanley", "vol_value":15.4, "background":"rgb(246, 74, 110) none repeat scroll 0 0", "floor_value":0.3},
        {"id":4,"first_name":"CryptosPunks V1","href":"https://v1punks.io/","arrow_link":"https://v1punks.io/","image":"https://dl.airtable.com/.attachments/aa6b9e30bc8caf2ad72e0e65928fc70c/dc326739/CryptoPunksV1.png?ts=1656562726&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=d332ab061ec0db7d","about":"Released on June 9, 2017 by Larva Labs. This is the original ERC-20 token now tradable via a modern ERC-721 wrapper.", "vol_value":19.6, "background":"rgb(60, 33, 191) none repeat scroll 0 0", "floor_value":9},
        {"id":5,"first_name":"Wanderers","href":"https://market.wanderers.ai/","arrow_link":"https://market.wanderers.ai/","image":"https://dl.airtable.com/.attachments/f3e3ce873218d7e99a29637feb2e5c75/fa71bf61/Wanderers.png?ts=1656562726&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=c2023602a21b34b8","about":"The greatest story in the metaverse — and you’ve got a lead role. So suit up, strap in, soar off. Your galactic odyssey awaits.", "vol_value":4.5, "background":"rgb(0, 115, 180) none repeat scroll 0 0", "floor_value":0.16},
        {"id":6,"first_name":"Degeni Verse","href":"https://marketplace.degenape.academy/","arrow_link":"https://marketplace.degenape.academy/","image":"https://dl.airtable.com/.attachments/47a18dd943715db3bb42db76f10dc7bb/266c398e/DAA.png?ts=1656562726&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=43dd83a6cbceac22","about":"Think of Degeniverse as Marvel and The Degenerate Ape Academy as The Avengers.", "sol_value":2.9, "background":"rgb(88, 80, 76) none repeat scroll 0 0", "floor_sol_value":81},
        {"id":7,"first_name":"Meta Angels","href":"https://explore.metaangelsnft.com/","arrow_link":"https://explore.metaangelsnft.com/","image":"https://dl.airtable.com/.attachments/9a9bdf50e5d487c3dc118454bb83b958/2bb67510/MetaAngels.png?ts=1656562726&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=842a7d4c804a5799","about":"A collection of 10,000 unique Meta Angels, generated from more than 400 hand drawn elements.", "vol_value":2.9, "background":"rgb(0, 142, 134) none repeat scroll 0 0", "floor_value":0.16}];

    return(
        <React.Fragment>
            <div className="">
                <div className="parent_handler w-100">

                    {/* ----------- Left Side Content -------------- */}
                    <div className="main_parent">
                        <div className="parent">
                            <div className="left_content_handler">
                                <div>
                                    <span className="built">Built with</span> <br/>
                                    <span className="rarible">Rarible API</span>
                                </div>

                                <div  className="about">
                                    <p>Each web3 community is unique and deserves a custom marketplace with its own look, features, fees</p>
                                </div>

                                <a href="" className="button_handler">
                                    <a href="https://airtable.com/shrZY3oPvz17V9uNN" type="button" target="_blank" className="access_button">Get early access</a>
                                </a>
                            </div>
                        </div>

                        {/* ----------- Right Side Content -------------- */}
                        <div className="d-flex align-items-center parent_custom">
                            {
                                APIs.map(each_nft => {
                                    return(
                                        <Slider>
                                            <div className="card_handler">
                                                <div className="anchor_parent">
                                                    <a style={{background: each_nft.background}} className="anchor" href={each_nft.href} target="_blank">
                                                        <div style={{width: "332px", height: "332px", overflow: "hidden"}}>
                                                            <img className="each_nft" src={each_nft.image} loading="lazy" alt=""/>
                                                        </div>

                                                        <div style={{margin: "8px"}}>
                                                            <div>
                                                                <h4 className='nft_name'>{each_nft.first_name}</h4>
                                                                <p className="nft_details">{each_nft.about}</p>
                                                            </div>
                                                        </div>

                                                        <div className="other_info">
                                                            <div className="bottom_section">
                                                                <span className="vol">Volume</span>
                                                                {
                                                                    each_nft.vol_value ?
                                                                        <span className="price">{each_nft.vol_value}K ETH</span> :
                                                                        each_nft.sol_value ?
                                                                            <span className="price">{each_nft.sol_value}K SOL</span> : null
                                                                }
                                                            </div>

                                                            <div className="bottom_right_section">
                                                                <div className="floor">
                                                                    <span className="vol">Floor</span>
                                                                    {
                                                                        each_nft.floor_value ?
                                                                            <span className="price">{each_nft.floor_value}K ETH</span> :
                                                                            each_nft.floor_sol_value ?
                                                                                <span className="price">{each_nft.floor_sol_value} SOL</span> : null
                                                                    }
                                                                </div>
                                                                <div className="arrow">
                                                                    <a href={each_nft.arrow_link} target="_blank" className="arrow_pointer"> > </a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </a>
                                                </div>
                                            </div>
                                        </Slider>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
};

export default Rarible_Api;