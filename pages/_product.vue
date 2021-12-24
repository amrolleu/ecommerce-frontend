<template>
  <div class="container">
    <div class="content-top">
      <div class="content">
        <h2>{{ product.data.attributes.name }}</h2>
        <hr />
        <div class="contents">
          <div class="images">
            <!-- v-for="(images, index) in product.data.attributes.images.data"
              :key="index"
              :src="
                  product.attributes.images.data.attributes.formats.thumbnail
                    .url" -->
            <div
              class="main-image"
              v-for="(img, index) in product.data.attributes.images.data"
              :key="index"
            >
              <img :src="`http://localhost:1337${img.attributes.url}`" alt="" />
            </div>
            <div class="other-img-blog">
              <div class="other-images">
                <img />
              </div>
              <div class="other-images">
                <img />
              </div>
              <div class="other-images">
                <img />
              </div>
              <div class="other-images">
                <img />
              </div>
            </div>
          </div>
          <div class="desc">
            <div class="product-price">
              {{ product.data.attributes.price }} €
            </div>
            <div class="product-info">
              <div class="product-slug">{{ product.data.attributes.slug }}</div>
              <div class="product-sku">{{ product.data.attributes.sku }}</div>
              <div class="product-hits">{{ product.data.attributes.hits }}</div>
              <div class="product-hits">
                {{ product.data.attributes.publishedAt }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="other-products">
        <h3>Другие продукты</h3>
        <ul style="padding-left: 20px">
          <li
            v-for="product in products"
            :key="product.id"
            :product="product"
            class="links-products"
          >
            <NuxtLink :to="`/${product.id}`">{{
              product.attributes.name
            }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="product-desc">
      {{ product.data.attributes.description }}
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ params, $axios }) {
    const product = await $axios.$get(
      `http://localhost:1337/api/products/${params.product}/?populate=*`
    )
    return { product }
  },
  data() {
    return {
      products: [],
    }
  },
  methods: {
    async fetchProducts() {
      this.products = await this.$axios
        .get('http://localhost:1337/api/products')
        .then(({ data }) => data.data)
    },
  },
  mounted() {
    this.fetchProducts()
  },
}
</script>

<style>
.container {
  width: 80%;
  margin: auto;
}
.content-top {
  width: 100%;
  display: flex;
}
.content {
  width: 74%;
}
.contents {
  display: flex;
}
.images {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  height: 350px;
  border: 1px solid black;
}
.main-image {
  width: 100%;
  height: 265px;
  border: 1px solid #f2f2f2;
  padding: 4px;
  box-sizing: border-box;
}
.other-img-blog {
  display: flex;
}
.other-images {
  width: 25%;
  border: 1px solid #f2f2f2;
  padding: 4px;
  box-sizing: border-box;
}
.desc {
  width: 50%;
  margin-left: 10px;
}
.product-price {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 58px;
  background-color: #f2f2f2;
  color: darkred;
  font-family: sans-serif;
  font-size: 25px;
  border: 2px solid #e9e8e8;
  border-radius: 4px;
  box-sizing: border-box;
}
.product-info {
  padding: 10px;
  box-sizing: border-box;
  margin-top: 10px;
  width: 100%;
  background-color: #f2f2f2;
  color: rgb(8, 0, 0);
  font-family: sans-serif;
  font-size: 14px;
  border: 2px solid #e9e8e8;
  border-radius: 4px;
  margin-bottom: 10px;
}
.product-info div {
  margin-bottom: 7px;
}
.product-slug {
  padding-bottom: 5px;
  border-bottom: 1px solid #d6d5d5;
}
.links-products {
  list-style-type: decimal;
}
.product-desc {
  width: 80%;
}
.other-products {
  margin-left: 20px;
}
</style>
