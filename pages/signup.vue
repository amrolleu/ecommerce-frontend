<template>
  <div class="auth-container">
    <div><p>Registration</p></div>
    <div class="auth-blog">
      <form @submit.prevent="submit">
        <input
          v-model="username"
          type="text"
          placeholder="Username"
          class="inputs"
        />
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="inputs"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="inputs"
        />
        <button type="submit" class="auth-btn">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'register',
  data() {
    return {
      username: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async submit() {
      await fetch('http://localhost:1337/api/auth/local/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.username,
          email: this.email,
          password: this.password,
        }),
      })
      await this.$router.push('signin')
    },
  },
}
</script>
<style>
.auth-container {
  margin: auto;
  width: 300px;
}
.auth-blog {
  height: 300px;
}
.inputs {
  width: 100%;
  margin-top: 20px;
  padding: 5px;
}
.auth-btn {
  background-color: blue;
  width: 50%;
  margin: auto;
  margin-top: 20px;
  padding: 5px;
}
</style>
