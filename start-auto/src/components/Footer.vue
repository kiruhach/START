<template>
  <footer class="footer">
    <!-- Скрытые SEO теги -->
    <div style="display: none;">
      <h2>Магазин автотоваров START Владивосток</h2>
      <p>Интернет-магазин START предлагает купить автотовары во Владивостоке: аккумуляторы MAGNUM и ЗВЕРЬ, автомасла 5W-30 и 10W-40, автомобильные аксессуары, автохимию. Доставка по городу, гарантия качества.</p>
      <p>Аккумуляторы для автомобиля, моторные масла, коврики в салон, накидки на сиденья, омывающая жидкость, антифриз, незамерзайка. Магазин автозапчастей во Владивостоке.</p>
    </div>

    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>START</h3>
          <p>Надежные, качественные автотовары</p>
        </div>
        <div class="footer-section">
          <h4>КОМПАНИЯ</h4>
          <ul>
            <li><router-link to="/services" class="footer-link">Услуги</router-link></li>
            <li><router-link to="/news" class="footer-link">Новости</router-link></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>КАТАЛОГ</h4>
          <ul>
            <li>
              <router-link 
                to="/catalog?category=magnum" 
                class="footer-link"
              >
                Аккумуляторы
              </router-link>
            </li>
            <li>
              <router-link 
                to="/catalog?category=masla" 
                class="footer-link"
              >
                Автомасла
              </router-link>
            </li>
            <li>
              <router-link 
                to="/catalog?category=aksessuary" 
                class="footer-link"
              >
                Аксессуары
              </router-link>
            </li>
            <li>
              <router-link 
                to="/catalog?category=himiya" 
                class="footer-link"
              >
                Автохимия
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>КОНТАКТЫ</h4>
          <p>Телефон: <a href="tel:+79240099573">8 (924) 009-95-73</a></p>
          <p>Email: <a href="mailto:pochta23891@inbox.ru">pochta23891@inbox.ru</a></p>
          <p style="display: none;">Адрес: Владивосток, ул. Адмирала Кузнецова, 64</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 START.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #1a1a1a;
  color: #ccc;
  padding: 40px 0 20px;
  border-top: 2px solid #3C3A3A;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 40px;
  margin-bottom: 30px;
}

.footer-section h3 {
  font-family: "AlfaSlabOne";
  color: #FFFFFF;
  font-size: 24px;
  margin-bottom: 15px;
}

.footer-section h4 {
  color: #FFFFFF;
  font-size: 16px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.footer-section p {
  line-height: 1.6;
  margin-bottom: 10px;
}

.footer-section a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #3C3A3A;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 12px;
}

.footer-link {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
  display: block;
}

.footer-link:hover {
  color: #3C3A3A;
}

.footer-link.router-link-active {
  color: #3C3A3A;
  font-weight: bold;
}

.footer-bottom {
  border-top: 1px solid #333;
  padding-top: 20px;
  text-align: center;
  color: #999;
}
</style>