import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.css']
})
export class AllcategoryComponent {

  data: any[] = [];
  i: number = 0;
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    
    this.product.allcategory().subscribe(
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

  // removeFromWishlist(item: any): void {
  //   const userId = this.authservice.getUserId();
  //   if (userId) {
  //     const payload = {
  //       user_Id: userId,
  //       products_Id: item.products_Id._id
  //     };
  
  //     this.wishlistservice.removeWishlistItem(payload).subscribe(
  //       () => {
    
  //         this.wishlistItems = this.wishlistItems.filter(w => w.products_Id._id !== item.products_Id._id);
  //       },
  //       error => {
  //         console.error('Error removing item from wishlist', error);
  //       }
  //     );
  //     window.location.reload();
  //   }
  // }

  
}
