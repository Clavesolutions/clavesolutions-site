import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface PrivacyPolicyPageProps {
  onBookAuditClick: () => void;
}

export default function PrivacyPolicyPage({ onBookAuditClick }: PrivacyPolicyPageProps) {
  useEffect(() => {
    document.title = "Privacy Policy | ClaveSolutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "ClaveSolutions Privacy Policy: How we collect, use, and protect your information when you visit our website or use our services."
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
            Privacy Policy
          </h1>
          
          <p className="text-lg text-slate-400 mb-2">
            How we collect, use, and protect your information.
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
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">1. Introduction</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  This Privacy Policy explains how ClaveSolutions.ai ("ClaveSolutions," "we," "us," or "our") collects, uses, and shares information when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>visit our website at <a href="https://clavesolutions.ai" className="text-cyan-400 hover:text-cyan-300 underline">https://clavesolutions.ai</a> (the "Site");</li>
                  <li>use tools such as our ROI / Operational Friction Calculator;</li>
                  <li>book an Integration Audit or other consultation; or</li>
                  <li>otherwise interact with us (for example, by email, video call, or social media).</li>
                </ul>
                <p>
                  This Policy is intended for business contacts and visitors using our Site and tools in a professional context. It does not replace any separate data protection agreement or services agreement we may sign with your company. If there is a conflict between this Policy and a written agreement between ClaveSolutions and your organization, that agreement will control for the subject matter it covers.
                </p>
                <p>
                  If you have questions, you can reach us at:
                </p>
                <ul className="list-none pl-6 space-y-1">
                  <li>Email: <a href="mailto:hello@clavesolutions.ai" className="text-cyan-400 hover:text-cyan-300 underline">hello@clavesolutions.ai</a></li>
                  <li>Website: <a href="https://clavesolutions.ai" className="text-cyan-400 hover:text-cyan-300 underline">https://clavesolutions.ai</a></li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">2. What We Mean by "Personal Information"</h2>
              <p className="text-slate-300 leading-relaxed">
                When we use the term "personal information" in this Policy, we mean information that identifies, relates to, describes, or can reasonably be linked to an individual person (such as a business contact) or a household. We may also refer to "information" more generally, which can include both personal information and other data that does not identify an individual.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">3. Roles: When We Are a Controller vs. a Processor</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <div>
                  <h3 className="text-xl text-white mb-3">Website, marketing, and sales contacts (controller).</h3>
                  <p>
                    For information we collect through our Site, calculator, forms, email, and general marketing and sales activities, ClaveSolutions acts as an independent "controller" (or similar term under applicable laws). We decide how and why that information is processed, consistent with this Policy.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-white mb-3">Client systems and project data (processor/service provider).</h3>
                  <p>
                    When a business customer engages us to design, build, or support integrations and automations inside their own systems (e.g., CRM, ERP, practice management, accounting platforms), we may access or process data stored in those systems. For that activity, we generally act as a "processor" / "service provider" and handle that data only in accordance with our contract with the client and their instructions.
                  </p>
                  <p className="mt-3">
                    This Policy applies primarily to our own Site and business-contact information. For data we process on behalf of our clients, please refer to the privacy notices of the relevant client and to our contract with them.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">4. Information We Collect</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                We collect information in three main ways: information you provide directly, information collected automatically, and information we receive from third parties.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-white mb-4">4.1 Information You Provide Directly</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    We collect personal information you choose to share with us, such as:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg text-cyan-400 mb-2">Contact and business details</h4>
                      <ul className="list-disc pl-6 space-y-1 text-slate-300">
                        <li>Name</li>
                        <li>Business email address</li>
                        <li>Business phone number (if you provide it)</li>
                        <li>Company name</li>
                        <li>Role or job title</li>
                        <li>Industry and company size (if provided)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg text-cyan-400 mb-2">Inquiry and project information</h4>
                      <ul className="list-disc pl-6 space-y-1 text-slate-300">
                        <li>Details you provide when you fill out a contact form</li>
                        <li>Notes about your current systems, workflows, or pain points</li>
                        <li>Information shared during discovery calls, Integration Audits, or other consultations</li>
                        <li>Documents or examples you choose to share (e.g., screenshots, process diagrams)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg text-cyan-400 mb-2">ROI / Operational Friction Calculator inputs</h4>
                      <ul className="list-disc pl-6 space-y-1 text-slate-300">
                        <li>Your estimates of hours, salaries, volumes, workflows, and similar operational metrics</li>
                        <li>Optional context you provide in free-text fields</li>
                      </ul>
                      <p className="text-slate-300 mt-2">
                        We use these inputs to generate estimates and may store them to review patterns, improve the calculator, and follow up with you if you request or reasonably expect follow-up.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg text-cyan-400 mb-2">Scheduling information</h4>
                      <p className="text-slate-300">
                        If you book a call through a scheduling tool (such as Calendly or a similar service), we receive the basic contact and scheduling details you provide there (for example, your name, email, and chosen time).
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg text-cyan-400 mb-2">Email and other communication</h4>
                      <p className="text-slate-300">
                        If you contact us by email, social media, or other channels, we collect the contents of your message and any attachments you choose to send.
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mt-4">
                    We do not intend to collect sensitive information such as government ID numbers, financial account numbers, health information, or information about children. Please do not send this type of information to us unless we specifically request it in writing and agree to appropriate safeguards.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl text-white mb-4">4.2 Information Collected Automatically</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    When you visit or interact with our Site, we (and our service providers) may automatically collect certain information about your device and how you use the Site, such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-slate-300">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Device type and operating system</li>
                    <li>Referring URL (the page you came from)</li>
                    <li>Pages viewed, links clicked, and time spent on pages</li>
                    <li>Date and time of visits</li>
                    <li>Approximate location (city/region) based on IP address</li>
                  </ul>
                  <p className="text-slate-300 mt-4">
                    We typically collect this information using cookies, pixels, and similar tracking technologies. For more about how we use these tools and your choices, see Section 6 (Cookies and Similar Technologies).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl text-white mb-4">4.3 Information from Third Parties</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    We may receive information about you from third parties such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-slate-300">
                    <li>Scheduling tools (e.g., Calendly or similar) when you book time with us</li>
                    <li>CRM, form, or landing-page tools you use to submit information</li>
                    <li>Analytics and marketing partners who help us understand how our Site and campaigns are performing</li>
                    <li>Social platforms (e.g., LinkedIn lead forms) when you interact with our campaigns or content</li>
                  </ul>
                  <p className="text-slate-300 mt-4">
                    We use this information for the same purposes described in this Privacy Policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">5. How We Use Information</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                We use the information we collect for the following purposes:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl text-white mb-3">To provide and improve our services</h3>
                  <ul className="list-disc pl-6 space-y-1 text-slate-300">
                    <li>Responding to inquiries and requests</li>
                    <li>Scheduling and conducting Integration Audits, discovery calls, and follow-up meetings</li>
                    <li>Designing, delivering, and supporting integrations and automations for clients</li>
                    <li>Operating and improving our ROI / Operational Friction Calculator and other tools</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl text-white mb-3">To operate and improve the Site</h3>
                  <ul className="list-disc pl-6 space-y-1 text-slate-300">
                    <li>Analyzing how visitors use our Site and tools</li>
                    <li>Debugging, testing, and improving Site performance and security</li>
                    <li>Developing new content, tools, and features</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl text-white mb-3">To communicate with you</h3>
                  <ul className="list-disc pl-6 space-y-1 text-slate-300">
                    <li>Sending confirmations, updates, and administrative messages</li>
                    <li>Responding to questions or support requests</li>
                    <li>Sending information about services, resources, or content we believe may be relevant to you (you can opt out at any time)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl text-white mb-3">To personalize content and marketing</h3>
                  <ul className="list-disc pl-6 space-y-1 text-slate-300">
                    <li>Tailoring our communications and follow-up based on your industry, role, or interests</li>
                    <li>Measuring and improving the effectiveness of our campaigns and Site content</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl text-white mb-3">To protect our rights and comply with law</h3>
                  <ul className="list-disc pl-6 space-y-1 text-slate-300">
                    <li>Preventing, investigating, and responding to fraud, abuse, or security incidents</li>
                    <li>Enforcing our Terms of Use and other agreements</li>
                    <li>Complying with applicable legal obligations and responding to lawful requests</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-slate-300 mt-6">
                Where required by law (for example, in the EEA or UK), we rely on legal bases such as performance of a contract, our legitimate business interests (such as running and improving our services, marketing to business contacts, and securing our systems), compliance with legal obligations, or your consent.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">6. Cookies and Similar Technologies</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  We and our service providers use cookies and similar tracking technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Remember your preferences and improve your experience</li>
                  <li>Help keep the Site secure</li>
                  <li>Understand how visitors use our Site and tools</li>
                  <li>Support basic analytics and, where used, marketing and advertising measurement</li>
                </ul>
                <p>
                  Cookies may be:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>First-party cookies, set by us; or</li>
                  <li>Third-party cookies, set by analytics or other partners.</li>
                </ul>
                <p>
                  You can control and delete cookies using your browser settings and, where available, device-level settings. If you disable cookies, some features of the Site may not function properly.
                </p>
                <p>
                  At this time, our Site is not configured to respond to "Do Not Track" signals or similar browser privacy settings. You can still use other tools (such as browser settings or extensions) to limit certain types of tracking.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">7. How We Share Information</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                We do not rent or sell your personal information.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                We may share information in the following situations:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl text-white mb-3">Service providers</h3>
                  <p className="text-slate-300 mb-3">
                    We share information with trusted third-party vendors that perform services on our behalf, such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-slate-300">
                    <li>Website hosting and infrastructure</li>
                    <li>Scheduling tools</li>
                    <li>Analytics providers</li>
                    <li>Email delivery and marketing tools</li>
                    <li>Customer relationship management (CRM) platforms</li>
                    <li>Payment processors (if/when applicable)</li>
                    <li>Security, logging, and monitoring providers</li>
                  </ul>
                  <p className="text-slate-300 mt-3">
                    These providers are authorized to use your information only as necessary to perform services for us or to comply with applicable law.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl text-white mb-3">Client projects and integrations</h3>
                  <p className="text-slate-300">
                    When we are engaged by a client, we may access or process data in the client's systems solely for the purpose of designing, building, and supporting integrations and automations, or as otherwise described in our agreement with that client. In these cases, we act as a service provider / data processor and handle that data according to our contract with the client and their instructions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl text-white mb-3">Business transfers</h3>
                  <p className="text-slate-300">
                    If we are involved in a merger, acquisition, financing, reorganization, or sale of all or a portion of our business, your information may be transferred as part of that transaction, subject to any applicable laws and any agreements in place.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl text-white mb-3">Legal and safety purposes</h3>
                  <p className="text-slate-300 mb-3">
                    We may disclose information if we believe it is reasonably necessary to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-slate-300">
                    <li>Comply with applicable laws, regulations, or legal processes</li>
                    <li>Respond to lawful requests from authorities</li>
                    <li>Protect the rights, property, or safety of ClaveSolutions, our clients, or others</li>
                    <li>Enforce our agreements and policies</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl text-white mb-3">With your consent</h3>
                  <p className="text-slate-300">
                    We may share information with your consent or at your direction (for example, if you ask us to make an introduction or share information with a partner).
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7.5 - Third-Party Tools We Rely On */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">7.5 Third-Party Tools We Rely On</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                We use the following third-party services and tools to operate our website and communicate with you:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl text-white mb-3">Calendly (Scheduling)</h3>
                  <p className="text-slate-300 mb-2">
                    We use Calendly to allow you to book Integration Audits and consultation calls. When you schedule a meeting through Calendly, they collect your name, email address, and scheduling preferences on our behalf.
                  </p>
                  <p className="text-slate-300 text-sm">
                    Learn more: <a href="https://calendly.com/privacy" className="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">Calendly Privacy Policy</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-white mb-3">Plausible Analytics (Website Analytics)</h3>
                  <p className="text-slate-300 mb-2">
                    We use Plausible Analytics, a privacy-friendly analytics service, to understand how visitors use our website. Plausible does not use cookies, does not collect personal information, and does not track you across websites. They collect only aggregated statistics about page views, referrers, and general usage patterns.
                  </p>
                  <p className="text-slate-300 text-sm">
                    Learn more: <a href="https://plausible.io/privacy" className="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">Plausible Privacy Policy</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-white mb-3">Google Workspace (Email and Communication)</h3>
                  <p className="text-slate-300 mb-2">
                    We use Google Workspace (Gmail) for business email and communication. When you contact us via email, your message is transmitted through and stored on Google's servers.
                  </p>
                  <p className="text-slate-300 text-sm">
                    Learn more: <a href="https://policies.google.com/privacy" className="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">8. Data Retention</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  We keep personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, including:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>For as long as we have an ongoing relationship with you or your company</li>
                  <li>As needed to maintain accurate records of our communications, proposals, and work</li>
                  <li>As required by legal, tax, accounting, or other regulatory obligations</li>
                  <li>For a reasonable period afterward to protect our rights and manage business operations</li>
                </ul>
                <p>
                  When we no longer need personal information for these purposes, we will delete it or anonymize it where feasible. In practice, business contact and CRM records are often retained for a number of years after our last interaction, unless you request deletion and we are not required to keep them.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">9. Your Choices and Rights</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-white mb-4">9.1 Your Choices</h3>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <div>
                      <h4 className="text-lg text-cyan-400 mb-2">Marketing emails.</h4>
                      <p>
                        You can opt out of marketing emails at any time by using the "unsubscribe" link in our emails or by contacting us at <a href="mailto:hello@clavesolutions.ai" className="text-cyan-400 hover:text-cyan-300 underline">hello@clavesolutions.ai</a>. We may still send you non-marketing messages (for example, service or transactional emails related to an ongoing project).
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg text-cyan-400 mb-2">Cookies.</h4>
                      <p>
                        You can control or delete cookies through your browser settings. Some browsers also allow you to limit tracking technologies.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl text-white mb-4">9.2 Your Rights</h3>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      Depending on where you live and how you interact with us, you may have rights under applicable data protection laws, which can include the right to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Access the personal information we hold about you</li>
                      <li>Request correction of inaccurate or incomplete information</li>
                      <li>Request deletion of your personal information</li>
                      <li>Object to certain processing or request that we restrict processing</li>
                      <li>Request a copy of your information in a portable format</li>
                      <li>Withdraw consent where processing is based on your consent</li>
                    </ul>
                    <p>
                      To exercise these rights, contact us at <a href="mailto:hello@clavesolutions.ai" className="text-cyan-400 hover:text-cyan-300 underline">hello@clavesolutions.ai</a>. We may ask you to verify your identity before fulfilling your request. Some rights may be limited under applicable law (for example, when we need to keep certain records for legal or legitimate business reasons).
                    </p>
                    <p>
                      If you believe we have not resolved your concern, you may have the right to contact a data protection authority in your region.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">10. International Data Transfers</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Our systems and many of our service providers are located in the United States, and we may also use providers in other countries. This means your information may be transferred to, stored, and processed in countries that may have data protection laws that are different from those in your country of residence.
                </p>
                <p>
                  Where required by law, we implement appropriate safeguards to protect personal information in connection with such transfers, which may include standard contractual clauses or similar legal mechanisms.
                </p>
              </div>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">11. Security</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  We use reasonable technical and organizational measures designed to protect personal information from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
                <p>
                  If you believe your interaction with us is no longer secure, please contact us immediately.
                </p>
              </div>
            </div>

            {/* Section 12 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">12. Children's Privacy</h2>
              <p className="text-slate-300 leading-relaxed">
                Our Site and services are not directed to children under 16, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can take appropriate steps to delete it.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-12">
              <h2 className="text-2xl text-white mb-6">13. Changes to This Policy</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. If changes are significant, we may provide additional notice (such as a prominent notice on the Site or email where appropriate).
                </p>
                <p>
                  Your continued use of the Site or our tools after any changes to this Privacy Policy means that you acknowledge the updated Policy.
                </p>
              </div>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="text-2xl text-white mb-6">14. How to Contact Us</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
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