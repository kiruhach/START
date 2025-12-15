<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { provide, reactive } from 'vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    // Глобальное состояние корзины
    const cartStore = reactive({
      cartItems: [],
      addToCart(item) {
        const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
          existingItem.quantity = item.quantity;
        } else {
          this.cartItems.push({ ...item });
        }
      },
      removeFromCart(productId) {
        const index = this.cartItems.findIndex(item => item.id === productId);
        if (index > -1) {
          this.cartItems.splice(index, 1);
        }
      },
      clearCart() {
        this.cartItems = [];
      },
      get cartTotal() {
        return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
      get cartItemsCount() {
        return this.cartItems.reduce((total, item) => total + item.quantity, 0);
      }
    });

    provide('cartStore', cartStore);
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #0a0a0a;
  color: #fff;
  line-height: 1.6;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn {
  display: inline-block;
  background-color: #e53935;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #c62828;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>