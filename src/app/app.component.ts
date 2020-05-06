import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-wash-poc';
  
  constructor(private route: ActivatedRoute,
    private router: Router) {

  }

  loginClick() {
    localStorage.removeItem("userType");
    localStorage.removeItem("userId");
    document.getElementById('userType').innerHTML='';
    document.getElementById('userId').innerHTML='';
    this.router.navigate(["/customerlogin"]);
  }

}
