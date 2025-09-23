import { Component } from '@angular/core';
import { SupabaseService } from '../../service/supabase.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    email = '';
  password = '';
  errorMessage = '';
  role: string | null = null;

  constructor(private supabase: SupabaseService, private router: Router) {}

  // async login() {
  //   try {
  //     const { user, role } = await this.supabase.signIn(this.email, this.password);
  //     this.role = role;
  //     console.log('Logged in as:', user.email, 'Role:', role);

  //     if (role === 'admin') {
  //       // redirect to admin dashboard
  //       // e.g., use Angular Router
  //       // this.router.navigate(['/admin-dashboard']);
  //     } else {
  //       // stay on normal user view
  //     }
  //   } catch (error: any) {
  //     this.errorMessage = error.message;
  //   }
  // }

  // async logout() {
  //   await this.supabase.signOut();
  //   this.role = null;
  // }

  async login() {
  try {
    const { user, role } = await this.supabase.signIn(this.email, this.password);
    this.role = role;

    console.log('Logged in as:', user.email, 'Role:', role);

    if (role === 'admin') {
      this.router.navigate(['/admin-dashboard']);
    } else {
      this.router.navigate(['/homepage']);
    }
  } catch (error: any) {
    this.errorMessage = error.message;
  }
}


}
