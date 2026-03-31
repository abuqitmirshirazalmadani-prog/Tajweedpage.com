import { Component, ElementRef, ViewChild, OnDestroy, afterNextRender, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  template: `
    <div class="min-h-screen bg-emerald-50/30">
      <!-- Hero Section with Parallax -->
      <section class="relative h-screen overflow-hidden flex items-center justify-center">
        <!-- Parallax Background Elements -->
        <div #parallaxBg class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-b from-emerald-900/90 to-emerald-950/95 z-10"></div>
          <!-- Abstract Quran Pages / Islamic Geometry Background -->
          <div class="absolute inset-0 opacity-20" style="background-image: url('https://picsum.photos/seed/islamic/1920/1080'); background-size: cover; background-position: center;"></div>
          
          <!-- Floating Elements (Quran Pages representation) -->
          <div #page1 class="absolute top-1/4 left-1/4 w-64 h-80 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg transform -rotate-12 shadow-2xl"></div>
          <div #page2 class="absolute top-1/3 right-1/4 w-72 h-96 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg transform rotate-6 shadow-2xl"></div>
        </div>

        <!-- Hero Content -->
        <div class="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-800/50 border border-emerald-500/30 text-emerald-200 mb-8 backdrop-blur-sm">
            <span class="flex h-2 w-2 rounded-full bg-emerald-400"></span>
            <span class="text-sm font-medium">Enrollment Open for 2026</span>
          </div>
          
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Master the <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">Holy Quran</span><br/>
            with Perfect Tajweed
          </h1>
          
          <p class="text-xl md:text-2xl text-emerald-100/90 mb-10 max-w-3xl mx-auto font-light">
            Join thousands of students worldwide learning from certified Ijazah-holding teachers through our interactive 3D learning platform.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20start%20a%20free%20trial%20class" target="_blank" rel="noopener noreferrer" class="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-full text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.4)] w-full sm:w-auto text-center">
              Start Free Trial Class
            </a>
            <a routerLink="/courses" class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-full text-lg transition-all backdrop-blur-sm w-full sm:w-auto text-center">
              Explore Courses
            </a>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <mat-icon class="text-emerald-300 w-8 h-8 text-3xl">keyboard_arrow_down</mat-icon>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-24 bg-white relative z-30 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div #featuresHeader class="text-center mb-16 opacity-0 translate-y-8">
            <h2 class="text-3xl md:text-4xl font-bold text-emerald-950 mb-4">Why Choose Tajweedpage?</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">Experience a revolutionary approach to Quranic education combining traditional authenticity with modern technology.</p>
          </div>

          <div #featuresGrid class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Feature 1 -->
            <div class="feature-card opacity-0 translate-y-8 p-8 rounded-2xl bg-emerald-50 border border-emerald-100 hover:shadow-xl transition-shadow duration-300 group">
              <div class="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <mat-icon class="text-white">verified</mat-icon>
              </div>
              <h3 class="text-xl font-bold text-emerald-900 mb-3">Certified Teachers</h3>
              <p class="text-gray-600 leading-relaxed">Learn directly from expert instructors holding authentic Ijazah with a continuous chain of narration to the Prophet صلى الله عليه وسلم.</p>
            </div>

            <!-- Feature 2 -->
            <div class="feature-card opacity-0 translate-y-8 p-8 rounded-2xl bg-emerald-50 border border-emerald-100 hover:shadow-xl transition-shadow duration-300 group">
              <div class="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <mat-icon class="text-white">3d_rotation</mat-icon>
              </div>
              <h3 class="text-xl font-bold text-emerald-900 mb-3">Interactive 3D Learning</h3>
              <p class="text-gray-600 leading-relaxed">Visualize Makharij (articulation points) with our proprietary 3D anatomical models making complex rules easy to grasp.</p>
            </div>

            <!-- Feature 3 -->
            <div class="feature-card opacity-0 translate-y-8 p-8 rounded-2xl bg-emerald-50 border border-emerald-100 hover:shadow-xl transition-shadow duration-300 group">
              <div class="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <mat-icon class="text-white">schedule</mat-icon>
              </div>
              <h3 class="text-xl font-bold text-emerald-900 mb-3">Flexible Scheduling</h3>
              <p class="text-gray-600 leading-relaxed">Book classes 24/7 according to your time zone. Our global network of teachers ensures availability when you need it.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Courses -->
      <section class="py-24 bg-emerald-950 text-white relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-900/50 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-900/50 blur-3xl"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="flex flex-col md:flex-row justify-between items-end mb-12">
            <div class="max-w-2xl">
              <h2 class="text-3xl md:text-4xl font-bold mb-4">Comprehensive Learning Paths</h2>
              <p class="text-emerald-200 text-lg">From absolute beginners to advanced certification, we have a structured program for every level.</p>
            </div>
            <a routerLink="/courses" class="hidden md:inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold group">
              View All Courses
              <mat-icon class="ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</mat-icon>
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Course Card 1 -->
            <div class="bg-emerald-900/40 border border-emerald-800/50 rounded-2xl overflow-hidden hover:bg-emerald-800/40 transition-colors group">
              <div class="h-48 overflow-hidden relative">
                <img src="https://images.pexels.com/photos/34355095/pexels-photo-34355095.jpeg" alt="Noorani Qaida" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerpolicy="no-referrer" />
                <div class="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent"></div>
                <div class="absolute bottom-4 left-4 bg-emerald-500 text-xs font-bold px-2 py-1 rounded text-emerald-950 uppercase tracking-wider">Beginner</div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">Noorani Qaida</h3>
                <p class="text-emerald-200/80 text-sm mb-4 line-clamp-2">The foundational course for reading Arabic letters and basic pronunciation rules.</p>
                <a routerLink="/courses" class="text-emerald-400 font-medium text-sm hover:text-emerald-300 flex items-center">
                  Learn more <mat-icon class="w-4 h-4 ml-1 text-base">chevron_right</mat-icon>
                </a>
              </div>
            </div>

            <!-- Course Card 2 -->
            <div class="bg-emerald-900/40 border border-emerald-800/50 rounded-2xl overflow-hidden hover:bg-emerald-800/40 transition-colors group">
              <div class="h-48 overflow-hidden relative">
                <img src="https://images.pexels.com/photos/921296/pexels-photo-921296.jpeg" alt="Tajweed Rules" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerpolicy="no-referrer" />
                <div class="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent"></div>
                <div class="absolute bottom-4 left-4 bg-teal-500 text-xs font-bold px-2 py-1 rounded text-teal-950 uppercase tracking-wider">Intermediate</div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">Tajweed Rules</h3>
                <p class="text-emerald-200/80 text-sm mb-4 line-clamp-2">Master the theoretical and practical rules of reciting the Quran beautifully.</p>
                <a routerLink="/courses" class="text-emerald-400 font-medium text-sm hover:text-emerald-300 flex items-center">
                  Learn more <mat-icon class="w-4 h-4 ml-1 text-base">chevron_right</mat-icon>
                </a>
              </div>
            </div>

            <!-- Course Card 3 -->
            <div class="bg-emerald-900/40 border border-emerald-800/50 rounded-2xl overflow-hidden hover:bg-emerald-800/40 transition-colors group">
              <div class="h-48 overflow-hidden relative">
                <img src="https://images.pexels.com/photos/35398672/pexels-photo-35398672.jpeg" alt="Hifz Program" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerpolicy="no-referrer" />
                <div class="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent"></div>
                <div class="absolute bottom-4 left-4 bg-blue-500 text-xs font-bold px-2 py-1 rounded text-blue-950 uppercase tracking-wider">All Levels</div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">Quran Memorization</h3>
                <p class="text-emerald-200/80 text-sm mb-4 line-clamp-2">Structured Hifz program with proven retention techniques and regular revision.</p>
                <a routerLink="/courses" class="text-emerald-400 font-medium text-sm hover:text-emerald-300 flex items-center">
                  Learn more <mat-icon class="w-4 h-4 ml-1 text-base">chevron_right</mat-icon>
                </a>
              </div>
            </div>

            <!-- Course Card 4 -->
            <div class="bg-emerald-900/40 border border-emerald-800/50 rounded-2xl overflow-hidden hover:bg-emerald-800/40 transition-colors group">
              <div class="h-48 overflow-hidden relative">
                <img src="https://images.pexels.com/photos/36211927/pexels-photo-36211927.jpeg" alt="Ijazah" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerpolicy="no-referrer" />
                <div class="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent"></div>
                <div class="absolute bottom-4 left-4 bg-amber-500 text-xs font-bold px-2 py-1 rounded text-amber-950 uppercase tracking-wider">Advanced</div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">Ijazah Certification</h3>
                <p class="text-emerald-200/80 text-sm mb-4 line-clamp-2">Earn your formal certification with a continuous chain of narration to the Prophet صلى الله عليه وسلم.</p>
                <a routerLink="/courses" class="text-emerald-400 font-medium text-sm hover:text-emerald-300 flex items-center">
                  Learn more <mat-icon class="w-4 h-4 ml-1 text-base">chevron_right</mat-icon>
                </a>
              </div>
            </div>
          </div>
          
          <div class="mt-8 text-center md:hidden">
            <a routerLink="/courses" class="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold">
              View All Courses
              <mat-icon class="ml-2">arrow_forward</mat-icon>
            </a>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-emerald-600 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10" style="background-image: url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
        <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Ready to perfect your recitation?</h2>
          <p class="text-emerald-100 text-xl mb-10">Join our global community of learners and start your journey with a free 30-minute evaluation class.</p>
          <a href="https://wa.me/923708201211?text=I%20would%20like%20to%20book%20my%20free%20trial%20now" target="_blank" rel="noopener noreferrer" class="inline-block px-10 py-4 bg-white text-emerald-700 font-bold rounded-full text-xl hover:bg-emerald-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Book Your Free Trial Now
          </a>
        </div>
      </section>
    </div>
  `
})
export class HomeComponent implements OnDestroy {
  @ViewChild('parallaxBg') parallaxBg!: ElementRef;
  @ViewChild('page1') page1!: ElementRef;
  @ViewChild('page2') page2!: ElementRef;
  @ViewChild('featuresHeader') featuresHeader!: ElementRef;
  @ViewChild('featuresGrid') featuresGrid!: ElementRef;

  private cleanupFns: VoidFunction[] = [];
  private platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(async () => {
      if (!isPlatformBrowser(this.platformId)) return;
      const { animate, scroll, inView, stagger } = await import('motion');

      // Implement parallax scroll effects using motion
      if (this.parallaxBg && this.page1 && this.page2) {
        
        this.cleanupFns.push(
          scroll(
            animate(this.page1.nativeElement, { y: [0, -150], rotate: [-12, -5] }),
            { target: this.parallaxBg.nativeElement, offset: ["start start", "end start"] }
          )
        );

        this.cleanupFns.push(
          scroll(
            animate(this.page2.nativeElement, { y: [0, -250], rotate: [6, 15] }),
            { target: this.parallaxBg.nativeElement, offset: ["start start", "end start"] }
          )
        );
      }

      // Features Section Animations
      if (this.featuresHeader) {
        inView(this.featuresHeader.nativeElement, (element) => {
          animate(element, { opacity: 1, y: 0 }, { duration: 0.8, ease: "easeOut" });
        });
      }

      if (this.featuresGrid) {
        inView(this.featuresGrid.nativeElement, (element) => {
          const cards = element.querySelectorAll('.feature-card');
          animate(
            cards,
            { opacity: 1, y: 0 },
            { duration: 0.6, delay: stagger(0.2), ease: "easeOut" }
          );
        });
      }
    });
  }

  ngOnDestroy() {
    this.cleanupFns.forEach(fn => fn());
  }
}
