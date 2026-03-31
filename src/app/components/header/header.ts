import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ThreeLogoComponent } from '../three-logo/three-logo';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule, ThreeLogoComponent],
  template: `
    <header class="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20 gap-4">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <a routerLink="/" class="flex items-center gap-3 group">
              <app-three-logo [width]="220" [height]="48" class="transform group-hover:scale-105 transition-transform duration-300"></app-three-logo>
            </a>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center gap-8">
            <a routerLink="/" routerLinkActive="text-emerald-600 font-semibold after:scale-x-100" [routerLinkActiveOptions]="{exact: true}" class="relative text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors whitespace-nowrap py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Home</a>
            <a routerLink="/courses" routerLinkActive="text-emerald-600 font-semibold after:scale-x-100" class="relative text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors whitespace-nowrap py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Courses</a>
            <a routerLink="/tajweed-rules" routerLinkActive="text-emerald-600 font-semibold after:scale-x-100" class="relative text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors whitespace-nowrap py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Tajweed Rules</a>
            <a routerLink="/teachers" routerLinkActive="text-emerald-600 font-semibold after:scale-x-100" class="relative text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors whitespace-nowrap py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Teachers</a>
            <a routerLink="/pricing" routerLinkActive="text-emerald-600 font-semibold after:scale-x-100" class="relative text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors whitespace-nowrap py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Pricing</a>
            <a routerLink="/about" routerLinkActive="text-emerald-600 font-semibold after:scale-x-100" class="relative text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors whitespace-nowrap py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">About</a>
          </nav>

          <!-- CTA Buttons -->
          <div class="hidden lg:flex items-center gap-5">
            <a routerLink="/contact" class="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors whitespace-nowrap">Contact</a>
            <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20book%20a%20free%20trial%20class" target="_blank" rel="noopener noreferrer" class="bg-gray-900 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap">
              Free Trial Class
            </a>
          </div>

          <!-- Mobile menu button -->
          <div class="lg:hidden flex items-center">
            <button (click)="toggleMenu()" class="text-gray-900 hover:text-emerald-600 focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors">
              @if (!isMenuOpen()) {
                <mat-icon>menu</mat-icon>
              } @else {
                <mat-icon>close</mat-icon>
              }
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      @if (isMenuOpen()) {
        <div class="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl absolute w-full">
          <div class="px-4 pt-4 pb-8 space-y-1">
            <a routerLink="/" routerLinkActive="bg-emerald-50 text-emerald-700 font-semibold" [routerLinkActiveOptions]="{exact: true}" class="block px-4 py-3 rounded-2xl text-base font-medium text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all" (click)="closeMenu()">Home</a>
            <a routerLink="/courses" routerLinkActive="bg-emerald-50 text-emerald-700 font-semibold" class="block px-4 py-3 rounded-2xl text-base font-medium text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all" (click)="closeMenu()">Courses</a>
            <a routerLink="/tajweed-rules" routerLinkActive="bg-emerald-50 text-emerald-700 font-semibold" class="block px-4 py-3 rounded-2xl text-base font-medium text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all" (click)="closeMenu()">Tajweed Rules</a>
            <a routerLink="/teachers" routerLinkActive="bg-emerald-50 text-emerald-700 font-semibold" class="block px-4 py-3 rounded-2xl text-base font-medium text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all" (click)="closeMenu()">Teachers</a>
            <a routerLink="/pricing" routerLinkActive="bg-emerald-50 text-emerald-700 font-semibold" class="block px-4 py-3 rounded-2xl text-base font-medium text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all" (click)="closeMenu()">Pricing</a>
            <a routerLink="/about" routerLinkActive="bg-emerald-50 text-emerald-700 font-semibold" class="block px-4 py-3 rounded-2xl text-base font-medium text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all" (click)="closeMenu()">About</a>
            <a routerLink="/contact" routerLinkActive="bg-emerald-50 text-emerald-700 font-semibold" class="block px-4 py-3 rounded-2xl text-base font-medium text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all" (click)="closeMenu()">Contact</a>
            
            <div class="pt-6 px-2">
              <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20book%20a%20free%20trial%20class" target="_blank" rel="noopener noreferrer" class="block w-full text-center px-6 py-3.5 border border-transparent text-base font-bold rounded-2xl text-white bg-gray-900 hover:bg-emerald-600 transition-colors shadow-lg" (click)="closeMenu()">
                Free Trial Class
              </a>
            </div>
          </div>
        </div>
      }
    </header>
  `
})
export class HeaderComponent {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}

