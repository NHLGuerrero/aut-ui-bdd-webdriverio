@web @compras @run
Feature: Sitio Web de SauceDemo
    Scenario: Flujo de compras completo
        Given Estoy en la pagina de home
        When Añado al carrito Sauce Labs Bolt T-Shirt, Sauce Labs Onesie y Sauce Labs Backpack
        And Hago click en el carrito de compras
        Then Visualizo el titulo "YOUR CART"
        And Hago click en el boton de checkout
        Then Visualizo el titulo "CHECKOUT: YOUR INFORMATION"
        And Completo los campos con Nahuel, Guerrero y 1234
        And Hago click en el boton continue
        Then Visualizo el titulo "CHECKOUT: OVERVIEW"
        And Hago click en el boton de finish
        Then Visualizo el titulo de "CHECKOUT: COMPLETE!"