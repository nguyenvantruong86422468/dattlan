import React from "react";

const Quangcao = (props) => {
    return (
        <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
        >
            <ol className="carousel-indicators">
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={0}
                    className="active"
                />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                <li data-target="#carouselExampleIndicators" data-slide-to={4} />
                <li data-target="#carouselExampleIndicators" data-slide-to={5} />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmTitleGraphic/HO00002385?referenceScheme=HeadOffice&allowPlaceHolder=true" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://gocnhin.com.vn/cdn1/2022/03/share-1024x538-1.jpg" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://static.mservice.io/blogscontents/momo-upload-api-210422152215-637547017356872242.jpg" alt="Third slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://toplist.vn/images/800px/hanh-phuc-mau-940943.jpg" alt="Third slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://thuonghieusanpham.vn/stores/news_dataimages/2022/102022/08/12/in_article/c4c649a330f278ce7d699e262d67d2fc.png?rt=20221008121650" alt="Third slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://ecdn.game4v.com/g4v-content/uploads/2022/06/20102213/top-5-1-game4v-1655695332-24.jpg" alt="Third slide" />
                </div>
                
            </div>
            <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
            
        </div>
    );
};

export default Quangcao;
