import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../service/supabase.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Teacher } from '../../model';

// interface Teacher {
//   id?: number;  // 👈 add this
//   teachname: string;
//   teachgender: string;
//   teachposition: string;
//   email: string;
//   role: string;
//   user_id?: string;   // optional (only for admin)
//   rowNumber?: number; // just for UI numbering
// }


@Component({
  selector: 'app-admin',
  imports: [FormsModule, CommonModule],
  templateUrl: './admi.component.html',
  styleUrl: './admi.component.scss'
})
export class AdmiComponent implements OnInit{

  
  contents: any[] = [];
  teachers: Teacher[] = []; // ✅ can hold both Teacher + rowNumber

  newContent = { name: '', description: '' };

  newTeacher: Teacher = {
    teachname: '',
    teachgender: '',
    teachposition: '',
    email: '',
    role: 'teacher'
  };

  constructor(private supabase: SupabaseService) {}


  async ngOnInit() {
    await this.loadContents();
    await this.loadTeachers();
    await this.loadSubmissions();
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
  async loadTeachers() {
    const data = await this.supabase.getteachContents();
    this.teachers = data.map((t: Teacher, index: number) => ({
      ...t,
      rowNumber: index + 1 // ✅ add row number on the fly
    }));
  }


  async deleteTeacher(id: number) {
    await this.supabase.deleteTeacher(id);
    await this.loadTeachers();
  }

 
  async addTeacher() {
  try {
    if (this.newTeacher.role === 'admin') {
      this.newTeacher.user_id = '0f3c3f4d-1816-49c8-961a-52a7c0c3e4c9';
    } else {
      delete this.newTeacher.user_id;
    }

    await this.supabase.addteachContent(this.newTeacher);

    this.newTeacher = {
      teachname: '',
      teachgender: '',
      teachposition: '',
      email: '',
      role: 'teacher',
    };

    await this.loadTeachers(); // refresh
  } catch (err) {
    console.error('Error adding teacher:', err);
  }
}


editTeacher(teacher: Teacher) {
  const newName = prompt('Edit teacher name:', teacher.teachname);
  const newGender = prompt('Edit gender:', teacher.teachgender);
  const newPos = prompt('Edit position:', teacher.teachposition);
  const newRole = prompt('Edit role (teacher/admin):', teacher.role);

  if (newName && newPos && newRole) {
    this.supabase.updateTeacher(teacher.id!, {
      teachname: newName,
      teachposition: newPos,
      role: newRole,
    }).then(() => this.loadTeachers());
  }
}


submissions: any[] = [];

async loadSubmissions() {
  this.submissions = await this.supabase.getSubmissions();
}




}



