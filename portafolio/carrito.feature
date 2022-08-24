Feature: Sitio Web de SauceDemo

    Background:
        Given Me logueo con las credenciales standard_user y secret_sauce

    @remove @run
    Scenario: Remover producto de la lista de compras
        When Añado al carrito los productos
            | Producto                |
            | Sauce Labs Bolt T-Shirt |
            | Sauce Labs Onesie       |    
        And Elimino los productos del carrito
            | Producto                |
            | Sauce Labs Bolt T-Shirt |
            | Sauce Labs Onesie       |
        Then Dejo de visualizar los productos en la plantalla

    @continueShopping
    Scenario: Regresar al shopping
        When Utilizo la funcion "CONTINUE SHOPPING"
        Then Regreso la pantalla de home



