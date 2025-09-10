import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {


   private supabase: SupabaseClient;

  constructor() { 
      this.supabase = createClient(
      'https://zqgpkgitbtxbxkjvjaez.supabase.co',   // replace
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxZ3BrZ2l0YnR4YnhranZqYWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MjM2NjYsImV4cCI6MjA3Mjk5OTY2Nn0.6JvKyoMU9FbW0ueLwQ3oC7lqD1lcNZikAzV6uVYu9Ds' // replace
    );
  }


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


// supabase.service.ts
async deleteContent(id: number) {
  const { error } = await this.supabase.from('contents').delete().eq('id', id);
  return { error };
}



}
