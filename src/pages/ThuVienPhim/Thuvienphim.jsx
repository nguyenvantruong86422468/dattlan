import React from "react";
import Banner from "../Home/Component/Banner";
import Phimhot from "../Home/Component/Phimhot";


const Thuvienphim = (props) => {
    return (
        <div>
            <Banner />
            <div>
                <div id="Thuvienphim">
                    <p> Danh sách phim hot </p>
                    <Phimhot/>
                    


                </div>
            </div>


        </div>

    );
};

export default Thuvienphim;
