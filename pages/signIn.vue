<template>
  <div class="auth-container">
    <div><p>Authorization</p></div>
    <div class="auth-blog">
      <form @submit.prevent="submit">
        <input v-model="email" type="text" class="inputs" />
        <input v-model="password" type="password" class="inputs" />
        <button type="submit" class="auth-btn">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'signin',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async submit() {
      await axios
        .post('http://localhost:1337/api/auth/local/', {
          identifier: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem('token', response.data.jwt)
          this.$axios.setHeader('token', response.data.jwt)
        })
        .catch((error) => {
          console.log('An error occurred:', error.response)
        })
      await this.$router.push('/')
    },
  },
}
</script>
