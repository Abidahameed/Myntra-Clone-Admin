import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewtable',
  templateUrl: './viewtable.component.html',
  styleUrls: ['./viewtable.component.css']
})
export class ViewtableComponent implements OnInit {
  productList: any[] = [];
  i: number = 0;
  
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    
    this.product.productList().subscribe(
      (result: any) => {

        if (result && result.MyData) {
          this.productList = result.MyData;
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  deleteProduct(index: number, productId: string) {
    if (confirm('Are you sure you want to delete this product?')){
    this.product.deleteProduct(productId).subscribe(
      response => {
        console.log('Product deleted successfully', response);
        this.productList.splice(index, 1);
      },
      error => {
        console.error('Error deleting product', error);
      }
    );
  }

  }
}