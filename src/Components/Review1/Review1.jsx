import Slider from 'react-slick'
import { Review1CardApi } from '../../assets/Review1CardApi'
import Review1Card from './Review1Card/Review1Card'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from '../SampleNextArrow/SampleNextArrow';
import SamplePrevArrow from '../SamplePrevArrow/SamplePrevArrow';

const Review1 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
  return (
    <>
        <div className=' max-w-[100%] mx-auto'>
            <div className=' w-[90%] mx-auto'>
                <div className="bg-blue-600 p-8">
                    <h2 className="text-white text-3xl font-bold pb-2">Our Students Review</h2>
                    <h1 className="text-white text-4xl font-bold pb-14">What Our Students Are Say's</h1>
                    <div className="w-full relative">
                        <Slider {...settings}>
                            {
                                Review1CardApi.map((student, index) => (
                                <Review1Card key={index} {...student} />
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Review1