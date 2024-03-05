import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AddressCarousel = () => {
    const addresses = [
        {
          address: 'Estrada Intendente Magalhães n° 290 , 21341-332',
        },
        {
          address: 'Rod. Washington Luíz, 1375 - Parque Duque, Duque de Caxias - RJ, 25085-008',
        },
      ];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

  return (
    <div style={{ maxWidth: '300px'}}>
    <Slider {...settings}>
            {addresses.map((address, index) => (
                <div key={index} >
                <p>{address.address}</p>
                </div>
            ))}
        </Slider>
    </div>
  );
};

export default AddressCarousel;
