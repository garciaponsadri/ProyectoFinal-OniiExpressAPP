import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) { 
    this.form=fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }

  ingresar() {
    const user = this.form.value.usuario;
    const password = this.form.value.password;
    
    if(user=="adri" && password=="123") {
      // Redirección
    } else {
      this.error()
    }
  }
  
  error() {
    this._snackBar.open('Usuario o contraseña ingresado son invalidos', '', {
      duration: 3000,
      horizontalPosition: 'center' ,
      verticalPosition: 'bottom'
    }) 
  }
}
