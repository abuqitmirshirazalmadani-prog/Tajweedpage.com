import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="pt-24 pb-16 min-h-screen bg-emerald-50/30">
      <!-- Header -->
      <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-emerald-950 mb-4">Our Qualified Teachers</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Learn from expert instructors holding authentic Ijazah with a continuous chain of narration to the Prophet صلى الله عليه وسلم.
        </p>
      </section>

      <!-- Teachers Grid -->
      <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Teacher 1 -->
          <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-xl transition-all text-center p-8">
            <div class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-emerald-100 mb-6">
              <img src="https://lh3.googleusercontent.com/p/AF1QipNs4ngFBtXqIi_UnQw7LPGSfhxzLeva9slPYATR=s1360-w1360-h1020-rw" alt="Abu Qitmir Mohammad Shiraz Al-Madani" class="w-full h-full object-cover" referrerpolicy="no-referrer" />
            </div>
            <h3 class="text-2xl font-bold text-emerald-900 mb-1">Abu Qitmir Mohammad Shiraz Al-Madani</h3>
            <p class="text-emerald-600 font-medium mb-4">Senior Tajweed Instructor</p>
            <div class="flex justify-center gap-2 mb-6">
              <span class="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium flex items-center"><mat-icon class="text-[14px] w-[14px] h-[14px] mr-1">verified</mat-icon> Ijazah in 10 Qira'at</span>
              <span class="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium flex items-center"><mat-icon class="text-[14px] w-[14px] h-[14px] mr-1">work</mat-icon> 15+ Years Exp.</span>
            </div>
            <p class="text-gray-600 text-sm mb-6">
              Specializes in teaching advanced Tajweed rules and helping students achieve their own Ijazah certification. Fluent in English and Arabic.
            </p>
            <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20learn%20more%20about%20Abu%20Qitmir%20Mohammad%20Shiraz%20Al-Madani" target="_blank" rel="noopener noreferrer" class="block w-full text-center py-2 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-600 hover:text-white transition-colors">
              Contact Teacher
            </a>
          </div>

          <!-- Teacher 2 -->
          <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-xl transition-all text-center p-8">
            <div class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-emerald-100 mb-6">
              <img src="https://images.pexels.com/photos/8350502/pexels-photo-8350502.jpeg" alt="Ustadha Fatima" class="w-full h-full object-cover" referrerpolicy="no-referrer" />
            </div>
            <h3 class="text-2xl font-bold text-emerald-900 mb-1">Ustadha Fatima</h3>
            <p class="text-emerald-600 font-medium mb-4">Hifz & Kids Specialist</p>
            <div class="flex justify-center gap-2 mb-6">
              <span class="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium flex items-center"><mat-icon class="text-[14px] w-[14px] h-[14px] mr-1">verified</mat-icon> Hafiza</span>
              <span class="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium flex items-center"><mat-icon class="text-[14px] w-[14px] h-[14px] mr-1">psychology</mat-icon> Child Psychology</span>
            </div>
            <p class="text-gray-600 text-sm mb-6">
              Passionate about making Quran learning fun for children. Uses interactive methods to keep young learners engaged and motivated.
            </p>
            <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20learn%20more%20about%20Ustadha%20Fatima" target="_blank" rel="noopener noreferrer" class="block w-full text-center py-2 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-600 hover:text-white transition-colors">
              Contact Teacher
            </a>
          </div>

          <!-- Teacher 3 -->
          <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-xl transition-all text-center p-8">
            <div class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-emerald-100 mb-6">
              <img src="https://images.pexels.com/photos/18297623/pexels-photo-18297623.jpeg" alt="Sheikh Omar" class="w-full h-full object-cover" referrerpolicy="no-referrer" />
            </div>
            <h3 class="text-2xl font-bold text-emerald-900 mb-1">Sheikh Omar</h3>
            <p class="text-emerald-600 font-medium mb-4">Qaida & Beginners Instructor</p>
            <div class="flex justify-center gap-2 mb-6">
              <span class="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium flex items-center"><mat-icon class="text-[14px] w-[14px] h-[14px] mr-1">verified</mat-icon> Ijazah in Hafs</span>
              <span class="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium flex items-center"><mat-icon class="text-[14px] w-[14px] h-[14px] mr-1">school</mat-icon> Al-Azhar Grad</span>
            </div>
            <p class="text-gray-600 text-sm mb-6">
              Expert in guiding absolute beginners and reverts. Known for his patience and clear, step-by-step teaching methodology.
            </p>
            <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20learn%20more%20about%20Sheikh%20Omar" target="_blank" rel="noopener noreferrer" class="block w-full text-center py-2 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-600 hover:text-white transition-colors">
              Contact Teacher
            </a>
          </div>

        </div>
      </section>
    </div>
  `
})
export class TeachersComponent {}
