<template>
    <div>
        <h1>Register</h1>
        <input name="email" type="email" v-model="email" placeholder="email" /> <br/>
        <input name="password" type="passsword" v-model="password" placeholder="password" /> <br/>
        <button @click="register()">Register</button>
    </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''

    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
