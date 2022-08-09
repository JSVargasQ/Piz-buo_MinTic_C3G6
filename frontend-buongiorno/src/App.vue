<template>

  <AppNavbar/>

  <div class="main-banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center">
          <div class="header-text">
            <h6>Cobertura en todo el pais</h6>
            <h2>REGISTRATE AHORA &amp; Disfruta de domicilios </h2>
            <p>En la Pizzeria Buongiorno nos interesan nuestros clientes, por eso implementamos un nuevo sistema paraque compren y reciban sus pizzas desde la comodidad de su hogar.</p>
            <div class="buttons">
              <div class="border-button">
                <a href="create.html">Crea tu usuario</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1">
          <div class="owl-banner owl-carousel">
            <div class="item">
              <img src="../public/assets/images/banner-01.png" alt="">
            </div>
            <div class="item">
              <img src="../public/assets/images/banner-02.png" alt="">
            </div>
          </div>
          <img src="../public/assets/images/banner-02.png" alt="">
        </div>
      </div>
    </div>
  </div>


  <AppFooter/>
</template>

<script>
// @ is an alias to /src
import AppNavbar from './AppNavbar.vue'
import AppFooter from './AppFooter.vue'

export default {
  name: 'HomeView',
  components: {
    AppNavbar,
    AppFooter,
  }
}
</script>
