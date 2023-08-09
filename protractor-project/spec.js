// Archivo de pruebas
describe('Protractor Demo App', function () {

  beforeEach(function () {
    // browser es una variable global, que sirve para acceder a varios recursos del navegador, aqui abre la pagina indicada en la url por cada prueba
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  // Primera prueba: que tenga el titulo "Super Calculator"
  it('Debe tener el titulo', function () {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  // Segunda prueba: Debe agregar uno y dos al formulario
  it('should add one and two', function () {
    // element sirve para acceder a los elementos HTML
    // by sirve para buscar por un atributo, en este caso busca ng-model="first" o ng-model="second"
    // sendKeys sirve para ingresar datos a un <input>
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);

    // by aqui busca por id="gobutton" y le da clic
    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).toEqual('3');
  });

});