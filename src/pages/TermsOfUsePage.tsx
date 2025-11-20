import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface TermsOfUsePageProps {
  onBookAuditClick: () => void;
}

export default function TermsOfUsePage({ onBookAuditClick }: TermsOfUsePageProps) {
  useEffect(() => {
    document.title = "Terms of Use | ClaveSolutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "ClaveSolutions Terms of Use: The rules for using ClaveSolutions.ai and our services."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header onBookAuditClick={onBookAuditClick} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:72px_72px] z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl text-white mb-4">
            Terms of Use
          </h1>
          
          <p className="text-lg text-slate-400 mb-2">
            The rules for using ClaveSolutions.ai and our services.
          </p>
          
          <p className="text-sm text-slate-500">
            Last updated: January 19, 2025
          </p>
        </div>
      </section>

      {/* Legal Content */}
      <section className="relative py-12 px-4 sm:px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 sm:p-12">
            
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">1. Agreement to Terms</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  These Terms of Use ("Terms") govern your access to and use of <a href="https://clavesolutions.ai" className="text-cyan-400 hover:text-cyan-300 underline">https://clavesolutions.ai</a> (the "Site") and any related content, tools, and services we make available through the Site, including the ROI / Operational Friction Calculator and other resources (collectively, the "Services").
                </p>
                <p>
                  By accessing or using the Site or Services, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Site or Services.
                </p>
                <p>
                  "ClaveSolutions," "we," "us," and "our" refer to ClaveSolutions.ai.
                </p>
                <p>
                  Please also review our Privacy Policy, which describes how we collect, use, and share information about you. Your use of the Site and Services is subject to both these Terms and our Privacy Policy.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">2. Relationship to Other Agreements</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  The information and tools provided through the Site are for general informational purposes and early-stage discussions only. Any engagement for paid integration, automation, or consulting services will be governed by a separate written agreement between you (or your company) and ClaveSolutions (for example, a master services agreement and statement(s) of work).
                </p>
                <p>
                  If there is a conflict between these Terms and the terms of a signed services agreement between you and ClaveSolutions, the signed services agreement will control for the subject matter of that agreement.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">3. Who May Use the Site and Services</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  You may use the Site and Services only if:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are at least 18 years old (or the age of majority in your jurisdiction), and</li>
                  <li>You have the authority to agree to these Terms on your own behalf or on behalf of your company or organization.</li>
                </ul>
                <p>
                  If you use the Site or Services on behalf of a company or other entity, you represent and warrant that you are authorized to accept these Terms on its behalf, and "you" and "your" will refer to that entity.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">4. Our Services and Content</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  The Site provides information about our integration, automation, and consulting services, which may include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Integration Audits</li>
                  <li>Workflow design and automation</li>
                  <li>Custom integrations between business systems (e.g., CRMs, ERPs, practice management, accounting software)</li>
                  <li>The ROI / Operational Friction Calculator and other tools</li>
                  <li>Educational content, guides, and resources</li>
                </ul>
                <p>
                  The information and tools on the Site are for general informational and planning purposes only and do not, by themselves, create a professional services relationship. Any commitment to deliver services, timelines, or results must be set out in a separate written agreement.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">5. No Legal, Tax, or Financial Advice</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  We are not a law firm, accounting firm, or financial advisory firm.
                </p>
                <p>
                  Nothing on the Site or in communications provided through the Site should be construed as:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>legal advice,</li>
                  <li>tax advice, or</li>
                  <li>investment/financial advice.</li>
                </ul>
                <p>
                  You are responsible for obtaining independent professional advice as needed. We do not provide warranties or guarantees about the legal, tax, regulatory, or financial consequences of any integration, automation, or configuration you implement.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">6. ROI / Operational Friction Calculator and Estimates</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Our ROI / Operational Friction Calculator and any estimates or projections we provide (including during consultations) are for informational and illustrative purposes only.
                </p>
                <p>
                  By using these tools, you acknowledge and agree that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The outputs are based on assumptions, parameters, and inputs you provide (for example, hours, salaries, and volumes), as well as generalized assumptions that may not reflect your specific environment.</li>
                  <li>The outputs are estimates, not promises or guarantees of any particular cost savings, efficiency gains, revenue increases, or other results.</li>
                  <li>Actual results may differ significantly due to factors beyond our control, including your internal processes, adoption, configuration choices, and changes in your business or technology stack.</li>
                  <li>You are solely responsible for decisions you make based on the outputs of the calculator or any other estimates or projections we provide.</li>
                </ul>
                <p>
                  To the fullest extent permitted by law, ClaveSolutions will not be liable for any losses or damages arising from your reliance on calculator outputs or estimates, and any liability that might arise will be subject to the limitations in Section 13 (Limitation of Liability).
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">7. Acceptable Use</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  You agree that you will not, and will not permit or encourage anyone else to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Site or Services in any way that violates any applicable law or regulation.</li>
                  <li>Attempt to gain unauthorized access to the Site, any accounts, or any computer systems or networks.</li>
                  <li>Interfere with or disrupt the operation of the Site or the servers or networks used to make it available, including by attempting to overload, flood, or disrupt systems.</li>
                  <li>Use any automated system (including robots, spiders, or scrapers) to access the Site or extract data, except as expressly permitted in writing by us.</li>
                  <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of any portion of the Site or Services, except to the extent such restrictions are prohibited by applicable law.</li>
                  <li>Upload, transmit, or otherwise make available any viruses, malware, or other harmful code.</li>
                  <li>Use the Site or Services to transmit unsolicited or unauthorized advertising or promotional material ("spam").</li>
                  <li>Use the Site or Services to upload, transmit, or otherwise make available any content that is unlawful, defamatory, infringing, or that you do not have the right to share.</li>
                  <li>Attempt to bypass or circumvent any security or access controls, rate limits, or other technical protections.</li>
                </ul>
                <p>
                  We reserve the right to suspend or terminate access to the Site or Services for any user who violates these Terms or whose use poses a risk to us, our clients, or others.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">8. Accounts (If Applicable)</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  If we later provide user accounts, portals, or similar features:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</li>
                  <li>You agree to notify us promptly of any unauthorized use of your account or password or any other breach of security.</li>
                  <li>We reserve the right to suspend or terminate any account that we believe is being misused or compromised.</li>
                </ul>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">9. User Content and Feedback</h2>
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <div>
                  <h3 className="text-xl text-white mb-3">User content</h3>
                  <p>
                    In the course of using the Site or Services, you may provide us with content or materials, such as form submissions, process descriptions, screenshots, or other information ("User Content"). You retain ownership of your User Content.
                  </p>
                  <p className="mt-3">
                    You grant ClaveSolutions a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and create derivative works from your User Content solely as necessary to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>operate, maintain, and improve the Site and Services;</li>
                    <li>communicate with you; and</li>
                    <li>provide and improve any services or tools you request.</li>
                  </ul>
                  <p className="mt-3">
                    We will not publicly disclose your User Content in a way that identifies you or your organization without your consent, except as permitted in our Privacy Policy or a separate written agreement.
                  </p>
                  <p className="mt-3">
                    You represent and warrant that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>You have all rights necessary to provide the User Content and grant the license above; and</li>
                    <li>Your User Content, and our use of it in accordance with these Terms, will not infringe or violate the rights of any third party.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl text-white mb-3">Feedback</h3>
                  <p>
                    If you send us ideas, suggestions, or feedback about the Site or our services ("Feedback"), you agree that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>We may use, modify, and incorporate your Feedback into our products and services without restriction and without any obligation to compensate you; and</li>
                    <li>You will not submit Feedback that you consider confidential or proprietary to you or any third party.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">10. Third-Party Services and Links</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  The Site may contain links to third-party websites or integrate with third-party services (for example, Calendly, analytics tools, CRMs, ERPs, or other platforms).
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We do not control and are not responsible for third-party sites or services.</li>
                  <li>Your use of third-party services is subject to the terms and privacy policies of those providers, not these Terms or our Privacy Policy.</li>
                  <li>Display of third-party logos or names (e.g., Clio, QuickBooks, SAP, Procore) on the Site is for identification purposes only and does not imply endorsement, sponsorship, or formal affiliation unless explicitly stated.</li>
                </ul>
              </div>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">11. Intellectual Property</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Unless otherwise noted, all content on the Site and in the Services—including text, graphics, logos, icons, images, audio/video clips, and the design and layout of the Site—is owned by ClaveSolutions or our licensors and is protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>access and use the Site and Services for your internal business purposes; and</li>
                  <li>view and, where technically enabled, download or print limited copies of content for your internal business use.</li>
                </ul>
                <p>
                  You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>copy, reproduce, modify, distribute, publicly display, or create derivative works of any Site or Services content, except as expressly permitted in these Terms;</li>
                  <li>remove any copyright, trademark, or other proprietary notices; or</li>
                  <li>use any trademarks, logos, or branding displayed on the Site without our prior written permission.</li>
                </ul>
              </div>
            </div>

            {/* Section 12 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">12. Disclaimers</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  The Site and all content, tools, and Services provided through the Site are provided on an "as is" and "as available" basis.
                </p>
                <p>
                  To the fullest extent permitted by law:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We disclaim all warranties of any kind, whether express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, title, and non-infringement.</li>
                  <li>We do not warrant that the Site or Services will be uninterrupted, secure, or error-free, or that any defects will be corrected.</li>
                  <li>We do not warrant that the information or content available on or through the Site is accurate, complete, or current.</li>
                </ul>
                <p>
                  Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you to the extent prohibited by law.
                </p>
              </div>
            </div>

            {/* Section 13 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">13. Limitation of Liability</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  To the fullest extent permitted by law:
                </p>
                <p>
                  ClaveSolutions, its owners, employees, contractors, and agents will not be liable for any indirect, incidental, consequential, special, or punitive damages, or for any loss of profits or revenues, whether incurred directly or indirectly, or for any loss of data, use, goodwill, or other intangible losses, resulting from or in connection with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>your use of or inability to use the Site or Services;</li>
                  <li>any conduct or content of any third party on or related to the Site or Services;</li>
                  <li>any content or information obtained from the Site or Services (including ROI estimates or other outputs); or</li>
                  <li>unauthorized access, use, or alteration of your transmissions or data.</li>
                </ul>
                <p>
                  Our total aggregate liability for any claim arising out of or relating to the Site, Services, or these Terms will not exceed the greater of:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>US $100; or</li>
                  <li>the amount you paid us directly for the specific Services giving rise to the claim in the three (3) months preceding the event giving rise to the claim.</li>
                </ul>
                <p>
                  Nothing in these Terms is intended to exclude or limit liability that cannot be excluded or limited under applicable law (for example, certain liabilities for gross negligence or willful misconduct in some jurisdictions).
                </p>
              </div>
            </div>

            {/* Section 14 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">14. Indemnification</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  You agree to indemnify, defend, and hold harmless ClaveSolutions and our owners, employees, contractors, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>your access to or use of the Site or Services;</li>
                  <li>your violation of these Terms; or</li>
                  <li>your violation of any third-party rights, including any intellectual property or privacy rights.</li>
                </ul>
                <p>
                  We reserve the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which case you agree to cooperate with our defense of that claim.
                </p>
              </div>
            </div>

            {/* Section 15 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">15. Governing Law and Dispute Resolution</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  These Terms and your use of the Site and Services are governed by the laws of the Commonwealth of Kentucky, USA, without regard to its conflict of laws principles.
                </p>
                <p>
                  You agree that any dispute arising out of or relating to these Terms or the Site or Services will be brought exclusively in the state or federal courts located in Louisville, Kentucky, and you consent to the personal jurisdiction of such courts.
                </p>
              </div>
            </div>

            {/* Section 16 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">16. Changes to the Site and These Terms</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  We may update, modify, or discontinue the Site or any part of the Services at any time, with or without notice.
                </p>
                <p>
                  We may also update these Terms from time to time. When we do, we will update the "Last updated" date at the top of this page. If changes are significant, we may provide additional notice (such as a notice on the Site or by email where appropriate).
                </p>
                <p>
                  Your continued use of the Site or Services after any changes to these Terms constitutes your acceptance of the updated Terms. If you do not agree to the updated Terms, you must stop using the Site and Services.
                </p>
              </div>
            </div>

            {/* Section 17 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">17. Termination</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  We may, at any time and without notice, suspend or terminate your access to the Site or Services, or any portion thereof, for any reason, including if we reasonably believe you have violated these Terms or are using the Site or Services in a way that could create risk or harm for us, our clients, or others.
                </p>
                <p>
                  Upon any termination, the rights and licenses granted to you under these Terms will immediately cease. Sections that by their nature should survive termination (including but not limited to Sections 9–15 and 18) will survive.
                </p>
              </div>
            </div>

            {/* Section 18 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">18. Miscellaneous</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <div>
                  <h3 className="text-xl text-white mb-3">Entire agreement.</h3>
                  <p>
                    These Terms, together with any other legal notices or policies referenced herein (such as the Privacy Policy), constitute the entire agreement between you and ClaveSolutions regarding your use of the Site and Services, except as supplemented by any separate signed services agreement.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl text-white mb-3">Assignment.</h3>
                  <p>
                    You may not assign or transfer these Terms, by operation of law or otherwise, without our prior written consent. We may assign these Terms freely in connection with a merger, acquisition, corporate reorganization, or sale of assets.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl text-white mb-3">Severability.</h3>
                  <p>
                    If any provision of these Terms is held to be invalid or unenforceable, that provision will be enforced to the maximum extent permissible and the remaining provisions will remain in full force and effect.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl text-white mb-3">No waiver.</h3>
                  <p>
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl text-white mb-3">No third-party beneficiaries.</h3>
                  <p>
                    These Terms do not create any third-party beneficiary rights.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 19 */}
            <div>
              <h2 className="text-2xl text-white mb-6">19. Contact Information</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                If you have questions about these Terms, you can contact us at:
              </p>
              <ul className="list-none space-y-2 text-slate-300">
                <li>Email: <a href="mailto:hello@clavesolutions.ai" className="text-cyan-400 hover:text-cyan-300 underline">hello@clavesolutions.ai</a></li>
                <li>Website: <a href="https://clavesolutions.ai" className="text-cyan-400 hover:text-cyan-300 underline">https://clavesolutions.ai</a></li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Footer onBookAuditClick={onBookAuditClick} />
    </div>
  );
}
