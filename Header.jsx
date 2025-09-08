// import React from 'react'
// import './Header.css'

// const Header = () => {
//   return (
//     <div className='header'>
//         <div className="header-contents">
//             <h2>Order your favourite food here</h2>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorem, dicta itaque iure fugiat architecto.</p>
//             <button>View Menu</button>
//         </div>
//     </div>
//   )
// }

// export default Header


import React from 'react'
import Slider from 'react-slick'
import './Header.css'

// Import images from assets
import food1 from '../../assets/header_img.png'
import food2 from '../../assets/food_4.png'
import food3 from '../../assets/food_2.png'
const images = [ food1, food2, food3 ]

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }

  return (
    <div className="header">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img src={img} alt={`slide-${idx}`} className="slider-image" />
          </div>
        ))}
      </Slider>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorem, dicta itaque iure fugiat architecto.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
