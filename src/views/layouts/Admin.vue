<template>
  <div class="main">
    <Sider></Sider>
    <Layout class="righter">
      <Header class="header"></Header>
      <Content class="content">
        <Card class="paper" dis-hover>
          <div>Content</div>
        </Card>
      </Content>
      <Footer class="footer">SonoScape All Right Reserved &copy; 2018</Footer>
    </Layout>
  </div>
</template>

<script>
import Sider from '#/layouts/Sider'
import Header from '#/layouts/Header'

export default {
  components: {
    Sider,
    Header
  }
}
</script>

<style scoped>
.main {
  display: flex;
  background: #f5f7f9;
  height: 100%;
  width: 100%;
}
.righter {
  flex: 1;
}
.header {
  background: #fff;
  box-shadow: 0 2px 3px 2px rgba(0,0,0,.1);
  z-index: 999;
}
.content {
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.paper {
  margin-top: 15px;
  flex: 1;
}
.footer {
  color: #9ea7b4;
  text-align: center;
  padding: 5px 0 10px 0;
  font-size: 12px;
}
</style>
