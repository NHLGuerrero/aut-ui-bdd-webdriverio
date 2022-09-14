Feature: Sitio Web de SauceDemo

    Background:
        Given Me logueo con las credenciales standard_user y secret_sauce

    @remove
    Scenario: Remover producto de la lista de compras
        When Añado al carrito los productos
            | Producto                 |
            | Sauce Labs Bolt T-Shirt  |
            | Sauce Labs Onesie        |
        And Elimino los productos del carrito
            | Producto                |
            | Sauce Labs Bolt T-Shirt |
            | Sauce Labs Onesie       |
        Then Dejo de visualizar los productos en el carrito

    @continueShopping
    Scenario: Regresar al shopping
        When Ingreso al carrito de compras
        And Utilizo la opcion CONTINUE SHOPPING
        Then Regreso a la pantalla de home



