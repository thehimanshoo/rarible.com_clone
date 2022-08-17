import React, {useState} from "react";
import Slider from "react-slick";

const CenterMode =()=>{

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

    const Images = [{"id":"","image":"https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/26db00352d9cb0a8c1272763c2f3fe72/82e5889b/sneakerhead.png?ts=1656252581&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=3f1f482b11b19017"},
        {"id":"","image":"https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/88b05c9f7a37ccb274954b8fb4fb8271/73f87fc3/exclusible.png?ts=1656252581&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=76366f5cec42f85a"},
        {"id":"","image":"https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/de17b3e7cf79bcfa7506e40291e56fa3/3beafe66/metapac2.jpeg?ts=1656252581&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=330c58f106246341"},
        {"id":"","image":"https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/c4ed6624fca018614704e7132c5574f7/2856bc73/tinydino_613.jpg?ts=1656252581&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=c506c56e3fa9ff19"},
        {"id":"","image":"https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/69ee39fe576a96c5f45beef5cf8d0afa/3d9b4319/mfer_new.jpg?ts=1656252581&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=d4c66d5d943814e9"},
        {"id":"","image":"https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/6ff9671f3a367058ecde62dcdd392d72/93302a23/illuminati_nft.jpg?ts=1656252581&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=e88ce87fd1cc70d8"},
        {"id":"","image":"https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/7e07aff087e13a4b862d126a848d6075/2d273294/goblinwtf.jpg?ts=1656252581&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=cc956056b44da31d"},
        {"id":"","image":"https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/b736e10cd98e8bc93b03d81f762e94f9/3dc540bd/800x800RaribleHomepage.png?ts=1656252581&amp;userId=usrXOYiFdvMkwEJIf&amp;cs=375123110a33a323"}]


    return (
        <div>
            <Slider {...settings}>
                {
                    Images.map(each_image=>{
                        return(
                            <div  className="Carousel_handler" key={each_image.id}>
                                <div className="carousel-image-parent">
                                    <a href="">
                                        <img src={each_image.image} alt=""/>
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

export default CenterMode;