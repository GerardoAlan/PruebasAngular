import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

// AppComponent es el nombre de la clase a probar
describe('AppComponent', () => {

  // beforeEach entra antes de ejecutar cada prueba unitaria, recordar que se ejecutan de manera aislada e independiente
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // De aqui en adelante cada prueba es independiente de las demás, no se ejecutan de manera secuencial ni tampoco dependen unas de otras
  // Se podría decir que la unica que sería recomendable mantener es la primera, las otras dos se pueden quitar para hacer pruebas más específicas

  // Primera prueba unitaria: Esta prueba viene por defecto y se encarga de validar si existe el componente AppComponent en el proyecto
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Segunda prueba unitaria: Esta prueba viene por defecto y se encarga de validar si tiene un atributo llamado title y este tiene el texto 'test'
  it(`should have as title 'test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test');
  });

  // Tercera prueba unitaria: Esta prueba viene por defecto y se encarga de validar si existe un span con el texto 'test app is running!'
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('test app is running!');
  });

  // Cuarta prueba unitaria: Esta prueba es la primera que hacemos, se encarga de validar si tenemos la liga hacia https://angular.io/tutorial
  it('should redirect to https://angular.io/tutorial', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card a[href="https://angular.io/tutorial"]')).toBeDefined();
  });

  // Ahora usaremos la clase AppComponent para probar algunos flujos

  // Quinta prueba unitaria: Esta prueba se encarga de validar que al hacer clic en el botón la variable isOn cambia de estado
  it('#clicked() should toggle #isOn', () => {
    const comp = new AppComponent();
    expect(comp.isOn)
      .withContext('off at first')
      .toBe(false);
    comp.clicked();
    expect(comp.isOn)
      .withContext('on after click')
      .toBe(true);
    comp.clicked();
    expect(comp.isOn)
      .withContext('off after second click')
      .toBe(false);
  });

  // Sexta prueba unitaria: Esta prueba se encarga de validar que el método getForm retorna el objeto completo de AppModel
  it('#getForm() should return AppModel correctly', () => {
    const comp = new AppComponent();
    const id = '1';
    const name = 'Test';
    const status = 'NEW';
    const version = 'v.1.7';
    const form = new FormGroup({
      id: new FormControl<string>(id),
      name: new FormControl<string>(name),
      status: new FormControl<string>(status),
      version: new FormControl<string>(version),
    });

    const saveModel = comp.getForm(form);

    expect(saveModel.id)
      .withContext('id == ' + id)
      .toBe(id);

    expect(saveModel.name)
      .withContext('name == ' + name)
      .toBe(name);

    expect(saveModel.status)
      .withContext('status == ' + status)
      .toBe(status);

    expect(saveModel.version)
      .withContext('version == ' + version)
      .toBe(version);

  });

});
