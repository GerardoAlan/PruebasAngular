import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppModel } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';

  public form = new FormGroup({
    id: new FormControl<string>({ value: '', disabled: false }),
    name: new FormControl<string>({ value: '', disabled: false }, [
      Validators.required,
      Validators.maxLength(150)
    ]),
    status: new FormControl<string>({ value: '', disabled: false }, [
      Validators.required,
      Validators.maxLength(250),
    ]),
    version: new FormControl<string>({ value: '', disabled: false }, [
      Validators.required,
      Validators.maxLength(250),
    ]),
  });

  ngOnInit(): void {
    this.form.reset();
  }

  getStringForm(){
    return JSON.stringify(this.getForm(this.form));
  }

  isOn = false;
  clicked() {
    this.isOn = !this.isOn;
  }

  getForm(form: FormGroup): AppModel {
    const model: AppModel = {
      id: form.controls['id'].value,
      name: form.controls['name'].value,
      status: form.controls['status'].value,
      version: form.controls['version'].value,
    };
    return model;
  }

}
