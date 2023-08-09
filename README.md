# Repo PruebasAngular
Proyecto de ejemplo para el tema Pruebas en Angular

# Proyecto Angular
Para correr angular-project se debe tener instalado el angular cli v.15.2
Entrar a la carpeta del proyecto:
    cd angular-project
Ejecutar el proyecto en modo desarrollo, levanta en la dirección http://localhost:4200
    ng serve

# Prueba E2E con protractor
Para correr protractor-project se debe tener instalado protractor en la computadora.
Para referencia de instalación revisar: https://www.protractortest.org/#/
Levantar el servidor selenium en una terminal:
    webdriver-manager start
Para correr la prueba en otra terminal:
    protractor conf.js

# Prueba Unitaria con Jasmin y Karma
Para correr la prueba unitaria hay que entrar a la carpeta angular-project y ejecutar:
    ng test

Para generar el reporte de cobertura hay que ejecutar el comando:
    ng test --no-watch --code-coverage
Posteriormente abrir la carpeta llamada 'coverage' que genera el anterior comando y dentro abrir el archivo index.html en el navegador