<template>
  <div class="auth-container">
    <div><p>Authorization</p></div>
    <div class="auth-blog">
      <form @submit.prevent="submit">
        <input v-model="email" type="email" class="inputs" />
        <input v-model="password" type="password" class="inputs" />
        <button type="submit" class="auth-btn">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
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
      await fetch('http://localhost:1337/api/auth/local', {
        mode: 'no-cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      })
      await this.$router.push('/')
    },
  },
}
</script>
