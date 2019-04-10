<template>
  <div class="order">
    <AppBar barTitle='订单栏' class="fl app-left">
      <Tab :tabBtns='tabBtns1' slot='order'>
        <div slot='tabItem0'>
            <order-current></order-current>
        </div>
        <div slot='tabItem1'>
            <order-register :list='orderRegisterList'></order-register>
        </div>
        <div slot='tabItem2'>
            <order-paid :list='orderPaidList'></order-paid>
        </div>
        <div slot='tabItem3'>
            <order-cancel :list='orderCancelList'></order-cancel>
        </div>
      </Tab>
    </AppBar>
    <AppBar barTitle='产品栏' class="fl app-right">
      <Tab :tabBtns='tabBtns2' :currentIndex='0' slot='product'>
        <div slot='tabItem0'>
            <product-often :products-classify-list='productData'></product-often>
        </div>
        <div slot='tabItem1'>
            <product-main></product-main>
        </div>
      </Tab>
    </AppBar>
  </div>
</template>

<script>
import AppBar from "./components/AppBar";
import Tab from "./components/Tab";

// 订单
import OrderCancel from "./components/order/OrderCancel";
import OrderCurrent from "./components/order/OrderCurrent";
import OrderPaid from "./components/order/OrderPaid";
import OrderRegister from "./components/order/OrderRegister";

// 产品
import ProductMain from "./components/product/ProductMain";
import ProductOften from "./components/product/ProductOften";

export default {
  name: "Order",
  data() {
    return {
      tabBtns1: ["当前订单", "挂单中", "已付款", "取消的订单"],
      tabBtns2: ["常点食品", "主菜单"],
      index1: 0,
      index2: 0,
      // 挂单中数据
      orderRegisterList: [
        {
          orderNum: "1001",
          tableNum: "200",
          money: 205
        },
        {
          orderNum: "1001",
          tableNum: "200",
          money: 205
        }
      ],
      // 已付款数据
      orderPaidList: [
        {
          orderNum: "1001",
          tableNum: "200",
          money: 205
        },
        {
          orderNum: "1001",
          tableNum: "200",
          money: 205
        },
        {
          orderNum: "1001",
          tableNum: "200",
          money: 205
        },
        {
          orderNum: "1001",
          tableNum: "200",
          money: 205
        }
      ],
      // 取消的订单数据
      orderCancelList: [
        {
          orderNum: "1001",
          tableNum: "200",
          money: 205
        },
        {
          orderNum: "1001",
          tableNum: "200",
          money: 205
        },
        {
          orderNum: "1001",
          tableNum: "200",
          money: 205
        }
      ],
      // 食品数据
      productData: []
    };
  },
  created() {
    // 从后台获取的食品数据，定义一个变量模拟
    const responseData = [
      {
        classify: "饮料",
        productList: [
          {
            id: "1",
            name: "可口可乐",
            count: 0,
            price: 7,
            imgUrl:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540466688140&di=26a4f3dcd1e7afeec1c1d83b78cec003&imgtype=0&src=http%3A%2F%2Fwww.tradeduck.com%2Fuploads%2F154552_14238251.jpg"
          },
          {
            id: "2",
            name: "雪碧",
            count: 0,
            price: 7,
            imgUrl:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541061478&di=f55bb37b53d23f2c6d7f96ec59f73a40&imgtype=jpg&er=1&src=http%3A%2F%2Fimgqn.koudaitong.com%2Fupload_files%2F2015%2F07%2F29%2FFma5psE60OS26FuKLwRqYstEIAKa.jpg%21730x0.jpg"
          },
          {
            id: "3",
            name: "芬达",
            count: 0,
            price: 7,
            imgUrl:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540466783800&di=56c4e49edf895d5593f04de46cba678b&imgtype=0&src=http%3A%2F%2Foldfile.iyunshu.com%2Fsupp%2Fupload%2Fday_160720%2F1468976860123266.jpg"
          }
        ]
      },
      {
        classify: "主食",
        productList: [
          {
            id: "4",
            name: "藤香鸡腿堡",
            count: 0,
            price: 18,
            imgUrl:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540466824454&di=5597ac82e8a91c41d24446b049b7df40&imgtype=0&src=http%3A%2F%2Fp1.meituan.net%2Fdeal%2F79d30cf099467dbcd47943f1fc191eca238551.jpg"
          },
          {
            id: "5",
            name: "奥尔良鸡腿堡",
            count: 0,
            price: 15,
            imgUrl:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540466840395&di=17381889c79f83d0d81a1696df9774aa&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fbainuo%2Fcrop%3D0%2C0%2C690%2C418%3Bw%3D690%3Bq%3D90%3Bc%3Dnuomi%2C95%2C95%2Fsign%3De84c9b1662380cd7f251f8ad9c748104%2Fbd3eb13533fa828bfe2cf945fa1f4134970a5a0c.jpg"
          },
          {
            id: "6",
            name: "鸡腿堡",
            count: 0,
            price: 10,
            imgUrl:
              "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2182134899,3326570472&fm=26&gp=0.jpg"
          }
        ]
      },
      {
        classify: "小食",
        productList: [
          {
            id: "7",
            name: "大薯",
            count: 0,
            price: 16,
            imgUrl:
              "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3718582866,3051949407&fm=26&gp=0.jpg"
          },
          {
            id: "8",
            name: "中薯",
            count: 0,
            price: 10,
            imgUrl:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540466912714&di=9ff84bdc4caeb65646defa7cb596d18a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F314e251f95cad1c8d33cf203753e6709c93d510a.jpg"
          },
          {
            id: "9",
            name: "小薯",
            count: 0,
            price: 6,
            imgUrl:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540466922522&di=faa31cdf676908cef56e58e740cbfa55&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F37d3d539b6003af3caff8b463f2ac65c1038b64b.jpg"
          }
        ]
      }
    ];
    this.productData = responseData;
  },
  components: {
    AppBar,
    Tab,
    // 订单
    OrderCancel,
    OrderCurrent,
    OrderPaid,
    OrderRegister,
    // 产品
    ProductMain,
    ProductOften
  },
  beforeRouteEnter(to, from, next) {
    // alert("beforeRouteEnter");
    next();
  }
};
</script>
<style scoped>
</style>

