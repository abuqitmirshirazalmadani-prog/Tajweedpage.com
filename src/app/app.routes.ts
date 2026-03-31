import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent)
  },
  {
    path: 'courses',
    loadComponent: () => import('./pages/courses/courses').then(m => m.CoursesComponent)
  },
  {
    path: 'tajweed-rules',
    loadComponent: () => import('./pages/tajweed-rules/tajweed-rules').then(m => m.TajweedRulesComponent)
  },
  {
    path: 'teachers',
    loadComponent: () => import('./pages/teachers/teachers').then(m => m.TeachersComponent)
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing').then(m => m.PricingComponent)
  },
  {
    path: 'free-trial',
    loadComponent: () => import('./pages/free-trial/free-trial').then(m => m.FreeTrialComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent)
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq').then(m => m.FaqComponent)
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy').then(m => m.PrivacyComponent)
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms').then(m => m.TermsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
