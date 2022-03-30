@web @login
Feature: Sitio Web de SauceDemo

  Background:
    Given Estoy en la pagina de inicio de sesion

  @login_01
  Scenario: Alta de usuario con campos correctos

    When Inicio sesion con standard_user y secret_sauce
    Then Se muestra el titulo PRODUCTS en la pantalla home

  @login_02
  Scenario Outline: Alta de usuario con campos incorrectos

    When Inicio sesion con <username> y <password>
    Then Se muestra el mensaje de error <message>

    Examples:
      | username            | password           | message                                                                   |
      | standard_user       | [empty]            | Epic sadface: Password is required                                        |
      | [empty]             | secret_sauce       | Epic sadface: Username is required                                        |
      | standard_user_error | secret_sauce       | Epic sadface: Username and password do not match any user in this service |
      | standard_user       | secret_sauce_error | Epic sadface: Username and password do not match any user in this service |