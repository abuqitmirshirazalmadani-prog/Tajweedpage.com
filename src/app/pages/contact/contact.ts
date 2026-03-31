import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="pt-24 pb-16 min-h-screen bg-emerald-50/30">
      <!-- Header -->
      <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-emerald-950 mb-4">Contact Us</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions? We're here to help. Reach out to our support team.
        </p>
      </section>

      <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <!-- Contact Information -->
          <div>
            <h2 class="text-2xl font-bold text-emerald-900 mb-6">Get in Touch</h2>
            <div class="space-y-8">
              
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-emerald-100 rounded-full p-3 flex items-center justify-center">
                  <mat-icon class="text-emerald-600">email</mat-icon>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Email</h3>
                  <p class="mt-1 text-emerald-600 hover:text-emerald-700 font-medium"><a href="mailto:tajweedpage@outlook.com">tajweedpage&#64;outlook.com</a></p>
                  <p class="mt-1 text-sm text-gray-500">We aim to respond within 24 hours.</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 bg-emerald-100 rounded-full p-3 flex items-center justify-center">
                  <mat-icon class="text-emerald-600">phone</mat-icon>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Phone / WhatsApp</h3>
                  <p class="mt-1 text-emerald-600 hover:text-emerald-700 font-medium"><a href="https://wa.me/923708201211" target="_blank" rel="noopener noreferrer">+923708201211</a></p>
                  <p class="mt-1 text-sm text-gray-500">Available Mon-Fri, 9am-5pm EST.</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 bg-emerald-100 rounded-full p-3 flex items-center justify-center">
                  <mat-icon class="text-emerald-600">location_on</mat-icon>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Office</h3>
                  <p class="mt-1 text-gray-600">Abu Qitmir Mohammad Shiraz Al-Madani House 15 Street 8 Shah Khalid Colony Area 37/A Landhi 3 Karachi 30 Post Box 75160</p>
                </div>
              </div>

            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white rounded-3xl shadow-xl border border-emerald-100 p-8">
            <form class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input type="text" id="name" name="name" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder="John Doe" required>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" name="email" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder="john@example.com" required>
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" id="subject" name="subject" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder="How can we help?" required>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" name="message" rows="4" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" placeholder="Your message here..." required></textarea>
              </div>

              <div class="flex flex-col sm:flex-row gap-4">
                <a href="mailto:tajweedpage@outlook.com?subject=Contact%20Form%20Submission" class="flex-1 block text-center py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Email Us
                </a>
                <a href="https://wa.me/923708201211?text=I%20have%20an%20inquiry" target="_blank" rel="noopener noreferrer" class="flex-1 block text-center py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  WhatsApp Us
                </a>
              </div>
            </form>
          </div>

        </div>
      </section>
    </div>
  `
})
export class ContactComponent {}
