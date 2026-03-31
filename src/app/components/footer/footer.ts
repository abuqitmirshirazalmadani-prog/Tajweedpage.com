import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ThreeLogoComponent } from '../three-logo/three-logo';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, MatIconModule, ThreeLogoComponent],
  template: `
    <footer class="bg-emerald-950 text-emerald-50 pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <!-- Brand -->
          <div>
            <a routerLink="/" class="flex items-center gap-3 mb-6 group">
              <app-three-logo [width]="280" [height]="64" class="transform group-hover:scale-105 transition-transform duration-300"></app-three-logo>
            </a>
            <p class="text-emerald-200 mb-6">
              Empowering Muslims worldwide to read, understand, and memorize the Holy Quran with perfect Tajweed through expert online instruction.
            </p>
            <div class="flex space-x-4">
              <!-- Social Links -->
              <a href="#" class="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-emerald-400 hover:bg-emerald-800 hover:text-white transition-colors">
                <span class="sr-only">Facebook</span>
                <svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-emerald-400 hover:bg-emerald-800 hover:text-white transition-colors">
                <span class="sr-only">Instagram</span>
                <svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"/></svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-emerald-400 hover:bg-emerald-800 hover:text-white transition-colors">
                <span class="sr-only">X (Twitter)</span>
                <svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-emerald-400 hover:bg-emerald-800 hover:text-white transition-colors">
                <span class="sr-only">LinkedIn</span>
                <svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"/></svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-4">Quick Links</h3>
            <ul class="space-y-3">
              <li><a routerLink="/courses" class="text-emerald-200 hover:text-white transition-colors flex items-center gap-2"><mat-icon class="text-sm">chevron_right</mat-icon> Quran Courses</a></li>
              <li><a routerLink="/tajweed-rules" class="text-emerald-200 hover:text-white transition-colors flex items-center gap-2"><mat-icon class="text-sm">chevron_right</mat-icon> Tajweed Rules Guide</a></li>
              <li><a routerLink="/teachers" class="text-emerald-200 hover:text-white transition-colors flex items-center gap-2"><mat-icon class="text-sm">chevron_right</mat-icon> Our Teachers</a></li>
              <li><a routerLink="/pricing" class="text-emerald-200 hover:text-white transition-colors flex items-center gap-2"><mat-icon class="text-sm">chevron_right</mat-icon> Pricing & Packages</a></li>
              <li><a routerLink="/about" class="text-emerald-200 hover:text-white transition-colors flex items-center gap-2"><mat-icon class="text-sm">chevron_right</mat-icon> About Us</a></li>
            </ul>
          </div>

          <!-- Support -->
          <div>
            <h3 class="text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-4">Support</h3>
            <ul class="space-y-3">
              <li><a routerLink="/contact" class="text-emerald-200 hover:text-white transition-colors flex items-center gap-2"><mat-icon class="text-sm">chevron_right</mat-icon> Contact Us</a></li>
              <li><a routerLink="/faq" class="text-emerald-200 hover:text-white transition-colors flex items-center gap-2"><mat-icon class="text-sm">chevron_right</mat-icon> FAQ</a></li>
              <li><a routerLink="/free-trial" class="text-emerald-200 hover:text-white transition-colors flex items-center gap-2"><mat-icon class="text-sm">chevron_right</mat-icon> Book Free Trial</a></li>
              <li><a routerLink="/privacy" class="text-emerald-200 hover:text-white transition-colors flex items-center gap-2"><mat-icon class="text-sm">chevron_right</mat-icon> Privacy Policy</a></li>
              <li><a routerLink="/terms" class="text-emerald-200 hover:text-white transition-colors flex items-center gap-2"><mat-icon class="text-sm">chevron_right</mat-icon> Terms & Conditions</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-4">Contact Us</h3>
            <ul class="space-y-3 text-emerald-200">
              <li class="flex items-start gap-3">
                <mat-icon class="text-emerald-400 mt-0.5">email</mat-icon>
                <a href="mailto:tajweedpage@outlook.com" class="hover:text-white transition-colors">tajweedpage&#64;outlook.com</a>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="text-emerald-400 mt-0.5">phone</mat-icon>
                <a href="https://wa.me/923708201211" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">+923708201211</a>
              </li>
              <li class="flex items-start mt-4">
                <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20start%20learning%20today" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-emerald-900 bg-emerald-400 hover:bg-emerald-300 transition-colors w-full">
                  Start Learning Today
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-emerald-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-emerald-400 text-sm">
            &copy; {{ currentYear }} Tajweedpage.com. All rights reserved. Built by AbuQitmir Tech. Engineered. <a href="https://abuqitmir.tech" target="_blank" rel="noopener noreferrer" class="hover:text-white underline transition-colors">https://abuqitmir.tech</a>.
          </p>
          <div class="mt-4 md:mt-0 flex space-x-6 text-sm text-emerald-400">
            <a routerLink="/privacy" class="hover:text-white transition-colors">Privacy</a>
            <a routerLink="/terms" class="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
