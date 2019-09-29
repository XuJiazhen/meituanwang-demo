<template>
  <ul class="navbar-container">
    <li class="list">
      <nuxt-link to="/">我的美团</nuxt-link>
      <dl class="pop-list">
        <dd><nuxt-link to="/">我的订单</nuxt-link></dd>
        <dd><nuxt-link to="/">我的收藏</nuxt-link></dd>
        <dd><nuxt-link to="/">抵用券</nuxt-link></dd>
        <dd><nuxt-link to="/">账户设置</nuxt-link></dd>
      </dl>
    </li>
    <li class="list no-list">
      <nuxt-link to="/">手机APP</nuxt-link>
    </li>
    <li class="list">
      <nuxt-link to="/">商家中心</nuxt-link>
      <dl class="pop-list center">
        <dd><nuxt-link to="/">登录商家中心</nuxt-link></dd>
        <dd><nuxt-link to="/">美团只能银行</nuxt-link></dd>
        <dd><nuxt-link to="/">我想合作</nuxt-link></dd>
        <dd><nuxt-link to="/">手机免费开店</nuxt-link></dd>
        <dd><nuxt-link to="/">餐饮代理商招募</nuxt-link></dd>
        <dd><nuxt-link to="/">商家申请开票</nuxt-link></dd>
        <dd><nuxt-link to="/">免费合作美团排队</nuxt-link></dd>
      </dl>
    </li>
    <li class="list">
      <nuxt-link to="/">美团规则</nuxt-link>
      <dl class="pop-list">
        <dd><nuxt-link to="/">规则中心</nuxt-link></dd>
        <dd><nuxt-link to="/">规则目录</nuxt-link></dd>
        <dd><nuxt-link to="/">规则评议院</nuxt-link></dd>
      </dl>
    </li>
    <li class="list">
      <nuxt-link to="/">网站导航</nuxt-link>
      <div class="site-nav pop-list">
        <dl class="site-nav-inner hotel">
          <dt>酒店旅游</dt>
          <dd><a href="/">国际机票</a></dd>
          <dd><a href="/">火车票</a></dd>
          <dd><a href="/">榛果民宿</a></dd>
          <dd><a href="/">经济型酒店</a></dd>
          <dd><a href="/">主题酒店</a></dd>
          <dd><a href="/">商务酒店</a></dd>
          <dd><a href="/">公寓</a></dd>
          <dd><a href="/">豪华酒店</a></dd>
          <dd><a href="/">客栈</a></dd>
          <dd><a href="/">青年旅社</a></dd>
          <dd><a href="/">度假酒店</a></dd>
          <dd><a href="/">别墅</a></dd>
          <dd><a href="/">农家院</a></dd>
        </dl>
        <dl class="site-nav-inner food">
          <dt>吃美食</dt>
          <dd><a href="/">烤鱼</a></dd>
          <dd><a href="/">特色小吃</a></dd>
          <dd><a href="/">烧烤</a></dd>
          <dd><a href="/">自助餐</a></dd>
          <dd><a href="/">火锅</a></dd>
          <dd><a href="/">代金券</a></dd>
        </dl>
        <dl class="site-nav-inner movie">
          <dt>看电影</dt>
          <dd><a href="/">热映电影</a></dd>
          <dd><a href="/">热门电影</a></dd>
          <dd><a href="/">热映电影口碑榜</a></dd>
          <dd><a href="/">最受期待的电影</a></dd>
          <dd><a href="/">国内票房榜</a></dd>
          <dd><a href="/">北美票房榜</a></dd>
          <dd><a href="/">电影排行榜</a></dd>
        </dl>
        <dl class="site-nav-inner app">
          <dt>手机应用</dt>
          <dd>
            <a href="/">
              <img
                src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
              />
            </a>
          </dd>
          <dd>
            <a href="/">
              <img
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
              />
            </a>
          </dd>
          <dd>
            <a href="/">
              <img
                src="https://s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png"
              />
            </a>
          </dd>
          <dd>
            <a href="/">
              <img
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
              />
            </a>
          </dd>
          <dd>
            <a href="/">
              <img
                src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
              />
            </a>
          </dd>
        </dl>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TopNavbar'
}
</script>

<style scoped lang="scss">
.navbar-container {
  .list {
    float: left;
    position: relative;
    box-sizing: border-box;
    height: 40px;
    padding: 12px 14px;
    border-top: 0;
    border-bottom: 0;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    .pop-list {
      display: none;
      position: absolute;
      border: 1px solid #e5e5e5;
      background: #fff;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      width: 100%;
      z-index: 1000;
      top: 95%;
      right: -1px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      dd {
        line-height: 35px;
        text-align: center;
      }
      &.center {
        width: 140%;
        border-top-left-radius: 4px;
      }
    }
    .pop-list::after {
      content: ' ';
      background: #fff;
      width: 76px;
      height: 3px;
      position: absolute;
      top: -2px;
      right: 0;
    }
    .site-nav {
      width: 1190px;
      box-sizing: border-box;
      border-top-left-radius: 4px;
      padding: 30px 36px 36px 47px;
    }
    .site-nav-inner {
      float: left;
      margin-right: 42px;
      text-align: center;
      dt {
        font-size: 14px;
        font-weight: 500;
        color: #222222;
        margin-bottom: 25px;
      }
      dd {
        line-height: unset;
        float: left;
        width: 33%;
        a {
          display: block;
          padding: 5px 0;
        }
      }
    }
    .hotel {
      width: 234px;
    }
    .food {
      width: 156px;
      dd {
        width: 50%;
      }
    }
    .movie {
      width: 90px;
      dd {
        width: 100%;
      }
    }
    .app {
      float: right;
      dd {
        display: inline-block;
        margin: 0 8px;
        width: 60px;
        img {
          width: 60px;
          height: 60px;
          border: 0;
        }
      }
    }
  }
  .list:hover > .pop-list {
    display: block;
  }
  .list:hover {
    background: #fff;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    border-color: #e5e5e5;
  }
  .no-list:hover {
    background: #f8f8f8;
    box-shadow: none;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }
}
</style>
