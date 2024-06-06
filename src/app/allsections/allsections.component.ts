import { Component } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-allsections',
  templateUrl: './allsections.component.html',
  styleUrls: ['./allsections.component.css']
})
export class AllsectionsComponent {

  data: any[] = [];
  i: number = 0;
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    
    this.product.allSection().subscribe(
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
