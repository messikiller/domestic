<template>
  <Header class="header">
    <div class="left-wrapper">
      <Icon type="md-menu" size="28" />
      <Breadcrumb style="margin-left: 15px;">
        <BreadcrumbItem><Icon type="ios-home-outline"></Icon>&nbsp;Home</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>Layout</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <Menu mode="horizontal" active-name="1" class="user-menu">
      <Submenu name="3">
        <span slot="title">
          <Icon type="md-contact" size="20" />messikiller
        </span>
        <MenuGroup title="使用">
          <Menu-Item name="3-1">新增和启动</Menu-Item>
          <Menu-Item name="3-2">活跃分析</Menu-Item>
          <Menu-Item name="3-3">时段分析</Menu-Item>
        </MenuGroup>
        <MenuGroup title="留存">
          <Menu-Item name="3-4">用户留存</Menu-Item>
          <Menu-Item name="3-5">流失用户</Menu-Item>
        </MenuGroup>
      </Submenu>
    </Menu>
  </Header>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.header {
  padding: 0;
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
