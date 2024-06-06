import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-allbrands',
  templateUrl: './allbrands.component.html',
  styleUrls: ['./allbrands.component.css']
})
export class AllbrandsComponent {

  data: any[] = [];
  i: number = 0;
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    
    this.product.allBrand().subscribe(
      (result: any) => {
        console.log(result);
        if (result ) {
          this.data = result;
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
