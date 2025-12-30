// Dynamic import for jsPDF to avoid SSR issues
let jsPDF: any = null

const getJsPDF = async () => {
  if (typeof window === 'undefined') return null
  if (!jsPDF) {
    const jspdfModule = await import('jspdf')
    jsPDF = jspdfModule.default
  }
  return jsPDF
}

interface PDFContent {
  title: string
  content: string[]
}

const pdfContents: Record<string, PDFContent> = {
  'eu-ai-act-compliance-checklist': {
    title: 'EU AI Act Compliance Checklist',
    content: [
      'EU AI Act Compliance Checklist',
      '',
      'This checklist helps guide your compliance journey with the EU AI Act.',
      '',
      '□ Risk Categorization',
      '  • Determine if your AI system is prohibited',
      '  • Categorize as minimal, limited, high, or prohibited risk',
      '  • Document risk assessment methodology',
      '',
      '□ High-Risk AI Systems Requirements',
      '  • Quality management system',
      '  • Risk management system',
      '  • Data governance documentation',
      '  • Technical documentation',
      '  • Record-keeping systems',
      '  • Transparency and user information',
      '  • Human oversight',
      '  • Accuracy, robustness, and cybersecurity',
      '',
      '□ General-Purpose AI Requirements',
      '  • Technical documentation',
      '  • Training data transparency',
      '  • Copyright compliance',
      '  • Energy efficiency reporting',
      '',
      '□ Prohibited Practices',
      '  • Ensure no use of prohibited AI practices',
      '  • Review and document compliance',
      '',
      '□ Conformity Assessment',
      '  • Complete conformity assessment (if high-risk)',
      '  • Obtain CE marking (if required)',
      '  • Register in EU database (if high-risk)',
      '',
      '□ Ongoing Compliance',
      '  • Monitor for changes in AI Act requirements',
      '  • Maintain documentation',
      '  • Update systems as needed',
      '  • Annual compliance review',
      '',
      'For more information, visit ProvenAI.com or consult with compliance experts.',
    ],
  },
  'nist-ai-rmf-quick-start': {
    title: 'NIST AI RMF Quick Start Guide',
    content: [
      'NIST AI Risk Management Framework - Quick Start Guide',
      '',
      'The NIST AI RMF provides a flexible, voluntary framework for managing AI risks.',
      '',
      'CORE FUNCTIONS:',
      '',
      '1. GOVERN - Establish policies and procedures',
      '   • Culture: Foster risk management culture',
      '   • Policies: Document risk policies',
      '   • Processes: Establish risk processes',
      '   • People: Assign responsibilities',
      '',
      '2. MAP - Understand and measure risks',
      '   • Context: Define system context',
      '   • Risks: Identify AI risks',
      '   • Gaps: Assess risk management gaps',
      '   • Connections: Map AI components',
      '',
      '3. MEASURE - Assess risk metrics',
      '   • Performance: Measure AI performance',
      '   • Trust: Assess trustworthiness',
      '   • Impact: Evaluate societal impact',
      '   • Dataset: Analyze data quality',
      '',
      '4. MANAGE - Address and mitigate risks',
      '   • Risks: Prioritize and address risks',
      '   • Actions: Implement mitigation',
      '   • Tracking: Monitor risk management',
      '   • Testing: Validate effectiveness',
      '',
      'QUICK START STEPS:',
      '',
      '1. Start with GOVERN - Establish governance',
      '2. MAP your AI systems and risks',
      '3. MEASURE current risk levels',
      '4. MANAGE risks systematically',
      '5. Continuously improve',
      '',
      'ALIGNMENT WITH PROVENAI:',
      'ProvenAI certification criteria are aligned with NIST AI RMF principles,',
      'helping you demonstrate structured risk management.',
      '',
      'For detailed guidance, visit nist.gov/ai-rmf',
    ],
  },
  'ai-risk-assessment-template': {
    title: 'AI Risk Assessment Template',
    content: [
      'AI Risk Assessment Template',
      '',
      'Use this template to conduct structured AI risk assessments.',
      '',
      'SYSTEM INFORMATION:',
      'System Name: ________________',
      'Date of Assessment: ________________',
      'Assessor: ________________',
      '',
      'RISK CATEGORIES:',
      '',
      '1. TECHNICAL RISKS',
      '   □ Model performance degradation',
      '   □ Data quality issues',
      '   □ System failures',
      '   □ Security vulnerabilities',
      '',
      '2. OPERATIONAL RISKS',
      '   □ Deployment errors',
      '   □ Monitoring gaps',
      '   □ Human oversight failures',
      '   □ Process breakdowns',
      '',
      '3. SOCIETAL RISKS',
      '   □ Bias and discrimination',
      '   □ Privacy violations',
      '   □ Impact on employment',
      '   □ Social manipulation',
      '',
      '4. REGULATORY RISKS',
      '   □ Non-compliance with regulations',
      '   □ Legal liability',
      '   □ Reputational damage',
      '   □ Financial penalties',
      '',
      'RISK EVALUATION:',
      'For each identified risk, document:',
      '- Likelihood: Low / Medium / High',
      '- Impact: Low / Medium / High',
      '- Risk Level: Calculate (Likelihood × Impact)',
      '- Mitigation Strategy: ________________',
      '',
      'REVIEW SCHEDULE:',
      '- Initial Review: ________________',
      '- Quarterly Review: Yes / No',
      '- Annual Review: Yes / No',
      '',
      'For ProvenAI certified companies, this aligns with our Risk Management criterion.',
    ],
  },
  'iso-42001-mapping': {
    title: 'ISO 42001 Mapping Guide',
    content: [
      'ISO/IEC 42001 Mapping Guide',
      'How ProvenAI Criteria Map to ISO 42001',
      '',
      'ISO 42001 is the international standard for AI Management Systems.',
      'ProvenAI certification criteria are aligned with ISO 42001 requirements.',
      '',
      'MAPPING OVERVIEW:',
      '',
      'PROVENAI CRITERION → ISO 42001 REQUIREMENTS',
      '',
      '1. Truth-in-Marketing',
      '   • ISO 4.2: Understanding needs and expectations',
      '   • ISO 4.4: Context of organization',
      '',
      '2. Data Handling & Privacy',
      '   • ISO 6.1: Actions to address risks',
      '   • ISO 8.5: Production and service provision',
      '',
      '3. Model Monitoring & Evaluation',
      '   • ISO 9.1: Monitoring and evaluation',
      '   • ISO 10.2: Continual improvement',
      '',
      '4. Security Posture',
      '   • ISO 6.1: Actions to address risks',
      '   • ISO 8.1: Operational planning',
      '',
      '5. Risk Management',
      '   • ISO 6.1: Risk management',
      '   • ISO 10.2: Continual improvement',
      '',
      '6. Governance & Accountability',
      '   • ISO 5.1: Leadership and commitment',
      '   • ISO 8.2: Requirements for products',
      '',
      'CERTIFICATION ALIGNMENT:',
      'ProvenAI certification demonstrates alignment with ISO 42001.',
      '',
      'For more information, visit iso.org/standard/81230.html',
    ],
  },
  'vendor-due-diligence-checklist': {
    title: 'Vendor Due Diligence Checklist',
    content: [
      'Vendor Due Diligence Checklist',
      'For Buyers: Assess Vendor AI Compliance',
      '',
      'Use this checklist when evaluating AI vendors.',
      '',
      'TRUTH-IN-MARKETING:',
      '□ Marketing claims are verifiable',
      '□ Technical evidence matches claims',
      '□ No exaggerated capabilities',
      '□ ProvenAI certified (if applicable)',
      '',
      'DATA HANDLING & PRIVACY:',
      '□ Privacy policy documented',
      '□ GDPR compliance demonstrated',
      '□ Data security measures in place',
      '□ Data retention policies clear',
      '',
      'MODEL MONITORING & EVALUATION:',
      '□ Ongoing monitoring processes',
      '□ Error tracking systems',
      '□ Performance metrics tracked',
      '□ Quality assurance processes',
      '',
      'SECURITY POSTURE:',
      '□ Security controls documented',
      '□ Access management procedures',
      '□ Vulnerability management',
      '□ Incident response plan',
      '',
      'RISK MANAGEMENT:',
      '□ Risk assessment processes',
      '□ Risk mitigation strategies',
      '□ Alignment with NIST AI RMF',
      '',
      'GOVERNANCE & ACCOUNTABILITY:',
      '□ Governance structures in place',
      '□ Human oversight mechanisms',
      '□ Rollback/disable procedures',
      '',
      'EU AI ACT COMPLIANCE:',
      '□ Risk categorization documented',
      '□ Compliance with EU AI Act requirements',
      '□ Conformity assessment completed (if high-risk)',
      '',
      'CERTIFICATION STATUS:',
      '□ ProvenAI certified: Yes / No',
      '□ Other certifications: ________________',
      '',
      'For vendors with ProvenAI certification, many checks are pre-verified.',
    ],
  },
  'ai-governance-best-practices': {
    title: 'AI Governance Best Practices',
    content: [
      'AI Governance Best Practices',
      '',
      'Effective AI governance ensures responsible AI development.',
      '',
      'ESTABLISH GOVERNANCE FRAMEWORK:',
      '',
      '1. Leadership & Commitment',
      '   • Executive sponsorship',
      '   • Clear accountability',
      '   • Resource allocation',
      '',
      '2. Policies & Procedures',
      '   • AI ethics policy',
      '   • Risk management policy',
      '   • Data governance policy',
      '   • Security policies',
      '',
      '3. Risk Management',
      '   • Risk assessment processes',
      '   • Risk categorization',
      '   • Mitigation strategies',
      '   • Continuous monitoring',
      '',
      '4. Human Oversight',
      '   • Human-in-the-loop processes',
      '   • Review mechanisms',
      '   • Intervention capabilities',
      '   • Training programs',
      '',
      '5. Transparency & Accountability',
      '   • Document AI systems',
      '   • Explain decisions',
      '   • Maintain audit trails',
      '   • Report incidents',
      '',
      '6. Data Governance',
      '   • Data quality standards',
      '   • Privacy compliance',
      '   • Data minimization',
      '   • Access controls',
      '',
      '7. Security & Safety',
      '   • Security controls',
      '   • Vulnerability management',
      '   • Incident response',
      '   • Testing protocols',
      '',
      '8. Monitoring & Evaluation',
      '   • Performance monitoring',
      '   • Error tracking',
      '   • Bias detection',
      '   • Continuous improvement',
      '',
      '9. Compliance',
      '   • Regulatory mapping',
      '   • Compliance monitoring',
      '   • Audit processes',
      '   • Documentation',
      '',
      '10. Training & Awareness',
      '    • Staff training',
      '    • Awareness programs',
      '    • Competency development',
      '',
      'IMPLEMENTATION CHECKLIST:',
      '□ Governance structure established',
      '□ Policies documented',
      '□ Processes defined',
      '□ Responsibilities assigned',
      '□ Training completed',
      '□ Monitoring in place',
      '',
      'ALIGNMENT WITH STANDARDS:',
      'These practices align with ISO/IEC 42001, NIST AI RMF, and EU AI Act.',
      '',
      'ProvenAI certification helps verify your governance maturity.',
      '',
      'For more guidance, visit ProvenAI.com/resources',
    ],
  },
}

export const downloadPDFGuide = async (guideKey: string) => {
  const guide = pdfContents[guideKey]
  if (!guide) {
    console.error(`Guide not found: ${guideKey}`)
    return
  }

  const JsPDF = await getJsPDF()
  if (!JsPDF) {
    console.error('jsPDF not available')
    return
  }

  const doc = new JsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20
  const maxWidth = pageWidth - 2 * margin
  let yPosition = margin

  // Add title
  doc.setFontSize(18)
  doc.setFont('helvetica', 'bold')
  const titleLines = doc.splitTextToSize(guide.title, maxWidth)
  doc.text(titleLines, margin, yPosition)
  yPosition += titleLines.length * 10 + 10

  // Add content
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')

  guide.content.forEach((line) => {
    if (yPosition > pageHeight - margin - 20) {
      doc.addPage()
      yPosition = margin
    }

    if (line.trim() === '') {
      yPosition += 5
    } else {
      const lines = doc.splitTextToSize(line, maxWidth)
      lines.forEach((textLine: string) => {
        if (yPosition > pageHeight - margin - 20) {
          doc.addPage()
          yPosition = margin
        }
        doc.text(textLine, margin, yPosition)
        yPosition += 7
      })
    }
  })

  // Save the PDF
  const filename = guideKey.replace(/-/g, '_') + '.pdf'
  doc.save(filename)
}

