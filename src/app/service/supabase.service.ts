import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Teacher } from '../model';


const supabaseUrl = 'https://zqgpkgitbtxbxkjvjaez.supabase.co';
const supabaseKey =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxZ3BrZ2l0YnR4YnhranZqYWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MjM2NjYsImV4cCI6MjA3Mjk5OTY2Nn0.6JvKyoMU9FbW0ueLwQ3oC7lqD1lcNZikAzV6uVYu9Ds' // replace


@Injectable({
  providedIn: 'root'
})
export class SupabaseService {


   private supabase: SupabaseClient;

  constructor() { 
    //   this.supabase = createClient(
    //   'https://zqgpkgitbtxbxkjvjaez.supabase.co',  
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxZ3BrZ2l0YnR4YnhranZqYWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MjM2NjYsImV4cCI6MjA3Mjk5OTY2Nn0.6JvKyoMU9FbW0ueLwQ3oC7lqD1lcNZikAzV6uVYu9Ds' // replace
    // );

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }


// =============================
// AUTH
// =============================
async signIn(email: string, password: string) {
  const { data, error } = await this.supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  const user = data.user;

  if (!user) throw new Error('No user found');

  // fetch role from teachers table (or 'admi' if you store roles there)
  const { data: roleData, error: roleError } = await this.supabase
    .from('teachers') // replace with 'admi' if needed
    .select('role')
    .eq('user_id', user.id)
    .single();

  if (roleError) throw roleError;

  return {
    user,
    role: roleData?.role ?? 'teacher', // fallback if role not set
  };
}

async signOut() {
  await this.supabase.auth.signOut();
}

async getCurrentUser() {
  const { data, error } = await this.supabase.auth.getUser();
  if (error) throw error;
  return data.user;
}

// =============================
// CONTENTS TABLE
// =============================
// async getContents() {
//   const { data, error } = await this.supabase
//     .from('contents')
//     .select('*');

//   if (error) throw error;

//   // Add a rowNumber property for clean numbering in Angular
//   return data?.map((row, index) => ({
//     ...row,
//     rowNumber: index + 1, // starts from 1
//   })) ?? [];
// }
async getContents() {
  const { data, error } = await this.supabase
    .from('contents')
    .select('*')
    .order('id', { ascending: true }); // <--- ensure smallest IDs come first

  if (error) throw error;

  return data?.map((row, index) => ({
    ...row,
    rowNumber: index + 1, // now this will be 1, 2, 3…
  })) ?? [];
}


// async addContent(content: { name: string; description: string }) {
//   const { data, error } = await this.supabase
//     .from('contents')
//     .insert([content]);
//   if (error) throw error;
//   return data;
// }
async addContent(content: { name: string; description: string }) {
  const { data, error } = await this.supabase
    .from('contents')
    .insert([content])
    .select(); // return inserted row
  if (error) throw error;
  return data;
}



// async updateContent(id: number, updates: any) {
//   const { data, error } = await this.supabase
//     .from('contents')
//     .update(updates)
//     .eq('id', id);
//   if (error) throw error;
//   return data;
// }
async updateContent(id: number, updates: any) {
  const { data, error } = await this.supabase
    .from('contents')
    .update(updates)
    .eq('id', id)
    .select();
  if (error) throw error;
  return data;
}

async deleteContent(id: number) {
  const { error } = await this.supabase
    .from('contents')
    .delete()
    .eq('id', id);
  return { error };
}

// =============================
// TEACHERS TABLE
// =============================
async getteachContents() {
  const { data, error } = await this.supabase
    .from('teachers')
    .select('*')
    .order('id', { ascending: true }); 

  if (error) throw error;

  return data?.map((row, index) => ({
    ...row,
    rowNumber: index + 1, 
  })) ?? [];
}


// async addteachContent(teacher: any) {
//   const { data, error } = await this.supabase
//     .from('teachers')
//     .insert([teacher]);

//   if (error) throw error;
//   return data;
// }

// async addteachContent(teacher: Teacher) {
//   const { data, error } = await this.supabase
//     .from('teachers')
//     .insert([teacher])
//     .select();
//   if (error) throw error;
//   return data;
// }
async addteachContent(teacher: Teacher) {
  // Only send DB columns
  const insertData = {
    teachname: teacher.teachname,
    teachgender: teacher.teachgender,
    teachposition: teacher.teachposition,
    email: teacher.email,
    role: teacher.role,
    user_id: teacher.user_id ?? null
  };

  const { data, error } = await this.supabase
    .from('teachers')
    .insert([insertData])
    .select();

  if (error) throw error;
  return data;
}


// async updateTeacher(id: number, updates: any) {
//   const { data, error } = await this.supabase
//     .from('teachers')
//     .update(updates)
//     .eq('id', id);
//   if (error) throw error;
//   return data;
// }
async updateTeacher(id: number, updates: any) {
  const { data, error } = await this.supabase
    .from('teachers')
    .update(updates)
    .eq('id', id)
    .select();
  if (error) throw error;
  return data;
}

async deleteTeacher(id: number) {
  const { error } = await this.supabase
    .from('teachers')
    .delete()
    .eq('id', id);
  return { error };
}

// ✅ Extra helper: get teacher by email (to check role)
async getTeacherByEmail(email: string) {
  const { data, error } = await this.supabase
    .from('teachers')
    .select('id, teachname, role')
    .eq('email', email)
    .single();
  if (error) throw error;
  return data;
}


// =============================
// SUBMISSIONS TABLE + FILE UPLOAD
// =============================
// async uploadFile(file: File): Promise<string> {
//   const filePath = `${Date.now()}_${file.name}`;
//   const { data, error } = await this.supabase.storage
//     .from('uploads')  // 👈 bucket name
//     .upload(filePath, file);

//   if (error) throw error;

//   // Get public URL
//   const { data: publicUrl } = this.supabase.storage
//     .from('uploads')
//     .getPublicUrl(filePath);

//   return publicUrl.publicUrl;
// }

async addSubmission(username: string, email: string, comment: string, fileUrl: string | null) {
  const { data, error } = await this.supabase
    .from('submissions')
    .insert([{ username, email, comment, file_url: fileUrl }])
    .select();

  if (error) throw error;
  return data;
}

async getSubmissions() {
  const { data, error } = await this.supabase
    .from('submissions')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}






  // ✅ expose storage
  get storage() {
    return this.supabase.storage;
  }

  // Example: file upload helper
  // async uploadFile(file: File): Promise<string | null> {
  //   const filePath = `messages/${Date.now()}_${file.name}`;
  //   const { data, error } = await this.storage
  //     .from('uploads')
  //     .upload(filePath, file);

  //   if (error) {
  //     console.error('Upload error:', error.message);
  //     return null;
  //   }

  //   const { data: publicUrl } = this.storage
  //     .from('uploads')
  //     .getPublicUrl(filePath);

  //   return publicUrl.publicUrl;
  // }




   // example: list files from "uploads" bucket
  async listUploads() {
    return await this.supabase.storage.from('uploads').list();
  }

  // example: get user role
  async getUserRole(userId: string): Promise<string | null> {
    const { data, error } = await this.supabase
      .from('teachers')
      .select('role')
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('Error fetching role:', error.message);
      return null;
    }

    return data?.role || null;
  }


   async uploadFile(file: File): Promise<string | null> {
    const filePath = `${Date.now()}-${file.name}`;
    const { error } = await this.supabase.storage
      .from('uploads')
      .upload(filePath, file);

    if (error) throw error;

    const { data } = this.supabase.storage.from('uploads').getPublicUrl(filePath);
    return data.publicUrl;
  }

  async listFiles(): Promise<{ name: string; url: string }[]> {
    const { data, error } = await this.supabase.storage
      .from('uploads')
      .list('', { limit: 100 });

    if (error) throw error;

    return data.map(file => ({
      name: file.name,
      url: this.supabase.storage.from('uploads').getPublicUrl(file.name).data.publicUrl,
    }));
  }


  // UPLOAD TO GALLERY
  async addGalleryFile(url: string) {
  const { data, error } = await this.supabase
    .from('gallery') // your table to store uploaded files
    .insert([{ file_url: url }])
    .select();
  if (error) throw error;
  return data;
}

async listGalleryFiles() {
  const { data, error } = await this.supabase
    .from('gallery')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}




}