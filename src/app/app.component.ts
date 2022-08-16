import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PersonaService } from './services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  datosForm: any;
  constructor(
    private personaService: PersonaService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    //Se instancia datosForm (variable utilizada para realizar un bind entre el formulario y el componente)
    this.datosForm = this.formBuilder.group({
      Documento: new FormControl('', Validators.required),
      Nombres: new FormControl('', Validators.required),
      Apellidos: new FormControl('', Validators.required),
      Telefono: new FormControl('', Validators.required),
      Correo: new FormControl('', Validators.required),
      Direccion: new FormControl('', Validators.required),
    });
  }

  onClickSave() {
    //Variable formData utilizada para enviar el objeto al servicio
    const formData = {
      Documento: this.datosForm.controls.Documento.value,
      Nombres: this.datosForm.controls.Nombres.value,
      Apellidos: this.datosForm.controls.Apellidos.value,
      Telefono: this.datosForm.controls.Telefono.value,
      Correo: this.datosForm.controls.Correo.value,
      Direccion: this.datosForm.controls.Direccion.value,
    };

    this.personaService.postPersonas(formData);
  }
}
