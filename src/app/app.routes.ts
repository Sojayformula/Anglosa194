// import { Routes } from '@angular/router';
// import { HomepageComponent } from './pages/homepage/homepage.component';
// import { ConstitutionComponent } from './pages/constitution/constitution.component';
// import { AboutusComponent } from './pages/aboutus/aboutus.component';
// import { PagesLayoutComponent } from './pages/pages-layout/pages-layout.component';
// import { RegistrationComponent } from './pages/registration/registration.component';
// import { GalleryComponent } from './pages/gallery/gallery.component';
// import { Component } from '@angular/core';
// import { AboutlayoutComponent } from './aboutlayout/aboutlayout/aboutlayout.component';
// import { TheSchoolComponent } from './aboutlayout/the-school/the-school.component';
// import { YearGroupComponent } from './aboutlayout/year-group/year-group.component';
// import { VolunteersComponent } from './aboutlayout/volunteers/volunteers.component';

// export const routes: Routes = [

//     // {path: "", component: PagesLayoutComponent,
//         // children:[ 
    
//      {path: "", redirectTo: "homepage", pathMatch: "full"},
//     {path: "", component: HomepageComponent},
//     {path: "homepape", component: HomepageComponent},
//     {path: "aboutlayout", component:  AboutlayoutComponent},
//     //    children:[   AboutlayoutComponent  AboutusComponent  pages-layout
//     //     {path: "", redirectTo: "gallery", pathMatch: "full"},
//     //     {path: "aboutus", component: AboutusComponent},
//          {path: "the-school", component: TheSchoolComponent},
//          {path: "year-group", component: YearGroupComponent},
//          {path: "volunteers", component: VolunteersComponent},      
//     //    ]
//     // },
//     {path: "registration", component: RegistrationComponent},
//     {path: "gallery", component: GalleryComponent},
//     {path: "constitution", component: ConstitutionComponent},
    

//         ]

// //     },
// // ];


import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ConstitutionComponent } from './pages/constitution/constitution.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
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


export const routes: Routes = [
//   { path: '', redirectTo: 'homepage', pathMatch: 'full' },

//   { path: 'homepage', component: HomepageComponent },
//   { path: 'aboutlayout', component: AboutlayoutComponent },
//   { path: 'gallery', component: GalleryComponent },
//   { path: 'constitution', component: ConstitutionComponent },
//    { path: 'year-group', component: YearGroupComponent},
//   { path: 'the-school', component: TheSchoolComponent },
//   { path: '', component: YearGroupComponent,

// //   {path: "", component: ObjectiveLayoutComponent,
//         children: [
//             {path: "", redirectTo: "objective1", pathMatch: "full"},
//             {path: "objective1", component: Objective1Component}
            
//         ]
//        },

//       { path: 'volunteers', component: TheSchoolComponent },
//        {path: 'aboutlayout', component: AboutlayoutComponent},

 
// //   { path: '**', redirectTo: 'homepage' },
// ];


//   {path: "", redirectTo: "homepage", pathMatch: "full"},
//   { path: 'homepage', component: HomepageComponent },
//   { path: 'aboutlayout', component: AboutlayoutComponent },
//   { path: 'gallery', component: GalleryComponent },
//   { path: 'constitution', component: ConstitutionComponent },
//   { path: 'year-group', component: YearGroupComponent },
//   { path: 'the-school', component: TheSchoolComponent },
//   {path: '', component: YearGroupComponent,
//     children: [
//       { path: '', redirectTo: 'objective1', pathMatch: 'full' },
//       { path: 'year-group', component: YearGroupComponent },  
//       { path: 'objective1', component: Objective1Component },
//       { path: 'objective2', component: Objective2Component },
//       { path: 'objective3', component: Objective3Component },
      
//     ],
//   },

// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, {
//       scrollPositionRestoration: 'enabled', 
//       anchorScrolling: 'enabled',          
//       scrollOffset: [0, 80],               
//     }),
//   ],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}




  { path: '', redirectTo: 'homepage', pathMatch: 'full' },

  { path: 'homepage', component: HomepageComponent },
  { path: 'aboutlayout', component: AboutlayoutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'constitution', component: ConstitutionComponent },
  { path: 'the-school', component: TheSchoolComponent },
  { path: 'location', component: LocationComponent },

  {
    path: 'year-group',
    component: YearGroupComponent,
    children: [
      { path: '', redirectTo: 'objective1', pathMatch: 'full' },  
      { path: 'objective1', component: Objective1Component },
      { path: 'objective2', component: Objective2Component },
      { path: 'objective3', component: Objective3Component },
    ],
  },

   { path: '**', redirectTo: 'homepage' }
];

