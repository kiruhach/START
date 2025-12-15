<template>
  <main class="services">
    <!-- SEO мета-теги -->
    <div style="display: none;">
      <title>Услуги автосервиса | START - Владивосток</title>
      <meta name="description" content="Услуги автосервиса в Владивостоке: диагностика аккумуляторов, консультации, обмен старых АКБ, подбор автохимии. Профессиональный подход.">
      <meta name="keywords" content="диагностика аккумулятора, услуги автосервиса, обмен аккумулятора, консультация по автотоварам, автосервис Владивосток">
    </div>

    <div class="container">
      <!-- Герой-секция -->
      <section class="hero-services">
        <h1 class="page-title">УСЛУГИ</h1>
        <p class="hero-subtitle">
          Менеджеры компании с радостью ответят на ваши вопросы и помогут с выбором продукции.
        </p>
        <div class="divider"></div>
      </section>

      <!-- Основной контент с услугами -->
      <div class="services-layout">
        <!-- Блок с услугами -->
        <div class="services-content">
          <!-- Услуги в один столбец -->
          <section class="services-column">
            <!-- Консультация -->
            <div class="service-card consultation">
              <div class="service-card-inner">
                <div class="service-icon">
                  <img src="/icons/Consultation.svg" alt="Консультация">
                </div>
                <div class="service-content">
                  <h3 class="service-title">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ<br>СПЕЦИАЛИСТА</h3>
                  <p class="service-description">
                    Поможем с выбором аккумулятора, моторного масла и аксессуаров для автомобиля под ваши требования.
                  </p>
                  <button class="service-btn" @click="openConsultationModal">ЗАПРОСИТЬ КОНСУЛЬТАЦИЮ</button>
                </div>
              </div>
            </div>

            <!-- Обмен аккумулятора -->
            <div class="service-card exchange">
              <div class="service-card-inner">
                <div class="service-icon">
                  <img src="/icons/Obmen.svg" alt="Обмен">
                </div>
                <div class="service-content">
                  <h3 class="service-title">ОБМЕН СТАРОГО АККУМУЛЯТОРА НА<br>НОВЫЙ</h3>
                  <p class="service-description">
                    Принесите нам старую АКБ для легкового автомобиля, и мы предоставим Вам скидку на новый аккумулятор!
                  </p>
                  <button class="service-btn" @click="openExchangeModal">ПОДРОБНЕЕ ОБ ОБМЕНЕ</button>
                </div>
              </div>
            </div>

            <!-- Диагностика -->
            <div class="service-card diagnostic">
              <div class="service-card-inner">
                <div class="service-icon">
                  <img src="/icons/Accumulator.svg" alt="Диагностика">
                </div>
                <div class="service-content">
                  <h3 class="service-title">БЕСПЛАТНАЯ ДИАГНОСТИКА<br>АККУМУЛЯТОРА</h3>
                  <p class="service-description">
                    Приезжайте к нам и мы бесплатно проведём диагностику вашего аккумулятора!
                  </p>
                  <button class="service-btn" @click="openContactModal">ЗАПИСАТЬСЯ НА ДИАГНОСТИКУ</button>
                </div>
              </div>
            </div>

            <!-- Автохимия -->
            <div class="service-card auto-chemistry">
              <div class="service-card-inner">
                <div class="service-icon">
                  <img src="/icons/Podbor.svg" alt="Время">
                </div>
                <div class="service-content">
                  <h3 class="service-title">ПОДБОР АВТОХИМИИ</h3>
                  <p class="service-description">
                    Поможем подобрать правильные средства для ухода за автомобилем: от омывающей жидкости до незамерзаек.
                  </p>
                  <button class="service-btn" @click="openChemistryModal">ПОДОБРАТЬ АВТОХИМИЮ</button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside class="image-sidebar">
          <div class="image-container">
            <div class="image-wrapper">
              <img src="/images/START.jpg" alt="Магазин автотоваров START Владивосток" class="img">
              <div class="image-overlay">
                <div class="overlay-content">
                  <h4>START</h4>
                </div>
              </div>
            </div>
            </div>
        </aside>
      </div>
      
      <!-- Скрытый SEO текст -->
      <div style="display: none; margin-top: 40px;">
        <h2>Услуги автосервиса START Владивосток</h2>
        <p>Наш автосервис предлагает полный спектр услуг по обслуживанию автомобилей во Владивостоке. 
        Профессиональная диагностика аккумуляторов, консультации по подбору автотоваров, обмен старых АКБ на новые со скидкой. 
        Мы поможем подобрать правильную автохимию для вашего автомобиля. Работаем ежедневно с 9:00 до 18:00.</p>
      </div>
      
      <!-- Модальные окна -->
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <h3 class="modal-title">{{ modalTitle }}</h3>
          <p class="modal-text">{{ modalText }}</p>
          <button class="modal-close-btn" @click="closeModal">Закрыть</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      showModal: false,
      modalTitle: '',
      modalText: ''
    }
  },
  mounted() {
    document.title = 'Услуги автосервиса | START - Владивосток'
    
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = 'Услуги автосервиса в Владивостоке: диагностика аккумуляторов, консультации, обмен старых АКБ, подбор автохимии. Профессиональный подход.'
    
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.content = 'диагностика аккумулятора, услуги автосервиса, обмен аккумулятора, консультация по автотоварам, автосервис Владивосток'
  },
  methods: {
    openContactModal() {
      this.modalTitle = 'Запись на диагностику';
      this.modalText = 'Наш менеджер свяжется с вами в течение 15 минут для подтверждения записи. Укажите удобное время и марку автомобиля.';
      this.showModal = true;
    },
    openConsultationModal() {
      this.modalTitle = 'Консультация специалиста';
      this.modalText = 'Наши специалисты готовы ответить на все ваши вопросы по подбору аккумуляторов, масел и аксессуаров. Оставьте свой номер телефона и мы перезвоним.';
      this.showModal = true;
    },
    openExchangeModal() {
      this.modalTitle = 'Обмен старого аккумулятора';
      this.modalText = 'При сдаче старого аккумулятора вы получаете скидку 10% на новый. Аккумулятор должен быть целым и не протекать.';
      this.showModal = true;
    },
    openChemistryModal() {
      this.modalTitle = 'Подбор автохимии';
      this.modalText = 'Расскажите нам о вашем автомобиле и задачах, мы подберем оптимальные средства по уходу и обслуживанию.';
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
}
</script>

<style scoped>
.services {
  background-color: #0a0a0a;
  color: #fff;
  min-height: 100vh;
  padding: 60px 0 80px;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
}

.hero-services {
  text-align: center;
  margin-bottom: 60px;
}

.page-title {
  font-size: 36px;
  color: #FFFFFF;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 18px;
  color: #ccc;
  max-width: 800px;
  margin: 0 auto 30px;
  line-height: 1.6;
}

.divider {
  height: 2px;
  background: linear-gradient(90deg, transparent, #3C3A3A, transparent);
  width: 100%;
  margin: 0 auto;
}

.services-layout {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 60px;
  position: relative;
}

.services-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.services-column {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.service-card {
  background: linear-gradient(145deg, #2a2a2a, #3C3A3A);
  padding: 25px;
  border-radius: 12px;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-3px);
  border-color: #A6A6A6;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.service-card-inner {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.service-icon {
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #878787;
  border-radius: 8px;
  padding: 10px;
}

.service-icon img {
  width: 40px;
  height: 40px;
  filter: brightness(0) invert(1);
}

.service-content {
  flex: 1;
}

.service-title {
  font-size: 18px;
  color: #FFFFFF;
  margin-bottom: 12px;
}

.service-description {
  font-size: 14px;
  color: #ccc;
  margin-bottom: 20px;
}

.service-btn {
  background-color: #878787;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  transition: all 0.3s ease;
  font-size: 13px;
  min-width: 200px;
}

.service-btn:hover {
  background-color: #A6A6A6;
}

.image-sidebar {
  position: sticky;
  top: 100px; 
  align-self: start;
  height: calc(100vh - 150px); 
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  border: 3px solid #3C3A3A;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.7s ease;
}

.image-wrapper:hover .img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  padding: 25px;
  color: white;
}

.overlay-content h4 {
  font-family: "AlfaSlabOne";
  font-size: 24px;
  margin-bottom: 8px;
  color: #FFFFFF;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: linear-gradient(145deg, #3C3A3A, #878787);
  padding: 40px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  border: 1px solid #333;
  text-align: center;
}

.modal-title {
  font-size: 20px;
  color: #FFFFFF;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
}

.modal-text {
  font-size: 16px;
  color: #ccc;
  margin-bottom: 30px;
  line-height: 1.6;
}

.modal-close-btn {
  background-color: #A6A6A6;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 6px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-close-btn:hover {
  background-color: #3C3A3A;
}
</style>