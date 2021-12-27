<template>
  <div>
    <Categories />
    <div class="main">
      <h2>{{ category.data.attributes.name }}</h2>
      <div>
        <p>{{ category.data.attributes.description }}</p>
        <div
          v-for="(product, index) in category.data.attributes.products.data"
          :key="index"
        >
          <div class="product-container">
            <div class="info-product">
              <div class="images-product">
                <img src="" alt="" />
              </div>
              <div class="name-product">
                <h3>{{ product.attributes.name }}</h3>
              </div>
              <div class="btn-product">
                <NuxtLink :to="`/${product.id}`">
                  <button class="btn-product">View product</button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="content-category">
          <ul class="list-subcategory">
            <li
              class="list-item"
              v-for="(subcategory, index) in category.data.attributes.categories
                .data"
              :key="index"
            >
              <NuxtLink :to="`/category/${subcategory.id}`" class="list-links">
                <button class="btn-links">
                  {{ subcategory.attributes.name }}
                </button>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ params, $axios }) {
    const category = await $axios.$get(
      `http://localhost:1337/api/categories/${params.category}/?populate=*`
    )
    return { category }
  },
}
</script>

<style>
.main {
  width: 80%;
}
.product-container {
  width: 30%;
  max-width: 350px;
  border: 1px solid #d8d7d7;
}
.info-product {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
.list-subcategory {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.list-item {
  width: 27%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 20px;
}
.list-links {
  width: 100%;
  text-decoration: none;
}
.btn-links {
  width: 100%;
  height: 40px;
  background-color: #f2f2f2;
  border: 1px solid #d8d7d7;
  border-radius: 4px;
  color: #0a0101;
  font-weight: 600;
  font-size: 18px;
}
.btn-links:hover {
  background-color: rgb(252, 252, 252);
  cursor: pointer;
}
.btn-product {
  width: 100%;
}
</style>
