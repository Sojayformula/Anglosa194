
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


export const routes: Routes = [

  { path: '', redirectTo: 'homepage', pathMatch: 'full' },

  { path: 'homepage', component: HomepageComponent },

  { path: "", component: PagesLayoutComponent,
    children: [
      {  path: "", redirectTo: "pages-layout", pathMatch: "full"},
      { path: 'gallery', component: GalleryComponent },
      { path: 'constitution', component: ConstitutionComponent },
      { path: 'location', component: LocationComponent },
]
  },
   { path: "aboutlayout", component: AboutlayoutComponent,
    children: [
       { path: "", redirectTo: "aboutlayout", pathMatch: "full"},
       { path: 'the-school', component: TheSchoolComponent },
       { path: 'table-layout', component: TableLayoutComponent,
    children: [
      { path: "", redirectTo: "members", pathMatch: "full"},
      {path: "members", component: MembersComponent },
      {path: "teachers", component: TeachersComponent },
    ]
  },

   { path: 'year-group',
    component: YearGroupComponent,
    children: [
      { path: '', redirectTo: 'objective1', pathMatch: 'full' },  
      { path: 'objective1', component: Objective1Component },
      { path: 'objective2', component: Objective2Component },
      { path: 'objective3', component: Objective3Component },
    ],
  },
]
},

  //  { path: '**', redirectTo: 'homepage' }
];

