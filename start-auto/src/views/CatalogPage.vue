<template>
  <main class="catalog">
    <!-- SEO мета-теги -->
    <div style="display: none;">
      <title>{{ seoTitle }}</title>
      <meta name="description" :content="seoDescription">
      <meta name="keywords" :content="seoKeywords">
    </div>

    <div class="container">
      <h1 class="page-title">КАТАЛОГ</h1>
      
      <div class="catalog-layout">
        <!-- Боковая панель -->
        <aside class="sidebar">
          <div class="filters-section">
            <div v-if="currentCategory" class="back-to-benefits">
              <button 
                class="back-btn" 
                @click="goBackToBenefits"
                :class="{ 'visible': currentCategory }"
              >
              НАЗАД К ПРЕИМУЩЕСТВАМ
              </button>
            </div>

            <!-- АККУМУЛЯТОРЫ -->
            <div class="category-group">
              <div class="category-header" @click="toggleCategory('akkumulyatory')">
                <h3 class="category-title">АККУМУЛЯТОРЫ</h3>
                <span class="category-arrow" :class="{ 'open': openCategory === 'akkumulyatory' }">▼</span>
              </div>
              <transition name="slide">
                <div v-show="openCategory === 'akkumulyatory'" class="subcategories">
                  <!-- АКБ MAGNUM -->
                  <div class="subcategory-group">
                    <div class="subcategory-header" @click="toggleSubCategory('magnum')">
                      <h4 class="subcategory-title">АКБ MAGNUM</h4>
                      <span class="subcategory-arrow" :class="{ 'open': openSubCategory === 'magnum' }">▼</span>
                    </div>
                    <transition name="slide">
                      <ul v-show="openSubCategory === 'magnum'" class="filter-list">
                        <li><a href="#" class="filter-link" @click.prevent="selectSubCategory('magnum-60ah')">АКБ MAGNUM 60Ah - 2199 руб.</a></li>
                        <li><a href="#" class="filter-link" @click.prevent="selectSubCategory('magnum-75ah')">АКБ MAGNUM 75Ah - 2699 руб.</a></li>
                      </ul>
                    </transition>
                  </div>
                  
                  <!-- АКБ ЗВЕРЬ -->
                  <div class="subcategory-group">
                    <div class="subcategory-header" @click="toggleSubCategory('zver')">
                      <h4 class="subcategory-title">АКБ ЗВЕРЬ</h4>
                      <span class="subcategory-arrow" :class="{ 'open': openSubCategory === 'zver' }">▼</span>
                    </div>
                    <transition name="slide">
                      <ul v-show="openSubCategory === 'zver'" class="filter-list">
                        <li><a href="#" class="filter-link" @click.prevent="selectSubCategory('zver-60ah')">АКБ ЗВЕРЬ 60Ah - 3199 руб.</a></li>
                        <li><a href="#" class="filter-link" @click.prevent="selectSubCategory('zver-77ah')">АКБ ЗВЕРЬ 77Ah - 3599 руб.</a></li>
                      </ul>
                    </transition>
                  </div>
                </div>
              </transition>
            </div>

            <!-- АВТОМАСЛА -->
            <div class="category-group">
              <div class="category-header" @click="toggleCategory('masla')">
                <h3 class="category-title">АВТОМАСЛА</h3>
                <span class="category-arrow" :class="{ 'open': openCategory === 'masla' }">▼</span>
              </div>
              <transition name="slide">
                <ul v-show="openCategory === 'masla'" class="filter-list">
                  <li><a href="#" class="filter-link" @click.prevent="selectSubCategory('masla-5w30')">МОТОРНОЕ 5W-30 - 1499 руб.</a></li>
                  <li><a href="#" class="filter-link" @click.prevent="selectSubCategory('masla-10w40')">МОТОРНОЕ 10W-40 - 1299 руб.</a></li>
                </ul>
              </transition>
            </div>

            <!-- АКСЕССУАРЫ -->
            <div class="category-group">
              <div class="category-header" @click="toggleCategory('aksessuary')">
                <h3 class="category-title">АКСЕССУАРЫ</h3>
                <span class="category-arrow" :class="{ 'open': openCategory === 'aksessuary' }">▼</span>
              </div>
              <transition name="slide">
                <ul v-show="openCategory === 'aksessuary'" class="filter-list">
                  <li><a href="#" class="filter-link" @click.prevent="selectSubCategory('kovriki')">КОВРИКИ - 2990 руб.</a></li>
                  <li><a href="#" class="filter-link" @click.prevent="selectSubCategory('nakidki')">НАКИДКИ НА СИДЕНЬЯ - 1890 руб.</a></li>
                </ul>
              </transition>
            </div>

            <!-- АВТОХИМИЯ -->
            <div class="category-group">
              <div class="category-header" @click="toggleCategory('himiya')">
                <h3 class="category-title">АВТОХИМИЯ</h3>
                <span class="category-arrow" :class="{ 'open': openCategory === 'himiya' }">▼</span>
              </div>
              <transition name="slide">
                <ul v-show="openCategory === 'himiya'" class="filter-list">
                  <li><a href="#" class="filter-link" @click.prevent="selectSubCategory('him-omoiki')">ОМЫВАЮЩЕЕ СРЕДСТВО - 590 руб.</a></li>
                  <li><a href="#" class="filter-link" @click.prevent="selectSubCategory('him-antifriz')">НЕЗАМЕРЗАЙКА - 890 руб.</a></li>
                </ul>
              </transition>
            </div>
          </div>
        </aside>

        <!-- Основной контент -->
        <div class="catalog-content">
          <!-- Преимущества показываются только если не выбрана категория -->
          <div v-if="!currentCategory" class="benefits-page">
            <section class="benefits-section">
              <h2 class="benefits-title">ПРЕИМУЩЕСТВА НАШЕЙ ПРОДУКЦИИ</h2>
              <div class="benefits-table">
                <div class="benefits-row">
                  <div class="benefit-cell">
                    <h3>Отличное сочетание цены и качества</h3>
                  </div>
                  <div class="benefit-cell">
                    <h3>Продолжительный срок службы</h3>
                  </div>
                </div>
                <div class="benefits-row">
                  <div class="benefit-cell">
                    <h3>Для стандартной комплектации авто</h3>
                  </div>
                  <div class="benefit-cell">
                    <h3>Высокое качество по невысокой цене</h3>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <!-- Товары -->
          <transition name="fade" mode="out-in">
            <!-- Товары АКБ MAGNUM -->
            <div v-if="currentCategory === 'magnum'" key="magnum" class="category-content">
              <h2 class="category-subtitle">АККУМУЛЯТОРЫ / АКБ MAGNUM</h2>
              
              <!-- Скрытый SEO текст -->
              <div style="display: none;">
                <h3>Купить аккумуляторы MAGNUM во Владивостоке</h3>
                <p>Аккумуляторы MAGNUM - это надежные источники питания для вашего автомобиля. Купить аккумулятор MAGNUM 60Ah или 75Ah можно в магазине START во Владивостоке. Мы предлагаем качественные АКБ по выгодным ценам с гарантией.</p>
              </div>
              
              <section class="products-grid">
                <div class="product-card">
                  <div class="product-image">
                    <img src="/images/Magnum60Ah.png" alt="АКБ MAGNUM 60Ah автомобильный аккумулятор" class="product-img">
                  </div>
                  <div class="product-badge">АКБ MAGNUM 60Ah</div>
                  <div class="price-section">
                    <span class="old-price">2990 руб.</span>
                    <span class="current-price">2199 руб.</span>
                  </div>
                  <p class="price-note">Аккумулятор MAGNUM с мощностью 60Ah</p>
                  <div class="quantity-selector">
                    <button class="qty-btn" @click="decrementQuantity('magnum-60ah')">-</button>
                    <span class="qty-value">{{ getQuantity('magnum-60ah') }}</span>
                    <button class="qty-btn" @click="incrementQuantity('magnum-60ah')">+</button>
                    <span class="qty-plus">+ 12</span>
                  </div>
                  <button 
                    class="cart-btn" 
                    :class="{ 'in-cart': isInCart('magnum-60ah') }"
                    @click="addToCart('magnum-60ah', 'АКБ MAGNUM 60Ah', 2199, getQuantity('magnum-60ah'), '/images/Magnum60Ah.png')"
                  >
                    {{ isInCart('magnum-60ah') ? 'ТОВАР В КОРЗИНЕ' : 'ДОБАВИТЬ В КОРЗИНУ' }}
                  </button>
                </div>

                <div class="product-card">
                  <div class="product-image">
                    <img src="/images/Magnum75Ah.png" alt="АКБ MAGNUM 75Ah автомобильный аккумулятор" class="product-img">
                  </div>
                  <div class="product-badge">АКБ MAGNUM 75Ah</div>
                  <div class="price-section">
                    <span class="old-price">3490 руб.</span>
                    <span class="current-price">2699 руб.</span>
                  </div>
                  <p class="price-note">Аккумулятор MAGNUM с мощностью 75Ah</p>
                  <div class="quantity-selector">
                    <button class="qty-btn" @click="decrementQuantity('magnum-75ah')">-</button>
                    <span class="qty-value">{{ getQuantity('magnum-75ah') }}</span>
                    <button class="qty-btn" @click="incrementQuantity('magnum-75ah')">+</button>
                    <span class="qty-plus">+ 12</span>
                  </div>
                  <button 
                    class="cart-btn" 
                    :class="{ 'in-cart': isInCart('magnum-75ah') }"
                    @click="addToCart('magnum-75ah', 'АКБ MAGNUM 75Ah', 2699, getQuantity('magnum-75ah'), '/images/Magnum75Ah.png')"
                  >
                    {{ isInCart('magnum-75ah') ? 'ТОВАР В КОРЗИНЕ' : 'ДОБАВИТЬ В КОРЗИНУ' }}
                  </button>
                </div>
              </section>

              <BenefitsSection />
            </div>

            <!-- Товары АКБ ЗВЕРЬ -->
            <div v-else-if="currentCategory === 'zver'" key="zver" class="category-content">
              <h2 class="category-subtitle">АККУМУЛЯТОРЫ / АКБ ЗВЕРЬ</h2>
              
              <!-- Скрытый SEO текст -->
              <div style="display: none;">
                <h3>Аккумуляторы ЗВЕРЬ - купить во Владивостоке</h3>
                <p>Аккумуляторы ЗВЕРЬ - мощные и надежные АКБ для требовательных автомобилей. В наличии аккумуляторы ЗВЕРЬ 60Ah и 77Ah по специальным ценам.</p>
              </div>
              
              <section class="products-grid">
                <div class="product-card">
                  <div class="product-image">
                    <img src="/images/Zver60Ah.png" alt="АКБ ЗВЕРЬ 60Ah автомобильный аккумулятор" class="product-img">
                  </div>
                  <div class="product-badge">АКБ ЗВЕРЬ 60Ah</div>
                  <div class="price-section">
                    <span class="old-price">3890 руб.</span>
                    <span class="current-price">3199 руб.</span>
                  </div>
                  <p class="price-note">Аккумулятор ЗВЕРЬ с мощностью 60Ah</p>
                  <div class="quantity-selector">
                    <button class="qty-btn" @click="decrementQuantity('zver-60ah')">-</button>
                    <span class="qty-value">{{ getQuantity('zver-60ah') }}</span>
                    <button class="qty-btn" @click="incrementQuantity('zver-60ah')">+</button>
                    <span class="qty-plus">+ 12</span>
                  </div>
                  <button 
                    class="cart-btn" 
                    :class="{ 'in-cart': isInCart('zver-60ah') }"
                    @click="addToCart('zver-60ah', 'АКБ ЗВЕРЬ 60Ah', 3199, getQuantity('zver-60ah'), '/images/Zver60Ah.png')"
                  >
                    {{ isInCart('zver-60ah') ? 'ТОВАР В КОРЗИНЕ' : 'ДОБАВИТЬ В КОРЗИНУ' }}
                  </button>
                </div>

                <div class="product-card">
                  <div class="product-image">
                    <img src="/images/Zver77Ah.png" alt="АКБ ЗВЕРЬ 77Ah автомобильный аккумулятор" class="product-img">
                  </div>
                  <div class="product-badge">АКБ ЗВЕРЬ 77Ah</div>
                  <div class="price-section">
                    <span class="old-price">4290 руб.</span>
                    <span class="current-price">3599 руб.</span>
                  </div>
                  <p class="price-note">Аккумулятор ЗВЕРЬ с мощностью 77Ah</p>
                  <div class="quantity-selector">
                    <button class="qty-btn" @click="decrementQuantity('zver-77ah')">-</button>
                    <span class="qty-value">{{ getQuantity('zver-77ah') }}</span>
                    <button class="qty-btn" @click="incrementQuantity('zver-77ah')">+</button>
                    <span class="qty-plus">+ 12</span>
                  </div>
                  <button 
                    class="cart-btn" 
                    :class="{ 'in-cart': isInCart('zver-77ah') }"
                    @click="addToCart('zver-77ah', 'АКБ ЗВЕРЬ 77Ah', 3599, getQuantity('zver-77ah'), '/images/Zver77Ah.png')"
                  >
                    {{ isInCart('zver-77ah') ? 'ТОВАР В КОРЗИНЕ' : 'ДОБАВИТЬ В КОРЗИНУ' }}
                  </button>
                </div>
              </section>

              <BenefitsSection />
            </div>

            <!-- Товары АВТОМАСЛА -->
            <div v-else-if="currentCategory === 'masla'" key="masla" class="category-content">
              <h2 class="category-subtitle">АВТОМАСЛА</h2>
              
              <!-- Скрытый SEO текст -->
              <div style="display: none;">
                <h3>Автомасла 5W-30 и 10W-40 - купить во Владивостоке</h3>
                <p>Автомасла для двигателя вашего автомобиля. Синтетические и полусинтетические масла 5W-30 и 10W-40.</p>
              </div>
              
              <section class="products-grid">
                <div class="product-card">
                  <div class="product-image">
                    <img src="/images/Motornoe_5W30.png" alt="Моторное масло 5W-30 для автомобиля" class="product-img">
                  </div>
                  <div class="product-badge">МОТОРНОЕ 5W-30</div>
                  <div class="price-section">
                    <span class="old-price">1890 руб.</span>
                    <span class="current-price">1499 руб.</span>
                  </div>
                  <p class="price-note">Синтетическое моторное масло 4л</p>
                  <div class="quantity-selector">
                    <button class="qty-btn" @click="decrementQuantity('masla-5w30')">-</button>
                    <span class="qty-value">{{ getQuantity('masla-5w30') }}</span>
                    <button class="qty-btn" @click="incrementQuantity('masla-5w30')">+</button>
                    <span class="qty-plus">+ 12</span>
                  </div>
                  <button 
                    class="cart-btn" 
                    :class="{ 'in-cart': isInCart('masla-5w30') }"
                    @click="addToCart('masla-5w30', 'МОТОРНОЕ 5W-30', 1499, getQuantity('masla-5w30'), '/images/Motornoe_5W30.png')"
                  >
                    {{ isInCart('masla-5w30') ? 'ТОВАР В КОРЗИНЕ' : 'ДОБАВИТЬ В КОРЗИНУ' }}
                  </button>
                </div>

                <div class="product-card">
                  <div class="product-image">
                    <img src="/images/Motornoe_10W40.png" alt="Моторное масло 10W-40 для автомобиля" class="product-img">
                  </div>
                  <div class="product-badge">МОТОРНОЕ 10W-40</div>
                  <div class="price-section">
                    <span class="old-price">1690 руб.</span>
                    <span class="current-price">1299 руб.</span>
                  </div>
                  <p class="price-note">Полусинтетическое моторное масло 4л</p>
                  <div class="quantity-selector">
                    <button class="qty-btn" @click="decrementQuantity('masla-10w40')">-</button>
                    <span class="qty-value">{{ getQuantity('masla-10w40') }}</span>
                    <button class="qty-btn" @click="incrementQuantity('masla-10w40')">+</button>
                    <span class="qty-plus">+ 12</span>
                  </div>
                  <button 
                    class="cart-btn" 
                    :class="{ 'in-cart': isInCart('masla-10w40') }"
                    @click="addToCart('masla-10w40', 'МОТОРНОЕ 10W-40', 1299, getQuantity('masla-10w40'), '/images/Motornoe_10W40.png')"
                  >
                    {{ isInCart('masla-10w40') ? 'ТОВАР В КОРЗИНЕ' : 'ДОБАВИТЬ В КОРЗИНУ' }}
                  </button>
                </div>
              </section>

              <BenefitsSection />
            </div>

            <!-- Товары АКСЕССУАРЫ -->
            <div v-else-if="currentCategory === 'aksessuary'" key="aksessuary" class="category-content">
              <h2 class="category-subtitle">АКСЕССУАРЫ</h2>
              
              <!-- Скрытый SEO текст -->
              <div style="display: none;">
                <h3>Автоаксессуары - купить во Владивостоке</h3>
                <p>Автоаксессуары для комфорта в салоне. Качественные коврики и накидки на сиденья.</p>
              </div>
              
              <section class="products-grid">
                <div class="product-card">
                  <div class="product-image">
                    <img src="/images/Kovriki.jpg" alt="Автомобильные коврики для салона" class="product-img">
                  </div>
                  <div class="product-badge">КОВРИКИ</div>
                  <div class="price-section">
                    <span class="old-price">3990 руб.</span>
                    <span class="current-price">2990 руб.</span>
                  </div>
                  <p class="price-note">Качественные автомобильные коврики</p>
                  <div class="quantity-selector">
                    <button class="qty-btn" @click="decrementQuantity('kovriki')">-</button>
                    <span class="qty-value">{{ getQuantity('kovriki') }}</span>
                    <button class="qty-btn" @click="incrementQuantity('kovriki')">+</button>
                    <span class="qty-plus">+ 12</span>
                  </div>
                  <button 
                    class="cart-btn" 
                    :class="{ 'in-cart': isInCart('kovriki') }"
                    @click="addToCart('kovriki', 'КОВРИКИ', 2990, getQuantity('kovriki'), '/images/Kovriki.jpg')"
                  >
                    {{ isInCart('kovriki') ? 'ТОВАР В КОРЗИНЕ' : 'ДОБАВИТЬ В КОРЗИНУ' }}
                  </button>
                </div>

                <div class="product-card">
                  <div class="product-image">
                    <img src="/images/Nakidki.png" alt="Накидки на автомобильные сиденья" class="product-img">
                  </div>
                  <div class="product-badge">НАКИДКИ НА СИДЕНЬЯ</div>
                  <div class="price-section">
                    <span class="old-price">2390 руб.</span>
                    <span class="current-price">1890 руб.</span>
                  </div>
                  <p class="price-note">Комплект автомобильных накидок на сиденья</p>
                  <div class="quantity-selector">
                    <button class="qty-btn" @click="decrementQuantity('nakidki')">-</button>
                    <span class="qty-value">{{ getQuantity('nakidki') }}</span>
                    <button class="qty-btn" @click="incrementQuantity('nakidki')">+</button>
                    <span class="qty-plus">+ 12</span>
                  </div>
                  <button 
                    class="cart-btn" 
                    :class="{ 'in-cart': isInCart('nakidki') }"
                    @click="addToCart('nakidki', 'НАКИДКИ НА СИДЕНЬЯ', 1890, getQuantity('nakidki'), '/images/Nakidki.png')"
                  >
                    {{ isInCart('nakidki') ? 'ТОВАР В КОРЗИНЕ' : 'ДОБАВИТЬ В КОРЗИНУ' }}
                  </button>
                </div>
              </section>

              <BenefitsSection />
            </div>

            <!-- АВТОХИМИЯ -->
            <div v-else-if="currentCategory === 'himiya'" key="himiya" class="category-content">
              <h2 class="category-subtitle">АВТОХИМИЯ</h2>
              
              <!-- Скрытый SEO текст -->
              <div style="display: none;">
                <h3>Автохимия - купить во Владивостоке</h3>
                <p>Автохимия для ухода за автомобилем. Омывающие жидкости и антифризы.</p>
              </div>
              
              <section class="products-grid">
                <div class="product-card">
                  <div class="product-image">
                    <img src="/images/OmivaushieSredstva.png" alt="Омывающая жидкость для автомобиля" class="product-img">
                  </div>
                  <div class="product-badge">ОМЫВАЮЩИЕ СРЕДСТВА</div>
                  <div class="price-section">
                    <span class="old-price">790 руб.</span>
                    <span class="current-price">590 руб.</span>
                  </div>
                  <p class="price-note">Стеклоомывающая жидкость 4л</p>
                  <div class="quantity-selector">
                    <button class="qty-btn" @click="decrementQuantity('him-omoiki')">-</button>
                    <span class="qty-value">{{ getQuantity('him-omoiki') }}</span>
                    <button class="qty-btn" @click="incrementQuantity('him-omoiki')">+</button>
                    <span class="qty-plus">+ 12</span>
                  </div>
                  <button 
                    class="cart-btn" 
                    :class="{ 'in-cart': isInCart('him-omoiki') }"
                    @click="addToCart('him-omoiki', 'ОМЫВАЮЩЕЕ СРЕДСТВО', 590, getQuantity('him-omoiki'), '/images/OmivaushieSredstva.png')"
                  >
                    {{ isInCart('him-omoiki') ? 'ТОВАР В КОРЗИНЕ' : 'ДОБАВИТЬ В КОРЗИНУ' }}
                  </button>
                </div>

                <div class="product-card">
                  <div class="product-image">
                    <img src="/images/Antifriz.png" alt="Антифриз незамерзайка для автомобиля" class="product-img">
                  </div>
                  <div class="product-badge">НЕЗАМЕРЗАЙКА</div>
                  <div class="price-section">
                    <span class="old-price">1090 руб.</span>
                    <span class="current-price">890 руб.</span>
                  </div>
                  <p class="price-note">Антифриз концентрат 1.5л</p>
                  <div class="quantity-selector">
                    <button class="qty-btn" @click="decrementQuantity('him-antifriz')">-</button>
                    <span class="qty-value">{{ getQuantity('him-antifriz') }}</span>
                    <button class="qty-btn" @click="incrementQuantity('him-antifriz')">+</button>
                    <span class="qty-plus">+ 12</span>
                  </div>
                  <button 
                    class="cart-btn" 
                    :class="{ 'in-cart': isInCart('him-antifriz') }"
                    @click="addToCart('him-antifriz', 'НЕЗАМЕРЗАЙКА', 890, getQuantity('him-antifriz'), '/images/Antifriz.png')"
                  >
                    {{ isInCart('him-antifriz') ? 'ТОВАР В КОРЗИНЕ' : 'ДОБАВИТЬ В КОРЗИНУ' }}
                  </button>
                </div>
              </section>

              <BenefitsSection />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'CatalogPage',
  inject: ['cartStore'],
  data() {
    return {
      openCategory: null,
      openSubCategory: null,
      currentCategory: null,
      sortBy: 'price',
      quantities: {
        'magnum-60ah': 0,
        'magnum-75ah': 0,
        'zver-60ah': 0,
        'zver-77ah': 0,
        'masla-5w30': 0,
        'masla-10w40': 0,
        'kovriki': 0,
        'nakidki': 0,
        'him-omoiki': 0,
        'him-antifriz': 0
      }
    }
  },
  computed: {
    seoTitle() {
      const titles = {
        'magnum': 'Аккумуляторы MAGNUM - купить во Владивостоке | START',
        'zver': 'Аккумуляторы ЗВЕРЬ - надежные АКБ для авто | START',
        'masla': 'Автомасла 5W-30, 10W-40 - купить во Владивостоке',
        'aksessuary': 'Автоаксессуары: коврики, накидки | START',
        'himiya': 'Автохимия: омывающая жидкость, антифриз'
      }
      return titles[this.currentCategory] || 'Каталог автотоваров | START'
    },
    
    seoDescription() {
      const descriptions = {
        'magnum': 'Купить аккумуляторы MAGNUM 60Ah и 75Ah по акции во Владивостоке. Гарантия качества, доставка. Цена от 2199 руб.',
        'zver': 'Аккумуляторы ЗВЕРЬ 60Ah и 77Ah для автомобилей. Надежные АКБ по доступной цене с гарантией.',
        'masla': 'Моторные масла 5W-30 и 10W-40 для автомобилей. Синтетические и полусинтетические масла по выгодным ценам.',
        'aksessuary': 'Автомобильные коврики и накидки на сиденья. Качественные аксессуары для салона авто.',
        'himiya': 'Омывающая жидкость и незамерзайка для автомобилей. Качественная автохимия по доступным ценам.'
      }
      return descriptions[this.currentCategory] || 'Широкий выбор автотоваров: аккумуляторы, автомасла, аксессуары, автохимия. Доставка по Владивостоку.'
    },
    
    seoKeywords() {
      const keywords = {
        'magnum': 'аккумулятор magnum купить, акб magnum 60ah, аккумулятор для авто Владивосток, аккумулятор magnum цена',
        'zver': 'аккумулятор зверь, акб зверь 77ah, аккумулятор зверь 60ah, купить аккумулятор зверь',
        'masla': 'моторное масло 5w30, масло 10w40, синтетическое масло, полусинтетическое масло',
        'aksessuary': 'автоковрики, накидки на сиденья, аксессуары для авто, коврики в машину',
        'himiya': 'омывающая жидкость, незамерзайка, антифриз, автохимия купить'
      }
      return keywords[this.currentCategory] || 'автотовары, аккумуляторы, автомасла, автоаксессуары, автохимия, Владивосток'
    },
    
    cartItems() {
      return this.cartStore?.cartItems || [];
    }
  },
  mounted() {
    this.handleUrlParams();
    this.updateMetaTags();
  },
  watch: {
    '$route.query': {
      handler(newQuery) {
        this.handleUrlParams();
        this.updateMetaTags();
      },
      immediate: true
    },
    currentCategory() {
      this.updateMetaTags();
    }
  },
  methods: {
    updateMetaTags() {
      document.title = this.seoTitle;
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = this.seoDescription;
      
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = this.seoKeywords;
    },
    
    handleUrlParams() {
      const category = this.$route.query.category;
      if (category && this.isValidCategory(category)) {
        if (category === 'magnum' || category === 'zver') {
          this.openCategory = 'akkumulyatory';
          this.openSubCategory = category;
        } else {
          this.openCategory = category;
        }
        this.currentCategory = category;
      } else {
        this.openCategory = null;
        this.openSubCategory = null;
        this.currentCategory = null;
      }
    },
    
    isValidCategory(category) {
      const validCategories = ['magnum', 'zver', 'masla', 'aksessuary', 'himiya'];
      return validCategories.includes(category);
    },
    
    toggleCategory(category) {
      if (this.openCategory === category) {
        this.openCategory = null;
        this.openSubCategory = null;
        if (category !== 'akkumulyatory') {
          this.currentCategory = null;
        }
        if (category !== 'akkumulyatory') {
          this.$router.push({ 
            query: { ...this.$route.query, category: null } 
          });
        }
      } else {
        this.openCategory = category;
        if (category !== 'akkumulyatory') {
          this.currentCategory = category;
          this.$router.push({ 
            query: { ...this.$route.query, category: this.currentCategory } 
          });
        }
      }
    },
    
    toggleSubCategory(subCategory) {
      if (this.openSubCategory === subCategory) {
        this.openSubCategory = null;
      } else {
        this.openSubCategory = subCategory;
        this.currentCategory = subCategory;
        this.$router.push({ 
          query: { ...this.$route.query, category: this.currentCategory } 
        });
      }
    },
    
    selectSubCategory(subCategory) {
      if (subCategory.includes('magnum')) {
        this.currentCategory = 'magnum';
        this.openCategory = 'akkumulyatory';
        this.openSubCategory = 'magnum';
      } else if (subCategory.includes('zver')) {
        this.currentCategory = 'zver';
        this.openCategory = 'akkumulyatory';
        this.openSubCategory = 'zver';
      } else if (subCategory.includes('masla')) {
        this.currentCategory = 'masla';
        this.openCategory = 'masla';
      } else if (subCategory.includes('aks')) {
        this.currentCategory = 'aksessuary';
        this.openCategory = 'aksessuary';
      } else if (subCategory.includes('him')) {
        this.currentCategory = 'himiya';
        this.openCategory = 'himiya';
      }
      
      this.$router.push({ 
        query: { 
          ...this.$route.query, 
          category: this.currentCategory 
        } 
      });
    },
    
    incrementQuantity(productId) {
      if (this.quantities[productId] < 99) {
        this.quantities[productId]++;
      }
    },
    
    decrementQuantity(productId) {
      if (this.quantities[productId] > 0) {
        this.quantities[productId]--;
      }
    },
    
    getQuantity(productId) {
      return this.quantities[productId].toString().padStart(2, '0');
    },
    
    addToCart(productId, name, price, quantity, image) {
      const quantityNum = parseInt(quantity);
      
      if (quantityNum === 0) {
        alert('Пожалуйста, выберите количество товара');
        return;
      }

      if (this.isInCart(productId)) {
        this.cartStore.removeFromCart(productId);
      } else {
        this.cartStore.addToCart({
          id: productId,
          name: name,
          price: price,
          quantity: quantityNum,
          image: image
        });
      }
    },
    
    isInCart(productId) {
      return this.cartItems.some(item => item.id === productId);
    },
    
    goBackToBenefits() {
      this.currentCategory = null;
      this.openCategory = null;
      this.openSubCategory = null;
      
      this.$router.push({ 
        path: '/catalog',
        query: {}
      });
    }
  }
}
</script>

<style scoped>
.catalog {
  padding: 40px 0;
  background-color: #0a0a0a;
}

.page-title {
  font-size: 32px;
  margin-bottom: 30px;
  color: #FFFFFF;
  text-align: center;
  text-transform: uppercase;
}

.catalog-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 40px;
  align-items: start;
}

.sidebar {
  background-color: #3C3A3A;
  padding: 25px;
  border-radius: 8px;
  position: sticky;
  top: 20px;
}

.back-to-benefits {
  margin-bottom: 20px;
}

.back-btn {
  width: 100%;
  background-color: #878787;
  color: white;
  border: none;
  padding: 12px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  transition: all 0.3s ease;
  text-align: left;
  position: relative;
  display: block;
}

.back-btn:hover {
  background-color: #A6A6A6;
}

.back-btn:before {
  content: "←";
  margin-right: 8px;
  font-weight: bold;
}

.category-group {
  margin-bottom: 15px;
  border: 1px solid #333;
  border-radius: 6px;
  overflow: hidden;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 12px 15px;
  background-color: #2a2a2a;
  transition: background-color 0.3s;
}

.category-header:hover {
  background-color: #333;
}

.category-title {
  color: #FFFFFF;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
}

.category-arrow {
  color: #A6A6A6;
  transition: transform 0.3s;
  font-size: 12px;
}

.category-arrow.open {
  transform: rotate(180deg);
}

.subcategories {
  background-color: #1a1a1a;
  padding: 10px 15px;
}

.subcategory-group {
  margin-bottom: 8px;
}

.subcategory-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px 15px;
  background-color: #252525;
  border-radius: 4px;
  border-left: 3px solid transparent;
  transition: all 0.3s;
}

.subcategory-header:hover {
  background-color: rgba(0, 0, 0, 0.1);
  border-left-color: #3C3A3A;
}

.subcategory-title {
  color: #FFFFFF;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
}

.subcategory-arrow {
  color: #A6A6A6;
  transition: transform 0.3s;
  font-size: 10px;
}

.subcategory-arrow.open {
  transform: rotate(180deg);
}

.filter-list {
  list-style: none;
  margin: 5px 0 0 15px;
  padding: 0;
}

.filter-list li {
  margin-bottom: 5px;
}

.filter-link {
  color: #fff;
  text-decoration: none;
  transition: all 0.3s;
  display: block;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #252525;
  border-left: 2px solid transparent;
  font-size: 14px;
}

.filter-link:hover {
  color: #878787;
  background-color: #2a2a2a;
  border-left-color: #A6A6A6;
}

.benefits-section {
  margin-bottom: 50px;
}

.benefits-title {
  color: #FFFFFF;
  margin-bottom: 40px;
  font-size: 28px;
  text-align: center;
  text-transform: uppercase;
}

.benefits-table {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.benefits-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.benefit-cell {
  background: linear-gradient(145deg, #3C3A3A, #878787);
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.benefit-cell:hover {
  border-color: #3C3A3A;
  transform: translateY(-2px);
}

.benefit-cell h3 {
  color: #fff;
  font-size: 16px;
  line-height: 1.4;
  margin: 0;
  font-weight: normal;
}

.category-content {
  margin-top: 40px;
}

.category-subtitle {
  color: #FFFFFF;
  font-size: 24px;
  margin-bottom: 30px;
  text-transform: uppercase;
  text-align: left;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-bottom: 50px;
}

.product-card {
  background:#3C3A3A;
  padding: 25px;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #333;
  position: relative;
}

.product-image {
  width: 100%;
  height: 250px;
  margin-bottom: 15px;
  overflow: hidden;
  border-radius: 6px;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
}

.product-card:hover .product-img {
  transform: scale(1.05);
}

.product-badge {
  background-color: #878787;
  color: white;
  padding: 8px 15px;
  border-radius: 4px;
  font-weight: bold;
  margin: 0 0 20px 0;
  display: inline-block;
  text-transform: uppercase;
}

.price-section {
  margin-bottom: 15px;
}

.old-price {
  color: #888;
  text-decoration: line-through;
  font-size: 16px;
  margin-right: 10px;
}

.current-price {
  color: #FFFFFF;
  font-size: 24px;
  font-weight: bold;
}

.price-note {
  color: #888;
  font-size: 12px;
  margin-bottom: 20px;
  line-height: 1.4;
}

.quantity-selector {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.qty-btn {
  background-color: #333;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.qty-btn:hover {
  background-color: #444;
}

.qty-btn:active {
  background-color: #555;
}

.qty-value {
  color: white;
  font-weight: bold;
  margin: 0 5px;
  min-width: 20px;
  text-align: center;
}

.qty-plus {
  color: #FFFFFF;
  font-weight: bold;
  margin-left: 10px;
}

.cart-btn {
  background-color: #878787;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  margin-bottom: 15px;
  transition: all 0.3s;
  text-transform: uppercase;
}

.cart-btn:hover {
  background-color: #A6A6A6;
}

.cart-btn.in-cart {
  background-color: #4caf50;
}

.cart-btn.in-cart:hover {
  background-color: #45a049;
}

.details-link {
  color: #FFFFFF;
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>