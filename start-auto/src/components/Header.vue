<template>
  <header class="header">
    <div class="container">
      <div class="header-top">
        <div class="logo">
          <h1>START</h1>
        </div>
        <nav class="nav">
          <router-link to="/" class="nav-link">Главная</router-link>
          <router-link to="/catalog" class="nav-link">Каталог</router-link>
          <router-link to="/services" class="nav-link">Услуги</router-link> 
          <router-link to="/news" class="nav-link">Новости</router-link> 
        </nav>
        <div class="header-actions">
          <div class="action-item">
            <button class="action-btn" @click="toggleCart">
              <div class="cart">
                <img src="/icons/Cart.svg" alt="Корзина" class="action-icon cart-icon">
              </div>
              <span class="cart-count" v-if="cartItemsCount > 0">{{ cartItemsCount }}</span>
            </button>
          </div>
          <div class="action-item">
            <button class="action-btn" @click="toggleProfile">
              <div class="profile">
                <img src="/icons/Profile.svg" alt="Профиль">
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- SEO мета-теги для всех страниц -->
    <div v-if="$route.path === '/'" style="display: none;">
      <title>START - Автотовары: аккумуляторы, автомасла, аксессуары во Владивостоке</title>
      <meta name="description" content="Надежные автотовары по выгодным ценам: аккумуляторы MAGNUM и ЗВЕРЬ, автомасла, аксессуары и автохимия. Доставка по Владивостоку. Гарантия качества.">
      <meta name="keywords" content="автотовары, аккумуляторы, автомасла, аккумулятор MAGNUM, аккумулятор ЗВЕРЬ, автохимия, автозапчасти Владивосток">
    </div>
    
    <div v-if="$route.path === '/catalog'" style="display: none;">
      <title>Каталог автотоваров | START - Владивосток</title>
      <meta name="description" content="Широкий выбор автотоваров: аккумуляторы, автомасла, аксессуары, автохимия. Доставка по Владивостоку.">
      <meta name="keywords" content="каталог автотоваров, аккумуляторы купить, автомасла, автоаксессуары">
    </div>
    
    <div v-if="$route.path === '/services'" style="display: none;">
      <title>Услуги автосервиса | START - Владивосток</title>
      <meta name="description" content="Услуги автосервиса в Владивостоке: диагностика аккумуляторов, консультации, обмен старых АКБ, подбор автохимии. Профессиональный подход.">
      <meta name="keywords" content="диагностика аккумулятора, услуги автосервиса, обмен аккумулятора">
    </div>
    
    <div v-if="$route.path === '/news'" style="display: none;">
      <title>Новости магазина автотоваров START | Владивосток</title>
      <meta name="description" content="Новости и акции магазина автотоваров START во Владивостоке. Открытие магазина, специальные цены, новые поступления товаров.">
      <meta name="keywords" content="новости автотоваров, открытие магазина start, акции на аккумуляторы">
    </div>

    <transition name="slide-down">
      <div v-if="showCart" class="cart-dropdown">
        <div class="cart-header">
          <h3>Корзина</h3>
          <button class="close-btn" @click="showCart = false">×</button>
        </div>
        <div class="cart-content">
          <div v-if="cartItems.length === 0" class="empty-cart">
            <p>Корзина пуста</p>
          </div>
          <div v-else class="cart-items">
            <div v-for="item in cartItems" :key="item.id" class="cart-item">
              <div class="item-image" v-if="item.image">
                <img :src="item.image" :alt="item.name" class="cart-item-img">
              </div>
              <div class="item-info">
                <span class="item-name">{{ item.name }}</span>
                <div class="item-price-quantity">
                  <span class="item-price">{{ item.price }} руб. × {{ item.quantity }}</span>
                  <span class="item-total">{{ item.price * item.quantity }} руб.</span>
                </div>
              </div>
              <button class="remove-btn" @click="removeFromCart(item.id)" title="Удалить">×</button>
            </div>
          </div>
        </div>
        <div v-if="cartItems.length > 0" class="cart-footer">
          <div class="cart-total">
            Итого: <span class="total-price">{{ cartTotal }} руб.</span>
          </div>
          <button class="checkout-btn">Оформить заказ</button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Header',
  setup() {
    const cartStore = inject('cartStore')
    
    return {
      cartStore
    }
  },
  data() {
    return {
      showCart: false,
      showProfile: false
    }
  },
  computed: {
    cartItems() {
      return this.cartStore?.cartItems || []
    },
    cartItemsCount() {
      return this.cartStore?.cartItemsCount || 0
    },
    cartTotal() {
      return this.cartStore?.cartTotal || 0
    }
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart
      this.showProfile = false
    },
    toggleProfile() {
      this.showProfile = !this.showProfile
      this.showCart = false
    },
    removeFromCart(productId) {
      this.cartStore.removeFromCart(productId)
    },
    increaseQuantity(productId) {
      const item = this.cartItems.find(item => item.id === productId)
      if (item) {
        this.cartStore.updateQuantity(productId, item.quantity + 1)
      }
    },
    decreaseQuantity(productId) {
      const item = this.cartItems.find(item => item.id === productId)
      if (item && item.quantity > 1) {
        this.cartStore.updateQuantity(productId, item.quantity - 1)
      } else if (item && item.quantity === 1) {
        this.removeFromCart(productId)
      }
    }
  },
  mounted() {
    // Динамически обновляем title и meta теги
    this.updateMetaTags()
  },
  watch: {
    '$route.path': {
      handler() {
        this.updateMetaTags()
      },
      immediate: true
    }
  },
  methods: {
    updateMetaTags() {
      const titles = {
        '/': 'START - Автотовары: аккумуляторы, автомасла, аксессуары во Владивостоке',
        '/catalog': 'Каталог автотоваров | START - Владивосток',
        '/services': 'Услуги автосервиса | START - Владивосток',
        '/news': 'Новости магазина автотоваров START | Владивосток'
      }
      
      const descriptions = {
        '/': 'Надежные автотовары по выгодным ценам: аккумуляторы MAGNUM и ЗВЕРЬ, автомасла, аксессуары и автохимия. Доставка по Владивостоку. Гарантия качества.',
        '/catalog': 'Широкий выбор автотоваров: аккумуляторы, автомасла, аксессуары, автохимия. Доставка по Владивостоку.',
        '/services': 'Услуги автосервиса в Владивостоке: диагностика аккумуляторов, консультации, обмен старых АКБ, подбор автохимии. Профессиональный подход.',
        '/news': 'Новости и акции магазина автотоваров START во Владивостоке. Открытие магазина, специальные цены, новые поступления товаров.'
      }
      
      const title = titles[this.$route.path] || titles['/']
      const description = descriptions[this.$route.path] || descriptions['/']
      
      document.title = title
      
      let metaDesc = document.querySelector('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.name = 'description'
        document.head.appendChild(metaDesc)
      }
      metaDesc.content = description
    },
    toggleCart() {
      this.showCart = !this.showCart
      this.showProfile = false
    },
    toggleProfile() {
      this.showProfile = !this.showProfile
      this.showCart = false
    },
    removeFromCart(productId) {
      this.cartStore.removeFromCart(productId)
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #878787;
  border-bottom: 1px solid #333;
  padding: 15px 0;
  position: relative;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  font-family: "AlfaSlabOne";
  color: #FFFFFF;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 2px;
}

.nav {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  text-transform: uppercase;
  font-size: 14px;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #3C3A3A;
}

.header-actions {
  display: flex;
  gap: 15px;
  align-items: center;
}

.action-item {
  position: relative;
}

.action-btn {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.3s;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-btn:hover {
  background-color: #252525;
  color: #C3C2C2;
}

.action-icon {
  transition: transform 0.2s;
}

.action-btn:hover .action-icon {
  transform: scale(1.1);
}

.cart img {
  width: 30px;
  height: 30px;
  filter: brightness(0) invert(1);
}

.profile img {
  width: 25px;
  height: 25px;
  filter: brightness(0) invert(1);
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #e53935;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.cart-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #878787;
  border: 1px solid #333;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  min-width: 350px;
}

.cart-dropdown {
  right: 20px;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #333;
}

.cart-header h3 {
  color: #3C3A3A;
  margin: 0;
  font-size: 16px;
  text-transform: uppercase;
}

.close-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.close-btn:hover {
  background-color: #e53935;
}

.cart-content {
  padding: 20px;
  max-height: 400px;
  overflow-y: auto;
}

.empty-cart {
  text-align: center;
  color: #888;
  padding: 20px 0;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #333;
  gap: 15px;
}

.item-image {
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 6px;
  overflow: hidden;
  background: #2a2a2a;
}

.cart-item-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item-name {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
}

.item-price-quantity {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.item-price {
  color: #FFFFFF;
  font-size: 14px;
  font-weight: bold;
}

.item-total {
  color: #3C3A3A;
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;
}

.remove-btn {
  background: #3C3A3A;
  color: white;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  flex-shrink: 0;
}

.remove-btn:hover {
  background: #c62828;
}

.cart-footer {
  padding: 15px 20px;
  border-top: 1px solid #333;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  color: #fff;
  font-weight: 500;
}

.total-price {
  color: #3C3A3A;
  font-weight: bold;
  font-size: 18px;
}

.checkout-btn {
  width: 100%;
  background-color: #3C3A3A;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s;
}

.checkout-btn:hover {
  background-color: #A6A6A6;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  transform-origin: top right;
}

.slide-down-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-10px);
}
</style>