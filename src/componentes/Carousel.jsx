import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';

const MyCarousel = () => {
  useEffect(() => {
    const bootstrap = require('bootstrap');
  }, []);

  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/propaganda.jpg"
          alt="First slide"
          width={1920}
          height={600}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/propaganda.jpg"
          alt="Second slide"
          width={1920}
          height={600}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
