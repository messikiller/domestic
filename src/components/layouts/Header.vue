<template>
  <Header class="header">
    <Menu mode="horizontal" class="menu" @on-select="handleMenuItemSelected">
      <div class="left-wrapper">
        <Icon type="md-menu" size="28" :class="{'rotated-icon': rotated }" @click="handleClickToggle" />
        <Breadcrumb style="margin-left: 15px;">
          <BreadcrumbItem><Icon type="ios-home-outline"></Icon>&nbsp;Home</BreadcrumbItem>
          <BreadcrumbItem v-show="currentLocation.parent.title">{{ currentLocation.parent.title }}</BreadcrumbItem>
          <BreadcrumbItem v-show="currentLocation.child.title">{{ currentLocation.child.title }}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="user-menu">
        <Submenu name="user">
          <span slot="title">
            <Icon type="md-contact" size="20" />messikiller
          </span>
          <Menu-Item name="userCenter" :to="{ name: 'userMe' }">个人中心</Menu-Item>
          <Menu-Item name="logout" @click="handleLogout">注销退出</Menu-Item>
        </Submenu>
      </div>
    </Menu>
  </Header>
</template>

<script>
export default {
  data () {
    return {
      rotated: false
    }
  },
  computed: {
    currentLocation: function () {
      return this.$store.state.currentLocation
    }
  },
  methods: {
    handleMenuItemSelected: function (name) {
      if (name === 'logout') {
        this.handleLogout()
      }
    },
    handleClickToggle: function () {
      this.rotated = !this.rotated
      this.$emit('on-toggle')
    },
    handleLogout: function () {
      this.$api.logout().then(response => {
        this.$utils.auth.setToken('')
        this.$router.replace({ name: 'authLogin' })
      })
    }
  }
}
</script>

<style lang="css" scoped>
.rotated-icon {
  transform: rotate(-90deg);
  transition:transform 0.2s ease;
}
.header {
  padding: 0;
  display: flex;
}

.menu {
  height: 100%;
  width: 100%;
  display: flex;
}

.left-wrapper {
  height: 100%;
  flex: 1;
  padding: 0 15px;
  display: flex;
  align-items: center;
}

.user-menu {
  height: 100%;
  min-width: 220px;
  padding: 0 25px;
}
</style>
