import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  template: `
    <div class="pt-24 pb-16 min-h-screen bg-emerald-50/30">
      <!-- Header -->
      <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-emerald-950 mb-4">Our Quran Courses</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive learning paths designed for all ages and levels, from absolute beginners to advanced certification.
        </p>
      </section>

      <!-- Courses Grid -->
      <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Course 1 -->
          <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col">
            <div class="h-48 overflow-hidden relative">
              <img src="https://images.pexels.com/photos/34355095/pexels-photo-34355095.jpeg" alt="Noorani Qaida" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerpolicy="no-referrer" />
              <div class="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">Beginner</div>
            </div>
            <div class="p-6 flex-1 flex flex-col">
              <h3 class="text-2xl font-bold text-emerald-900 mb-2">Noorani Qaida</h3>
              <p class="text-gray-600 mb-6 flex-1">
                The perfect starting point. Learn the Arabic alphabet, basic pronunciation, and the fundamental rules needed to start reading the Quran.
              </p>
              <ul class="space-y-2 mb-6 text-sm text-gray-600">
                <li class="flex items-center"><mat-icon class="text-emerald-500 mr-2 text-sm w-4 h-4">check</mat-icon> Arabic Alphabet Recognition</li>
                <li class="flex items-center"><mat-icon class="text-emerald-500 mr-2 text-sm w-4 h-4">check</mat-icon> Harakat (Vowels)</li>
                <li class="flex items-center"><mat-icon class="text-emerald-500 mr-2 text-sm w-4 h-4">check</mat-icon> Joining Letters</li>
              </ul>
              <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20start%20learning%20Noorani%20Qaida" target="_blank" rel="noopener noreferrer" class="block w-full text-center py-3 bg-emerald-50 text-emerald-700 font-semibold rounded-xl hover:bg-emerald-600 hover:text-white transition-colors">
                Start Learning
              </a>
            </div>
          </div>

          <!-- Course 2 -->
          <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col">
            <div class="h-48 overflow-hidden relative">
              <img src="https://images.pexels.com/photos/921296/pexels-photo-921296.jpeg" alt="Tajweed Rules" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerpolicy="no-referrer" />
              <div class="absolute top-4 right-4 bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full">Intermediate</div>
            </div>
            <div class="p-6 flex-1 flex flex-col">
              <h3 class="text-2xl font-bold text-emerald-900 mb-2">Tajweed Rules</h3>
              <p class="text-gray-600 mb-6 flex-1">
                Master the theoretical rules and practical application of Tajweed to recite the Quran exactly as it was revealed.
              </p>
              <ul class="space-y-2 mb-6 text-sm text-gray-600">
                <li class="flex items-center"><mat-icon class="text-emerald-500 mr-2 text-sm w-4 h-4">check</mat-icon> Makharij (Articulation Points)</li>
                <li class="flex items-center"><mat-icon class="text-emerald-500 mr-2 text-sm w-4 h-4">check</mat-icon> Sifat (Characteristics)</li>
                <li class="flex items-center"><mat-icon class="text-emerald-500 mr-2 text-sm w-4 h-4">check</mat-icon> Rules of Noon & Meem</li>
              </ul>
              <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20start%20learning%20Tajweed%20Rules" target="_blank" rel="noopener noreferrer" class="block w-full text-center py-3 bg-emerald-50 text-emerald-700 font-semibold rounded-xl hover:bg-emerald-600 hover:text-white transition-colors">
                Start Learning
              </a>
            </div>
          </div>

          <!-- Course 3 -->
          <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col">
            <div class="h-48 overflow-hidden relative">
              <img src="https://images.pexels.com/photos/35398672/pexels-photo-35398672.jpeg" alt="Hifz Program" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerpolicy="no-referrer" />
              <div class="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">All Levels</div>
            </div>
            <div class="p-6 flex-1 flex flex-col">
              <h3 class="text-2xl font-bold text-emerald-900 mb-2">Quran Memorization (Hifz)</h3>
              <p class="text-gray-600 mb-6 flex-1">
                A structured program for memorizing the Holy Quran with proven techniques for long-term retention and regular revision.
              </p>
              <ul class="space-y-2 mb-6 text-sm text-gray-600">
                <li class="flex items-center"><mat-icon class="text-emerald-500 mr-2 text-sm w-4 h-4">check</mat-icon> Personalized Memorization Plan</li>
                <li class="flex items-center"><mat-icon class="text-emerald-500 mr-2 text-sm w-4 h-4">check</mat-icon> Daily Revision Strategies</li>
                <li class="flex items-center"><mat-icon class="text-emerald-500 mr-2 text-sm w-4 h-4">check</mat-icon> Progress Tracking</li>
              </ul>
              <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20start%20Quran%20Memorization" target="_blank" rel="noopener noreferrer" class="block w-full text-center py-3 bg-emerald-50 text-emerald-700 font-semibold rounded-xl hover:bg-emerald-600 hover:text-white transition-colors">
                Start Learning
              </a>
            </div>
          </div>

          <!-- Course 4 -->
          <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col">
            <div class="h-48 overflow-hidden relative">
              <img src="https://images.pexels.com/photos/36211927/pexels-photo-36211927.jpeg" alt="Ijazah Program" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerpolicy="no-referrer" />
              <div class="absolute top-4 right-4 bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">Advanced</div>
            </div>
            <div class="p-6 flex-1 flex flex-col">
              <h3 class="text-2xl font-bold text-emerald-900 mb-2">Ijazah Certification</h3>
              <p class="text-gray-600 mb-6 flex-1">
                For advanced students seeking formal certification with a continuous chain of narration (Sanad) to the Prophet صلى الله عليه وسلم.
              </p>
              <ul class="space-y-2 mb-6 text-sm text-gray-600">
                <li class="flex items-center"><mat-icon class="text-emerald-500 mr-2 text-sm w-4 h-4">check</mat-icon> Ijazah in Recitation</li>
                <li class="flex items-center"><mat-icon class="text-emerald-500 mr-2 text-sm w-4 h-4">check</mat-icon> Ijazah in Memorization</li>
                <li class="flex items-center"><mat-icon class="text-emerald-500 mr-2 text-sm w-4 h-4">check</mat-icon> Authentic Certification</li>
              </ul>
              <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20start%20Ijazah%20Certification" target="_blank" rel="noopener noreferrer" class="block w-full text-center py-3 bg-emerald-50 text-emerald-700 font-semibold rounded-xl hover:bg-emerald-600 hover:text-white transition-colors">
                Start Learning
              </a>
            </div>
          </div>

          <!-- Course 5 -->
          <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col">
            <div class="h-48 overflow-hidden relative">
              <img src="https://images.pexels.com/photos/13549648/pexels-photo-13549648.jpeg" alt="Kids Quran" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerpolicy="no-referrer" />
              <div class="absolute top-4 right-4 bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full">Kids</div>
            </div>
            <div class="p-6 flex-1 flex flex-col">
              <h3 class="text-2xl font-bold text-emerald-900 mb-2">Quran for Kids</h3>
              <p class="text-gray-600 mb-6 flex-1">
                Engaging and interactive classes specially designed to keep children motivated and instill a love for the Quran.
              </p>
              <ul class="space-y-2 mb-6 text-sm text-gray-600">
                <li class="flex items-center"><mat-icon class="text-emerald-500 mr-2 text-sm w-4 h-4">check</mat-icon> Interactive Learning Tools</li>
                <li class="flex items-center"><mat-icon class="text-emerald-500 mr-2 text-sm w-4 h-4">check</mat-icon> Child-Friendly Teachers</li>
                <li class="flex items-center"><mat-icon class="text-emerald-500 mr-2 text-sm w-4 h-4">check</mat-icon> Regular Progress Reports</li>
              </ul>
              <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20start%20Quran%20for%20Kids" target="_blank" rel="noopener noreferrer" class="block w-full text-center py-3 bg-emerald-50 text-emerald-700 font-semibold rounded-xl hover:bg-emerald-600 hover:text-white transition-colors">
                Start Learning
              </a>
            </div>
          </div>

          <!-- Course 6 -->
          <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col">
            <div class="h-48 overflow-hidden relative">
              <img src="https://images.pexels.com/photos/325266/pexels-photo-325266.jpeg" alt="Arabic Language" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerpolicy="no-referrer" />
              <div class="absolute top-4 right-4 bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full">All Levels</div>
            </div>
            <div class="p-6 flex-1 flex flex-col">
              <h3 class="text-2xl font-bold text-emerald-900 mb-2">Arabic for Quran</h3>
              <p class="text-gray-600 mb-6 flex-1">
                Learn the Arabic language to understand the meaning of the Quranic verses as you recite them.
              </p>
              <ul class="space-y-2 mb-6 text-sm text-gray-600">
                <li class="flex items-center"><mat-icon class="text-emerald-500 mr-2 text-sm w-4 h-4">check</mat-icon> Quranic Vocabulary</li>
                <li class="flex items-center"><mat-icon class="text-emerald-500 mr-2 text-sm w-4 h-4">check</mat-icon> Basic Grammar Rules</li>
                <li class="flex items-center"><mat-icon class="text-emerald-500 mr-2 text-sm w-4 h-4">check</mat-icon> Translation Practice</li>
              </ul>
              <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20start%20Arabic%20for%20Quran" target="_blank" rel="noopener noreferrer" class="block w-full text-center py-3 bg-emerald-50 text-emerald-700 font-semibold rounded-xl hover:bg-emerald-600 hover:text-white transition-colors">
                Start Learning
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  `
})
export class CoursesComponent {}

