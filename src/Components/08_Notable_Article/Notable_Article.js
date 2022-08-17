import React, {useState} from "react";
import Slider from "react-slick";
import "../Styled_Component/style";
import "./Notable_Article.css";

const Notable_Article =()=>{

    let [settings ,setSettings]=useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 3000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 2100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });

    const Images = [
        {"key":"1","href":"https://rarible.com/blog/ultimate-starting-guide/", "date":"June 9, 2022","message":"Your Ultimate Guide to Getting Started With NFTs on Rarible", "image":"https://dl.airtable.com/.attachments/cb677d19544e5d548ec66d18739b78aa/66e99351/Onboarding-01.png?ts=1657137063&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=0ce9b54927d94902"},
        {"key":"2","href":"https://rarible.ghost.io/zero-strings-attached-8-top-cc0-projects-you-can-find-on-rarible-com/", "date":"March 23, 2022","message":"Zero strings attached: 8 top CC0 NFT projects you can find on Rarible.com","image":"https://dl.airtable.com/.attachments/1a9cf656bc25094f5e20ee602d9ccbd6/e90fb4df/02strings-1.png?ts=1657137063&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=9fbc3a5544b341c6"},
        {"key":"3","href":"https://rarible.ghost.io/6-things-you-didnt-know-you-could-do-on-rarible-com/", "date":"February 7, 2022","message":"6 Things You Didn’t Know You Could Do on Rarible.com","image":"https://dl.airtable.com/.attachments/86d6cd3259fa9a4ac9455f6d84e09f01/6d2d5f76/6-things---Cover-2.png?ts=1657137063&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=42311173e7af4250"},
        {"key":"4","href":"https://rarible.ghost.io/introducing-multi-wallet-profile-manage-all-your-nfts-under-one-account-on-rarible-com-no-matter-the-blockchain/", "date":"March 17, 2022","message":"Multi-Wallet Profile: manage all your NFTs across different blockchains under one account on Rarible.com","image":"https://dl.airtable.com/.attachments/43a72a79a52b8d2cf06fb152a77ef4c7/cfba9858/Union-Profile-Cover.png?ts=1657137063&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=dca801ad4a70bdd3"},
        {"key":"5","href":"https://rarible.ghost.io/rethinking-rarible-app-nft-portfolio-tracker-and-display-tool/", "date":"March 16, 2022","message":"Rethinking Rarible app: NFT portfolio tracker and display tool","image":"https://dl.airtable.com/.attachments/146c39706582b8c060a977d2d79f88f1/b8be2875/NFT-Portfolio-Screen-01-1.png?ts=1657137063&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=92812a6ca917a7d1"},
        {"key":"6","href":"https://rarible.com/blog/11-top-women-led-pfp-projects-and-whats-it-like-to-own-their-nfts/", "date":"March 8, 2022","message":"11 Top Women-led PFP projects — and What’s it Like to Own Their NFTs","image":"https://dl.airtable.com/.attachments/b7478b7a51627a095eae8f282ac0a313/79380502/6-things---Cover.png?ts=1657137063&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=a09029282b4220c2"},
        {"key":"7","href":"https://rarible.ghost.io/mint-your-own-tezos-collection-on-rarible-com/", "date":"January 25, 2022","message":"Mint your own Tezos collections on Rarible.com","image":"https://dl.airtable.com/.attachments/47e11c6d060712fcad95fd5c5d91f3ff/e4863677/Tezos-Collections.png?ts=1657137063&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=028b7149f5a0d872"},
        {"key":"8","href":"https://rarible.com/blog/community-marketplaces/", "date":"May 24, 2022","message":"Why Community Marketplaces are the future of NFT trading","image":"https://dl.airtable.com/.attachments/16e54f60c774d99bee2c130760665473/c857b6eb/Myth---Cover-2.png?ts=1657137063&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=8cb63d7c3a00a61c"}
    ]

    return (
        <React.Fragment>
            <div  className="notable_article">
                <span>Notable articles</span>
            </div>
            <Slider {...settings} >
                {
                    Images.map(each_nft=>{
                        return(
                            <div  className="carousel_handler">
                                <div className="Carousel-image-parent">
                                    <a className="nft_holder" href={each_nft.href} target="_blank">
                                        <img src={each_nft.image} alt="" className="Notable_image_handler"/>

                                        <div className="nft_message_handler">
                                            <span className="Notable_image_message">{each_nft.message}</span><br/>
                                            <span className="date">{each_nft.date}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </React.Fragment>
    )
};

export default Notable_Article;