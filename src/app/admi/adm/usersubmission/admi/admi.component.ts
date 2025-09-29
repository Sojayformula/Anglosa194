// import { Component, OnInit } from '@angular/core';
// import { SupabaseService } from '../../../../service/supabase.service';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Teacher } from '../../../../model';

// // interface Teacher {
// //   id?: number;  // 👈 add this
// //   teachname: string;
// //   teachgender: string;
// //   teachposition: string;
// //   email: string;
// //   role: string;
// //   user_id?: string;   // optional (only for admin)
// //   rowNumber?: number; // just for UI numbering
// // }


// @Component({
//   selector: 'app-admin',
//   imports: [FormsModule, CommonModule],
//   templateUrl: './admi.component.html',
//   styleUrl: './admi.component.scss'
// })
// export class AdmiComponent implements OnInit{

  
//   contents: any[] = [];
//   teachers: Teacher[] = []; // ✅ can hold both Teacher + rowNumber

//   newContent = { name: '', description: '' };

//   newTeacher: Teacher = {
//     teachname: '',
//     teachgender: '',
//     teachposition: '',
//     email: '',
//     role: 'teacher'
//   };

//   uploadedFiles: any[] = [];
// currentUserRole: string | null = null;

//   constructor(private supabase: SupabaseService) {}


//   async ngOnInit() {
//     await this.loadContents();
//     await this.loadTeachers();
//     await this.loadSubmissions();
//     // await this.loadGallery();
//     await this.uploadFile()

//       // get current logged in user + role
//   const { data } = await this.supabase['supabase'].auth.getUser();
//   if (data.user) {
//     this.currentUserRole = await this.supabase.getUserRole(data.user.id);
//   }
//   }

//   // ===== CONTENTS =====
//   async loadContents() {
//     this.contents = await this.supabase.getContents();
//   }

//   async addContent() {
//     await this.supabase.addContent(this.newContent);
//     this.newContent = { name: '', description: '' };
//     await this.loadContents();
//   }

//   async deleteContent(id: number) {
//     await this.supabase.deleteContent(id);
//     await this.loadContents();
//   }

//   editContent(item: any) {
//     alert(`Edit content with id=${item.id}`);
//   }

//   // ===== TEACHERS =====
//   async loadTeachers() {
//     const data = await this.supabase.getteachContents();
//     this.teachers = data.map((t: Teacher, index: number) => ({
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


// editTeacher(teacher: Teacher) {
//   const newName = prompt('Edit teacher name:', teacher.teachname);
//   const newGender = prompt('Edit gender:', teacher.teachgender);
//   const newPos = prompt('Edit position:', teacher.teachposition);
//   const newRole = prompt('Edit role (teacher/admin):', teacher.role);

//   if (newName && newPos && newRole) {
//     this.supabase.updateTeacher(teacher.id!, {
//       teachname: newName,
//       teachposition: newPos,
//       role: newRole,
//     }).then(() => this.loadTeachers());
//   }
// }


// submissions: any[] = [];

// async loadSubmissions() {
//   this.submissions = await this.supabase.getSubmissions();
// }






//   // upload files
// selectedFile: File | null = null;

// onFileSelected(event: Event) {
//   const input = event.target as HTMLInputElement;
//   if (input.files && input.files.length > 0) {
//     this.selectedFile = input.files[0];
//   }
// }

// // async uploadFile() {
// //   if (!this.selectedFile) return;

// //   try {
// //     await this.supabase.uploadFile(this.selectedFile);
// //     await this.loadUploads();
// //     this.selectedFile = null;
// //   } catch (err) {
// //     console.error('Upload failed:', err);
// //   }
// // }

// // async loadUploads() {
// //   this.uploadedFiles = await this.supabase.listFiles();
// // }

// // async uploadFile() {
// //   if (!this.selectedFile) return;

// //   try {
// //     const fileUrl = await this.supabase.uploadFile(this.selectedFile); // returns public URL
// //     // Save this URL to your database table, e.g., 'uploads' or 'gallery'
// //     await this.supabase.addGalleryFile(fileUrl); 
// //     await this.loadUploads(); // refresh admin dashboard
// //     this.selectedFile = null;
// //   } catch (err) {
// //     console.error('Upload failed:', err);
// //   }
// // }


// // async uploadFile() {
// //   if (!this.selectedFile) return;

// //   try {
// //     const fileUrl: string | null = await this.supabase.uploadFile(this.selectedFile);

// //     if (fileUrl) { // ✅ check that fileUrl is not null
// //       await this.supabase.addGalleryFile(fileUrl); 
// //       await this.loadUploads(); // refresh admin dashboard
// //     } else {
// //       console.error('Upload returned null URL');
// //     }

// //     this.selectedFile = null;
// //   } catch (err) {
// //     console.error('Upload failed:', err);
// //   }
// // }
// //   loadUploads() {
// //     throw new Error('Method not implemented.');
// //   }










// // In your AdmiComponent
// galleryFiles: any[] = [];
// // selectedFile: File | null = null;

// // async ngOnInit() {
// //   await this.loadUploads(); // load gallery on component init
// // }

// // Load gallery files from DB
// async loadUploads() {
//   try {
//     this.galleryFiles = await this.supabase.listGalleryFiles();
//   } catch (err) {
//     console.error('Failed to load gallery files:', err);
//   }
// }

// // Upload file and save to gallery
// async uploadFile() {
//   if (!this.selectedFile) return;

//   try {
//     const fileUrl: string | null = await this.supabase.uploadFile(this.selectedFile);

//     if (fileUrl) { // ✅ make sure fileUrl is valid
//       await this.supabase.addGalleryFile(fileUrl); 
//       await this.loadUploads(); // refresh gallery after upload
//     } else {
//       console.error('Upload returned null URL');
//     }

//     this.selectedFile = null; // reset input
//   } catch (err) {
//     console.error('Upload failed:', err);
//   }
// }


 







// }



