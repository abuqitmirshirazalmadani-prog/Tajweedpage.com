import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  template: `
    <div class="pt-24 pb-16 min-h-screen bg-emerald-50/30">
      <!-- Header -->
      <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-emerald-950 mb-4">Simple, Transparent Pricing</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose a plan that fits your schedule and learning goals. No hidden fees, cancel anytime.
        </p>
      </section>

      <!-- Pricing Cards -->
      <section class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          <!-- Basic Plan -->
          <div class="bg-white rounded-3xl shadow-sm border border-emerald-100 p-8 hover:shadow-xl transition-shadow flex flex-col">
            <h3 class="text-2xl font-bold text-emerald-900 mb-2">Basic</h3>
            <p class="text-gray-500 mb-6">Perfect for beginners maintaining a steady pace.</p>
            <div class="mb-6">
              <span class="text-4xl font-bold text-emerald-950">$45</span>
              <span class="text-gray-500">/month</span>
            </div>
            <ul class="space-y-4 mb-8 flex-1">
              <li class="flex items-start">
                <mat-icon class="text-emerald-500 mr-3 mt-0.5 text-[20px] w-[20px] h-[20px]">check_circle</mat-icon>
                <span class="text-gray-600"><strong>2 Classes</strong> per week</span>
              </li>
              <li class="flex items-start">
                <mat-icon class="text-emerald-500 mr-3 mt-0.5 text-[20px] w-[20px] h-[20px]">schedule</mat-icon>
                <span class="text-gray-600">30 minutes per class</span>
              </li>
              <li class="flex items-start">
                <mat-icon class="text-emerald-500 mr-3 mt-0.5 text-[20px] w-[20px] h-[20px]">person</mat-icon>
                <span class="text-gray-600">1-on-1 Live Sessions</span>
              </li>
              <li class="flex items-start">
                <mat-icon class="text-emerald-500 mr-3 mt-0.5 text-[20px] w-[20px] h-[20px]">menu_book</mat-icon>
                <span class="text-gray-600">Access to Learning Materials</span>
              </li>
            </ul>
            <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20start%20a%20free%20trial%20for%20the%20Basic%20plan" target="_blank" rel="noopener noreferrer" class="block w-full text-center py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-colors">
              Start Free Trial
            </a>
          </div>

          <!-- Standard Plan (Popular) -->
          <div class="bg-emerald-900 rounded-3xl shadow-xl border border-emerald-800 p-8 transform md:-translate-y-4 relative flex flex-col">
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-400 text-emerald-950 font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider">
              Most Popular
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">Standard</h3>
            <p class="text-emerald-200 mb-6">Ideal for consistent progress and Hifz students.</p>
            <div class="mb-6">
              <span class="text-4xl font-bold text-white">$85</span>
              <span class="text-emerald-200">/month</span>
            </div>
            <ul class="space-y-4 mb-8 flex-1">
              <li class="flex items-start">
                <mat-icon class="text-emerald-400 mr-3 mt-0.5 text-[20px] w-[20px] h-[20px]">check_circle</mat-icon>
                <span class="text-emerald-50"><strong>4 Classes</strong> per week</span>
              </li>
              <li class="flex items-start">
                <mat-icon class="text-emerald-400 mr-3 mt-0.5 text-[20px] w-[20px] h-[20px]">schedule</mat-icon>
                <span class="text-emerald-50">30 minutes per class</span>
              </li>
              <li class="flex items-start">
                <mat-icon class="text-emerald-400 mr-3 mt-0.5 text-[20px] w-[20px] h-[20px]">person</mat-icon>
                <span class="text-emerald-50">1-on-1 Live Sessions</span>
              </li>
              <li class="flex items-start">
                <mat-icon class="text-emerald-400 mr-3 mt-0.5 text-[20px] w-[20px] h-[20px]">insights</mat-icon>
                <span class="text-emerald-50">Monthly Progress Reports</span>
              </li>
              <li class="flex items-start">
                <mat-icon class="text-emerald-400 mr-3 mt-0.5 text-[20px] w-[20px] h-[20px]">support_agent</mat-icon>
                <span class="text-emerald-50">Priority Support</span>
              </li>
            </ul>
            <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20start%20a%20free%20trial%20for%20the%20Standard%20plan" target="_blank" rel="noopener noreferrer" class="block w-full text-center py-3 bg-emerald-500 text-emerald-950 font-bold rounded-xl hover:bg-emerald-400 transition-colors">
              Start Free Trial
            </a>
          </div>

          <!-- Intensive Plan -->
          <div class="bg-white rounded-3xl shadow-sm border border-emerald-100 p-8 hover:shadow-xl transition-shadow flex flex-col">
            <h3 class="text-2xl font-bold text-emerald-900 mb-2">Intensive</h3>
            <p class="text-gray-500 mb-6">For serious students aiming for Ijazah certification.</p>
            <div class="mb-6">
              <span class="text-4xl font-bold text-emerald-950">$120</span>
              <span class="text-gray-500">/month</span>
            </div>
            <ul class="space-y-4 mb-8 flex-1">
              <li class="flex items-start">
                <mat-icon class="text-emerald-500 mr-3 mt-0.5 text-[20px] w-[20px] h-[20px]">check_circle</mat-icon>
                <span class="text-gray-600"><strong>5 Classes</strong> per week</span>
              </li>
              <li class="flex items-start">
                <mat-icon class="text-emerald-500 mr-3 mt-0.5 text-[20px] w-[20px] h-[20px]">schedule</mat-icon>
                <span class="text-gray-600">45 minutes per class</span>
              </li>
              <li class="flex items-start">
                <mat-icon class="text-emerald-500 mr-3 mt-0.5 text-[20px] w-[20px] h-[20px]">school</mat-icon>
                <span class="text-gray-600">Senior Ijazah Instructors</span>
              </li>
              <li class="flex items-start">
                <mat-icon class="text-emerald-500 mr-3 mt-0.5 text-[20px] w-[20px] h-[20px]">workspace_premium</mat-icon>
                <span class="text-gray-600">Certification Path</span>
              </li>
            </ul>
            <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20start%20a%20free%20trial%20for%20the%20Intensive%20plan" target="_blank" rel="noopener noreferrer" class="block w-full text-center py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-colors">
              Start Free Trial
            </a>
          </div>

        </div>
      </section>
    </div>
  `
})
export class PricingComponent {}
