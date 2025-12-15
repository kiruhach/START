<template>
  <main class="home">
    <!-- SEO мета-теги -->
    <div style="display: none;">
      <title>START - Автотовары: аккумуляторы, автомасла, аксессуары во Владивостоке</title>
      <meta name="description" content="Надежные автотовары по выгодным ценам: аккумуляторы MAGNUM и ЗВЕРЬ, автомасла, аксессуары и автохимия. Доставка по Владивостоку. Гарантия качества.">
      <meta name="keywords" content="автотовары, аккумуляторы, автомасла, аккумулятор MAGNUM, аккумулятор ЗВЕРЬ, автохимия, автозапчасти Владивосток">
    </div>

    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АВТОТОВАРЫ</h1>
          <router-link to="/catalog" class="hero-btn">ПЕРЕЙТИ В КАТАЛОГ</router-link>
        </div>
      </div>
    </section>
    
    <!-- О компании -->
    <section class="about">
      <div class="container">
        <h2 class="about-title"><strong>START. ВСЁ ДЛЯ АВТО. ВАШ КОМФОРТ — НАША ЗАБОТА! ОТ АККУМУЛЯТОРОВ ДО АВТОХИМИИ. ДОЛГО И НАДЕЖНО.</strong></h2>
        
        <!-- Скрытый SEO текст -->
        <div style="display: none;">
          <h3>Магазин автотоваров START во Владивостоке</h3>
          <p>Интернет-магазин START предлагает широкий выбор качественных автозапчастей и аксессуаров в Владивостоке. 
          У нас вы можете купить аккумуляторы MAGNUM и ЗВЕРЬ, автомасла 5W-30 и 10W-40, автомобильные коврики, 
          накидки на сиденья, омывающую жидкость и антифриз. Мы гарантируем надежность и доступные цены на всю продукцию.</p>
          <p>Доставка по Владивостоку, профессиональные консультации, услуги по диагностике аккумуляторов. 
          Работаем ежедневно с 9:00 до 18:00. Наш адрес: Владивосток, ул. Адмирала Кузнецова, 64.</p>
        </div>
        
        <div class="advantages-section">
          <div class="advantages-grid">
            <div class="advantage-card">
              <div class="advantage-icon"><img src="/icons/Payments.svg" alt="Расчет"></div>
              <div class="advantage-content">
                <h4 class="advantage-title">Наличный и безналичный расчет</h4>
                <p class="advantage-desc">Удобные способы оплаты для каждого клиента</p>
              </div>
            </div>
            
            <div class="advantage-card">
              <div class="advantage-icon"><img src="/icons/Consultation.svg" alt="Консультация"></div>
              <div class="advantage-content">
                <h4 class="advantage-title">Техническая помощь и консультация</h4>
                <p class="advantage-desc">Профессиональные советы по выбору автозапчастей</p>
              </div>
            </div>
            
            <div class="advantage-card">
              <div class="advantage-icon"><img src="/icons/Quality.svg" alt="Качество"></div>
              <div class="advantage-content">
                <h4 class="advantage-title">Только качественная и проверенная продукция</h4>
                <p class="advantage-desc">Гарантия качества на все товары</p>
              </div>
            </div>
            
            <div class="advantage-card">
              <div class="advantage-icon"><img src="/icons/Wall_clock.svg" alt="Время"></div>
              <div class="advantage-content">
                <h4 class="advantage-title">Мы всегда на связи с 9:00 до 18:00</h4>
                <p class="advantage-desc">Работаем для вас без выходных</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Разделитель -->
        <div class="divider"></div>
        
        <!-- Категории товаров -->
        <div class="categories">
          <h2 class="categories-title">АВТОТОВАРЫ: АККУМУЛЯТОРЫ, АВТОМАСЛА, АКСЕССУАРЫ И АВТОХИМИЯ</h2>
          <div class="category-grid">
            <router-link 
              to="/catalog?category=magnum" 
              class="category-card batteries"
            >
              <h3>АККУМУЛЯТОРЫ</h3>
              <p>АКБ MAGNUM, АКБ ЗВЕРЬ</p>
              <div class="category-hover">АККУМУЛЯТОРЫ</div>
            </router-link>
            
            <router-link 
              to="/catalog?category=masla" 
              class="category-card oils "
            >
              <h3>АВТОМАСЛА</h3>
              <p>МОТОРНОЕ, ТРАНСМИСИОННОЕ</p>
              <div class="category-hover">АВТОМАСЛА</div>
            </router-link>
            
            <router-link 
              to="/catalog?category=aksessuary" 
              class="category-card accessories"
            >
              <h3>АКСЕССУАРЫ</h3>
              <p>КОВРИКИ</p>
              <div class="category-hover">АКСЕССУАРЫ</div>
            </router-link>
            
            <router-link 
              to="/catalog?category=himiya" 
              class="category-card chemical"
            >
              <h3>АВТОХИМИЯ</h3>
              <p>ОМЫВАЮЩИЕ СРЕДСТВА, НЕЗАМЕРЗАЙКА</p>
              <div class="category-hover">АВТОХИМИЯ</div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    
    <section>

    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    document.title = 'START - Автотовары: аккумуляторы, автомасла, аксессуары во Владивостоке'
    
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = 'Надежные автотовары по выгодным ценам: аккумуляторы MAGNUM и ЗВЕРЬ, автомасла, аксессуары и автохимия. Доставка по Владивостоку. Гарантия качества.'
    
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.content = 'автотовары, аккумуляторы, автомасла, аккумулятор MAGNUM, аккумулятор ЗВЕРЬ, автохимия, автозапчасти Владивосток'
  }
}
</script>

<style scoped>
.home {
  background-color: #0a0a0a;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero {
  background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8));
  background-size: cover;
  padding: 120px 0;
  min-height: 60vh;
  display: flex;
  align-items: center;
}

.hero-content {
  width: 100%;
  padding-left: 20px;
}

.hero-title {
  font-size: 42px;
  margin-bottom: 40px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1.3;
  text-align: left;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  max-width: 800px;
  margin-left: 0;
}

.hero-btn {
  display: inline-block;
  background-color: #3C3A3A;
  color: white;
  padding: 16px 40px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.199);
  text-align: center;
  margin-left: 0;
}

.hero-btn:hover {
  background-color: #878787;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.199);
}

.about {
  padding: 80px 0;
}

.about-title {
  font-size: 24px;
  margin-bottom: 50px;
  color: #FFFFFF;
  line-height: 1.6;
  text-align: left;
  font-weight: normal;
  padding-left: 0;
  margin-left: 0;
}

.about-title strong {
  font-weight: bold;
  color: #FFFFFF;
}

.advantages-section {
  margin-bottom: 60px;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.advantage-card {
  background: linear-gradient(145deg, #3C3A3A, #878787);
  padding: 30px;
  border-radius: 12px;
  border-left: 4px solid #3C3A3A;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.advantage-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.199);
  border-left-color: #A6A6A6;
}

.advantage-icon {
  font-size: 40px;
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.advantage-icon img {
  width: 40px;
  height: 40px;
  filter: brightness(0) invert(1);
}

.advantage-content {
  flex: 1;
}

.advantage-title {
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  line-height: 1.4;
}

.advantage-desc {
  color: #ccc;
  line-height: 1.5;
  margin: 0;
  font-size: 14px;
}

.divider {
  height: 2px;
  background: linear-gradient(90deg, transparent, #3C3A3A, transparent);
  margin: 60px 0;
}

.categories-title {
  font-size: 24px;
  margin-bottom: 40px;
  color: #fff;
  text-align: left;
  line-height: 1.5;
  font-weight: bold;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.category-card.batteries {
  background-image: url(/images/Batteries.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 150px;
  border-radius: 8px;
  text-align: left;
  transition: all 0.3s ease;
  border: 1px solid #333;
  text-decoration: none;
}

.category-card.oils {
  background-image: url(/images/Motor_oils.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 150px;
  border-radius: 8px;
  text-align: left;
  transition: all 0.3s ease;
  border: 1px solid #333;
  text-decoration: none;
}

.category-card.accessories {
  background-image: url(/images/Car_accessories.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 150px;
  border-radius: 8px;
  text-align: left;
  transition: all 0.3s ease;
  border: 1px solid #333;
  text-decoration: none;
}

.category-card.chemical {
  background-image: url(/images/Auto_chemical.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 150px;
  border-radius: 8px;
  text-align: left;
  transition: all 0.3s ease;
  border: 1px solid #333;
  text-decoration: none;
}

.category-card:hover {
  background-color: #000;
  opacity: 40%;
  transform: translateY(-5px);
  border-color: #3C3A3A;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}

.category-card h3 {
  color: #7d0000;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  transition: color 0.3s ease;
}

.category-card p {
  color: #7d0000;
  font-size: 14px;
  text-align: center;
}

.category-hover {
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
  background: #3C3A3A;
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  transition: bottom 0.3s ease;
  opacity: 0;
}

.category-card:hover .category-hover {
  bottom: 0;
  opacity: 1;
}
</style>