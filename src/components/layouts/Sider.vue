<template>
  <Sider class="layout-sider">
    <div class="logo">
      <Icon type="md-chatboxes" size="45" color="#808695" />
    </div>
    <Menu theme="dark" width="auto" accordion @on-select="hanleSelectChild">
      <Submenu :name="index" v-for="(nav, index) in navRoutes" :key="index">
        <template slot="title">
          <Icon :type="nav.icon" size="20"></Icon>
          {{ nav.title }}
        </template>
        <Menu-Item
          v-for="(child, chIdx) in nav.children"
          :name="index + '-' + chIdx"
          :key="chIdx"
          :to="{ name: child.route }"
        >{{ child.title }}</Menu-Item>
      </Submenu>
    </Menu>
  </Sider>
</template>

<script>
export default {
  data () {
    return {
      navRoutes: []
    }
  },
  mounted () {
    this.navRoutes = this.$utils.ui.getSiderList()
  },
  methods: {
    hanleSelectChild: function (name) {
      var pos = name.split('-')
      var parent = this.navRoutes[pos[0]]
      var child = parent.children[pos[1]]
      this.$store.commit('setCurrentLocation', {
        parent: {
          title: parent.title,
          route: parent.route
        },
        child: {
          title: child.title,
          route: child.route
        }
      })
    }
  }
}
</script>

<style scoped>
.layout-sider {
  height: 100vh;
  overflow: auto;
}
.logo {
  text-align: center;
  margin: 15px auto;
}
Menu-Item {
  background: #001529;
}
</style>
