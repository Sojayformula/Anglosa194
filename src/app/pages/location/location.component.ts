import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SupabaseService } from '../../service/supabase.service';

@Component({
  selector: 'app-location',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {

     // navigate to footer //
scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}



  username = '';
  email = '';
  comment = '';
  file: File | null = null;
  message = '';

  constructor(private supabase: SupabaseService) {}

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  async submit() {
    try {
      let fileUrl: string | null = null;
      if (this.file) {
        fileUrl = await this.supabase.uploadFile(this.file);
      }

      await this.supabase.addSubmission(this.username, this.email, this.comment, fileUrl);

      this.message = 'Submission sent successfully!';
      this.username = '';
      this.email = '';
      this.comment = '';
      this.file = null;
    } catch (err) {
      console.error('Error submitting:', err);
      this.message = 'Error submitting form.';
    }
  }



}
