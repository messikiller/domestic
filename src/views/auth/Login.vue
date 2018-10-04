<template>
  <div class="bg">
    <Card dis-hover style="width: 400px;">
      <div class="title">
        <h3>国内客诉反馈系统</h3>
        <Divider>
          <Icon type="md-chatbubbles" size="22" />
        </Divider>
      </div>
      <Form ref="dataForm" :model="form" :rules="rules">
        <Form-Item prop="username">
          <Input type="text" prefix="ios-contact" v-model="form.username" />
        </Form-Item>
        <Form-Item prop="password">
          <Input type="password" prefix="md-lock" v-model="form.password" />
        </Form-Item>
      </Form>
      <Button type="primary" long @click="handleSubmit">登录</Button>
    </Card>
  </div>
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
  },
  methods: {
    handleSubmit: function () {
      this.$refs.dataForm.validate((valid) => {
        if (!valid) {
          this.$utils.ui.notice('info', '提醒', '校验失败，填写完整后再提交！')
        } else {
          this.$api.login(this.form.username, this.form.password).then(response => {
            let res = response.data
            this.$utils.auth.setToken(res.data.token)
            this.$router.replace({ name: 'index' })
          })
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
.bg {
  height: 100%;
  width: 100%;
  background: #666;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
}
</style>
