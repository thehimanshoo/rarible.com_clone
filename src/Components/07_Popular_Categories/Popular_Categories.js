import React, {useState} from "react";
import "../Styled_Component/style";
import './Popular_Categories.css';
import Slider from "react-slick";
import "../Styled_Component/style"

const Popular_Categories = () => {
    let [settings ,setSettings]=useState({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
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
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    const nft_image = [{"id":"1","background":"transparent","first_name":"PFP","href":"https://rarible.com/explore/all?category=pfp","image":"https://dl.airtable.com/.attachments/3e7e50d0d839a17f5b61b31a51f6fc5a/c6b73584/PFP.png?ts=1656572455&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=a69534659b0ca722"},
        {"id":"2","first_name":"Art","href":"https://rarible.com/explore/all?category=art","image":"https://dl.airtable.com/.attachments/563438b41b4fd0833f3c638c467f7b91/5bbf51a5/Art.png?ts=1656572455&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=701c16c6f72fcc66"},
        {"id":"3","first_name":"Metaverse","href":"https://rarible.com/explore/all?category=worlds","image":"https://dl.airtable.com/.attachments/0f1cfaffe9831868c8e1ce5081a4cb11/5888983a/Metaverse.png?ts=1656572455&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=266d387217c81dbf"},
        {"id":"4","first_name":"Domains","href":"https://rarible.com/explore/all?category=ens","image":"https://dl.airtable.com/.attachments/0e1c99ce2371e357de82b431e4230f3a/6ebfbaf5/Domains.png?ts=1656572455&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=3fa69c98cc89d1ad"},
        {"id":"5","first_name":"Photography","href":"https://rarible.com/explore/all?category=photography","image":"https://dl.airtable.com/.attachments/676d85556d099e549fd19853344e2081/736e683a/Photography.png?ts=1656572455&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=51bdc6e5682515fb"},
        {"id":"6","first_name":"Music","href":"https://rarible.com/explore/all?category=music","image":"https://dl.airtable.com/.attachments/547cc6970d5a47378a8c9628a3e43c28/cc27fda8/Music.png?ts=1656572455&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=160da291ce1c1d00"},
        {"id":"7","first_name":"Games","href":"https://rarible.com/explore/all?category=games","image":"https://dl.airtable.com/.attachments/53e8c32bba405aa9c004ad51bd6815e7/85cad676/Games.png?ts=1656572455&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=da0909f75b2a7a65"},
        {"id":"8","first_name":"Sports","href":"https://rarible.com/explore/all?category=sports","image":"https://dl.airtable.com/.attachments/005c4b4da02451f596c66f904c6c7420/3ffde9f0/Sport.png?ts=1656572455&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=f610d846dfdaaae6"},
        {"id":"9","first_name":"NSFW","href":"https://rarible.com/explore/all?category=nsfw","image":"https://dl.airtable.com/.attachments/8efcb66ea158efc2e16e7f8348983498/57fec583/NSFW.png?ts=1656572455&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=af4bf2fbf56771d5"},
        {"id":"10","first_name":"Earning","href":"https://rarible.com/explore/all?category=defi","image":"https://dl.airtable.com/.attachments/a33984e99c694006a88a563a920b8545/99f46cca/PlaceholderLast.png?ts=1656572455&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=f2926dc411554225"}]

    return (
        <div>
            <div className="popular_main p-5">
                <div className="popular_categories_handler">
                    <span className="popular_categories">Popular categories</span>
                </div>
                <Slider  {...settings}>
                    {
                        nft_image.map(each_nft => {
                            return(
                                <div className="card_header">
                                    <div className="inner_card_holder">
                                        <a href={each_nft.href} className="image_holder">
                                            <img src={each_nft.image} alt="" width="347px" height="347px"/> <br/>

                                            <div className="name_handler">
                                                <span className="image_name">{each_nft.first_name}</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
            </div>

    )
};
export default Popular_Categories;

