import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tajweed-rules',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="pt-24 pb-16 min-h-screen bg-emerald-50/30">
      <!-- Header -->
      <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-emerald-950 mb-4">Tajweed Rules Guide</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          A comprehensive overview of the rules for reciting the Holy Quran correctly.
        </p>
      </section>

      <!-- Content -->
      <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        <!-- Introduction -->
        <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 p-8 mb-8">
          <h2 class="text-2xl font-bold text-emerald-900 mb-4">Introduction to Tajweed</h2>
          <p class="text-gray-600 mb-4 leading-relaxed">
            The word "Tajweed" linguistically means "proficiency" or "doing something well." In the context of the recitation of the Quran, Tajweed refers to a set of rules governing the way in which the words of the Quran should be pronounced during its recitation.
          </p>
          <p class="text-gray-600 leading-relaxed">
            The purpose of Tajweed is to make the reciter proficient in reciting the Quran, observing the correct pronunciation of every letter with the rulings and characteristics which apply to it, without any exaggeration or deficiency.
          </p>
        </div>

        <!-- Rules Categories -->
        <div class="space-y-6">
          
          <!-- Category 1 -->
          <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 p-8">
            <h3 class="text-xl font-bold text-emerald-900 mb-4 flex items-center">
              <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3 text-sm">1</span>
              Makharij al-Huruf (Articulation Points)
            </h3>
            <p class="text-gray-600 mb-4">
              Makharij refers to the specific points of articulation in the mouth, throat, or lips from which an Arabic letter originates. There are 5 main areas containing 17 specific articulation points.
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Al-Jawf (The empty space in the mouth and throat)</li>
              <li>Al-Halq (The throat)</li>
              <li>Al-Lisan (The tongue)</li>
              <li>Ash-Shafatain (The two lips)</li>
              <li>Al-Khaishum (The nasal cavity)</li>
            </ul>
          </div>

          <!-- Category 2 -->
          <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 p-8">
            <h3 class="text-xl font-bold text-emerald-900 mb-4 flex items-center">
              <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3 text-sm">2</span>
              Rules of Noon Sakinah & Tanween
            </h3>
            <p class="text-gray-600 mb-4">
              These rules apply when a Noon with no vowel (Sakinah) or a Tanween (double vowel) is followed by certain letters.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div class="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h4 class="font-bold text-emerald-800 mb-1">Izhar (Clear)</h4>
                <p class="text-sm text-gray-600">Pronouncing the Noon clearly without extra nasalization.</p>
              </div>
              <div class="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h4 class="font-bold text-emerald-800 mb-1">Idgham (Merging)</h4>
                <p class="text-sm text-gray-600">Merging the Noon into the following letter.</p>
              </div>
              <div class="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h4 class="font-bold text-emerald-800 mb-1">Iqlab (Conversion)</h4>
                <p class="text-sm text-gray-600">Changing the Noon into a Meem.</p>
              </div>
              <div class="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h4 class="font-bold text-emerald-800 mb-1">Ikhfa (Hiding)</h4>
                <p class="text-sm text-gray-600">Hiding the Noon with a nasal sound (Ghunnah).</p>
              </div>
            </div>
          </div>

          <!-- Category 3 -->
          <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 p-8">
            <h3 class="text-xl font-bold text-emerald-900 mb-4 flex items-center">
              <span class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3 text-sm">3</span>
              Rules of Madd (Prolongation)
            </h3>
            <p class="text-gray-600 mb-4">
              Madd means to prolong the sound of a vowel. The basic letters of Madd are Alif, Waw, and Yaa.
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Madd Asli (Natural Prolongation) - 2 counts</li>
              <li>Madd Muttasil (Attached Prolongation) - 4 or 5 counts</li>
              <li>Madd Munfasil (Detached Prolongation) - 4 or 5 counts</li>
              <li>Madd Lazim (Compulsory Prolongation) - 6 counts</li>
            </ul>
          </div>

        </div>

        <!-- CTA -->
        <div class="mt-12 text-center bg-emerald-900 rounded-2xl p-8 text-white">
          <h3 class="text-2xl font-bold mb-4">Want to master these rules practically?</h3>
          <p class="text-emerald-200 mb-6">Reading about Tajweed is the first step, but practicing with a qualified teacher is essential for mastery.</p>
          <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20book%20a%20free%20trial%20class" target="_blank" rel="noopener noreferrer" class="inline-block px-8 py-3 bg-white text-emerald-900 font-bold rounded-full hover:bg-emerald-50 transition-colors">
            Book a Free Trial Class
          </a>
        </div>

      </section>
    </div>
  `
})
export class TajweedRulesComponent {}
