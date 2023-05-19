// Importando os Componentes React Swiper
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Importando os estilos
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carrossel.css";
import { Link } from "react-router-dom";

function Carrossel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <Link to="/sobre">
                        <img src="src\images\imgsobre.png" alt="Imagem" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to="/galeria">
                        <img src="src\images\imgalbum.png" alt="Imagem" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="src\images\imglogo.png" alt="Imagem" referrerPolicy="no-referrer" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel