import React from "react";
import ".//collection.css";
import "../Styled_Component/style";
import {div} from "mdb-ui-kit/src/js/mdb/perfect-scrollbar/lib/dom";

const Collections = () => {

    const collections = [{"id":1,"first_name":"Seekers Fap","cost_eth":332,"floor_eth":95,"dollar":407.2,"increase_rate":79.9, "image":"https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120"},
        {"id":2,"first_name":"Art Blocks Box","cost_eth":106.02,"floor_eth":0.04,"dollar":131.6,"increase_rate":99.9, "image":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/avatar/QmcJMTboitFVH7TxZAxpNjhnBfREHLtw2ow8cuAoeV7yxr"},
        {"id":3,"first_name":"Otherdeed","cost_eth":97.1,"floor_eth":2.8,"dollar":119.1,"decrease_rate":79.6, "image":"https://lh3.googleusercontent.com/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI=s120"},
        {"id":4,"first_name":"Doodles Nag","cost_eth":96,"floor_eth":17.37,"dollar":11.9,"image":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x8a90cab2b38dba80c64b7734e58ee1db38b8992e/avatar/QmSrBBZ118HpXqyTdFdzWsMHKP7KuwrTsKC1sgU1W9zUTx"},
        {"id":5,"first_name":"Milady Maker","cost_eth":78.32,"floor_eth":0.65,"dollar":96.2,"increase_rate":73.7, "image":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x5af0d9827e0c53e4799bb226655a1de152a425a5/avatar/QmVhXvyKsNEDakFsutqQddtotWrn28YNYK28tk5sEkmhLW"},
        {"id":6,"first_name":"Azuki PUNKS","cost_eth":67.88,"floor_eth":13,"dollar":84.3,"decrease_rate":25,"image":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xed5af388653567af2f388e6224dc7c4b3241c544/avatar/QmbJit1a9Jp35D2AZdiTdfLn6JCXQSbn1Lw237qZWfCMfe"},
        {"id":7,"first_name":"Oxmonss GU","cost_eth":56,"floor_eth":23.88,"dollar":68.6,"increase_rate":86.6,"image":"https://lh3.googleusercontent.com/ntBn5aWnCQ1Yi0seKu_xxztYTTm4-uHeViv0WUrWQrg1so4ULSnQ0dBBh9XVLvL5CCabjAaFGAjyiuoup1xsgT2-7XsXHGBY_Bi_7Q=s120"},
        {"id":8,"first_name":"Gutter Cat Gang","cost_eth":54.12,"floor_eth":0.5,"dollar":65.6,"increase_rate":23.1,"image":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xedb61f74b0d09b2558f1eeb79b247c1f363ae452/avatar/Qmcf4febP3kTHsRzmd6JEcPeveftwuZZ45MhnhMaVPP9yz"},
        {"id":9,"first_name":"Ethlizards Series","cost_eth":49.56,"floor_eth":3,"dollar":62,"image":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x16de9d750f4ac24226154c40980ef83d4d3fd4ad/avatar/QmaEUbjCX8Lmmcs5n3vv3uHxt5pNgKqnT5Wfi8WvZLQQQo"},
        {"id":10,"first_name":"IDZ.id-xyz","cost_eth":46.02,"floor_eth":0.01,"dollar":56.9,"decrease_rate":961.5, "image":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x211838a8a587b02de8a02a6edafbfd7277c317d4/avatar/QmYZvvV1qGFdBbgejJVWeSjLStaAEX8jwjQNcJVcvEY22G"},
        {"id":11,"first_name":"Round Open","cost_eth":44,"floor_eth":19.95,"dollar":54.3, "image":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xd92e44ac213b9ebda0178e1523cc0ce177b7fa96/avatar/QmToKint42tGMzyMogUpqfj1mZeVJz4672YzVfhdniAbUA"},
        {"id":12,"first_name":"MutantApeYacht","cost_eth":43,"floor_eth":17.8,"dollar":53.7,"increase_rate":55.3, "image":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x60e4d786628fea6478f785a6d7e704777c86a7c6/avatar/QmaoafyjBy97NKEPZzAD3FK8RcwCJHb263dDJbhCaXPWpo"},
        {"id":13,"first_name":"BASTARD","cost_eth":39.81,"floor_eth":0.2,"dollar":48.6,"image":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x31385d3520bced94f77aae104b406994d8f2168c/avatar/QmRzpLUWfZRBLfQZF6sRZmb2V142NxKVzdAex7vCaSRVuA"},
        {"id":14,"first_name":"Sandbox's","cost_eth":25.44,"floor_eth":1.52,"dollar":31.3,"decrease_rate":46.8, "image":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x5cc5b05a8a13e3fbdb0bb9fccd98d38e50f90c38/avatar/QmWSu76RE2jsun8Ch8f3Kzz3MuXr7ZhcbbVL1EKxDKsQ8V"},
        {"id":15,"first_name":"Regulars","cost_eth":19.18,"floor_eth":0.24,"dollar":23.1,"increase_rate":73.3, "image":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x6d0de90cdc47047982238fcf69944555d27ecb25/avatar/QmX9i9igoNPmxBKv1efDWGShwffE4HnLXNdejoJ1xUVzUM"}
    ]

    return(
        <React.Fragment>

            {/* ------------------- Top Collection Heading ------------------------- */}
            <div className="row top_collection_handle">
                <div className="col-md-4">
                    <div className="Collection_holder">
                        <span className="font-weight-bold text-white" style={{fontSize: "25px"}}>TOP Collections</span>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="button_group">
                        <div className="button_items">
                            <button className="each_button"><span className="day_span">1day</span></button>
                            <button className="each_button"><span className="day_span">7day</span></button>
                            <button className="each_button"><span className="day_span">30day</span></button>
                        </div>
                    </div>
                </div>

                    <div className="col-md-4">
                    <div className="ethereum_holder">
                        <span className="font-weight-bold text-white" style={{fontSize: "16px"}}>Ethereum</span>
                    </div>
                </div>
            </div>

            {/* ------------------- Top Collection Table ------------------------- */}

            <div className="row mt-3 box" style={{marginRight:"100px"}}>
                {
                    collections.map(each_nft => {
                        return(
                            <>
                                <div className="col-md-4" style={{width: "100%"}}>
                                    <button className="button_handler" type="button">
                                        <div className="class_1">

                                            <div className="class_2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="span_1">{each_nft.id}</span>
                                                    <img className="NFT_image" src={each_nft.image} alt=""/>
                                                </div>
                                            </div>

                                            <div className="nft_details_handler">

                                                {/*-------------- NFT Details -------------- */}
                                                <div className="inner_nft_details_handler">
                                                    <div className="part_1">
                                                        <span className="text-white">{each_nft.first_name} <br/></span>
                                                        <span className="floor_eth">Floor:{each_nft.floor_eth} ETH</span>
                                                    </div>

                                                    <div className="part_2">
                                                        <span className="text-white Eth_position">${each_nft.cost_eth} ETH <br/></span>
                                                        <span className="increment_position">
                                                            <span className="floor_eth">${each_nft.dollar}k</span>
                                                            {
                                                                each_nft.increase_rate ?
                                                                <span className="increment">+{each_nft.increase_rate}%</span>:
                                                                    each_nft.decrease_rate ?
                                                                    <span className="decrement">-{each_nft.decrease_rate}%</span>:null
                                                            }

                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </>
                        )
                    })
                }
            </div>

                {/* ---------------- See all 04_Collections Button -------------------- */}

            <div className="row mt-5">
                <div className="col d-flex justify-content-center align-items-center text-center">
                    <a href="https://rarible.com/rankings" className="font-weight-bolder collection_button" type="button">See all collections</a>
                </div>
            </div>

        </React.Fragment>
    )
};
export default Collections;