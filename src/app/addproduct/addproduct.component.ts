import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  data: any[] = [];
  brands: any[] = [];
  sections: any[] = [];
  categories: any[] = [];
  Sub_categories: any[] = [];

  selectedFile: File | null = null; 
  base64Image: string | null = null; 
  constructor(private product: ProductService) {}

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


    this.product.allSubcategory().subscribe(
      (result: any) => {
        console.log(result);
        if (result ) {
          this.Sub_categories = result;
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    
    this.product.allBrand().subscribe(
      (result: any) => {
        console.log(result);
        if (result ) {
          this.brands = result;
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

  submit(data: any) {

    if (this.selectedFile && this.base64Image) {
    
      data.Image = this.base64Image;

      this.product.addProduct(data).subscribe(
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
    alert('Product Added Successfully');
  }
  }
