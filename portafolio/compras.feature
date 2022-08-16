@web @compras @run
Feature: Sitio Web de SauceDemo

    @e2e
    Scenario: Flujo de compras completo
        Given Me logueo con las credenciales standard_user y secret_sauce
        When Añado al carrito los productos
            | Producto                |
            | Sauce Labs Bolt T-Shirt |
            | Sauce Labs Onesie       |
        And Completo los datos de compra
            | Nombre | Apellido | CodigoPostal |
            | Nahuel | Guerrero | 1234         |
        And Visualizo el resumen de compra
        Then Finalizo la compra y visualizo el mensaje de compra exitosa "THANK YOU FOR YOUR ORDER"



