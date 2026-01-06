import ResourceLayout from '@/components/ResourceLayout'
import Card from '@/components/ui/Card'
import FAQ from '@/components/FAQ'
import Link from 'next/link'

export default function AIInventoryTemplatePage() {
  return (
    <ResourceLayout
      title="AI Inventory Template: Complete Guide"
      description="Step-by-step guide to building a complete AI systems inventory. Includes templates, examples, and best practices for documenting third-party and internal AI systems."
      category="AI Inventory"
      date="January 2025"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-h2 font-bold mb-4">Introduction</h2>
          <p className="text-body text-gray-subtle mb-4">
            A complete AI systems inventory is the foundation of your Evidence Pack. It documents all AI systems in use, including third-party tools and shadow usage.
          </p>
          <p className="text-body text-gray-subtle">
            This guide provides a step-by-step approach to building your inventory, with templates and examples you can use.
          </p>
        </div>

        <div>
          <h2 className="text-h2 font-bold mb-4">What to Include</h2>
          <p className="text-body text-gray-subtle mb-4">
            Your AI inventory should capture the following information for each system:
          </p>
          <Card variant="default" className="p-6">
            <h3 className="text-h4 font-bold mb-4">Required Fields</h3>
            <ul className="space-y-3 text-body text-gray-subtle">
              <li>• <strong>System Name:</strong> Clear, descriptive name</li>
              <li>• <strong>Purpose:</strong> What the system is used for</li>
              <li>• <strong>Type:</strong> Third-party, internal, or both</li>
              <li>• <strong>Vendor/Provider:</strong> If third-party, who provides it</li>
              <li>• <strong>Risk Classification:</strong> High, limited, or minimal risk</li>
              <li>• <strong>Data Types:</strong> What data the system processes</li>
              <li>• <strong>Owner:</strong> Who is responsible for the system</li>
              <li>• <strong>Status:</strong> Active, deprecated, or in development</li>
            </ul>
          </Card>
        </div>

        <div>
          <h2 className="text-h2 font-bold mb-4">Discovery Process</h2>
          <p className="text-body text-gray-subtle mb-4">
            Finding all AI systems in use can be challenging. Use these approaches:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-h4 font-bold mb-3">1. Survey Teams</h3>
              <p className="text-body text-gray-subtle">
                Survey all teams about AI tools they use. Ask about customer support tools, analytics platforms, content generation, and automation tools.
              </p>
            </div>
            <div>
              <h3 className="text-h4 font-bold mb-3">2. Review Vendor Contracts</h3>
              <p className="text-body text-gray-subtle">
                Review contracts with vendors to identify AI-powered features. Many SaaS tools include AI capabilities that may not be obvious.
              </p>
            </div>
            <div>
              <h3 className="text-h4 font-bold mb-3">3. Check Shadow AI</h3>
              <p className="text-body text-gray-subtle">
                Look for unsanctioned AI usage. Check for ChatGPT, Claude, or other AI tools used without formal approval. See our <Link href="/resources/shadow-ai-discovery" className="underline">Shadow AI Discovery guide</Link>.
              </p>
            </div>
            <div>
              <h3 className="text-h4 font-bold mb-3">4. Review Code and Infrastructure</h3>
              <p className="text-body text-gray-subtle">
                Review code repositories and infrastructure for AI model usage, API calls to AI services, and ML pipelines.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-h2 font-bold mb-4">Inventory Template</h2>
          <Card variant="minimal" className="p-6 mb-6">
            <h3 className="text-h4 font-bold mb-4">Example Entry</h3>
            <div className="space-y-3 text-body text-gray-subtle">
              <div>
                <strong>System Name:</strong> Customer Support Chatbot
              </div>
              <div>
                <strong>Purpose:</strong> Automated customer support responses
              </div>
              <div>
                <strong>Type:</strong> Third-party
              </div>
              <div>
                <strong>Vendor:</strong> SupportBot Inc.
              </div>
              <div>
                <strong>Risk Classification:</strong> Limited risk
              </div>
              <div>
                <strong>Data Types:</strong> Customer messages, support tickets
              </div>
              <div>
                <strong>Owner:</strong> Support Team Lead
              </div>
              <div>
                <strong>Status:</strong> Active
              </div>
            </div>
          </Card>
        </div>

        <div>
          <h2 className="text-h2 font-bold mb-4">What to Export as Evidence</h2>
          <p className="text-body text-gray-subtle mb-4">
            Your AI inventory should be exportable in multiple formats:
          </p>
          <ul className="list-disc list-inside space-y-2 text-body text-gray-subtle mb-4">
            <li>Complete inventory as a table or spreadsheet</li>
            <li>Summary by risk classification</li>
            <li>Summary by owner or team</li>
            <li>Third-party vs internal breakdown</li>
          </ul>
          <p className="text-body text-gray-subtle">
            Include the inventory as a section in your Evidence Pack PDF.
          </p>
        </div>

        <div>
          <h2 className="text-h2 font-bold mb-4">Best Practices</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-h4 font-bold mb-3">Be Comprehensive</h3>
              <p className="text-body text-gray-subtle">
                Include all AI systems, even if they seem minor. Incomplete inventories raise questions with procurement teams.
              </p>
            </div>
            <div>
              <h3 className="text-h4 font-bold mb-3">Keep It Updated</h3>
              <p className="text-body text-gray-subtle">
                Update your inventory whenever you add, remove, or change AI systems. Maintain a change log.
              </p>
            </div>
            <div>
              <h3 className="text-h4 font-bold mb-3">Document Shadow AI</h3>
              <p className="text-body text-gray-subtle">
                Don't ignore shadow AI. Document it and establish governance. It's better to acknowledge and manage it than to have it discovered during a review.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-h2 font-bold mb-4">Checklist</h2>
          <Card variant="minimal" className="p-6">
            <ul className="space-y-3 text-body text-gray-subtle">
              <li>✓ All AI systems documented</li>
              <li>✓ Third-party tools included</li>
              <li>✓ Shadow AI usage documented</li>
              <li>✓ Each system has an owner</li>
              <li>✓ Risk classifications assigned</li>
              <li>✓ Data types documented</li>
              <li>✓ Inventory is exportable</li>
              <li>✓ Change log maintained</li>
            </ul>
          </Card>
        </div>

        <div>
          <h2 className="text-h2 font-bold mb-4">Related Resources</h2>
          <div className="space-y-2 text-body text-gray-subtle">
            <p>
              <Link href="/evidence-pack" className="underline">Learn about Evidence Packs</Link>
            </p>
            <p>
              <Link href="/resources/shadow-ai-discovery" className="underline">Shadow AI Discovery Guide</Link>
            </p>
            <p>
              <Link href="/resources/how-to-document-ai-risk-classification" className="underline">Risk Classification Guide</Link>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-h2 font-bold mb-4">Frequently Asked Questions</h2>
          <FAQ
            items={[
              {
                question: 'What if I don\'t know all the AI systems in use?',
                answer: 'Start with what you know and expand through surveys and discovery. It\'s better to have an incomplete inventory that you\'re actively improving than no inventory at all.',
              },
              {
                question: 'Do I need to document AI tools used for internal purposes only?',
                answer: 'Yes. Document all AI systems regardless of whether they process customer data. Procurement teams want to understand your complete AI usage.',
              },
              {
                question: 'How detailed should the inventory be?',
                answer: 'Include enough detail to understand what each system does, who owns it, and how it\'s classified. Avoid excessive technical detail that doesn\'t add value for procurement reviews.',
              },
              {
                question: 'What if a vendor adds AI features to an existing tool?',
                answer: 'Update your inventory when vendors add AI features. Treat it as a new system or significant change to an existing system.',
              },
            ]}
          />
        </div>
      </div>
    </ResourceLayout>
  )
}

