<template>
  <div class="container-product">
    <div
      v-for="product in products"
      :key="product.id"
      :product="product"
      class="content-product"
    >
      <div>
        <div class="images-product">
          <img
            :src="`http://localhost:1337${getMainImage(product)}`"
            alt="Изображение не найдено"
            class="img-blog"
          />
        </div>
        <div class="price-product">{{ product.attributes.price }} €</div>
        <div class="name-product">
          <h3>{{ product.attributes.name }}</h3>
        </div>
        <div>
          <NuxtLink :to="`/${product.id}`">
            <button class="btn-product">View product</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    }
  },

  methods: {
    async fetchProducts() {
      this.products = await this.$axios
        .get(`http://localhost:1337/api/products/?populate=*`)
        .then(({ data }) => data.data)
    },
    getMainImage(product) {
      let data = product.attributes.images.data
      if (!data) {
        return ''
      }
      return product.attributes.images.data[0].attributes.url
    },
  },
  mounted() {
    this.fetchProducts()
  },
}
</script>

<style>
.container-product {
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;
}
.content-product {
  width: 30%;
  height: 310px;
  border: 1px solid #f2f2f2;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
}
.images-product {
  width: 100%;
  height: 225px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
}
.img-blog {
  width: 100%;
  height: 100%;
}
.price-product {
  position: relative;
  float: right;
  right: 14px;
  bottom: 30px;
  background-color: #357ebd;
  color: #990000;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 3px;
}
.name-product {
  margin: 20px 0px 10px 0px;
  text-align: center;
}
.name-product h3 {
  font-family: 'Oswald', Impact, Arial, sans-serif;
  font-weight: 100;
  margin-bottom: 0px;
}
.btn-product {
  width: 100%;
  height: 30px;
  color: #ffffff;
  background-color: #428bca;
  border: 1px solid #357ebd;
  border-radius: 5px;
}
.btn-product:hover {
  background-color: #357ebd;
}
</style>
