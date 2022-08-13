import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public productService: ProductService, public userService: UserService ) {}

  ngOnInit(): void {
    this.getProductsByUser(this.userService.decodeToken()._id);
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (data: any) => {
        this.productService.products = data.products;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getProductsByUser(id: string) {
      this.productService.getProductByUser(id).subscribe(
        (data: any) => {
          this.productService.products = data.products;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
