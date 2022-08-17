import React, {useState} from "react";
import Slider from "react-slick";
import "../Styled_Component/style";
import "../../App.css";

const Trending_NFT_Carousel =()=>{

    let [settings]=useState({
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

    const Images = [
        {"id":"1","href":"https://rarible.com/token/0xd2f668a8461d6761115daf8aeb3cdf5f40c532c6:1424?tab=details","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0xd2f668a8461d6761115daf8aeb3cdf5f40c532c6:1424/1a59b7fatv1"},
        {"id":"2","href":"https://rarible.com/token/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270:328000245?tab=details","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270:328000245/1e948ed1tv1"},
        {"id":"3","href":"https://rarible.com/token/0x7f7685b4cc34bd19e2b712d8a89f34d219e76c35:2832?tab=details","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0x7f7685b4cc34bd19e2b712d8a89f34d219e76c35:2832/2fd6a682tv1"},
        {"id":"4","href":"https://rarible.com/token/0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258:69469?tab=bids","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258:69469/f8d7e0f3tv1"},
        {"id":"5","href":"https://rarible.com/token/0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258:83004?tab=details","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258:83004/5f3d0001tv1"},
        {"id":"6","href":"https://rarible.com/token/0x8943c7bac1914c9a7aba750bf2b6b09fd21037e0:3954?tab=details","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0x8943c7bac1914c9a7aba750bf2b6b09fd21037e0:3954/5d2a8e6ctv1"},
        {"id":"7","href":"https://rarible.com/token/0x5dff0b226fde7085a850aff06e2ea62d1ad506f5:1851?tab=details","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0x5dff0b226fde7085a850aff06e2ea62d1ad506f5:1851/572a18aftv1"},
        {"id":"8","href":"https://rarible.com/token/0x5dff0b226fde7085a850aff06e2ea62d1ad506f5:7864?tab=details","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0x5dff0b226fde7085a850aff06e2ea62d1ad506f5:7864/396985bftv1"},
        {"id":"9","href":"https://rarible.com/token/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270:99000177?tab=details","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270:99000177/b49c5376tv1"},
        {"id":"10","href":"https://rarible.com/token/0x495f947276749ce646f68ac8c248420045cb7b5e:103964089402971035322194754460519211901162239038652937872902470917966434140161?tab=owners","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0x495f947276749ce646f68ac8c248420045cb7b5e:103964089402971035322194754460519211901162239038652937872902470917966434140161/a45013a9tv1"},
        {"id":"11","href":"https://rarible.com/token/flow/A.5b82f21c0edf76e3.StarlyCard:20096?tab=details","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/FLOW-A.5b82f21c0edf76e3.StarlyCard:20096/411c0063tv1"},
        {"id":"12","href":"https://rarible.com/token/polygon/0xfbcef064c6a741324e4157ca23eb164b6704f144:92842538827783644300283202757602569152016942647900593138735894987222517022811?tab=details","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/POLYGON-0xfbcef064c6a741324e4157ca23eb164b6704f144:92842538827783644300283202757602569152016942647900593138735894987222517022811/9607d638tv1"},
        {"id":"13","href":"https://rarible.com/token/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d:1949?tab=details","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d:1949/c2eff907tv1"},
        {"id":"14","href":"https://rarible.com/token/0xd0318da435dbce0b347cc6faa330b5a9889e3585:3043?tab=details","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0xd0318da435dbce0b347cc6faa330b5a9889e3585:3043/cffbc68etv1"},
        {"id":"15","href":"https://rarible.com/token/0xed5af388653567af2f388e6224dc7c4b3241c544:1927?tab=details","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0xed5af388653567af2f388e6224dc7c4b3241c544:1927/993ec865tv1"},
        {"id":"16","href":"https://rarible.com/token/0xf793a77e32a0e5c0cd28383e1e04bbc66ee52438:8196?tab=details","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0xf793a77e32a0e5c0cd28383e1e04bbc66ee52438:8196/ab8c9693tv1"},
        {"id":"17","href":"https://rarible.com/token/0x60e4d786628fea6478f785a6d7e704777c86a7c6:11246?tab=details","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0x60e4d786628fea6478f785a6d7e704777c86a7c6:11246/9fc57163tv1"},
        {"id":"18","href":"https://rarible.com/token/0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258:63367?tab=details","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258:63367/a8efaaeetv1"},
        {"id":"19","href":"https://rarible.com/token/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d:2491?tab=details","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d:2491/30707baatv1"},
        {"id":"20","href":"https://rarible.com/token/0x2b841d4b7ca08d45cc3de814de08850dc3008c43:4295?tab=details","image":"https://img.rarible.com/prod/image/upload/t_image_preview/prod-itemImages/0x2b841d4b7ca08d45cc3de814de08850dc3008c43:4295/9e5578ddtv1"}
    ]

    return (
        <div>
            <Slider {...settings}>
                {
                    Images.map(each_nft=>{
                        return(
                            <div  className="Carousel_handler" key={each_nft.id}>
                                <div className="carousel-image-parent">
                                    <a href={each_nft.href}>
                                        <img src={each_nft.image} alt="" className="NFT_image_handler"/>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
};

export default Trending_NFT_Carousel;