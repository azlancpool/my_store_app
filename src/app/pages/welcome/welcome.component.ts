import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from './models/product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  newProductModalIsVisible = false;
  validateForm: FormGroup;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
  ) {
    this.validateForm = this.fb.group({
      name: ["", [Validators.required]],
      initialAmount: ["", [Validators.required]],
    });
  }

  ngOnInit() {
  }

  newProduct() {
    this.newProductModalIsVisible = true;
  }

  handleOk(): void {
    this.productService.newProduct(this.validateForm.value).subscribe({
      next: this.handleOnNewProductSuccess.bind(this),
      error: this.handleOnNewProductError.bind(this)
    });
    this.newProductModalIsVisible = false;
  }

  handleOnNewProductSuccess(): void {
    console.log("PRODUCT SAVED")
  }
  handleOnNewProductError(): void {
    console.log("ERROR TRYING TO SAVE A PRODUCT")
  }

  handleCancel(): void {
    this.newProductModalIsVisible = false;
  }

}
