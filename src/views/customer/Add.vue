<template>
  <Form ref="dataForm" :model="form" :rules="rules" :label-width="100">
    <Row :gutter="16">
      <i-Col span="8">
        <Form-Item label="客户名称：" prop="username" required>
          <Input type="text" v-model="form.username" />
        </Form-Item>
      </i-Col>
      <i-Col span="8">
        <Form-Item label="客户地址：" prop="password">
          <Input type="password" v-model="form.password" />
        </Form-Item>
      </i-Col>
      <i-Col span="8">
        <Form-Item label="客户地址：" prop="password">
          <Input type="password" v-model="form.password" />
        </Form-Item>
      </i-Col>
      <i-Col span="8">
        <Form-Item label="客户地址：" prop="password">
          <Input type="password" v-model="form.password" />
        </Form-Item>
      </i-Col>
      <i-Col span="24">
        <Form-Item>
          <Button type="primary">提交</Button>
        </Form-Item>
      </i-Col>
    </Row>
  </Form>
</template>

<script>
export default {
  data () {
    const notEmptyRule = (rule, value, callback) => {
      if (!value) {
        callback(new Error('不能为空！'))
      } else {
        callback()
      }
    }
    return {
      rules: {
        username: [
          { validator: notEmptyRule, trigger: 'blur' }
        ],
        password: [
          { validator: notEmptyRule, trigger: 'blur' }
        ]
      },
      form: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
