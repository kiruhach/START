<template>
  <main class="news-page">
    <!-- SEO мета-теги -->
    <div style="display: none;">
      <title>Новости магазина автотоваров START | Владивосток</title>
      <meta name="description" content="Новости и акции магазина автотоваров START во Владивостоке. Открытие магазина, специальные цены, новые поступления товаров.">
      <meta name="keywords" content="новости автотоваров, открытие магазина start, акции на аккумуляторы, автотовары Владивосток">
    </div>

    <div class="container">
      <!-- Герой-секция -->
      <section class="hero-news">
        <h1 class="page-title">НОВОСТИ</h1>
      </section>

      <!-- Основной контент -->
      <div class="news-layout">
        <!-- Блок с новостью -->
        <div class="news-content">
          <article class="news-article">
            <div class="news-header">
              <div class="news-date">
                <span class="day">15</span>
                <span class="month-year">ДЕКАБРЯ 2025</span>
              </div>
              <h2 class="news-title">СТАРТ РАБОТЫ! МАГАЗИН АВТОТОВАРОВ START ОТКРЫЛСЯ!</h2>
            </div>
            
            <div class="news-body">
              <div class="news-image">
                <img src="/images/START.jpg" alt="Открытие магазина автотоваров START во Владивостоке" class="news-img">
                <div class="image-caption">Наш магазин теперь открыт для вас!</div>
              </div>
              
              <div class="news-text">
                <p>Мы готовы предложить вам:</p>
                
                <ul class="news-list">
                  <li><img src="/icons/Checkmark.svg" alt="Галочка"><strong>Качественные аккумуляторы</strong> ведущих брендов: MAGNUM, ЗВЕРЬ;</li>
                  <li><img src="/icons/Checkmark.svg" alt="Галочка"><strong>Моторные масла</strong>;</li>
                  <li><img src="/icons/Checkmark.svg" alt="Галочка"><strong>Автоаксессуары и автохимию</strong> от проверенных производителей;</li>
                  <li><img src="/icons/Checkmark.svg" alt="Галочка"><strong>Консультацию</strong> по подбору товаров для вашего автомобиля.</li>
                </ul>
                
                <div class="highlight-box">
                  <h3>В ЧЕСТЬ ОТКРЫТИЯ СПЕЦИАЛЬНЫЕ ЦЕНЫ!</h3>
                  <p>В течение первого месяца работы действуют специальные цены на всю продукцию. Успейте приобрести качественные автотовары по выгодным ценам!</p>
                </div>
                
                <p>Мы находимся по адресу: <strong>г. Владивосток, ул. Адмирала Кузнецова, 64</strong></p>
                <p>Режим работы: <strong>ежедневно с 9:00 до 18:00</strong></p>
                <p>Телефон для связи: <strong>8 (924) 009-95-73</strong></p>
                
                <div class="news-actions">
                  <router-link to="/catalog" class="action-btn">
                    ПЕРЕЙТИ В КАТАЛОГ
                  </router-link>
                  <router-link to="/services" class="action-btn">
                    НАШИ УСЛУГИ
                  </router-link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'NewsPage',
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    document.title = 'Новости магазина автотоваров START | Владивосток'
    
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = 'Новости и акции магазина автотоваров START во Владивостоке. Открытие магазина, специальные цены, новые поступления товаров.'
    
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.content = 'новости автотоваров, открытие магазина start, акции на аккумуляторы, автотовары Владивосток'
  }
}
</script>

<style scoped>
.news-page {
  padding: 40px 0;
  background-color: #0a0a0a;
}

.page-title {
  text-align: center;
  font-size: 36px;
  color: #FFFFFF;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.news-article {
  background: #878787;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.news-article:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.news-header {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
  padding-bottom: 20px;
}

.news-date .day {
  font-size: 50px;
  font-weight: bold;
  line-height: 1;
}

.news-date .month-year {
  font-size: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.news-title {
  font-size: 30px;
  color: #FFFFFF;
}

.news-body {
  margin-bottom: 30px;
}

.news-image {
  margin-bottom: 30px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.news-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.news-img:hover {
  transform: scale(1.03);
}

.image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px 20px;
  font-size: 0.9rem;
  text-align: center;
}

.news-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
}

.news-list {
  margin: 20px 0 30px 20px;
  padding-left: 20px;
  list-style: none;
}

.news-list img {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  filter: brightness(0) invert(1);
}
.news-list li {
  margin-top: 12px;
}

.highlight-box {
  color: #FFFFFF;
  background: #3C3A3A;
  padding: 25px;
  margin: 30px 0;
  border-radius: 8px;
}

.news-actions {
  display: flex;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #3C3A3A;
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  min-width: 200px;
}

.action-btn:hover {
  transform: translateY(-3px);
  background: #A6A6A6;
}
</style>