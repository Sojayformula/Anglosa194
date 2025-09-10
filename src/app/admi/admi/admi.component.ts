import { Component } from '@angular/core';
import { SupabaseService } from '../../service/supabase.service';

@Component({
  selector: 'app-admi',
  imports: [],
  templateUrl: './admi.component.html',
  styleUrl: './admi.component.scss'
})
export class AdmiComponent {

  
   contents: any[] = [];
  newContent = { name: '', description: '' };

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
    this.contents = await this.supabaseService.getContents();
  }

  async saveContent() {
    try {
      await this.supabaseService.addContent(this.newContent);
      this.contents = await this.supabaseService.getContents(); // refresh
      this.newContent = { name: '', description: '' }; // clear form
    } catch (err) {
      console.error(err);
      alert('Error saving content');
    }
  }

}
