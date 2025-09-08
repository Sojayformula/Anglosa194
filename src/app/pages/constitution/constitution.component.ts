// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-constitution',
//   imports: [RouterModule, CommonModule],
//   templateUrl: './constitution.component.html',
//   styleUrl: './constitution.component.scss'
// })
// export class ConstitutionComponent {

//      // navigate to footer //
// scrollToContact() {
//   document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
// }


// }






// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { NgIf, NgFor } from '@angular/common';
// import { RouterModule } from '@angular/router';

// interface RegistrationModel {
//   firstName: string;
//   lastName: string;
//   email: string;
//   yearGroup: string;
//   interests: string[];
//   notes?: string;
//   acceptTerms: boolean;
// }

// @Component({
//   selector: 'app-constitution',
//   standalone: true,
//   imports: [RouterModule, FormsModule, NgIf, NgFor],
//   templateUrl: './constitution.component.html',
//   styleUrls: ['./constitution.component.scss']
// })
// export class ConstitutionComponent {
//   model: RegistrationModel = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     yearGroup: '',
//     interests: [],
//     notes: '',
//     acceptTerms: false
//   };

//   yearGroups = ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13'];
//   possibleInterests = ['Sports', 'Music', 'STEM', 'Arts', 'Volunteering'];

//   submitted = false;
//   submissionResult: RegistrationModel | null = null;

//   onSubmit(form: any) {
//     this.submitted = true;
//     if (form.valid) {
//       this.submissionResult = { ...this.model };
//       form.resetForm({
//         firstName: '',
//         lastName: '',
//         email: '',
//         yearGroup: '',
//         interests: [],
//         notes: '',
//         acceptTerms: false
//       });
//       this.model = { firstName: '', lastName: '', email: '', yearGroup: '', interests: [], notes: '', acceptTerms: false };
//     } else {
//       this.submissionResult = null;
//     }
//   }

//   toggleInterest(interest: string, checked: boolean) {
//     if (checked) {
//       if (!this.model.interests.includes(interest)) {
//         this.model.interests.push(interest);
//       }
//     } else {
//       this.model.interests = this.model.interests.filter(i => i !== interest);
//     }
//   }

//   // navigate to footer
//   scrollToContact() {
//     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//   }
// }













import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  selector: 'app-constitution',
  standalone: true,
  imports: [RouterModule, FormsModule, NgIf, NgFor],
  templateUrl: './constitution.component.html',
  styleUrls: ['./constitution.component.scss']
})
export class ConstitutionComponent {
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

  // navigate to footer
  scrollToContact() {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
