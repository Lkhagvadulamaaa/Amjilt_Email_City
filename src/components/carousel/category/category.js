import React from "react";
import "./category.css";
import Slider from "react-slick";
const Home_Category = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };
  return (
    <div className="pictures">
      <div className="p-c">
        <div className="zuragnuud">
          <Slider {...settings} >
          <div className="image1">
            <img
              src="https://citycomputer.mn/wp-content/uploads/2021/10/244430574_372769631197708_7445675981602242287_n-210x296.png"
              alt="/"
            />
          </div>
          <div className="image1">
            <img
              src="https://citycomputer.mn/wp-content/uploads/2021/10/244430574_3071238489872747_7849878185706176289_n-210x296.png"
              alt="/"
            />
          </div>
          <div className="image1">
            <img
              src="https://citycomputer.mn/wp-content/uploads/2021/10/244430945_1296920154113975_4252233590838174336_n-210x296.png"
              alt="/"
            />
          </div>
          <div className="image1">
            <img
              src="https://citycomputer.mn/wp-content/uploads/2021/10/244442327_462509951696017_7355757189671812954_n-210x296.png"
              alt="/"
            />
          </div>
          <div className="image1">
            <img
              src="https://citycomputer.mn/wp-content/uploads/2021/10/244468185_4582375955134462_4154769840069175841_n-210x296.png"
              alt="/"
            />
          </div>
          <div className="image1">
            <img
              src="https://citycomputer.mn/wp-content/uploads/2021/10/244417174_524689225387505_2319179984972185971_n-210x296.png"
              alt="/"
            />
          </div>
          <div className="image1">
            <img
              src="https://citycomputer.mn/wp-content/uploads/2021/10/244417174_524689225387505_2319179984972185971_n-210x296.png"
              alt="/"
            />
          </div>
          <div className="image1">
            <img
              src="https://citycomputer.mn/wp-content/uploads/2021/10/244417174_524689225387505_2319179984972185971_n-210x296.png"
              alt="/"
            />
          </div>
          <div className="image1">
            <img
              src="https://citycomputer.mn/wp-content/uploads/2021/10/244417174_524689225387505_2319179984972185971_n-210x296.png"
              alt="/"
            />
          </div>
          <div className="image1">
            <img
              src="https://citycomputer.mn/wp-content/uploads/2021/10/244417174_524689225387505_2319179984972185971_n-210x296.png"
              alt="/"
            />
          </div>
          <div className="image1">
            <img
              src="https://citycomputer.mn/wp-content/uploads/2021/10/244417174_524689225387505_2319179984972185971_n-210x296.png"
              alt="/"
            />
          </div>
          <div className="image1">
            <img
              src="https://citycomputer.mn/wp-content/uploads/2021/10/244417174_524689225387505_2319179984972185971_n-210x296.png"
              alt="/"
            />
          </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home_Category;
