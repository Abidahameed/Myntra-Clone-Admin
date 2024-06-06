import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  sections: any[] = [];
  selectedFile: File | null = null; 
  base64Image: string | null = null; 
  constructor(private product: ProductService) {}

  ngOnInit(): void {   





    this.product.allSection().subscribe(
      (result: any) => {
        console.log(result);
        if (result ) {
          this.sections = result;
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );


  }



  handleFileInput(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.selectedFile = file;

      
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.base64Image = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }

  submit(data: any) {

    if (this.selectedFile && this.base64Image) {
    
      data.image = this.base64Image;

      this.product.addCategory(data).subscribe(
        (result) => {
          console.warn(result);
        },
        (error) => {
          console.error('Error occurred:', error);
        }
      );
    } else {
      console.error('No file selected');
    }
  }
  testSubmit() {
    console.log('Button clicked!');
  }

}
