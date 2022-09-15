# Automation UI BDD WebdriverIO

Proyecto basado en WebDriverIO, Cucumber, TypeScript, Allure Report y Node.js

## Estructura del proyecto


- portafolio/features: archivos en lenguaje Gherkin con escenarios de prueba.
- portafolio/stepDefinitions: scripts de flujos de prueba.
- portafolio/pages: clases con Page Objects modelados.
- README.md: documentación de uso.

## Requisitos

- Node.js
- webdriverIO

## Instalacion y funcionamiento

- Clonar el repositorio:

        git clone https://github.com/NHLGuerrero/aut-ui-bdd-webdriverio.git

- Instalar dependencias:

        npm install

- Ejecutar el asistente de configuración:

        npm init wdio .

- Ejecución de test:

        npm run execute-tests

- Ejecución por tag:
Agregando @run a el/los casos de prueba a ejecutar.

        npm run execute-test-tag

- Crear y abrir reportes:

        npm run report
## Enlaces para mas informacion

- Documentación wdio: https://webdriver.io/

- Documentación npm: https://www.npmjs.com/

- Commits convencionales: https://www.conventionalcommits.org/es/v1.0.0-beta.2/