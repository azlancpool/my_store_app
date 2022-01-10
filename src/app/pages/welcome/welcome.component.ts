import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from './models/product.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  newProductModalIsVisible = false;
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.validateForm = this.fb.group({
      name: ["", [Validators.required]],
    });
  }

  ngOnInit() {
  }

  newProduct() {
    console.log("new product pressed")
    this.newProductModalIsVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.newProductModalIsVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.newProductModalIsVisible = false;
  }

}
