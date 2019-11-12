import React, { Component } from "react";
import Attractions from "./Attractions";
import Navbar from "./Navbar";
import Schedule from "./Schedule";

import "./styles.scss";
import "./mbStyles.scss";

import { IoIosAdd } from "react-icons/io";

const travelPlan = [
  [
    {
      time: "3:00 p.m.",
      place: "Park Plaza Bangkok Soi 18 曼谷18街麗亭酒店",
      subway: "BTS Asoke / MRT Sukhumvit",
      address:
        "9 Sukhumvit Soi 18, Khwaeng Khlong Toei, Khet Khlong Toei, Krung Thep Maha Nakhon 10110泰國",
      phone: "+66 2 658 7000",
      price: "",
      link: [],
      note: "check in: 2:00 p.m.~\ncheck out: 12:00 p.m.",
      img: []
    },
    {
      time: "10:00 a.m.",
      place: "三頭象神博物館",
      subway: "Chang Erawan 站一號出口",
      address:
        "หมู่ที่ 1 99/9 Bang Mueang Mai, Mueang Samut Prakan District, Samut Prakan 10270泰國",
      phone: "",
      price: "NT412",
      link: [
        [ "blog", "https://www.marieclaire.com.tw/lifestyle/travel/42283"],
        [
          "kkday",
          "https://www.kkday.com/zh-tw/product/11875?cid=5193&ud1=Traditional_C_tw&ud2=dsa&gclid=CjwKCAjw_MnmBRAoEiwAPRRWWznBcS0TLOfybRJpUf4PZHJDzVzid0-skoB_XnRpQCPX0xsq3L19eBoCJVcQAvD_BwE"
        ]
      ],
      note: "開放時間：09:00 - 19:00\n最晚入場時間：18:30\n",
      img: [
        "https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_11875/20170425094338_uNykv/png",
        "https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_11875/20170425094334_R4xYO/png",
        "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/23a5baf0-ancient-siam-5/%E5%8F%A4%E5%9F%8E76%E5%BA%9C%E4%B8%89%E9%A0%AD%E8%B1%A1%E7%A5%9E%E5%8D%9A%E7%89%A9%E9%A4%A8%E9%96%80%E7%A5%A8.webp",
        "https://www.jumpman.tw/wp-content/uploads/joomla/feature/2018-02-27-03-27-00-1165_L.jpg",
        "http://www.emperorkey.co.th/wp-content/uploads/2019/06/erawan-museum-by-vincent-swee-goldenemperor-2.jpg",
        "http://www.emperorkey.co.th/wp-content/uploads/2019/06/erawan-museum-by-vincent-swee-goldenemperor-2.jpg"
      ]
    }
  ],
  [
    {
      place: "丹能莎朵水上市集",
      address: "",
      phone: "",
      price: "",
      link: [
        [
          "kkday",
          "https://www.kkday.com/zh-tw/product/9912?cid=4904&ud1=detail-share&ud2=app-android"
        ]
      ],
      img: [
        "https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_9912/20170818013606_aJLYL/jpg"
      ],
      note:
        "在丹能莎朵水上市集可以體驗泰國人的傳統水上生活，導遊會在解說導覽後會實際乘船進入水上市場，你可以在船上吃到傳統泰式料理、甜點、泰式奶茶等，兩旁水上攤販賣著各式紀念品，遇到有興趣的商品船伕會隨時停下船，讓你慢慢選購！"
    },
    {
      place: "美功鐵道",
      address: "",
      phone: "",
      price: "",
      link: [],
      img: [
        "https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_9912/20170818013648_4sOOY/jpg"
      ],
      note:
        "這是一座泰國的傳統小鎮市集，你可以感受當地人的市場文化，品嚐傳統泰式小吃，最大的特色就是攤販緊貼著鐵軌兩旁擺攤，鐵路就是市場的一部份，當火車鳴笛聲響起，攤販們不慌不忙地收拾，讓火車緩緩通過。每天會有約 3 至 4 班的火車經過，KKday 專屬行程會帶您去看 14:30 進站的火車！"
    },
    {
      place: "樹中佛寺和泰拳公園",
      address: "",
      phone: "",
      price: "",
      link: [],
      img: [
        "https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_9912/20170818013614_7K1ub/jpg",
        "https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_9912/20170905072846_4qtgP/jpg"
      ],
      note:
        "泰國十大靈廟之一，傳說只要將金箔貼在痠痛處，疼痛將會不藥而癒。不管是祈求感情天長地久、身體健康或事業發達都很靈驗。"
    },
    {
      place: "安帕瓦水上市場",
      address: "",
      phone: "",
      price: "",
      link: [],
      img: [
        "https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_9912/20170905080859_KCmdi/jpg"
      ],
      note:
        "安帕瓦可說是近來曼谷周邊最夯的旅遊景點，距離曼谷市區約兩個小時車程，平日是個純樸小鎮，ㄧ到週末，安帕瓦水上市集開門營業，安帕瓦就會搖身一變成為人氣景點，擠滿了泰國本地人及外國遊客。河道上不時有小船攤販，賣著各種美味泰式美食及海鮮，兩旁架高的傳統木造建築，販賣著創意T-shirt、手工藝品和明信片、復古童玩及甜點，琳琅滿目的市集，融合傳統與創新設計，獨特景緻令人流連忘返。"
    },
    {
      place: "螢火蟲船遊",
      address: "",
      phone: "",
      price: "",
      link: [],
      img: [
        "https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_9912/20170905072527_WOniA/jpg"
      ],
      note:
        "安帕瓦螢火蟲船遊帶您乘船迎著陣陣涼風，駛向靜謐的河道，除了樹上隨處可見的螢火蟲，還可欣賞河岸兩旁美麗的民宿，以及當地居民最自然的生活面貌，在美麗的夜晚，悠然寫下浪漫回憶。"
    }
  ]
];

export default class Plan extends Component {
  constructor(props) {
    super(props);
    this.state = {travelPlan: travelPlan, page: "edit"};
  }

  componentWillMount() {
    this.setState({ width: window.innerWidth });
  }

  showSchedule() {
    if (this.state.width <= 460) {
      return <div></div>;
    }
    else{
      return(
        <div className="side">
          <Schedule travel={this.state.travelPlan} />
        </div>);
    }
  }

  updateData = (pData) => {
    pData = JSON.parse(pData);
    this.setState({travelPlan: pData});
  }

  setPage = (pPage) => {
    this.setState({page: pPage});
  }

  render() {
    return (
      <div className = "container row">
        <Navbar travel = {this.state.travelPlan}
                update = {this.updateData}
                setPage = {this.setPage}
                page = {this.state.page}/>
        {this.state.page === "calendar" && this.showSchedule()}
        {this.state.page === "calendar" && (
          <div className = "content">
            {this.state.travelPlan.map(element => {
              return element.map(item => {
                return <Attractions travel = {item} />;
              });
            })}
          {/*<button className = "scroll"><IoIosAdd style = {{ width: '2rem', height: '2rem' }}/></button>*/}
          </div>
        )}
      </div>
    );
  }
}
