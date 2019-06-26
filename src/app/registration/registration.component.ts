import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form;
  constructor(private fb: FormBuilder,
    private myRoute: Router,
    private auth: AuthService) {
    this.form = fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
  }

  register() {



    if (this.form.valid) {
      this.auth.registerToken(JSON.stringify(this.form.value));
      this.myRoute.navigate(['login']);

    }
  }
}


