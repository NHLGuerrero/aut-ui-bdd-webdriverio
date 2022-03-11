@login
Feature: Sitio Web de SauceDemo

  @login_01 @run
  Scenario: Alta de usuario con campos correcto

    Given Estoy en la pagina de inicio de sesion
    When Inicio sesion con standard_user y secret_sauce
    Then Se muestra el titulo PRODUCTS en la pantalla home