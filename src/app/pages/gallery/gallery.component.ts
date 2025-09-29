import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SupabaseService } from '../../service/supabase.service';

@Component({
  selector: 'app-gallery',
  imports: [RouterModule, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  galleryFiles: any[] = [];

  constructor(private supabase: SupabaseService) {}

    // navigate to footer //
scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}



// UPLOAD FILE


async ngOnInit() {
  this.galleryFiles = await this.supabase.listGalleryFiles();
}


}
