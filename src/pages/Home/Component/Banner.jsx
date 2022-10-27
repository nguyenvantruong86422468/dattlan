import { Carousel } from 'antd';
import React, { useEffect, useState } from 'react'
import { movieService } from '../../../Service/MovieService';



const contentStyle = {
  height: '750px',
  width: '100%',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

let RenderBanner = () => {

  let [bannerArr, setBannerArr] = useState([])
  useEffect(() => {
    movieService.GetBannerList().then((result) => {
      setBannerArr(result.data.content);
    }).catch((error) => {
      console.log(error)
    })
  }, [])


  return bannerArr.map((banner, index) => {
    return <div key={index}>
      <img style={contentStyle} src="https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmTitleGraphic/HO00002385?referenceScheme=HeadOffice&allowPlaceHolder=true" alt="" />
    
    </div>
  })
}
export default function Banner() {
  
  return (
    <div className='section'>
      <h1>Phim hot</h1>
      <Carousel autoplay>
        {RenderBanner()}
      </Carousel>
    </div>
  )
}
