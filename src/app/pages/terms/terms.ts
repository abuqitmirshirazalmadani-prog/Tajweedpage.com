import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  standalone: true,
  template: `
    <div class="pt-24 pb-16 min-h-screen bg-emerald-50/30">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl shadow-sm border border-emerald-100 p-8 md:p-12">
          <h1 class="text-4xl font-bold text-emerald-950 mb-8">Terms and Conditions</h1>
          
          <div class="prose prose-emerald max-w-none text-gray-600">
            <p class="mb-6">Last updated: March 15, 2026</p>
            
            <h2 class="text-2xl font-bold text-emerald-900 mt-8 mb-4">1. Agreement to Terms</h2>
            <p class="mb-6">
              By accessing our website at Tajweedpage.com, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2 class="text-2xl font-bold text-emerald-900 mt-8 mb-4">2. Use License</h2>
            <p class="mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Tajweedpage.com's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on Tajweedpage.com's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>

            <h2 class="text-2xl font-bold text-emerald-900 mt-8 mb-4">3. Class Policies</h2>
            <p class="mb-4">When enrolling in our courses, you agree to the following:</p>
            <ul class="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Punctuality:</strong> Students are expected to be on time for their scheduled classes.</li>
              <li><strong>Cancellations:</strong> Classes must be canceled or rescheduled at least 24 hours in advance.</li>
              <li><strong>Payments:</strong> Tuition fees must be paid in advance according to the selected billing cycle.</li>
              <li><strong>Conduct:</strong> Respectful behavior towards teachers and staff is mandatory.</li>
            </ul>

            <h2 class="text-2xl font-bold text-emerald-900 mt-8 mb-4">4. Disclaimer</h2>
            <p class="mb-6">
              The materials on Tajweedpage.com's website are provided on an 'as is' basis. Tajweedpage.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 class="text-2xl font-bold text-emerald-900 mt-8 mb-4">5. Limitations</h2>
            <p class="mb-6">
              In no event shall Tajweedpage.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Tajweedpage.com's website, even if Tajweedpage.com or a Tajweedpage.com authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 class="text-2xl font-bold text-emerald-900 mt-8 mb-4">6. Contact Information</h2>
            <p class="mb-6">
              If you have any questions about these Terms, please contact us at <a href="mailto:tajweedpage@outlook.com" class="text-emerald-600 hover:underline">tajweedpage&#64;outlook.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class TermsComponent {}
