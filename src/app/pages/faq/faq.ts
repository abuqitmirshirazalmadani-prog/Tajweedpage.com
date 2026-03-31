import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="pt-24 pb-16 min-h-screen bg-emerald-50/30">
      <!-- Header -->
      <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-emerald-950 mb-4">Frequently Asked Questions</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our courses, teachers, and learning platform.
        </p>
      </section>

      <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div class="space-y-6">
          
          <!-- FAQ Item 1 -->
          <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6">
            <h3 class="text-xl font-bold text-emerald-900 mb-3 flex items-center">
              <mat-icon class="text-emerald-500 mr-2">help_outline</mat-icon>
              How do the online classes work?
            </h3>
            <p class="text-gray-600 ml-8">
              Our classes are conducted live via video conferencing (like Zoom or Google Meet). You will have a 1-on-1 session with your teacher, allowing for personalized attention, screen sharing for learning materials, and real-time feedback on your recitation.
            </p>
          </div>

          <!-- FAQ Item 2 -->
          <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6">
            <h3 class="text-xl font-bold text-emerald-900 mb-3 flex items-center">
              <mat-icon class="text-emerald-500 mr-2">help_outline</mat-icon>
              Do I need any prior knowledge of Arabic?
            </h3>
            <p class="text-gray-600 ml-8">
              Not at all! We have courses for absolute beginners starting with the Noorani Qaida, which teaches the Arabic alphabet and basic pronunciation. We will guide you step-by-step until you can read the Quran fluently.
            </p>
          </div>

          <!-- FAQ Item 3 -->
          <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6">
            <h3 class="text-xl font-bold text-emerald-900 mb-3 flex items-center">
              <mat-icon class="text-emerald-500 mr-2">help_outline</mat-icon>
              Are the teachers qualified?
            </h3>
            <p class="text-gray-600 ml-8">
              Yes, all our teachers undergo a rigorous selection process. They are highly qualified, many holding Ijazah (certification) in Quranic recitation and memorization. They also have extensive experience in teaching students of all ages online.
            </p>
          </div>

          <!-- FAQ Item 4 -->
          <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6">
            <h3 class="text-xl font-bold text-emerald-900 mb-3 flex items-center">
              <mat-icon class="text-emerald-500 mr-2">help_outline</mat-icon>
              Can I choose my class schedule?
            </h3>
            <p class="text-gray-600 ml-8">
              Absolutely. We offer flexible scheduling to accommodate students from different time zones. During your free trial or enrollment, you can discuss and set a schedule that works best for you.
            </p>
          </div>

          <!-- FAQ Item 5 -->
          <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6">
            <h3 class="text-xl font-bold text-emerald-900 mb-3 flex items-center">
              <mat-icon class="text-emerald-500 mr-2">help_outline</mat-icon>
              What happens if I miss a class?
            </h3>
            <p class="text-gray-600 ml-8">
              We understand that unexpected things happen. If you need to cancel or reschedule, please inform your teacher at least 24 hours in advance, and we will arrange a makeup class.
            </p>
          </div>

          <!-- FAQ Item 6 -->
          <div class="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6">
            <h3 class="text-xl font-bold text-emerald-900 mb-3 flex items-center">
              <mat-icon class="text-emerald-500 mr-2">help_outline</mat-icon>
              Is there a discount for multiple family members?
            </h3>
            <p class="text-gray-600 ml-8">
              Yes, we offer family discounts. If you enroll two or more members of your family, please contact our support team to learn about our special family packages.
            </p>
          </div>

        </div>
      </section>
    </div>
  `
})
export class FaqComponent {}
