
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ConstitutionComponent } from './pages/constitution/constitution.component';
import { AboutusComponent } from './aboutlayout/aboutus/aboutus.component';
import { PagesLayoutComponent } from './pages/pages-layout/pages-layout.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutlayoutComponent } from './aboutlayout/aboutlayout/aboutlayout.component';
import { TheSchoolComponent } from './aboutlayout/the-school/the-school.component';
import { YearGroupComponent } from './aboutlayout/year-group/year-group.component';
import { VolunteersComponent } from './aboutlayout/volunteers/volunteers.component';
import { Objective1Component } from './aboutlayout/objectives/objective1/objective1.component';
import { ObjectiveLayoutComponent } from './objectives/objective-layout/objective-layout.component';
import { NgModule } from '@angular/core';
import { Objective3Component } from './aboutlayout/objectives/objective3/objective3.component';
import { Objective2Component } from './aboutlayout/objectives/objective2/objective2.component';
import { LocationComponent } from './pages/location/location.component';
import { MembersComponent } from './aboutlayout/tableLayout/table-layout/members/members.component';
import { TableLayoutComponent } from './aboutlayout/tableLayout/table-layout/table-layout.component';
import { TeachersComponent } from './aboutlayout/tableLayout/table-layout/teachers/teachers.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './admin/admin/admin.component'; 
import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';
import { AdminmembersComponent } from './admin/adminmembers/adminmembers.component';
import { UsersubmissionComponent } from './admin/usersubmission/usersubmission.component';
import { Page19Component } from './pages/constitution/page19/page19.component';
import { Page1Component } from './pages/constitution/page1/page1.component';
import { Page2Component } from './pages/constitution/page2/page2.component';
import { Page3Component } from './pages/constitution/page3/page3.component';
import { Page4Component } from './pages/constitution/page4/page4.component';
import { Page5Component } from './pages/constitution/page5/page5.component';
import { Page7Component } from './pages/constitution/page7/page7.component';
import { Page8Component } from './pages/constitution/page8/page8.component';
import { Page9Component } from './pages/constitution/page9/page9.component';
import { Page10Component } from './pages/constitution/page10/page10.component';
import { Page11Component } from './pages/constitution/page11/page11.component';
import { Page12Component } from './pages/constitution/page12/page12.component';
import { Page13Component } from './pages/constitution/page13/page13.component';
import { Page14Component } from './pages/constitution/page14/page14.component';
import { Page15Component } from './pages/constitution/page15/page15.component';
import { ConstitutionLayoutComponent } from './pages/constitution/constitution-layout/constitution-layout.component';
import { ChairmanComponent } from './aboutlayout/executive/chairman/chairman.component';
import { VicechairmanComponent } from './aboutlayout/executive/vicechairman/vicechairman.component';
import { SecretaryComponent } from './aboutlayout/executive/secretary/secretary.component';
import { TreasurerComponent } from './aboutlayout/executive/treasurer/treasurer.component';
import { ExecutivelayoutComponent } from './aboutlayout/executive/executivelayout/executivelayout.component';
import { OrganizerComponent } from './aboutlayout/executive/organizer/oganizer.component';


export const routes: Routes = [

  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  
   { path: 'homepage', component: HomepageComponent },
   
   

  { path: "", component: PagesLayoutComponent,
    children: [
      {  path: "", redirectTo: "pages-layout", pathMatch: "full"},
      { path: 'gallery', component: GalleryComponent },
      { path: 'location', component: LocationComponent },
      { path: "login", component: LoginComponent },
      // { path: "constitution", component: ConstitutionComponent },
      { path: "constitution-layout", component: ConstitutionLayoutComponent, 
        children:[
          {path: "", redirectTo: "page1", pathMatch: "full"},
          {path: "page1", component: Page1Component}, 
          {path: "page2", component: Page2Component},
          {path: "page3", component: Page3Component},
          {path: "page4", component: Page4Component},
          {path: "page5", component: Page5Component},
          {path: "page6", component: Page1Component},
          {path: "page7", component: Page7Component},
          {path: "page8", component: Page8Component},
          {path: "page9", component: Page9Component},
          {path: "page10", component: Page10Component},
          {path: "page11", component: Page11Component},
          {path: "page12", component: Page12Component},
          {path: "page13", component: Page13Component},
          {path: "page14", component: Page14Component},
          {path: "page15", component: Page15Component},
        ]
      },

      { path: "", component: AdminlayoutComponent,
        children: [
          {path: "", redirectTo:"adminmembers", pathMatch: "full"},
          {path: "adminmembers", component: AdminmembersComponent},
          {path: "admin", component: AdminComponent},
          {path: "Usersubmission", component: UsersubmissionComponent},
        ]
      }
]
  },
   { path: "aboutlayout", component: AboutlayoutComponent,
    children: [
      { path: "login", component: LoginComponent },
       { path: "", redirectTo: "aboutlayout", pathMatch: "full"},
       { path: 'the-school', component: TheSchoolComponent },
      //  { path: "admin", component: AdminComponent },
       { path: 'table-layout', component: TableLayoutComponent,
     children: [
      { path: "", redirectTo: "members", pathMatch: "full"},
      {path: "members", component: MembersComponent },
      {path: "teachers", component: TeachersComponent },
    ]
  },



  //  { path: 'year-group',
  //   component: YearGroupComponent,
  //   children: [
  //     { path: '', redirectTo: 'objective1', pathMatch: 'full' },  
  //     { path: 'objective1', component: Objective1Component },
  //     { path: 'objective2', component: Objective2Component },
  //     { path: 'objective3', component: Objective3Component },
 

  //      { path: "executivelayout", component: ExecutivelayoutComponent,
  //     children: [
  //        { path: '', redirectTo: 'chairman', pathMatch: 'full' }, 
  //       { path: "chairman", component: ChairmanComponent },
  //       { path: "vicechairman", component: VicechairmanComponent },
  //       { path: "secretary", component: SecretaryComponent },
  //       { path: "treasurer", component: TreasurerComponent },
  //       { path: "organizer", component: OrganizerComponent },
  //     ]
  //   },
   
  // ]
  // },




   {
    path: 'year-group',
    component: YearGroupComponent,
    children: [
      // 👇 Default outlet (for objectives)
      { path: '', redirectTo: 'objective1', pathMatch: 'full' },
      { path: 'objective1', component: Objective1Component },
      { path: 'objective2', component: Objective2Component },
      { path: 'objective3', component: Objective3Component },

      // 👇 Named outlet for Executives
      {
        path: 'executivelayout',
        outlet: 'executive',
        component: ExecutivelayoutComponent,
        children: [
          { path: '', redirectTo: 'chairman', pathMatch: 'full' },
          { path: 'chairman', component: ChairmanComponent },
          { path: 'vice', component: VicechairmanComponent },
          { path: 'secretary', component: SecretaryComponent },
          { path: 'treasurer', component: TreasurerComponent },
          { path: 'organizer', component: OrganizerComponent },
        ],
      },
    ],
  },





]
},

  //  { path: '**', redirectTo: 'homepage'  }
];

