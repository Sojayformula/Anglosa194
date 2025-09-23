import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {


   private supabase: SupabaseClient;

  constructor() { 
      this.supabase = createClient(
      'https://zqgpkgitbtxbxkjvjaez.supabase.co',  
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxZ3BrZ2l0YnR4YnhranZqYWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MjM2NjYsImV4cCI6MjA3Mjk5OTY2Nn0.6JvKyoMU9FbW0ueLwQ3oC7lqD1lcNZikAzV6uVYu9Ds' // replace
    );
  }



// // CONTENTS // 
//   async getContents() {
//     const { data, error } = await this.supabase
//       .from('contents')
//       .select('*');
//     if (error) throw error;
//     return data;
//   }

//   async addContent(content: { name: string; description: string }) {
//     const { data, error } = await this.supabase
//       .from('contents')
//       .insert([content]);
//     if (error) throw error;
//     return data;
//   }

//   async deleteContent(id: number) {
//     const { error } = await this.supabase
//       .from('contents')
//       .delete()
//       .eq('id', id);
//     return { error };
//   }

//   // TEACHERS // 
//   async getteachContents() {
//     const { data, error } = await this.supabase
//       .from('teachers')
//       .select('*');
//     if (error) throw error;
//     return data;
//   }

//   async addteachContent(content: { name: string; description: string }) {
//     const { data, error } = await this.supabase
//       .from('teachers')
//       .insert([content]);
//     if (error) throw error;
//     return data;
//   }

//   async deleteTeacher(id: number) {
//     const { error } = await this.supabase
//       .from('teachers')
//       .delete()
//       .eq('id', id);
//     return { error };
//   }

//   // ADMI //
//   async getAdmi() {
//     const { data, error } = await this.supabase
//       .from('admi')
//       .select('*');
//     if (error) throw error;
//     return data;
//   }

//   async addAdmi(admin: { name: string; role: string }) {
//     const { data, error } = await this.supabase
//       .from('admi')
//       .insert([admin]);
//     if (error) throw error;
//     return data;
//   }

//   async deleteAdmi(id: number) {
//     const { error } = await this.supabase
//       .from('admi')
//       .delete()
//       .eq('id', id);
//     return { error };
//   }




  // constructor() { 
  //   this.supabase = createClient(
  //     'https://zqgpkgitbtxbxkjvjaez.supabase.co',  
  //     'YOUR_ANON_KEY' // ⚠️ better to load from environment.ts
  //   );
  // }

  // =============================
  // AUTH (login / logout)
  // =============================
  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
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
  async getContents() {
    const { data, error } = await this.supabase
      .from('contents')
      .select('*');
    if (error) throw error;
    return data;
  }

  async addContent(content: { name: string; description: string }) {
    const { data, error } = await this.supabase
      .from('contents')
      .insert([content]);
    if (error) throw error;
    return data;
  }

  async updateContent(id: number, updates: any) {
    const { data, error } = await this.supabase
      .from('contents')
      .update(updates)
      .eq('id', id);
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
      .from('teacher')
      .select('*');
    if (error) throw error;
    return data;
  }

  async addteachContent(teacher: {
    teachname: string;
    teachgender: string;
    teachposition: string;
    email?: string;
    role?: string;
  }) {
    const { data, error } = await this.supabase
      .from('teacher')
      .insert([teacher]);
    if (error) throw error;
    return data;
  }

  async updateTeacher(id: number, updates: any) {
    const { data, error } = await this.supabase
      .from('teacher')
      .update(updates)
      .eq('id', id);
    if (error) throw error;
    return data;
  }

  async deleteTeacher(id: number) {
    const { error } = await this.supabase
      .from('teacher')
      .delete()
      .eq('id', id);
    return { error };
  }

  // ✅ Extra helper: get teacher by email (to check role)
  async getTeacherByEmail(email: string) {
    const { data, error } = await this.supabase
      .from('teacher')
      .select('id, teachname, role')
      .eq('email', email)
      .single();
    if (error) throw error;
    return data;
  }

}