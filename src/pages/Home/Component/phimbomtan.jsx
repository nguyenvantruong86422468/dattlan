import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card } from "antd";
import { EyeOutlined, LikeOutlined } from "@ant-design/icons";
import { useState } from "react";
import { history } from "../../../App";
import { movieService } from "../../../Service/MovieService";

const { Meta } = Card;

export default function Phimbomtan(props) {
  let arr = [];
  arr.length = 10;

  const RenderCard = () => {
    let [movieArr, setMovieArr] = useState([]);

    useEffect(() => {
      movieService.GetMovieList2()
        .then((result) => {
          setMovieArr(result.data.content);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    return movieArr.map((movie) => {
      return (
        <SwiperSlide className="mb-2" key={movie.maPhim}>
          <Card
            onClick={() => {
              history.push(`/filmdetail/${movie.maPhim}`);
            }}
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <img
                style={{ height: "250px", width: "100%" }}
                alt=""
                src={movie.hinhAnh}
              />
            }
            actions={[
              <EyeOutlined key="detail" />,
              <LikeOutlined key="like" />,
            ]}
          >
            <Meta
              style={{ height: "50px" }}
              title={movie.tenPhim}
              description={movie.biDanh}
            />
          </Card>
        </SwiperSlide>
      );
    });
  };
  return (
    <div className='ori'>
      <h2>Phim bom tấn </h2>
      <Swiper spaceBetween={50} slidesPerView={5} className="text-center ">
        {RenderCard()}
      </Swiper>
    </div>
  );
}
