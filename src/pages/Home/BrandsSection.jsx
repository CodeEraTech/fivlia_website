import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import product1 from '../../images/category-baby-care.jpg';
import product2 from '../../images/category-atta-rice-dal.jpg';
import product3 from '../../images/category-bakery-biscuits.jpg';
import product4 from '../../images/category-chicken-meat-fish.jpg';
import product5 from '../../images/category-cleaning-essentials.jpg';
import product6 from '../../images/category-dairy-bread-eggs.jpg';
import product7 from '../../images/category-instant-food.jpg';
import product8 from '../../images/category-pet-care.jpg';
import product9 from '../../images/category-snack-munchies.jpg';
import product10 from '../../images/category-tea-coffee-drinks.jpg';

const BrandsSection = () => {
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="container">
      <div className="col-12">
        <div className="mb-6">
          <div className="section-head text-center mt-8">
            <h3 className="h3style" data-title="Shop Popular Categories">
              Top Brands
            </h3>
            <div className="wt-separator bg-primarys"></div>
            <div className="wt-separator2 bg-primarys"></div>
          </div>
        </div>
      </div>
      <Slider {...settings2}>
        <div className="m-1">
          <div className="partner-list">
            <img
              src={product1}
              style={{ objectFit: "cover" }}
              className="img-fluid "
              alt="product"
            />
            <h6 className="card-title partner">
              <div>Baby Care</div>
            </h6>
          </div>
        </div>
        <div className="m-1">
          <div className="partner-list">
            <img
              src={product2}
              style={{ objectFit: "cover" }}
              className="img-fluid"
              alt="product"
            />
            <h6 className="card-title">
              <div>Atta, Rice &amp; Dal</div>
            </h6>
          </div>
        </div>
        <div className="m-1">
          <div className="partner-list">
            <img
              src={product3}
              style={{ objectFit: "cover" }}
              className="img-fluid"
              alt="product"
            />
            <h6 className="card-title">
              <div>Bakery &amp; Biscuits</div>
            </h6>
          </div>
        </div>
        <div className="m-1">
          <div className="partner-list">
            <img
              src={product4}
              style={{ objectFit: "cover" }}
              className="img-fluid"
              alt="product"
            />
            <h6 className="card-title">
              <div>Chicken, Meat &amp; Fish</div>
            </h6>
          </div>
        </div>
        <div className="m-1">
          <div className="partner-list">
            <img
              src={product5}
              style={{ objectFit: "cover" }}
              className="img-fluid"
              alt="product"
            />
            <h6 className="card-title">
              <div>Cleaning Essentials</div>
            </h6>
          </div>
        </div>
        <div className="m-1">
          <div className="partner-list">
            <img
              src={product6}
              style={{ objectFit: "cover" }}
              className="img-fluid"
              alt="product"
            />
            <h6 className="card-title">
              <div>Dairy, Bread &amp; Eggs</div>
            </h6>
          </div>
        </div>
        <div className="m-1">
          <div className="partner-list">
            <img
              src={product7}
              style={{ objectFit: "cover" }}
              className="img-fluid"
              alt="product"
            />
            <h6 className="card-title">
              <div>Instant Food</div>
            </h6>
          </div>
        </div>
        <div className="m-1">
          <div className="partner-list">
            <img
              src={product8}
              style={{ objectFit: "cover" }}
              className="img-fluid"
              alt="product"
            />
            <h6 className="card-title">
              <div>Pet Care</div>
            </h6>
          </div>
        </div>
        <div className="m-1">
          <div className="partner-list">
            <img
              src={product9}
              style={{ objectFit: "cover" }}
              className="img-fluid"
              alt="product"
            />
            <h6 className="card-title">
              <div>Snack &amp; Munchies</div>
            </h6>
          </div>
        </div>
        <div className="m-1">
          <div className="partner-list">
            <img
              src={product10}
              style={{ objectFit: "cover" }}
              className="img-fluid"
              alt="product"
            />
            <h6 className="card-title">
              <div>Tea, Coffee &amp; Drinks</div>
            </h6>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BrandsSection; 