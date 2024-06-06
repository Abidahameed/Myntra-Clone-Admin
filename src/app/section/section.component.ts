import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  constructor(private product: ProductService) { }

  onSubmit(Name: string) {
 
    this.product.addSection(Name).subscribe(response => {
      // Handle response if needed
      console.log('Section added successfully', response);
    }, error => {
      // Handle error if needed
      console.error('Error adding section', error);
    });
  }


}
