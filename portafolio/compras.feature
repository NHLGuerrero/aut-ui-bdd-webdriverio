@web @compras
Feature: Sitio Web de SauceDemo

    Background:
        Given Estoy en la pagina de inicio de sesion
        And Inicio sesion con standard_user y secret_sauce

    @ordenar
    Scenario Outline: Ordenar productos
        When Ordeno los productos con el <criterio>
        Examples:
            | criterio            | nombreProducto                    |
            | Name (A to Z)       | Sauce Labs Backpack               |
            | Name (Z to A)       | Test.allTheThings() T-Shirt (Red) |
            | Price (low to high) | Sauce Labs Onesie                 |
            | Price (high to low) | Sauce Labs Fleece Jacket          |

    @carrito @run 
    Scenario: agregar al carrito
        And Añado al carrito Sauce Labs Bolt T-Shirt, Sauce Labs Onesie y Sauce Labs Backpack
        And Voy al carrito de compras
        Then Se muestra el titulo "YOUR CART" en la pantalla de compras
        # Then Visualizo la pantalla de compras

    @eliminar
    Scenario: eliminar
        And Elimino Sauce Labs Onesie de la lista de productos del compras
        And Hago click en el boton de checkout
        Then Se muestra el titulo CHECKOUT: YOUR INFORMATION
        #TODO: ver espacios

    @completar
    Scenario: completar campos
        And Completo los campos con Nahuel, Guerrero y 1234
        And Hago click en el boton continue
        Then Se muestra el titulo CHECKOUT: OVERVIEW

    @finalizar
    Scenario: finalizar
        And Hago click en el boton de finish
        Then Se muestra el titulo de CHECKOUT: COMPLETE!