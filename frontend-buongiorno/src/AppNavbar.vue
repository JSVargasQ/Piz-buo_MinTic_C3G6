<template>
  <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <a href="index.html" class="logo">
              <img src="../public/assets/images/logo.png" alt="">
            </a>
            <ul class="nav">
              <li><router-link to="/">Inicio</router-link></li>
              <li><router-link to="/menu">Menu</router-link></li>
              <li><a href="details.html">Pedidos</a></li>
              <li><a href="author.html">Locales</a></li>
              <li><a href="create.html">Ingresar</a></li>
              <li><router-link to="/register">Registrarme</router-link></li>
            </ul>
            <a class='menu-trigger'>
              <span>Menu</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>

</template>


