<template>
  <div class="item-details-page">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <div class="line-dec"></div>
            <h2>CREA <em>TU CUENTA</em></h2>
          </div>
        </div>

        <div class="col-lg-12">
          <form id="contact">
            <div class="row">
              <div class="col-lg-4">
                <fieldset>
                  <label for="user">Usuario</label>
                  <input type="title" v-model="user" name="user" id="user" placeholder="Username" autocomplete="on" data-val="true">
                </fieldset>
              </div>

              <div class="col-xs-12 col-md-5 col-lg-4 form-group">
                <label class="control-label">Contraseña</label>
                <input v-model="password" type="password" placeholder="Password" maxlength="20" >
                <span class="field-validation-valid text-danger help-block"
                      data-valmsg-for="AccountInformation.Password" data-valmsg-replace="true"></span>
                <span class="bi bi-eye-slash-fill"
                      style="position: absolute; right: 25px; top: 40px; color: #50a684; cursor: pointer;" aria-hidden="true"></span>
                <div class="passwordCriteria" style="display: none">
                  <div class="passwordCriteriaHeader">
                    <h2>Requisitos de Contraseña</h2>
                  </div>
                  <div class="passwordCriteriaBody">
                    <div class="passwordCriteriaArrow"></div>
                    <p id="length">Tu contraseña debe tener entre 8 y 15 caracteres</p>
                    <p id="mixed">Debe contener al menos una letra mayúscula</p>
                    <p id="number">Debe contener al menos un número</p>
                    <p id="special">No debe contener ningún caracter especial diferente a @#$%()^</p>
                  </div>
                </div>
              </div>

              <div class="col-xs-12 col-md-5 col-lg-4 form-group">
                <label class="control-label">Confirmar contraseña<sup>*</sup></label>
                <input v-model="confPassword" type="password" placeholder="Password" maxlength="20" >
                <span class="field-validation-valid text-danger help-block"
                      data-valmsg-for="AccountInformation.ConfirmPassword" data-valmsg-replace="true"></span>
                <span class="bi bi-eye-slash-fill"
                      style="position: absolute; right: 25px; top: 40px; color: #50a684; cursor: pointer;" aria-hidden="true"></span>
              </div>

              <div class="col-xs-12 col-md-4 col-lg-4 form-group">
                <label class="control-label">Nombre<sup>*</sup></label>
                <input v-model="name" maxlength="50" placeholder="Name" class="form-control input-lg"
                       >
                <span class="field-validation-valid text-danger help-block"
                      data-valmsg-for="AccountInformation.FirstName" data-valmsg-replace="true"></span>
              </div>

              <div class="col-xs-12 col-md-4 col-lg-4 form-group">
                <label class="control-label">Apellido<sup>*</sup></label>
                <input v-model="lastname" type="text" class="form-control input-lg"
                        placeholder="Last Name" maxlength="50">
              </div>

              <div class="col-xs-12 col-md-4 col-lg-4 form-group">
                <label class="control-label">Número de teléfono</label>
                <input v-model="phone" type="text" placeholder="Number Phone" maxlength="12"
                       class="form-control input-lg">
                <span class="field-validation-valid text-danger help-block"
                      data-valmsg-for="AccountInformation.ContactPhone" data-valmsg-replace="true"></span>
              </div>

              <div class="col-xs-12 col-md-6 col-lg-6 form-group">
                <label class="control-label">Correo</label>
                <input v-model="email" type="text" maxlength="50" placeholder="e-mail" class="form-control input-lg"
                       >
                <span class="field-validation-valid text-danger help-block" data-valmsg-for="AccountInformation.Email"
                      data-valmsg-replace="true"></span>
              </div>

              <div class="col-xs-12 col-md-4 col-lg-4 form-group">
                <label class="control-label">Dirección</label>
                <input v-model="address" type="text" class="form-control input-lg"
                        placeholder="Adress" maxlength="500">
              </div>

              <div class="col-lg-12">
                <fieldset>
                  <button type="button" id="form-submit" class="orange-button" v-on:click="submit">REGISTRATE</button>
                </fieldset>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '../service/UserService';

  export default {
    userService: null,
    created() {
      this.userService = new UserService();
    },
    data() {
      return {
        user: null,
        password: null,
        confPassword: null,
        name: null,
        lastname: null,
        email: null,
        phone: null,
        address: null,
      }
    },
    methods: {
      submit: function() {

        const dataForm = {
          username: this.user,
          name: (this.name ?? '') + " " + (this.lastname ?? ''),
          password: this.password,
          email: this.email,
          phone: this.phone,
          address: this.address,
          account: {
            "balance": 123,
            "lastChangeDate": "2022-07-26 07:20:00",
            "isActive": true
          }
        }

        this.userService.registerUser(dataForm).then( () => {
          this.$router.push('/');
        } );

      }
    }
  }
</script>
