import { Component, ElementRef, ViewChild, afterNextRender, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  template: `
    <div class="pt-24 pb-16 min-h-screen bg-emerald-50/30">
      <!-- Hero Section -->
      <section #heroSection class="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center opacity-0 translate-y-8">
        <h1 class="text-4xl md:text-6xl font-bold text-emerald-950 mb-6">About Tajweedpage</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are dedicated to preserving the authentic recitation of the Holy Quran by connecting students worldwide with certified, Ijazah-holding teachers through our innovative online platform.
        </p>
      </section>

      <!-- Mission & Vision -->
      <section class="py-16 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div #missionText class="opacity-0 -translate-x-8">
              <h2 class="text-3xl font-bold text-emerald-900 mb-6">Our Mission</h2>
              <p class="text-gray-600 text-lg mb-8 leading-relaxed">
                To make high-quality, authentic Quranic education accessible to every Muslim, regardless of their location. We strive to combine traditional teaching methods with modern technology to create an engaging and effective learning experience.
              </p>
              
              <h2 class="text-3xl font-bold text-emerald-900 mb-6">Our Vision</h2>
              <p class="text-gray-600 text-lg leading-relaxed">
                To become the global standard for online Quran education, fostering a generation of Muslims who read, understand, and live by the teachings of the Holy Quran with perfect Tajweed.
              </p>
            </div>
            <div #missionImage class="relative h-96 rounded-2xl overflow-hidden shadow-2xl opacity-0 translate-x-8">
              <img src="https://images.pexels.com/photos/23533790/pexels-photo-23533790.jpeg" alt="Students studying Quran" class="w-full h-full object-cover" referrerpolicy="no-referrer" />
              <div class="absolute inset-0 bg-emerald-900/20"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="py-20 bg-emerald-950 text-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div #whyChooseHeader class="text-center mb-16 opacity-0 translate-y-8">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Why Choose Tajweedpage?</h2>
            <p class="text-emerald-200 text-lg max-w-2xl mx-auto">We offer a unique blend of traditional authenticity and modern convenience.</p>
          </div>

          <div #whyChooseGrid class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="why-card opacity-0 translate-y-8 bg-emerald-900/50 p-6 rounded-xl border border-emerald-800">
              <div class="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <mat-icon class="text-white">verified_user</mat-icon>
              </div>
              <h3 class="text-xl font-bold mb-2">Certified Teachers</h3>
              <p class="text-emerald-200/80 text-sm">All our instructors hold authentic Ijazah with a continuous chain of narration.</p>
            </div>

            <div class="why-card opacity-0 translate-y-8 bg-emerald-900/50 p-6 rounded-xl border border-emerald-800">
              <div class="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <mat-icon class="text-white">menu_book</mat-icon>
              </div>
              <h3 class="text-xl font-bold mb-2">Structured Curriculum</h3>
              <p class="text-emerald-200/80 text-sm">Carefully designed courses that take you from beginner to advanced levels systematically.</p>
            </div>

            <div class="why-card opacity-0 translate-y-8 bg-emerald-900/50 p-6 rounded-xl border border-emerald-800">
              <div class="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <mat-icon class="text-white">video_camera_front</mat-icon>
              </div>
              <h3 class="text-xl font-bold mb-2">1-on-1 Classes</h3>
              <p class="text-emerald-200/80 text-sm">Personalized attention ensures you learn at your own pace and correct mistakes immediately.</p>
            </div>

            <div class="why-card opacity-0 translate-y-8 bg-emerald-900/50 p-6 rounded-xl border border-emerald-800">
              <div class="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <mat-icon class="text-white">schedule</mat-icon>
              </div>
              <h3 class="text-xl font-bold mb-2">Flexible Timing</h3>
              <p class="text-emerald-200/80 text-sm">Schedule classes at your convenience, 24/7, fitting seamlessly into your busy life.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-16 text-center">
        <h2 class="text-3xl font-bold text-emerald-900 mb-6">Ready to start your journey?</h2>
        <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20book%20a%20free%20trial%20class" target="_blank" rel="noopener noreferrer" class="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full text-lg transition-colors shadow-lg">
          Book a Free Trial Class
        </a>
      </section>
    </div>
  `
})
export class AboutComponent {
  @ViewChild('heroSection') heroSection!: ElementRef;
  @ViewChild('missionText') missionText!: ElementRef;
  @ViewChild('missionImage') missionImage!: ElementRef;
  @ViewChild('whyChooseHeader') whyChooseHeader!: ElementRef;
  @ViewChild('whyChooseGrid') whyChooseGrid!: ElementRef;

  private platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(async () => {
      if (!isPlatformBrowser(this.platformId)) return;
      const { animate, inView, stagger } = await import('motion');

      if (this.heroSection) {
        animate(this.heroSection.nativeElement, { opacity: 1, y: 0 }, { duration: 0.8, ease: "easeOut" });
      }

      if (this.missionText) {
        inView(this.missionText.nativeElement, (element) => {
          animate(element, { opacity: 1, x: 0 }, { duration: 0.8, ease: "easeOut" });
        });
      }

      if (this.missionImage) {
        inView(this.missionImage.nativeElement, (element) => {
          animate(element, { opacity: 1, x: 0 }, { duration: 0.8, ease: "easeOut", delay: 0.2 });
        });
      }

      if (this.whyChooseHeader) {
        inView(this.whyChooseHeader.nativeElement, (element) => {
          animate(element, { opacity: 1, y: 0 }, { duration: 0.8, ease: "easeOut" });
        });
      }

      if (this.whyChooseGrid) {
        inView(this.whyChooseGrid.nativeElement, (element) => {
          const cards = element.querySelectorAll('.why-card');
          animate(
            cards,
            { opacity: 1, y: 0 },
            { duration: 0.6, delay: stagger(0.15), ease: "easeOut" }
          );
        });
      }
    });
  }
}

