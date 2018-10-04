<template>
  <div>
    <Card dis-hover>
      here is some filter
    </Card>
    <Table border :columns="columns" :data="table"></Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        { title: '#', key: 'index' },
        { title: '名称', key: 'title' },
        { title: '联系人', key: 'contactor' },
        { title: '电话', key: 'mobile' },
        { title: '邮箱', key: 'email' },
        { title: '操作', key: 'action' }
      ],
      table: [

      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
