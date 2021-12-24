<template>
  <div class="main">
    <ul class="list-categories">
      <li
        v-for="category in categories"
        :key="category.id"
        :category="category"
      >
        <NuxtLink :to="`/category/${category.id}`" class="links">{{
          category.attributes.name
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [],
      parentCategories: [],
    }
  },
  methods: {
    async fetchProducts() {
      this.categories = await this.$axios
        .get('http://localhost:1337/api/categories')
        .then(
          ({ data }) => data.data
          //   data.data.map((item, index) => {
          //     console.log('меп', item.attributes, index)
          //     return item.attributes
          //   })
          //   console.log()
          // })
        )
    },

    sortByParent() {
      this.categories.map((item) => {
        console.log(item)
        if (item.parent.data !== null) {
          return this.parentCategories.push(item)
        }
      })
    },
  },

  mounted() {
    this.fetchProducts(), this.sortByParent()
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
</style>
