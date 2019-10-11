<template>
  <!-- 绑定 id 变量可以使组件能够根据 id 值复用 -->
  <div :id="id" :style="style" class="m-map"></div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    },
    point: {
      type: Array,
      default() {
        return [116.46, 39.92]
      }
    }
  },
  data() {
    return {
      id: `map`,
      key: '34588a7dae9ec1a7a639c78cdf529b3e',
      style: {
        width: this.width + 'px',
        height: this.height + 'px',
        margin: '32px 10px',
        border: '1px solid #e5e5e5',
        'border-radius': '4px'
      }
    }
  },
  // 最开始只有在 mounted 中可以访问到 window 对象
  // mounted 在服务端不会被调用，如果在其它钩子函数中初始化地图可能会导致SSR编译或构建错误
  mounted() {
    const self = this
    self.id = `map${Math.random()
      .toString()
      .slice(4, 6)}`

    window.onmaploaded = () => {
      const map = new window.AMap.Map(self.id, {
        resizeEnable: true,
        zoom: 11,
        center: self.point
      })
      self.map = map
      // window.AMap.plugin('AMap.ToolBar', () => {
      //   const toolbar = new window.AMap.ToolBar()
      //   map.addControl(toolbar)
      //   const marker = new window.AMap.Marker({
      //     icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
      //     position: self.point
      //   })
      //   self.marker = marker
      //   marker.setMap(map)
      // })
    }
    const url = `https://webapi.amap.com/maps?v=1.4.10&key=${self.key}&callback=onmaploaded`
    const jsapi = document.createElement('script')
    jsapi.charset = 'utf-8'
    jsapi.src = url
    document.head.appendChild(jsapi)
  }
}
</script>
