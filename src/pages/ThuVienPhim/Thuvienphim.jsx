import React from "react";
import Banner from "../Home/Component/Banner";
import Phimbomtan from "../Home/Component/phimbomtan";
import Phimdangchieu from "../Home/Component/phimdangchieu";
import Phimhoathinh from "../Home/Component/Phimhoathinh";
import Phimhot from "../Home/Component/Phimhot";
import Phimkinhdien from "../Home/Component/phimkinhdien";
import Phimsapramat from "../Home/Component/phimsapramat";
import Phimthieunhi from "../Home/Component/phimthieunhi";


const Thuvienphim = (props) => {
    return (
        <div>
            {/* <Banner /> */}
            <div>
                <div id="Thuvienphim">
                    <Phimhot/>
                    <Phimdangchieu/>
                    <Phimhoathinh/>
                    <Phimbomtan/>
                    <Phimkinhdien/>
                    <Phimsapramat/>
                    <Phimthieunhi/>
                </div>
            </div>


        </div>

    );
};

export default Thuvienphim;
