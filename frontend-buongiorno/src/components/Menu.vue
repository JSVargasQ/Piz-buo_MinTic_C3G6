<template>
  <div class="author-page">
    <div class="container">
      <div class="row">

        <div class="col-lg-12">
          <div class="section-heading">
            <div class="line-dec"></div>
            <h1>Pide tus pizzas Favoritas</h1>
          </div>
        </div>


        <!-- *****1-4***** -->
        <div v-for="product in dataviewValue" class="col-lg-3 col-md-6">
          <div class="item">
            <div class="row">
              <div class="col-lg-12">
                <img :src="'assets/' + product.fields.img" alt="" style="border-radius: 20px;">
                <h4>{{product.fields.nombre_producto}} ({{product.fields.tipo}})</h4>
                <div class="line-dec"></div>
                <p>{{product.fields.descripcion}}</p>
                <br><select id="txtCondi_101001" class="form-control">
                <option value="1">Personal $ {{ product.fields.precio_unidad }}</option>
              </select>
                <br>
                <div class="main-button">
                  <a href="">Agregar al Carrito</a></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ProductService from "../service/ProductService";

export default {
  data() {
    return {
      dataviewValue: null,
    }
  },
  productService: null,
  created() {
    this.productService = new ProductService();
  },
  mounted() {
    this.productService.getProducts().then(data => {
      console.log(data);
      this.dataviewValue = data;
    });
  },
  methods: {
    onSortChange(event){
      const value = event.value.value;
      const sortValue = event.value;

      if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
        this.sortKey = sortValue;
      }
      else {
        this.sortOrder = 1;
        this.sortField = value;
        this.sortKey = sortValue;
      }
    }
  }
}
</script>
