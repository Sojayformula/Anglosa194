import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../../service/supabase.service';
import { members } from '../../model';

@Component({
  selector: 'app-adminmembers',
  imports: [FormsModule, CommonModule],
  templateUrl: './adminmembers.component.html',
  styleUrl: './adminmembers.component.scss'
})
export class AdminmembersComponent {
    
    contents: any[] = [];
    member: members[] = []; // can hold both Teacher + rowNumber
  
    newContent = { name: '', description: '' };
  
    newmember: members = {
      name: '',
      gender: '',
      position: '',
      email: '',
      role: 'teacher'
    };
  
    // uploadedFiles: any[] = [];
    currentUserRole: string | null = null;
  
    constructor(private supabase: SupabaseService) {}
  
  
    async ngOnInit() {
      await this.loadContents();
      // await this.loadTeachers();
      await this.loadSubmissions();
      // await this.loadGallery();
      await this.uploadFile()
  
        // get current logged in user + role
    const { data } = await this.supabase['supabase'].auth.getUser();
    if (data.user) {
      this.currentUserRole = await this.supabase.getUserRole(data.user.id);
    }
    }
  
    // ===== CONTENTS =====
    async loadContents() {
      this.contents = await this.supabase.getContents();
    }
  
    async addContent() {
      await this.supabase.addContent(this.newContent);
      this.newContent = { name: '', description: '' };
      await this.loadContents();
    }
  
    async deleteContent(id: number) {
      await this.supabase.deleteContent(id);
      await this.loadContents();
    }
  
    editContent(item: any) {
      alert(`Edit content with id=${item.id}`);
    }
  
    // ===== TEACHERS =====
  //   async loadTeachers() {
  //     const data = await this.supabase.getteachContents();
  //     this.teachers = data.map((t: members, index: number) => ({
  //       ...t,
  //       rowNumber: index + 1 // ✅ add row number on the fly
  //     }));
  //   }
  
  
  //   async deleteTeacher(id: number) {
  //     await this.supabase.deleteTeacher(id);
  //     await this.loadTeachers();
  //   }
  
   
  //   async addTeacher() {
  //   try {
  //     if (this.newTeacher.role === 'admin') {
  //       this.newTeacher.user_id = '0f3c3f4d-1816-49c8-961a-52a7c0c3e4c9';
  //     } else {
  //       delete this.newTeacher.user_id;
  //     }
  
  //     await this.supabase.addteachContent(this.newTeacher);
  
  //     this.newTeacher = {
  //       teachname: '',
  //       teachgender: '',
  //       teachposition: '',
  //       email: '',
  //       role: 'teacher',
  //     };
  
  //     await this.loadTeachers(); // refresh
  //   } catch (err) {
  //     console.error('Error adding teacher:', err);
  //   }
  // }
  
  
  // editTeacher(teacher: members) {
  //   const newName = prompt('Edit member name:', content.name);
  //   const newGender = prompt('Edit gender:', content.gender);
  //   const newPos = prompt('Edit position:', content.position);
  //   const newRole = prompt('Edit role (member/admin):', content.role);
  
  //   if (newName && newPos && newRole) {
  //     this.supabase.updateTeacher(teacher.id!, {
  //       teachname: newName,
  //       teachposition: newPos,
  //       role: newRole,
  //     }).then(() => this.loadTeachers());
  //   }
  // }
  
  
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
  

  
  
  
  
  
  
  
  
  
  // In your AdmiComponent
  galleryFiles: any[] = [];
  // selectedFile: File | null = null;
  
  // async ngOnInit() {
  //   await this.loadUploads(); // load gallery on component init
  // }
  
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
