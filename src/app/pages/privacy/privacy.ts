import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  template: `
    <div class="pt-24 pb-16 min-h-screen bg-emerald-50/30">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl shadow-sm border border-emerald-100 p-8 md:p-12">
          <h1 class="text-4xl font-bold text-emerald-950 mb-8">Privacy Policy</h1>
          
          <div class="prose prose-emerald max-w-none text-gray-600">
            <p class="mb-6">Last updated: March 15, 2026</p>
            
            <h2 class="text-2xl font-bold text-emerald-900 mt-8 mb-4">1. Introduction</h2>
            <p class="mb-6">
              Welcome to Tajweedpage.com. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 class="text-2xl font-bold text-emerald-900 mt-8 mb-4">2. Data We Collect</h2>
            <p class="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h2 class="text-2xl font-bold text-emerald-900 mt-8 mb-4">3. How We Use Your Data</h2>
            <p class="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing online classes).</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2 class="text-2xl font-bold text-emerald-900 mt-8 mb-4">4. Data Security</h2>
            <p class="mb-6">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h2 class="text-2xl font-bold text-emerald-900 mt-8 mb-4">5. Your Legal Rights</h2>
            <p class="mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
            </ul>

            <h2 class="text-2xl font-bold text-emerald-900 mt-8 mb-4">6. Contact Us</h2>
            <p class="mb-6">
              If you have any questions about this privacy policy or our privacy practices, please contact us at <a href="mailto:tajweedpage@outlook.com" class="text-emerald-600 hover:underline">tajweedpage&#64;outlook.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PrivacyComponent {}
