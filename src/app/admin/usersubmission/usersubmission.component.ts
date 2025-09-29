import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../../service/supabase.service';

@Component({
  selector: 'app-usersubmission',
  imports: [FormsModule, CommonModule],
  templateUrl: './usersubmission.component.html',
  styleUrl: './usersubmission.component.scss'
})
export class UsersubmissionComponent {

  
    galleryFiles: any[] = [];
    currentUserRole: string | null = null;
    uploadedFiles: { name: string, url: string }[] = [];
  
    constructor(private supabase: SupabaseService) {}


  
submissions: any[] = [];

async loadSubmissions() {
  this.submissions = await this.supabase.getSubmissions();
}

  // upload files
selectedFile: File | null = null;

onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.selectedFile = input.files[0];
  }
}


// Load gallery files from DB
async loadUploads() {
  try {
    this.galleryFiles = await this.supabase.listGalleryFiles();
  } catch (err) {
    console.error('Failed to load gallery files:', err);
  }
}

// Upload file and save to gallery
async uploadFile() {
  if (!this.selectedFile) return;

  try {
    const fileUrl: string | null = await this.supabase.uploadFile(this.selectedFile);

    if (fileUrl) { // make sure fileUrl is valid
      await this.supabase.addGalleryFile(fileUrl); 
      await this.loadUploads(); // refresh gallery after upload
    } else {
      console.error('Upload returned null URL');
    }

    this.selectedFile = null; // reset input
  } catch (err) {
    console.error('Upload failed:', err);
  }
}


}
