import ResourceLayout from '@/components/ResourceLayout'
import Card from '@/components/ui/Card'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export default function EUAIActEvidencePackPage() {
  return (
    <ResourceLayout
      title="EU AI Act Evidence Pack: What Buyers Ask For"
      description="Learn what procurement teams ask for when evaluating AI vendors under the EU AI Act. Understand how to structure your Evidence Pack to answer their questions."
      category="EU AI Act"
      date="January 2025"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-h2 font-bold mb-4">Introduction</h2>
          <p className="text-body text-gray-subtle mb-4">
            The EU AI Act requires companies using AI systems to document their governance practices. When selling to enterprise buyers, procurement teams will ask specific questions about your AI usage, risk classifications, and compliance approach.
          </p>
          <p className="text-body text-gray-subtle">
            This guide explains what buyers typically ask for and how to structure your Evidence Pack to provide complete, accurate answers.
          </p>
        </div>

        <div>
          <h2 className="text-h2 font-bold mb-4">What Procurement Teams Ask</h2>
          <p className="text-body text-gray-subtle mb-4">
            Procurement teams evaluating AI vendors typically ask questions in these categories:
          </p>
          <Card variant="minimal" className="p-6 mb-6">
            <h3 className="text-h4 font-bold mb-4">Common Question Categories</h3>
            <ul className="space-y-3 text-body text-gray-subtle">
              <li>• <strong>AI Inventory:</strong> What AI systems do you use? How are they classified?</li>
              <li>• <strong>Risk Assessment:</strong> How do you classify AI risk? What is your rationale?</li>
              <li>• <strong>Data Handling:</strong> What data do your AI systems process? How is it protected?</li>
              <li>• <strong>Governance:</strong> Who is responsible for AI governance? What controls are in place?</li>
              <li>• <strong>Monitoring:</strong> How do you monitor AI systems? What metrics do you track?</li>
              <li>• <strong>Compliance:</strong> How do you ensure compliance with EU AI Act requirements?</li>
            </ul>
          </Card>
        </div>

        <div>
          <h2 className="text-h2 font-bold mb-4">Structuring Your Evidence Pack</h2>
          <p className="text-body text-gray-subtle mb-4">
            Your Evidence Pack should be organized to answer procurement questions directly. Each section should be clear, complete, and exportable.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-h4 font-bold mb-3">Executive Summary</h3>
              <p className="text-body text-gray-subtle mb-3">
                Start with an executive summary that provides a high-level overview of your AI governance approach. This helps procurement teams understand your overall strategy.
              </p>
              <Card variant="minimal" className="p-4">
                <p className="text-small text-gray-subtle">
                  <strong>What to include:</strong> Overview of AI systems, governance structure, risk classification approach, and key highlights.
                </p>
              </Card>
            </div>
            <div>
              <h3 className="text-h4 font-bold mb-3">AI Systems Inventory</h3>
              <p className="text-body text-gray-subtle mb-3">
                Provide a complete register of all AI systems. Include third-party tools and shadow usage. For each system, document:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-subtle mb-3">
                <li>System name and purpose</li>
                <li>Type (third-party, internal, or both)</li>
                <li>Risk classification</li>
                <li>Data types processed</li>
                <li>Owner and accountability</li>
              </ul>
            </div>
            <div>
              <h3 className="text-h4 font-bold mb-3">Risk Classification Rationale</h3>
              <p className="text-body text-gray-subtle mb-3">
                Document how you classify AI systems by risk level. Align classifications with EU AI Act categories:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-gray-subtle mb-3">
                <li>Prohibited AI systems</li>
                <li>High-risk AI systems</li>
                <li>Limited-risk AI systems</li>
                <li>Minimal-risk AI systems</li>
              </ul>
              <p className="text-body text-gray-subtle">
                For each classification, provide clear rationale explaining why the system falls into that category.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-h2 font-bold mb-4">What to Export as Evidence</h2>
          <p className="text-body text-gray-subtle mb-4">
            When responding to procurement questions, you should be able to export and share specific sections of your Evidence Pack:
          </p>
          <Card variant="default" className="p-6">
            <h3 className="text-h4 font-bold mb-4">Exportable Sections</h3>
            <ul className="space-y-3 text-body text-gray-subtle">
              <li>• <strong>Complete Evidence Pack PDF:</strong> Full documentation for comprehensive reviews</li>
              <li>• <strong>AI Systems Inventory:</strong> Standalone register for inventory questions</li>
              <li>• <strong>Risk Classification Summary:</strong> Risk classifications with rationale</li>
              <li>• <strong>Ownership Documentation:</strong> Accountability structures and sign-offs</li>
              <li>• <strong>Monitoring Plan:</strong> Ongoing monitoring processes and metrics</li>
            </ul>
          </Card>
        </div>

        <div>
          <h2 className="text-h2 font-bold mb-4">Best Practices</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-h4 font-bold mb-3">Be Complete</h3>
              <p className="text-body text-gray-subtle">
                Include all AI systems, including third-party tools and shadow usage. Incomplete inventories raise red flags with procurement teams.
              </p>
            </div>
            <div>
              <h3 className="text-h4 font-bold mb-3">Document Rationale</h3>
              <p className="text-body text-gray-subtle">
                Don't just classify systems by risk level. Explain why each classification is appropriate. This demonstrates thoughtful governance.
              </p>
            </div>
            <div>
              <h3 className="text-h4 font-bold mb-3">Keep It Current</h3>
              <p className="text-body text-gray-subtle">
                Update your Evidence Pack regularly. Stale documentation undermines trust. Maintain a change log showing updates.
              </p>
            </div>
            <div>
              <h3 className="text-h4 font-bold mb-3">Make It Exportable</h3>
              <p className="text-body text-gray-subtle">
                Ensure your Evidence Pack can be exported as PDF and shared via link. Procurement teams need to review documentation easily.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-h2 font-bold mb-4">Checklist</h2>
          <Card variant="minimal" className="p-6">
            <ul className="space-y-3 text-body text-gray-subtle">
              <li>✓ Complete AI systems inventory including third-party tools</li>
              <li>✓ Risk classifications with documented rationale</li>
              <li>✓ Ownership and accountability structures</li>
              <li>✓ Monitoring plan with review cadences</li>
              <li>✓ Change log showing updates</li>
              <li>✓ Exportable PDF format</li>
              <li>✓ Shareable link for stakeholders</li>
              <li>✓ Regular updates and maintenance</li>
            </ul>
          </Card>
        </div>

        <div>
          <h2 className="text-h2 font-bold mb-4">Related Resources</h2>
          <div className="space-y-2 text-body text-gray-subtle">
            <p>
              <Link href="/evidence-pack" className="underline">Learn more about Evidence Packs</Link>
            </p>
            <p>
              <Link href="/standards" className="underline">View certification standards</Link>
            </p>
            <p>
              <Link href="/resources/ai-inventory-template" className="underline">AI Inventory Template Guide</Link>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-h2 font-bold mb-4">Frequently Asked Questions</h2>
          <FAQ
            items={[
              {
                question: 'Do I need to be EU-based to need an Evidence Pack?',
                answer: 'No. If you sell to EU-based companies or process EU data, procurement teams will ask about your AI governance practices regardless of where your company is located.',
              },
              {
                question: 'What if I only use third-party AI tools?',
                answer: 'You still need to document third-party AI usage. Your Evidence Pack should include all AI systems, whether internal or third-party.',
              },
              {
                question: 'How often should I update my Evidence Pack?',
                answer: 'Update your Evidence Pack whenever you add new AI systems, change risk classifications, or update governance structures. Maintain a change log showing all updates.',
              },
              {
                question: 'Can I use my Evidence Pack for other compliance frameworks?',
                answer: 'Yes. While structured for EU AI Act, your Evidence Pack can be adapted for other frameworks like ISO 42001 or NIST AI RMF.',
              },
            ]}
          />
        </div>
      </div>
    </ResourceLayout>
  )
}

