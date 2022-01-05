<template>
  <div class="cart-container">
    <div class="cart-content">
      <h1>Cart</h1>
      <div
        v-for="(cart, index) in carts"
        :key="index"
        :cart="cart"
        class="cart-products"
      >
        <div class="cart-images">
          <img src="https://placeimg.com/210/200/nature" alt="" />
        </div>
        <div class="cart-info">
          <div class="cart-name">
            <h3 class="cart-name-h3">{{ cart.name }}</h3>
            <p class="cart-quantity-text">Quantity</p>
            <div class="cart-quantity-price">
              <button
                class="cart-quantity-btn"
                @click="decrementQuantity(cart.id)"
              >
                -
              </button>
              <span class="cart-quantity"> {{ cart.quantity }}</span>
              <button
                class="cart-quantity-btn"
                @click="incrementQuantity(cart.id)"
              >
                +
              </button>
              <span class="cart-total-price"
                >{{ +cart.quantity * +cart.price }} €</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="cart-total">
        <span class="cart-total-text">Total</span>
        <span class="cart-total-text">{{ totalPrice }} €</span>
      </div>
    </div>
    <div class="cart-contacts">
      <h1>Registration</h1>
      <div class="cart-contacts-info">
        <div class="cart-shopper-name">
          <p class="cart-contacts-text">Firtsname</p>
          <input
            class="cart-contacts-input"
            type="text"
            v-model="clients_fullname"
            :class="{
              'in-valid': errors.clients_fullname,
            }"
          />
        </div>
        <div class="cart-shopper-name">
          <p class="cart-contacts-text">Lastname</p>
          <input
            class="cart-contacts-input"
            type="text"
            v-model="clients_fullname"
            :class="{
              'in-valid': errors.clients_fullname,
            }"
          />
        </div>
        <div class="cart-address">
          <p class="cart-contacts-text">Address</p>
          <input
            class="cart-contacts-input"
            type="text"
            v-model="address"
            :class="{
              'in-valid': errors.address,
            }"
          />
        </div>
        <div class="cart-phone-number">
          <p class="cart-contacts-text">Phone number</p>
          <input
            class="cart-contacts-input"
            type="number"
            v-model="phone_number"
            :class="{
              'in-valid': errors.phone_number,
            }"
          />
        </div>
        <button class="cart-order-btn" @click="addOrder">Add order</button>
      </div>
    </div>
  </div>
</template>
<script>
import _productVue from './_product.vue'
import axios from 'axios'
export default {
  data() {
    return {
      carts: [],
      errors: {
        address: '',
        clients_fullname: '',
        phone_number: '',
      },
      address: null,
      clients_fullname: null,
      phone_number: null,
    }
  },
  watch: {
    address(val) {
      if (this.errors.address) {
        delete this.errors.address
      }
    },
    clients_fullname(val) {
      if (this.errors.clients_fullname) {
        delete this.errors.clients_fullname
      }
    },
    phone_number(val) {
      if (this.errors.phone_number) {
        delete this.errors.phone_number
      }
    },
    carts(newValue) {
      localStorage.setItem('products', JSON.stringify(newValue))
    },
  },
  computed: {
    totalPrice() {
      return this.carts.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      )
    },
  },
  methods: {
    incrementQuantity(id) {
      let newCart = this.carts.map((item, index) => {
        if (item.id === id) {
          item.quantity++
        }
        return item
      })

      this.carts = newCart
    },
    decrementQuantity(id) {
      let newCart = this.carts.map((item, index) => {
        if (item.id === id) {
          item.quantity--
        }
        return item
      })

      this.carts = newCart
    },
    validation() {
      let error = false
      if (!this.address) {
        error = true
        this.errors['address'] = 'Введите адрес'
      }
      if (!this.clients_fullname) {
        error = true
        this.errors['clients_fullname'] = 'Введите имя'
      }
      if (!this.phone_number) {
        error = true
        this.errors['phone_number'] = 'Введите номер'
      }
      return error
    },

    async addOrder() {
      if (this.validation()) {
        return
      }
      this.carts = this.carts.map((item) => ({
        ...item,
      }))
      console.log(this.carts)
      const { data } = await axios.post('http://localhost:1337/api/orders/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        data: {
          quantity: this.carts.reduce((a, b) => a + b.quantity, 0),
          user_id: 1,
          total_price: 100,
          user_id: 1,
          clients_fullname: this.clients_fullname,
          address: this.address,
          phone_number: this.phone_number,
          content: this.carts.map((item) => {
            return {
              id: item.id,
              name: item.name,
              price: item.price,
              quantity: item.quantity,
            }
          }),
        },
      })
      // if (data.data) {
      //   this.carts = this.carts.map((item) => ({
      //     ...item,
      //     order_id: data.data.id,
      //   }))
      //   const { res } = await axios.post(
      //     'http://localhost:1337/api/order-details/',
      //     {
      //       headers: {
      //         Authorization: `Bearer ${localStorage.getItem('token')}`,
      //       },
      //       data: {
      //         items: this.carts,
      //       },
      //     }
      //   )
      //   console.log(res)
      // }
    },

    async fetchCart() {
      this.carts = await this.$axios.get('http://localhost:1337/api/orders', {
        headers: {
          Authorization: ` Bearer ${localStorage.getItem('token')}`,
        },
      })
    },
    async fetchCartProduct() {
      this.carts = await JSON.parse(localStorage.getItem('products'))
    },
  },
  async mounted() {
    await this.fetchCartProduct()
  },
}
</script>
<style>
.in-valid {
  border: 1px solid red;
}

.cart-container {
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.cart-content {
  width: 55%;
}
.cart-contacts {
  width: 45%;
}
.cart-contacts-info {
  background: #f5f5fe;
  padding: 30px;
  border-radius: 15px;
}
.cart-contacts-text {
  width: 300px;
  margin-bottom: 5px;
}
.cart-contacts-input {
  height: 30px;
  width: 300px;
  border-radius: 5px;
}

.cart-order-btn {
  margin-top: 30px;
  width: 200px;
  height: 40px;
  color: #ffffff;
  background-color: #428bca;
  border: 1px solid #357ebd;
  border-radius: 5px;
  cursor: pointer;
}
.cart-order-btn:hover {
  background-color: #357ebd;
}

.cart-products {
  display: flex;
  width: 600px;
  height: 250px;
  margin-bottom: 20px;
  border: 1px solid #f2f2f2;
  border-radius: 15px;
}
.cart-images {
  width: 35%;
  height: 200px;
  margin-top: 25px;
  margin-left: 25px;
}
.cart-info {
  width: 100%;
}

.cart-name {
  margin-left: 30px;
}
.cart-name-h3 {
  font-size: 20px;
  font-family: 'Circe bold';
}
.cart-quantity-text {
  margin-top: 0;
  font-size: 18px;
  font-family: 'Circe bold';
  font-weight: 400;
}
.cart-quantity-btn {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: inherit;
  border-radius: 5px;
  border: 1px solid #f2f2f2;
  cursor: pointer;
}
.cart-quantity-btn:hover {
  background-color: #f5f5f5;
}
.cart-quantity {
  margin-right: 10px;
  font-size: 20px;
  font-weight: 700;
}
.cart-total-price {
  font-size: 20px;
  font-weight: 700;
  margin-left: 40%;
}
.cart-total {
  display: flex;
  justify-content: space-between;
  margin: 30px 30px 30px 0px;
}
.cart-total-text {
  font-size: 26px;
  font-weight: 600;
}
</style>
