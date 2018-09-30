<template>
  <Header class="header">
    <Menu mode="horizontal" class="menu">
      <div class="left-wrapper">
        <Icon type="md-menu" size="28" @click="handleClickToggle" />
        <Breadcrumb style="margin-left: 15px;">
          <BreadcrumbItem><Icon type="ios-home-outline"></Icon>&nbsp;Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="user-menu">
        <Submenu name="user">
          <span slot="title">
            <Icon type="md-contact" size="20" />messikiller
          </span>
          <Menu-Item name="1">个人中心</Menu-Item>
          <Menu-Item name="2">注销退出</Menu-Item>
        </Submenu>
      </div>
    </Menu>
  </Header>
</template>

<script>
export default {
  data () {
    return {
      toggleIcon: 'md-menu'
    }
  },
  methods: {
    handleClickToggle: function () {
      this.$emit('on-toggle')
    }
  }
}
</script>

<style lang="css" scoped>
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
