import type { Metadata } from 'next'
import Card from '@/components/ui/Card'
import Breadcrumbs from '@/components/ux/Breadcrumbs'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { DISPLAY_EMAIL, CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy | ProvenAI',
  description: 'ProvenAI Privacy Policy - How we collect, use, and protect your personal data.',
}

export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-primary-white border-b border-gray-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-6" />
          <ScrollReveal direction="fade">
            <h1 className="text-h1 font-bold mb-4">Privacy Policy</h1>
            <p className="text-body-lg text-gray-subtle">
              Last updated: {lastUpdated}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-primary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Card>
              <h2 className="text-h2 font-bold mb-6">1. Introduction</h2>
              <p className="text-body text-gray-dark mb-4">
                ProvenAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our certification service.
              </p>
              <p className="text-body text-gray-dark">
                By using our service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">2. Information We Collect</h2>
              <h3 className="text-h3 font-bold mb-4">2.1 Information You Provide</h3>
              <p className="text-body text-gray-dark mb-4">
                When you apply for certification or contact us, we collect:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-6 ml-4">
                <li>Company information (name, website, type, size, location)</li>
                <li>Contact information (name, email, phone, role)</li>
                <li>Technical details (AI services, technologies, team size)</li>
                <li>Portfolio links and case studies</li>
                <li>LinkedIn profiles of team members</li>
                <li>Client testimonials and references</li>
                <li>Additional information you choose to provide</li>
              </ul>

              <h3 className="text-h3 font-bold mb-4">2.2 Automatically Collected Information</h3>
              <p className="text-body text-gray-dark">
                We may automatically collect certain information about your device, including IP address, browser type, and usage patterns when you visit our website.
              </p>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">3. How We Use Your Information</h2>
              <p className="text-body text-gray-dark mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-4 ml-4">
                <li>Process and evaluate certification applications</li>
                <li>Verify technical capabilities and business legitimacy</li>
                <li>Communicate with you about your application and certification status</li>
                <li>Maintain our directory of certified companies</li>
                <li>Send you updates about our services (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-body text-gray-dark mb-4">
                Under GDPR, we process your personal data based on:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-4 ml-4">
                <li><strong>Contractual necessity:</strong> To fulfill our certification service agreement</li>
                <li><strong>Legitimate interests:</strong> To verify companies and maintain certification standards</li>
                <li><strong>Consent:</strong> For marketing communications (you can withdraw at any time)</li>
                <li><strong>Legal obligation:</strong> To comply with applicable laws and regulations</li>
              </ul>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">5. Data Sharing and Disclosure</h2>
              <p className="text-body text-gray-dark mb-4">
                We do not sell your personal data. We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-4 ml-4">
                <li><strong>Service providers:</strong> Third-party services that help us operate (e.g., email services like Resend)</li>
                <li><strong>Public directory:</strong> If certified, your company name and basic information may appear in our public directory</li>
                <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="text-body text-gray-dark">
                All service providers are contractually obligated to protect your data and use it only for specified purposes.
              </p>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">6. Data Retention</h2>
              <p className="text-body text-gray-dark mb-4">
                We retain your personal data for as long as necessary to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-4 ml-4">
                <li>Provide our certification services</li>
                <li>Maintain certification records (for active certifications)</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
              </ul>
              <p className="text-body text-gray-dark">
                If you withdraw your application or your certification expires, we may retain certain information for up to 7 years for legal and business record-keeping purposes.
              </p>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">7. Your Rights (GDPR)</h2>
              <p className="text-body text-gray-dark mb-4">
                Under GDPR and applicable data protection laws, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-4 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your data (subject to legal requirements)</li>
                <li><strong>Restriction:</strong> Request limitation of processing</li>
                <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdraw consent:</strong> Withdraw consent for marketing communications</li>
              </ul>
              <p className="text-body text-gray-dark">
                To exercise these rights, please contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{DISPLAY_EMAIL}</a>.
              </p>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">8. Data Security</h2>
              <p className="text-body text-gray-dark mb-4">
                We implement appropriate technical and organizational measures to protect your personal data, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-4 ml-4">
                <li>Encryption of data in transit (HTTPS)</li>
                <li>Secure storage and access controls</li>
                <li>Regular security assessments</li>
                <li>Limited access to personal data on a need-to-know basis</li>
              </ul>
              <p className="text-body text-gray-dark">
                However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">9. International Data Transfers</h2>
              <p className="text-body text-gray-dark">
                Your information may be transferred to and processed in countries outside the European Economic Area (EEA). We ensure appropriate safeguards are in place, such as Standard Contractual Clauses, to protect your data in accordance with GDPR requirements.
              </p>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">10. Children's Privacy</h2>
              <p className="text-body text-gray-dark">
                Our service is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">11. Changes to This Privacy Policy</h2>
              <p className="text-body text-gray-dark">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our service after changes constitutes acceptance of the updated policy.
              </p>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">12. Contact Us</h2>
              <p className="text-body text-gray-dark mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <p className="text-body text-gray-dark">
                <strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{DISPLAY_EMAIL}</a>
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

