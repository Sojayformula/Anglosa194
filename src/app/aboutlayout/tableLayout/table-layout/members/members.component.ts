import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SupabaseService } from '../../../../service/supabase.service';

@Component({
  selector: 'app-members',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {

    contents: any[] = [];
    teachers: any[] = [];
    APIData: any[] = [];
    teachAPIData: any[] = [];

    loadingMembers = false;
    

  constructor(private supabaseService: SupabaseService) {}

       // navigate to footer //
    scrollToContact() {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }

    isMenuOpen: boolean = false; 

      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen; 
      }

    

    async ngOnInit() {
    await this.loadMembers();
    // await this.loadTeachers();
}



 /** Load members from supabase */
  private async loadMembers() {
    this.loadingMembers = true; 
    try {
      this.APIData = await this.supabaseService.getContents();
    } catch (err) {
      console.error('Error fetching members:', err);
    }finally {
    this.loadingMembers = false; // stop loader
  }
  }


  // }

  }






  

  // constructor(private supabaseService: SupabaseService) {}

  // async ngOnInit() {
    
  // }

//   selectedId(item: any) {
//     console.log('Selected row:', item);
//   }

//   async deleteUnit(id: number) {
//     const { error } = await this.supabaseService.deleteContent(id);
//     if (error) console.error(error);
//     else this.APIData = this.APIData.filter((row) => row.id !== id);
//   }

// }
