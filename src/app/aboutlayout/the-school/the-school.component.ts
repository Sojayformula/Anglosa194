import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface RegistrationModel {
  firstName: string;
  lastName: string;
  email: string;
  yearGroup: string;
  interests: string[];
  notes: string;
  acceptTerms: boolean;
}


@Component({
  selector: 'app-the-school',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './the-school.component.html',
  styleUrl: './the-school.component.scss'
})
export class TheSchoolComponent {

  isModalOpen = false
  // cancelModal = false

  constructor( private router: Router){}

  back(){
    this.router.navigate(['aboutlayout'])
  }

      // navigate to footer //
scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}


  modal(){
    this.isModalOpen = true
  }

  cancel(){
    this.isModalOpen = false
  }




    // ensures Angular knows interests is always an array
  model: RegistrationModel = {
    firstName: '',
    lastName: '',
    email: '',
    yearGroup: '',
    interests: [],
    notes: '',
    acceptTerms: false,
  };

  submitted = false;
  submissionResult: RegistrationModel | null = null;

  yearGroups: string[] = ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13'];
  possibleInterests: string[] = ['Sports', 'Music', 'STEM', 'Arts', 'Volunteering'];

  // helper used from template to avoid nullable checks inside template
  isInterestChecked(interest: string): boolean {
    return this.model.interests.includes(interest);
  }

  toggleInterest(interest: string, checked: boolean) {
    if (checked) {
      if (!this.model.interests.includes(interest)) {
        this.model.interests.push(interest);
      }
    } else {
      this.model.interests = this.model.interests.filter(i => i !== interest);
    }
  }

  onSubmit(form: any) {
    this.submitted = true;
    if (form.valid) {
      this.submissionResult = { ...this.model };
      console.log('Submitted', this.submissionResult);
      form.resetForm({ acceptTerms: false });
      // After reset, reinitialize model to safe defaults
      this.model = {
        firstName: '',
        lastName: '',
        email: '',
        yearGroup: '',
        interests: [],
        notes: '',
        acceptTerms: false,
      };
      this.submitted = false;
    }
  }


}
