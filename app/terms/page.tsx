import type { Metadata } from 'next'
import Card from '@/components/ui/Card'
import Breadcrumbs from '@/components/ux/Breadcrumbs'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { DISPLAY_EMAIL, CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of Service | ProvenAI',
  description: 'ProvenAI Terms of Service - Certification terms and conditions.',
}

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 bg-primary-white border-b border-gray-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-6" />
          <ScrollReveal direction="fade">
            <h1 className="text-h1 font-bold mb-4">Terms of Service</h1>
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
              <h2 className="text-h2 font-bold mb-6">1. Agreement to Terms</h2>
              <p className="text-body text-gray-dark mb-4">
                By accessing or using ProvenAI's certification service, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the service.
              </p>
              <p className="text-body text-gray-dark">
                These Terms apply to all users of the service, including applicants, certified companies, and visitors to our website.
              </p>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">2. Certification Service</h2>
              <h3 className="text-h3 font-bold mb-4">2.1 Application Process</h3>
              <p className="text-body text-gray-dark mb-4">
                To apply for certification, you must:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-6 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Meet our certification criteria (5 out of 6 criteria required)</li>
                <li>Submit all required documentation</li>
                <li>Participate in a verification call if requested</li>
                <li>Pay applicable certification fees</li>
              </ul>

              <h3 className="text-h3 font-bold mb-4">2.2 Certification Decision</h3>
              <p className="text-body text-gray-dark mb-4">
                Certification decisions are made at our sole discretion based on our published criteria. We reserve the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-4 ml-4">
                <li>Approve or reject any application</li>
                <li>Request additional information or documentation</li>
                <li>Revoke certification if standards are not maintained</li>
              </ul>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">3. Certification Fees and Payment</h2>
              <h3 className="text-h3 font-bold mb-4">3.1 Fees</h3>
              <p className="text-body text-gray-dark mb-4">
                Certification fees are as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-6 ml-4">
                <li><strong>Basic:</strong> £2,500/year</li>
                <li><strong>Standard:</strong> £5,000/year</li>
                <li><strong>Premium:</strong> £10,000/year</li>
              </ul>

              <h3 className="text-h3 font-bold mb-4">3.2 Payment Terms</h3>
              <p className="text-body text-gray-dark mb-4">
                Fees are payable annually in advance. Payment is due upon certification approval or renewal. We reserve the right to change pricing with 30 days' notice to existing certified companies.
              </p>

              <h3 className="text-h3 font-bold mb-4">3.3 Refunds</h3>
              <p className="text-body text-gray-dark">
                Certification fees are non-refundable except as required by law. If certification is revoked due to our error, we will provide a prorated refund.
              </p>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">4. Certification Renewal</h2>
              <p className="text-body text-gray-dark mb-4">
                Certification is valid for one year and requires annual renewal. To maintain certification, you must:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-4 ml-4">
                <li>Pay renewal fees on time</li>
                <li>Participate in annual review process</li>
                <li>Continue to meet certification criteria</li>
                <li>Update us on any material changes to your business</li>
              </ul>
              <p className="text-body text-gray-dark">
                Failure to renew or meet standards may result in certification revocation.
              </p>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">5. Use of Certification Badge and Materials</h2>
              <h3 className="text-h3 font-bold mb-4">5.1 License</h3>
              <p className="text-body text-gray-dark mb-4">
                Upon certification, we grant you a limited, non-exclusive, non-transferable license to use the ProvenAI certification badge and related materials solely for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-6 ml-4">
                <li>Displaying on your website and marketing materials</li>
                <li>Including in proposals and client communications</li>
                <li>Listing in directories and professional profiles</li>
              </ul>

              <h3 className="text-h3 font-bold mb-4">5.2 Restrictions</h3>
              <p className="text-body text-gray-dark mb-4">
                You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-4 ml-4">
                <li>Modify the badge or certification materials</li>
                <li>Use certification for misleading or false claims</li>
                <li>Transfer or sublicense the badge to third parties</li>
                <li>Use the badge after certification expires or is revoked</li>
              </ul>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">6. Directory Listing</h2>
              <p className="text-body text-gray-dark mb-4">
                Certified companies may be listed in our public directory. By applying for certification, you consent to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-4 ml-4">
                <li>Publication of your company name and basic information</li>
                <li>Display of your certification tier</li>
                <li>Inclusion in search results and filters</li>
              </ul>
              <p className="text-body text-gray-dark">
                You may request removal from the directory at any time, which may affect your certification status.
              </p>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">7. Certification Revocation</h2>
              <p className="text-body text-gray-dark mb-4">
                We reserve the right to revoke certification if:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-4 ml-4">
                <li>You no longer meet certification criteria</li>
                <li>You provide false or misleading information</li>
                <li>You violate these Terms of Service</li>
                <li>You fail to pay renewal fees</li>
                <li>You engage in conduct that damages our reputation or the integrity of the certification</li>
              </ul>
              <p className="text-body text-gray-dark">
                Upon revocation, you must immediately cease using the certification badge and remove it from all materials.
              </p>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">8. Your Obligations</h2>
              <p className="text-body text-gray-dark mb-4">
                You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-4 ml-4">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the standards that qualified you for certification</li>
                <li>Notify us promptly of any material changes to your business</li>
                <li>Use the certification badge only in accordance with these Terms</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not make false claims about your certification</li>
              </ul>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">9. Intellectual Property</h2>
              <p className="text-body text-gray-dark mb-4">
                All content on our website, including the ProvenAI name, logo, certification badge, and materials, are our intellectual property or licensed to us. You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-4 ml-4">
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Use our trademarks or branding without authorization</li>
                <li>Reverse engineer or attempt to extract source code</li>
              </ul>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">10. Limitation of Liability</h2>
              <p className="text-body text-gray-dark mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-4 ml-4">
                <li>Our certification is provided "as is" without warranties of any kind</li>
                <li>We are not liable for any indirect, incidental, or consequential damages</li>
                <li>Our total liability is limited to the amount you paid for certification in the 12 months preceding the claim</li>
                <li>We do not guarantee business outcomes or customer acquisition</li>
              </ul>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">11. Indemnification</h2>
              <p className="text-body text-gray-dark">
                You agree to indemnify and hold ProvenAI harmless from any claims, damages, or expenses arising from your use of the certification, violation of these Terms, or infringement of any rights of another party.
              </p>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">12. Dispute Resolution</h2>
              <p className="text-body text-gray-dark mb-4">
                Any disputes arising from these Terms or the certification service will be resolved through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-dark mb-4 ml-4">
                <li>Good faith negotiation between the parties</li>
                <li>Mediation if negotiation fails</li>
                <li>Binding arbitration or court proceedings as applicable under UK law</li>
              </ul>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">13. Changes to Terms</h2>
              <p className="text-body text-gray-dark">
                We may modify these Terms at any time. Material changes will be communicated to certified companies with 30 days' notice. Continued use of the service after changes constitutes acceptance of the updated Terms.
              </p>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">14. Governing Law</h2>
              <p className="text-body text-gray-dark">
                These Terms are governed by the laws of England and Wales. Any legal proceedings will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </Card>

            <Card>
              <h2 className="text-h2 font-bold mb-6">15. Contact Information</h2>
              <p className="text-body text-gray-dark mb-4">
                For questions about these Terms, please contact us:
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

