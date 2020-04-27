import React, { Component } from "react";
import filterImage from "../../Images/Filter-nav-left.png";
//import arrowdown from "../../Images/filter-nav-right.png";
import minus from "../../Images/Category-minus.png";
import plus from "../../Images/Category-plus.png";
import highshoe from "../../Images/Highshoe.png";
import lowshoe from "../../Images/Lowshoe.png";
import midshoe from "../../Images/Midshoe.png";
import flatformshoe from "../../Images/Flatformshoe.png";
import slipshoe from "../../Images/Slipshoe.png";
import hearticon from "../../Images/Heart-icon.png";
import "./Category.scss";

class Category extends Component {
  constructor() {
    super();
    this.state = {
      click: [false, false, false, false, false],
      clickFilter: false,
      clickNewproduct: false,
      mouseOverShow: false,
    };
  }

  handleClick = (num) => {
    let arr = this.state.click;

    arr[num] = !arr[num];

    this.setState({
      click: arr,
      //isFilterHide: "Filter-clicked"
    });
  };

  handleFilterClick = () => {
    this.setState({
      clickFilter: !this.state.clickFilter,
    });
  };

  handleNewproduct = () => {
    this.setState({
      clickNewproduct: !this.state.clickNewproduct,
    });
  };

  mouseOver = () => {
    this.setState({
      mouseOverShow: !this.state.mouseOverShow,
    });
  };

  render() {
    return (
      <div className="Category">
        {this.state.mouseOverShow ? (
          <div>첫 번째 경우</div>
        ) : (
          <div>두 번째 경우</div>
        )}
        <div className="dashboard">
          <div className="location-user">
            <a
              className="home"
              href="/https://www.converse.co.kr/"
              target="_blank"
            >
              Home
            </a>
            <a
              className="sinbal"
              herf="/https://www.converse.co.kr/category/shoes"
              target="_blank"
            >
              신발
            </a>
          </div>
          <div className="dashboard-image-part">
            <div className="dashboard-image-inside">
              <img
                className="dashImage1"
                src="https://image.converse.co.kr/cmsstatic/structured-content/15400/D-converse-SP20-PWH-Best-Sellers-.jpg"
                alt="shoes"
              />
              {/* <img className = "dashImage1" src="https://image.converse.co.kr/cmsstatic/structured-content/15400/overview_plp_title_bn_mc.jpg" alt="shoes1" /> */}
              <div className="dash-text-center">SHOES</div>
            </div>
          </div>
        </div>
        <div className="filter-nav">
          <div className="filter-nav-inside">
            <button
              className={"filter-nav-button"}
              onClick={this.handleFilterClick}
            >
              <div
                className={
                  this.state.clickFilter ? "change-filter" : "filter-nav-button"
                }
              >
                <span className="hide-filter">필터 숨기기</span>
                <img src={filterImage} alt="filter" />
              </div>
            </button>
            <div className="filter-nav-center">
              <div className="product-count">
                <span> 총 175개의 상품</span>
              </div>
            </div>
            <div className="filter-nav-newproducts">
              {/* onClick={this.handleNewproduct}> */}
              {/* <span className="new-product">신상품순</span> */}
              <div className="new-product-dropdown">
                {/* <labal for="products"></labal>  */}

                <select className="option-products">
                  <option value="newproduct">신상품순</option>
                  <option value="highpriority">인기상품순</option>
                  <option value="highprice">높은가격순</option>
                  <option value="lowprice">낮은가격순</option>
                </select>
              </div>
              {/* <img src={arrowdown} alt="arrow"/> */}
            </div>
          </div>
        </div>
        <div className="category-bottom">
          <div
            className={
              this.state.clickFilter ? "filter-clicked" : "category-bottom-left"
            }
          >
            <div className="left-inside">
              <div className="left-inside-border">
                <div
                  className={
                    this.state.click[0]
                      ? "left-inside-box-hover"
                      : "left-inside-box"
                  }
                  // className="left-inside-box"
                >
                  <div
                    className="box-detail-title"
                    onClick={() => {
                      this.handleClick(0);
                    }}
                  >
                    <span>구분</span>
                    <img src={this.state.click[0] ? plus : minus} alt="icon" />
                  </div>
                  <div
                    className={
                      this.state.click[0] ? "box-ddd" : "box-detail-inside"
                    }
                    // style={{ display: this.state.click[0] ? "none" : "block" }}
                  >
                    {/* ${this.state.click[0]?"a":""}`} > */}

                    {!this.state.click[0] && (
                      <div className="details1">
                        <div className="inside1">
                          <a className="inside-detail-top" herf="/#">
                            <input
                              type="checkbox"
                              className="checkbox"
                              name="top"
                            />
                            <label for="top">남성</label>
                          </a>
                        </div>
                        <div className="inside1">
                          <a className="inside-detail-top" herf="/#">
                            <input
                              type="checkbox"
                              className="checkbox"
                              name="bottom"
                            />
                            <label for="bottom">여성</label>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="left-inside-box">
                  <div
                    className="box-detail-title"
                    onClick={() => {
                      this.handleClick(1);
                    }}
                  >
                    <span>제품타입</span>
                    <img src={this.state.click[1] ? plus : minus} alt="icon" />
                  </div>
                  <div
                    className="box-detail-inside"
                    style={{ display: this.state.click[1] ? "none" : "block" }}
                  >
                    <div className="details1">
                      {/* <div className="inside1">
                        <a className="inside-detail-top" herf="/#">
                          <input
                            type="checkbox"
                            className="checkbox"
                            name="top"
                          />
                          <label for="top">뮬</label>
                        </a>
                      </div> */}
                      <div className="inside2">
                        <a className="inside-detail-top" herf="/#">
                          <input
                            type="checkbox"
                            className="checkbox"
                            name="top"
                          />
                          <label for="top">스니커즈</label>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="left-inside-box">
                  <div
                    className="box-detail-title"
                    onClick={() => {
                      this.handleClick(2);
                    }}
                  >
                    <span>색상</span>
                    <img src={this.state.click[2] ? plus : minus} alt="icon" />
                  </div>
                  <div
                    className="box-detail-inside"
                    style={{ display: this.state.click[2] ? "none" : "block" }}
                  >
                    <div className="details1">
                      <div className="color-dots">
                        <a
                          className="dotdotdot black"
                          href="/#"
                          target="_blank"
                        ></a>
                        <a
                          className="dotdotdot blue"
                          href="/#"
                          target="_blank"
                        ></a>
                        <a
                          className="dotdotdot green"
                          href="/#"
                          target="_blank"
                        ></a>
                        <a
                          className="dotdotdot navy"
                          href="/#"
                          target="_blank"
                        ></a>
                        <a
                          className="dotdotdot purple"
                          href="/#"
                          target="_blank"
                        ></a>
                        <a
                          className="dotdotdot brown"
                          href="/#"
                          target="_blank"
                        ></a>
                        <a
                          className="dotdotdot grey"
                          href="/#"
                          target="_blank"
                        ></a>

                        <a
                          className="dotdotdot khaki"
                          href="/#"
                          target="_blank"
                        ></a>
                        <a
                          className="dotdotdot beige"
                          href="/#"
                          target="_blank"
                        ></a>
                        <a
                          className="dotdotdot red"
                          href="/#"
                          target="_blank"
                        ></a>
                        <a
                          className="dotdotdot orange"
                          href="/#"
                          target="_blank"
                        ></a>
                        <a
                          className="dotdotdot pink"
                          href="/#"
                          target="_blank"
                        ></a>
                        <a
                          className="dotdotdot yellow"
                          href="/#"
                          target="_blank"
                        ></a>
                        <a
                          className="dotdotdot white"
                          href="/#"
                          target="_blank"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="left-inside-box">
                  <div
                    className="box-detail-title"
                    onClick={() => {
                      this.handleClick(3);
                    }}
                  >
                    <span>사이즈</span>
                    <img src={this.state.click[3] ? plus : minus} alt="icon" />
                  </div>
                  <div
                    className="box-detail-inside"
                    style={{ display: this.state.click[3] ? "none" : "block" }}
                  >
                    <div className="details1">
                      <div className="shoe-size">
                        <div className="shoe-size-detail">
                          <a className="square-inside" herf="/#">
                            <span>80</span>
                          </a>
                          <a className="square-inside">
                            <span>85</span>
                          </a>
                          <a className="square-inside">
                            <span>90</span>
                          </a>
                          <a className="square-inside">
                            <span>95</span>
                          </a>
                          <a className="square-inside">
                            <span>100</span>
                          </a>
                          <a className="square-inside">
                            <span>105</span>
                          </a>
                          <a className="square-inside">
                            <span>110</span>
                          </a>
                          <a className="square-inside">
                            <span>170</span>
                          </a>
                          <a className="square-inside">
                            <span>180</span>
                          </a>
                          <a className="square-inside">
                            <span>190</span>
                          </a>
                          <a className="square-inside">
                            <span>200</span>
                          </a>
                          <a className="square-inside">
                            <span>210</span>
                          </a>
                          <a className="square-inside">
                            <span>220</span>
                          </a>
                          <a className="square-inside">
                            <span>225</span>
                          </a>
                          <a className="square-inside">
                            <span>230</span>
                          </a>
                          <a className="square-inside">
                            <span>235</span>
                          </a>
                          <a className="square-inside">
                            <span>240</span>
                          </a>
                          <a className="square-inside">
                            <span>245</span>
                          </a>
                          <a className="square-inside">
                            <span>250</span>
                          </a>
                          <a className="square-inside">
                            <span>255</span>
                          </a>
                          <a className="square-inside">
                            <span>260</span>
                          </a>
                          <a className="square-inside">
                            <span>265</span>
                          </a>
                          <a className="square-inside">
                            <span>270</span>
                          </a>
                          <a className="square-inside">
                            <span>275</span>
                          </a>
                          <a className="square-inside">
                            <span>280</span>
                          </a>
                          <a className="square-inside">
                            <span>285</span>
                          </a>
                          <a className="square-inside">
                            <span>290</span>
                          </a>
                          <a className="square-inside">
                            <span>295</span>
                          </a>
                          <a className="square-inside">
                            <span>300</span>
                          </a>
                          <a className="square-inside">
                            <span>FREE</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="left-inside-box">
                  <div
                    className="box-detail-title"
                    onClick={() => {
                      this.handleClick(4);
                    }}
                  >
                    <span>실루엣</span>
                    <img src={this.state.click[4] ? plus : minus} alt="icon" />
                  </div>
                  <div
                    className="box-detail-inside"
                    style={{ display: this.state.click[4] ? "none" : "block" }}
                  >
                    <div className="details1">
                      <div className="silhouette">
                        <div className="silhouette-detail">
                          <a className="shoe-silhouette">
                            <img
                              className="shoeshoeshoe"
                              src={highshoe}
                              alt="high"
                            />
                            <span>하이</span>
                          </a>
                          <a className="shoe-silhouette">
                            <img
                              className="shoeshoeshoe"
                              src={lowshoe}
                              alt="low"
                            />
                            <span>로우</span>
                          </a>
                          <a className="shoe-silhouette">
                            <img
                              className="shoeshoeshoe"
                              src={midshoe}
                              alt="Mid"
                            />
                            <span>미드</span>
                          </a>

                          <a className="shoe-silhouette">
                            <img
                              className="shoeshoeshoe"
                              src={flatformshoe}
                              alt="Flatform"
                            />
                            <span>플랫폼</span>
                          </a>
                          <a className="shoe-silhouette">
                            <div className="shoe-more">
                              <img
                                className="shoeshoeshoe"
                                src={slipshoe}
                                alt="Slip"
                              />
                              <span>슬립</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="category-bottom-right">
            <div className="product-layout">
              <div className="product-layout-detail">
                <div className="product-detail" onMouseOver={this.mouseOver}>
                  <div className="product-detail-relative">
                    <img
                      className="shoeppp"
                      src="https://image.converse.co.kr/cmsstatic/product/564981C_564981C_hover.jpg?browse=20200219"
                      alt="PinkBackground"
                    />
                    <a className="shoe-detail-page" href="/#"></a>
                    <div className="heart-product-state">
                      <div className="heart-icon">
                        <img
                          className="heart-heart"
                          src={hearticon}
                          alt="hearticon"
                        />
                      </div>
                      <div className="product-state">
                        BEST SELLER NEW ARRIVAL
                      </div>
                    </div>
                    <div className="product-explain">
                      <p className="product-name">
                        <a className="product-name-link" href="/#">
                          척테일러 올스타 데인티 베이직 캔버스
                        </a>
                      </p>
                      <p className="product-price">55,000원</p>
                      <p className="members-only">MEMBERS ONLY</p>
                    </div>
                  </div>
                  <div
                    className={
                      this.state.mouseOverShow
                        ? "show-dotdot black navy"
                        : "product-color-sort"
                    }
                  >
                    2 컬러
                  </div>
                </div>
                <div className="product-detail">
                  <div className="product-detail-relative">
                    <img
                      className="shoeppp"
                      src="https://image.converse.co.kr/cmsstatic/product/167709C_167709C_hover.jpg?browse=20200219"
                    />
                    <a className="shoe-detail-page" href="/#"></a>
                    <div className="heart-product-state">
                      <div className="heart-icon">
                        <img
                          className="heart-heart"
                          src={hearticon}
                          alt="hearticon"
                        />
                      </div>
                      <div className="product-state">NEW ARRIVAL</div>
                    </div>
                    <div className="product-explain">
                      <p className="product-name">
                        척 70 아카이브 프린트 스타 앤 스트라이프
                      </p>
                      <p className="product-price">99,000원</p>
                      <p className="members-only">MEMBERS ONLY</p>
                    </div>
                  </div>
                  <div className="product-color-sort">2 컬러</div>
                </div>
                <div className="product-detail">
                  <div className="product-detail-relative">
                    <img
                      className="shoeppp"
                      src="https://image.converse.co.kr/cmsstatic/product/167911C_167911C_hover.jpg?browse=20200219"
                    />
                    <a className="shoe-detail-page" href="/#"></a>
                    <div className="heart-product-state">
                      <div className="heart-icon">
                        <img
                          className="heart-heart"
                          src={hearticon}
                          alt="hearticon"
                        />
                      </div>
                      <div className="product-state">
                        BEST SELLER NEW ARRIVAL ONLINE ONLY
                      </div>
                    </div>
                    <div className="product-explain">
                      <p className="product-name">척 70 사이키델릭 훕</p>
                      <p className="product-price">95,000원</p>
                      <p className="members-only">MEMBERS ONLY</p>
                    </div>
                  </div>
                  <div className="product-color-sort">4 컬러</div>
                </div>
                <div className="product-detail">
                  <div className="product-detail-relative">
                    <img
                      className="shoeppp"
                      src="https://image.converse.co.kr/cmsstatic/product/167592C_167592C_hover.jpg?browse=20200219"
                    />
                    <a className="shoe-detail-page" href="/#"></a>
                    <div className="heart-product-state">
                      <div className="heart-icon">
                        <img
                          className="heart-heart"
                          src={hearticon}
                          alt="hearticon"
                        />
                      </div>
                      <div className="product-state">
                        NEW ARRIVAL ONLINE ONLY
                      </div>
                    </div>
                    <div className="product-explain">
                      <p className="product-name">
                        척테일러 올스타 사이키델릭 훕
                      </p>
                      <p className="product-price">79,000원</p>
                      <p className="members-only">MEMBERS ONLY</p>
                    </div>
                  </div>
                  <div className="product-color-sort">3 컬러</div>
                </div>
                <div className="product-detail">
                  <img
                    className="shoeppp"
                    src="https://image.converse.co.kr/cmsstatic/product/564981C_564981C_hover.jpg?browse=20200219"
                    alt="PinkBackground"
                  />
                  상품디테일칸
                </div>
                <div className="product-detail">상품디테일칸</div>
                <div className="product-detail">상품디테일칸</div>
                converse!!
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;