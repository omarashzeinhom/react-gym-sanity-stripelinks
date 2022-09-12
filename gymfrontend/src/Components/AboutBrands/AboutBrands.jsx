// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
//MDB Styles
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
//Sanity Client
import { client, urlFor } from "../../client";
import { useEffect, useState } from "react";

export default function AboutBrands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const query = '*[_type == "brands"]';
    client.fetch(query).then((data) => setBrands(data));
  }, []);

  return (
    <>
      <MDBContainer fluid className="py-4 px-2 w-100 ">
        <h5 className="text-white text-center">
          Br<span className="text-info">ands</span>{" "}
        </h5>
        <MDBRow>
          <MDBCol size={12}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper py-4 px-2   rounded-1 w-100 shadow-5-strong "
            >
              {brands.map((brand, index) => (
                <SwiperSlide key={index + brand}>
                  <img
                    src={urlFor(brand.brandimg)}
                    alt="swiperimage"
                    height="150rem"
                    width="150rem"
                    className="rounded-5 shadow-5-strong"
                  />
                  <h5 className="text-white">
                    <em>{brand.brandtitle}</em>
                  </h5>
                </SwiperSlide>
              ))}
            </Swiper>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

/***
 * https://codesandbox.io/s/rhvkt5?file=/src/App.jsx:419-705
 * https://codesandbox.io/s/ud6zx6?file=/src/App.jsx:367-398
 * https://codesandbox.io/s/bkpw8m?file=/src/App.jsx
 * https://swiperjs.com/demos
 *
 * //Assets
 * Icons
 * https://iconduck.com/
 * 
 * 
 * //BackEnd Groq
 * https://www.sanity.io/docs/how-queries-work
 * https://www.sanity.io/docs/query-cheat-sheet
 * https://www.sanity.io/docs/groq
 */
