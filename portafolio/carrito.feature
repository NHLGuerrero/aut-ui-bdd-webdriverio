Feature: Sitio Web de SauceDemo

    Background:
        Given Me logueo con las credenciales standard_user y secret_sauce

    @remove
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

    @continueShopping @run
    Scenario: Regresar al shopping
        When Utilizo la opcion CONTINUE SHOPPING
        Then Regreso la pantalla de home



