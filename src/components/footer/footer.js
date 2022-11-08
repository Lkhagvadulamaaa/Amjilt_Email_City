import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="f-container">
        <div className="f-full">
          <div className="f-box">
            <div className="f-text">
              <div className="f-text1">
                <h1 className="roboto">Үндсэн цэс</h1>
                <div className="f-line"></div>
                <ul>
                  <li>
                    <a href="#" className="roboto">
                      Нүүр хуудас
                    </a>
                  </li>
                  <li>
                    <a href="#" className="roboto">
                      Бидний тухай
                    </a>
                  </li>
                  <li>
                    <a href="#" className="roboto">
                      Бусад
                    </a>
                  </li>
                  <li>
                    <a href="#" className="roboto">
                      Холбоо барих
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="f-box">
            <div className="f-text">
              <div className="f-text1">
                <h1 className="roboto">Үйлчилгээ</h1>
                <div className="f-line"></div>
              </div>
            </div>
          </div>
          <div className="f-box">
            <div className="f-text">
              <div className="f-text1">
                <h1 className="roboto">Хүргэлт</h1>
                <div className="f-line"></div>
                <ul>
                  <li>
                    <a href="#" className="roboto">
                      Та бараагаа өөрийн биеэр ирж авах боломжтой
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="f-box">
            <div className="f-text">
              <div className="f-text1">
                <h1 className="roboto">Холбоо барих</h1>
                <div className="f-line"></div>

                <div className="f-li">
                  <ul>
                    <li className="roboto">
                      Хаяг: Компьютер Ланд, Улаанбаатар хот
                    </li>
                    <li className="roboto">Утас: (+976)75757599</li>
                    <li className="roboto">Имэйл: citycomputer421@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="f-bottom">
        <h1 className="roboto">Copyright 2022</h1>
      </div>
    </div>
  );
};

export default Footer;
