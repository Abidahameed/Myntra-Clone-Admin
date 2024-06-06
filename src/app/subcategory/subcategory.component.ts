import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent {


  categories: any[] = [];
  sections: any[] = [];
  selectedFile: File | null = null; 
  base64Image: string | null = null; 

  constructor(private product: ProductService) { }



  ngOnInit(): void {   
    this.product.allcategory().subscribe(
      (result: any) => {
        console.log(result);
        if (result ) {
          this.categories = result;
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );





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

  onSubmit(data: any) {
    if (this.selectedFile && this.base64Image) {
    
      data.image = this.base64Image;

    this.product.addSubcategory(data).subscribe(response => {
      // Handle response if needed
      alert('Section added successfully');
    }, error => {
      // Handle error if needed
      console.error('Error adding section', error);
    });
  }
  }

}
