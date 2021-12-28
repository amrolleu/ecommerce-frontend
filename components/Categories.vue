<template>
  <div class="main">
    <ul class="list-categories">
      <li
        v-for="category in categories"
        :key="category.id"
        :category="category"
      >
        <NuxtLink
          :to="`/category/${category.id}`"
          class="links"
          v-if="category.attributes.parent.data === null"
          >{{ category.attributes.name }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [],
    }
  },
  methods: {
    async fetchCategories() {
      this.categories = await this.$axios
        .get('http://localhost:1337/api/categories/?populate=*')
        .then(({ data }) => data.data)
    },
  },

  mounted() {
    this.fetchCategories()
  },
}
</script>
<style>
.main {
  margin: auto;
  width: 80%;
}
.list-categories {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  height: 30px;
  padding-right: 40px;
}
.links {
  text-decoration: none;
}

@media only screen and (max-width: 900px) {
  .main {
    width: 100%;
    text-align: center;
  }
  .main h2 {
  }
}
</style>
