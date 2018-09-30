<template>
  <Sider class="layout-sider">
    <div class="logo">
      <Icon type="md-chatboxes" size="45" color="#808695" />
    </div>
    <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" accordion>
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-navigate"></Icon>
          Item 1
        </template>
        <Menu-Item name="1-1">Option 1</Menu-Item>
        <Menu-Item name="1-2">Option 2</Menu-Item>
        <Menu-Item name="1-3">Option 3</Menu-Item>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-keypad"></Icon>
          Item 2
        </template>
        <Menu-Item name="2-1">Option 1</Menu-Item>
        <Menu-Item name="2-2">Option 2</Menu-Item>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-analytics"></Icon>
          Item 3
        </template>
        <Menu-Item name="3-1">Option 1</Menu-Item>
        <Menu-Item name="3-2">Option 2</Menu-Item>
      </Submenu>
    </Menu>
  </Sider>
</template>

<script>
export default {
  data () {
    return {
      isCollapsed: true
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
