<template>
  <div>
    <div class="left-banner">
      <div class="menu-list">
        <div class="list-title">
          全部分类
        </div>
        <ul class="list-content" @mouseleave="handleMouseLeave($event)">
          <li
            v-for="(item, index) in menuList"
            :key="index + 1"
            class="list-item"
            :class="item.type"
            @mouseenter="handleMouseEnter($event)"
          >
            <i class="list-icon" :class="item.type"></i>
            <a class="list-link" href="/">{{ item.text }}</a>
            <i class="list-arrow el-icon-arrow-right"></i>
          </li>
        </ul>
      </div>
      <div
        v-if="showPopList"
        class="pop-list"
        @mouseenter="handlePopListEnter($event)"
        @mouseleave="handlePopListLeave($event)"
      >
        <template v-for="(content, cIndex) in curList">
          <div :key="cIndex" class="detail-area">
            <div class="detail-head">
              <h2 class="title">
                <a href="/">{{ content.title }}</a>
              </h2>
              <a href="/" class="more"
                >更多
                <i class="el-icon-arrow-right"></i>
              </a>
            </div>
            <div class="detail-content">
              <a
                v-for="(item, iIndex) in content.list"
                :key="iIndex"
                href="/"
                >{{ item }}</a
              >
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="right-banner">
      <div class="right-nav">
        <a href="/" class="nav-link yellow">美团外卖</a>
        <a href="/" class="nav-link red">猫眼电影</a>
        <a href="/" class="nav-link red">美团酒店</a>
        <a href="/" class="nav-link yellow">名宿/公寓</a>
        <a href="/" class="nav-link orange">商家入住</a>
        <a href="/" class="nav-link red">美团公益</a>
      </div>
      <div class="right-row">
        <m-swiper class="swiper-container shadow"></m-swiper>
        <a href="/" class="single-link shadow"></a>
        <div class="login-card">
          <div class="default">
            <img
              class="profile"
              src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"
            />
            <p class="username">Hi！你好</p>
            <a href="/" class="login">注册</a>
            <a href="/" class="login">立即登录</a>
          </div>
          <div class="default" style="display: none">登录后模块，未搭建</div>
        </div>
      </div>

      <div class="right-row">
        <a href="/" class="pic-1 shadow"></a>
        <a href="/" class="pic-2 shadow"></a>
        <a href="/" class="pic-3 shadow"></a>
        <div class="qrcode-card">
          <img
            src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
            class="qrcode"
          />
          <p class="app-name">美团APP手机版</p>
          <p class="desc">
            <span style="color: #ec5330; margin-right: 5px;">1元起</span>
            <span style="color: #3f3f3f">吃喝玩乐</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MSwiper from './MSwiper'
export default {
  name: 'MBanner',
  components: {
    MSwiper
  },
  data() {
    return {
      curKind: '',
      showPopList: false,
      menuList: [
        {
          type: 'food',
          text: '美食',
          curContent: [
            {
              title: '美食',
              list: [
                '代金券',
                '甜点饮品',
                '火锅',
                '自助餐',
                '小吃快餐',
                '日韩料理',
                '西餐',
                '聚餐宴请',
                '烧烤烤肉',
                '东北菜',
                '川湘菜',
                '江浙菜',
                '香锅烤鱼',
                '粤港菜',
                '中式烧烤/烤串',
                '西北菜',
                '咖啡酒吧茶馆',
                '云贵菜',
                '东南亚菜',
                '海鲜',
                '素食',
                '台网/客家菜',
                '创意菜',
                '汤/粥/炖菜',
                '蒙餐',
                '新疆菜',
                '其它美食',
                '京菜鲁菜'
              ]
            }
          ]
        },
        {
          type: 'takeout',
          text: '外卖',
          curContent: [{ title: '外卖', list: ['美团外卖'] }]
        },
        {
          type: 'hotel',
          text: '酒店',
          curContent: [
            {
              title: '酒店星级',
              list: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }
          ]
        },
        {
          type: 'zhenguo',
          text: '榛果酒店',
          curContent: [
            {
              title: '热门城市',
              list: [
                '上海',
                '成都',
                '北京',
                '重庆',
                '南京',
                '杭州',
                '广州',
                '西安',
                '武汉',
                '厦门',
                '长沙',
                '青岛',
                '深圳',
                '天津',
                '苏州'
              ]
            },
            {
              title: '热门房源',
              list: ['复式Loft', '别墅']
            }
          ]
        },
        {
          type: 'maoyan',
          text: '猫眼电影',
          curContent: [
            {
              title: '热映电影',
              list: [
                '我和我的祖国',
                '中国机长',
                '攀登者',
                '雪人奇峰',
                '犯罪现场',
                '双子杀手',
                '美食大冒险之英雄烩',
                '丑娃娃',
                '亲密旅行',
                '疯狂斗牛场'
              ]
            },
            {
              title: '热门影院',
              list: [
                '太平洋电影城',
                '万达电影城',
                '星美国际影城',
                'CGV影城',
                '橙天嘉禾影城',
                '横店电影城',
                '卢米埃影城',
                '金逸影城',
                '大地影院',
                'SFC上影影城'
              ]
            }
          ]
        },
        {
          type: 'ticket',
          text: '机票 / 火车票',
          curContent: [
            {
              title: '机票',
              list: ['国内机票', '国际/港澳台机票']
            },
            {
              title: '火车票',
              list: ['火车票']
            }
          ]
        },
        {
          type: 'entertainment',
          text: '休闲娱乐 / KTV',
          curContent: [
            {
              title: '休闲娱乐',
              list: [
                '足疗按摩',
                '洗浴/汗蒸',
                '酒吧',
                '密室逃脱',
                '轰趴馆',
                '茶馆',
                '私人影院',
                'DIY手工坊',
                '采摘/农家乐',
                '网吧网咖',
                '游乐游艺',
                'VR',
                '桌面游戏',
                '真人CS',
                '棋牌室',
                '其他玩乐'
              ]
            },
            {
              title: 'KTV',
              list: ['KTV']
            }
          ]
        },
        {
          type: 'service',
          text: '生活服务',
          curContent: [
            {
              title: '休闲娱乐',
              list: [
                '衣物/皮具洗护',
                '家政',
                '搬家运输',
                '送水',
                '充值缴费',
                '服饰/鞋包养护',
                '开锁换锁',
                '居家维修',
                '管道疏通',
                '家电维修清洗',
                '电脑维修',
                '证件照/肖像摄影',
                '照片冲印/图文文印',
                '商务服务/法律服务',
                '文化传媒机构',
                '成人用品/情趣用品'
              ]
            }
          ]
        },
        {
          type: 'beauty',
          text: '丽人 / 美发 / 医学美容',
          curContent: [
            {
              title: '丽人',
              list: [
                '美发',
                '美甲美瞳',
                '美容美体',
                '医学美容',
                '瑜伽舞蹈',
                '瘦身纤体',
                '韩式定妆',
                '祛痘',
                '纹身',
                '化妆品',
                '养发'
              ]
            }
          ]
        },
        {
          type: 'marriage',
          text: '结婚 / 婚纱摄影 / 婚宴',
          curContent: [
            {
              title: '结婚',
              list: [
                '婚纱摄影',
                '旅拍',
                '个性写真',
                '婚宴',
                '婚庆公司',
                '婚纱礼服',
                '西服定制',
                '婚戒首饰',
                '婚车租赁',
                '司仪主持',
                '彩妆造型',
                '婚礼跟拍',
                '婚礼小礼品',
                '更多婚礼服务'
              ]
            }
          ]
        },
        {
          type: 'child',
          text: '亲子 / 儿童乐园 / 幼教',
          curContent: [
            {
              title: '儿童乐园',
              list: ['婴儿游泳', '其它亲子游乐']
            },
            {
              title: '幼儿教育',
              list: [
                '早教中心',
                '少儿英语',
                '智力开发',
                '托班/幼儿园',
                '幼儿教育',
                '其他幼儿教育'
              ]
            },
            {
              title: '亲子摄影',
              list: ['儿童摄影', '孕妇写真', '上门拍', '其他亲子摄影']
            },
            {
              title: '孕产护理',
              list: [
                '月子会所',
                '产后恢复',
                '妇幼医院',
                '孕产用品',
                '开奶催乳',
                '月嫂',
                '亲子购物',
                '宝宝排队',
                '亲子服务'
              ]
            }
          ]
        },
        {
          type: 'gym',
          text: '运动健身 / 健身中心',
          curContent: [
            {
              title: '运动健身',
              list: [
                '健身中心',
                '武术场馆',
                '游泳馆',
                '羽毛球馆',
                '溜冰场',
                '射箭馆',
                '男球场',
                '网球馆',
                '台球馆',
                '乒乓球',
                '足球场',
                '高尔夫场',
                '保龄球场',
                '体育场馆',
                '马术场',
                '壁球馆',
                '更多运动'
              ]
            }
          ]
        },
        {
          type: 'decoration',
          text: '家装 / 建材 / 家居',
          curContent: [
            {
              title: '装修设计',
              list: ['婴儿游泳', '其它亲子游乐', '清包装修']
            },
            {
              title: '装修建材',
              list: [
                '地板',
                '瓷砖石材',
                '橱柜',
                '灯饰照明',
                '厨卫洁具',
                '油漆涂料',
                '集成吊顶',
                '墙纸墙艺',
                '门窗',
                '木材板材',
                '家用五金',
                '电工电料',
                '楼梯',
                '管材管件'
              ]
            },
            {
              title: '家具家居',
              list: [
                '家具',
                '床上用品/家纺',
                '家居饰品',
                '厨具餐具',
                '智能家居'
              ]
            },
            {
              title: '家装卖场',
              list: ['建材卖场', '家居卖场', '灯饰卖场']
            }
          ]
        },
        {
          type: 'training',
          text: '学习培训 / 音乐培训',
          curContent: [
            {
              title: '音乐培训',
              list: [
                '钢琴',
                '吉他',
                '小提琴',
                '古筝',
                '架子鼓',
                '声乐',
                '其他音乐培训'
              ]
            },
            {
              title: '职业技术',
              list: [
                '美容化妆',
                '会计',
                'IT',
                '厨艺',
                '管理培训',
                '摄影培训',
                '司法考试',
                '公务员培训',
                '其他职业培训'
              ]
            },
            {
              title: '外语培训',
              list: [
                '英语',
                '日语',
                '韩语',
                '法语',
                '德语',
                '汉语',
                '俄语',
                '西班牙语',
                '其他外语'
              ]
            },
            {
              title: '美术培训',
              list: ['绘画', '书法', '其他美术']
            }
          ]
        },
        {
          type: 'health',
          text: '医疗健康 / 宠物 / 爱车',
          curContent: [
            {
              title: '医疗健康',
              list: [
                '医院',
                '齿科口腔',
                '体检中心',
                '药店',
                '中医',
                '其他健康服务'
              ]
            },
            {
              title: '爱车',
              list: [
                '洗车',
                '租车',
                '加油站',
                '维修保养',
                '驾校',
                '汽车美容',
                '陪练',
                '汽车用品',
                '停车场',
                '汽车保险',
                '4S店/汽车销售',
                '更多汽车服务',
                '机油保养',
                '汽车报价',
                '二手车',
                '广告驾校',
                '交警队',
                '汽车改装',
                '汽车配件'
              ]
            },
            {
              title: '宠物',
              list: ['宠物店', '宠物医院']
            }
          ]
        },
        {
          type: 'bar',
          text: '酒吧 / 密室逃脱',
          curContent: [
            {
              title: '玩乐',
              list: [
                'KTV',
                '酒吧',
                '密室逃脱',
                '游乐游艺',
                '网吧网咖',
                '私人影院',
                'DIY手工坊',
                '桌面游戏',
                '采摘/农家乐',
                '棋牌室',
                '轰趴馆',
                '真人CS',
                'VR',
                '其他玩乐'
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    curList() {
      return this.menuList.filter((item) => item.type === this.curKind)[0]
        .curContent
    }
  },
  methods: {
    handleMouseEnter(event) {
      this.curKind = event.target.classList[1]
      setTimeout(() => {
        this.showPopList = true
      }, 150)
    },
    handleMouseLeave(event) {
      this._timer = setTimeout(() => {
        this.showPopList = ''
      }, 150)
    },
    handlePopListEnter(event) {
      clearTimeout(this._timer)
    },
    handlePopListLeave(event) {
      setTimeout(() => {
        this.showPopList = ''
      }, 150)
    }
  }
}
</script>
