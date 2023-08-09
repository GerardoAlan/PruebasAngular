import { TestBed } from '@angular/core/testing';
import { AppService } from './app-service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  // Prueba unitaria: valida que exista el service llamado 'AppService'
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
