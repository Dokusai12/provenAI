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

// Helper function to decode HTML entities
const decodeHtmlEntities = (text: string): string => {
  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&nbsp;': ' ',
  }
  return text.replace(/&[#\w]+;/g, (entity) => entities[entity] || entity)
}

// Helper function to detect line type
const getLineType = (line: string): 'header' | 'subheader' | 'bullet' | 'subbullet' | 'number' | 'text' | 'empty' => {
  const trimmed = line.trim()
  if (!trimmed) return 'empty'
  
  // All caps with colon = section header
  if (trimmed === trimmed.toUpperCase() && trimmed.endsWith(':')) return 'header'
  
  // Starts with number and period = numbered list
  if (/^\d+\.\s/.test(trimmed)) return 'number'
  
  // Starts with checkbox
  if (/^□/.test(trimmed)) return 'bullet'
  
  // Starts with bullet point
  if (/^[•·-]\s/.test(trimmed)) return 'bullet'
  
  // Indented bullet (starts with spaces then bullet)
  if (/^\s{2,}[•·-]\s/.test(trimmed)) return 'subbullet'
  
  // Indented text (starts with 2+ spaces but no bullet)
  if (/^\s{2,}/.test(trimmed) && !/^\s{2,}[•·-]/.test(trimmed)) return 'subbullet'
  
  return 'text'
}

// Brand colors
const COLORS = {
  black: [0, 0, 0],
  darkGray: [26, 26, 26],
  mediumGray: [42, 42, 42],
  lightGray: [245, 245, 245],
  white: [255, 255, 255],
}

const pdfContents: Record<string, PDFContent> = {
  'eu-ai-act-compliance-checklist': {
    title: 'EU AI Act Compliance Checklist',
    content: [
      'EU AI Act Compliance Checklist',
      '',
      'This checklist helps guide your compliance journey with the EU AI Act.',
      '',
      'RISK CATEGORIZATION:',
      '□ Determine if your AI system is prohibited',
      '  • Categorize as minimal, limited, high, or prohibited risk',
      '  • Document risk assessment methodology',
      '',
      'HIGH-RISK AI SYSTEMS REQUIREMENTS:',
      '□ Quality management system',
      '□ Risk management system',
      '□ Data governance documentation',
      '□ Technical documentation',
      '□ Record-keeping systems',
      '□ Transparency and user information',
      '□ Human oversight',
      '□ Accuracy, robustness, and cybersecurity',
      '',
      'GENERAL-PURPOSE AI REQUIREMENTS:',
      '□ Technical documentation',
      '□ Training data transparency',
      '□ Copyright compliance',
      '□ Energy efficiency reporting',
      '',
      'PROHIBITED PRACTICES:',
      '□ Ensure no use of prohibited AI practices',
      '□ Review and document compliance',
      '',
      'CONFORMITY ASSESSMENT:',
      '□ Complete conformity assessment (if high-risk)',
      '□ Obtain CE marking (if required)',
      '□ Register in EU database (if high-risk)',
      '',
      'ONGOING COMPLIANCE:',
      '□ Monitor for changes in AI Act requirements',
      '□ Maintain documentation',
      '□ Update systems as needed',
      '□ Annual compliance review',
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
      '  • Culture: Foster risk management culture',
      '  • Policies: Document risk policies',
      '  • Processes: Establish risk processes',
      '  • People: Assign responsibilities',
      '',
      '2. MAP - Understand and measure risks',
      '  • Context: Define system context',
      '  • Risks: Identify AI risks',
      '  • Gaps: Assess risk management gaps',
      '  • Connections: Map AI components',
      '',
      '3. MEASURE - Assess risk metrics',
      '  • Performance: Measure AI performance',
      '  • Trust: Assess trustworthiness',
      '  • Impact: Evaluate societal impact',
      '  • Dataset: Analyze data quality',
      '',
      '4. MANAGE - Address and mitigate risks',
      '  • Risks: Prioritize and address risks',
      '  • Actions: Implement mitigation',
      '  • Tracking: Monitor risk management',
      '  • Testing: Validate effectiveness',
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
      '□ Model performance degradation',
      '□ Data quality issues',
      '□ System failures',
      '□ Security vulnerabilities',
      '',
      '2. OPERATIONAL RISKS',
      '□ Deployment errors',
      '□ Monitoring gaps',
      '□ Human oversight failures',
      '□ Process breakdowns',
      '',
      '3. SOCIETAL RISKS',
      '□ Bias and discrimination',
      '□ Privacy violations',
      '□ Impact on employment',
      '□ Social manipulation',
      '',
      '4. REGULATORY RISKS',
      '□ Non-compliance with regulations',
      '□ Legal liability',
      '□ Reputational damage',
      '□ Financial penalties',
      '',
      'RISK EVALUATION:',
      'For each identified risk, document:',
      '• Likelihood: Low / Medium / High',
      '• Impact: Low / Medium / High',
      '• Risk Level: Calculate (Likelihood × Impact)',
      '• Mitigation Strategy: ________________',
      '',
      'REVIEW SCHEDULE:',
      '• Initial Review: ________________',
      '• Quarterly Review: Yes / No',
      '• Annual Review: Yes / No',
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
      '  • ISO 4.2: Understanding needs and expectations',
      '  • ISO 4.4: Context of organization',
      '',
      '2. Data Handling & Privacy',
      '  • ISO 6.1: Actions to address risks',
      '  • ISO 8.5: Production and service provision',
      '',
      '3. Model Monitoring & Evaluation',
      '  • ISO 9.1: Monitoring and evaluation',
      '  • ISO 10.2: Continual improvement',
      '',
      '4. Security Posture',
      '  • ISO 6.1: Actions to address risks',
      '  • ISO 8.1: Operational planning',
      '',
      '5. Risk Management',
      '  • ISO 6.1: Risk management',
      '  • ISO 10.2: Continual improvement',
      '',
      '6. Governance & Accountability',
      '  • ISO 5.1: Leadership and commitment',
      '  • ISO 8.2: Requirements for products',
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
      '  • Executive sponsorship',
      '  • Clear accountability',
      '  • Resource allocation',
      '',
      '2. Policies & Procedures',
      '  • AI ethics policy',
      '  • Risk management policy',
      '  • Data governance policy',
      '  • Security policies',
      '',
      '3. Risk Management',
      '  • Risk assessment processes',
      '  • Risk categorization',
      '  • Mitigation strategies',
      '  • Continuous monitoring',
      '',
      '4. Human Oversight',
      '  • Human-in-the-loop processes',
      '  • Review mechanisms',
      '  • Intervention capabilities',
      '  • Training programs',
      '',
      '5. Transparency & Accountability',
      '  • Document AI systems',
      '  • Explain decisions',
      '  • Maintain audit trails',
      '  • Report incidents',
      '',
      '6. Data Governance',
      '  • Data quality standards',
      '  • Privacy compliance',
      '  • Data minimization',
      '  • Access controls',
      '',
      '7. Security & Safety',
      '  • Security controls',
      '  • Vulnerability management',
      '  • Incident response',
      '  • Testing protocols',
      '',
      '8. Monitoring & Evaluation',
      '  • Performance monitoring',
      '  • Error tracking',
      '  • Bias detection',
      '  • Continuous improvement',
      '',
      '9. Compliance',
      '  • Regulatory mapping',
      '  • Compliance monitoring',
      '  • Audit processes',
      '  • Documentation',
      '',
      '10. Training & Awareness',
      '  • Staff training',
      '  • Awareness programs',
      '  • Competency development',
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
    throw new Error(`Guide not found: ${guideKey}`)
  }

  const JsPDF = await getJsPDF()
  if (!JsPDF) {
    throw new Error('PDF generation not available')
  }

  const doc = new JsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20
  const headerHeight = 25
  const footerHeight = 20
  const contentTop = margin + headerHeight
  const contentBottom = pageHeight - footerHeight
  const maxWidth = pageWidth - 2 * margin
  let yPosition = contentTop
  let pageNumber = 1

  // Add header and footer to each page
  const addHeaderFooter = (pageNum: number, totalPages: number) => {
    // Header with brand bar
    doc.setFillColor(...COLORS.black)
    doc.rect(0, 0, pageWidth, 3, 'F')
    
    // ProvenAI branding
    doc.setTextColor(...COLORS.darkGray)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text('PROVENAI', margin, margin + 8)
    
    // Document metadata
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(...COLORS.mediumGray)
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    doc.text(`Generated: ${date}`, pageWidth - margin, margin + 8, { align: 'right' })
    
    // Header separator line
    doc.setDrawColor(...COLORS.mediumGray)
    doc.setLineWidth(0.5)
    doc.line(margin, margin + headerHeight - 5, pageWidth - margin, margin + headerHeight - 5)
    
    // Footer
    doc.setFillColor(...COLORS.lightGray)
    doc.rect(0, pageHeight - footerHeight, pageWidth, footerHeight, 'F')
    
    // Footer text
    doc.setFontSize(8)
    doc.setTextColor(...COLORS.mediumGray)
    doc.setFont('helvetica', 'normal')
    doc.text('ProvenAI - AI Safety & Compliance Certification', margin, pageHeight - 10)
    doc.text(`Page ${pageNum}${totalPages > 1 ? ` of ${totalPages}` : ''}`, pageWidth - margin, pageHeight - 10, { align: 'right' })
    doc.text('www.provenai.com', pageWidth / 2, pageHeight - 10, { align: 'center' })
  }

  // Helper function to add new page
  const addNewPage = () => {
    doc.addPage()
    pageNumber++
    yPosition = contentTop
    addHeaderFooter(pageNumber, 0) // Will update total pages later
  }

  // Helper function to check page break
  const checkPageBreak = (requiredSpace: number) => {
    if (yPosition + requiredSpace > contentBottom) {
      addNewPage()
      return true
    }
    return false
  }

  // Add header to first page
  addHeaderFooter(1, 0)

  // Title section with styling
  doc.setFillColor(...COLORS.lightGray)
  doc.roundedRect(margin, yPosition - 8, maxWidth, 20, 2, 2, 'F')
  
  doc.setFontSize(20)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...COLORS.black)
  const titleText = decodeHtmlEntities(guide.title)
  const titleLines = doc.splitTextToSize(titleText, maxWidth - 10)
  doc.text(titleLines, margin + 5, yPosition + 5)
  yPosition += titleLines.length * 8 + 15

  // Content processing
  let prevLineType: string = 'empty'

  guide.content.forEach((line) => {
    const decodedLine = decodeHtmlEntities(line)
    const trimmedLine = decodedLine.trim()
    const lineType = getLineType(decodedLine)

    // Skip empty lines but add spacing
    if (lineType === 'empty') {
      if (prevLineType === 'header') {
        yPosition += 8
      } else if (prevLineType !== 'empty') {
        yPosition += 6
      }
      prevLineType = 'empty'
      return
    }

    let currentX = margin
    let fontSize = 11
    let fontStyle: 'normal' | 'bold' = 'normal'
    let lineHeight = 7
    let textColor = COLORS.black

    // Format based on line type
    switch (lineType) {
      case 'header':
        // Section header with background bar
        fontSize = 14
        fontStyle = 'bold'
        lineHeight = 10
        textColor = COLORS.black
        
        checkPageBreak(15)
        
        // Header background bar
        doc.setFillColor(...COLORS.darkGray)
        doc.rect(margin, yPosition - 3, maxWidth, 8, 'F')
        
        currentX = margin + 5
        yPosition += 5
        break

      case 'number':
        fontSize = 11
        fontStyle = 'bold'
        lineHeight = 8
        textColor = COLORS.black
        currentX = margin
        break

      case 'bullet':
        fontSize = 11
        fontStyle = 'normal'
        lineHeight = 8
        textColor = COLORS.black
        
        // Draw checkbox or bullet
        checkPageBreak(lineHeight + 2)
        doc.setFillColor(...COLORS.white)
        doc.setDrawColor(...COLORS.black)
        doc.setLineWidth(0.5)
        
        const isCheckbox = /^□/.test(trimmedLine)
        if (isCheckbox) {
          // Draw checkbox
          doc.rect(margin, yPosition - 3, 4, 4, 'S')
          const cleanedText = trimmedLine.replace(/^□\s*/, '')
          currentX = margin + 8
          const textLines = doc.splitTextToSize(cleanedText, maxWidth - 15)
          doc.setFontSize(fontSize)
          doc.setFont('helvetica', fontStyle)
          doc.setTextColor(...textColor)
          textLines.forEach((textLine: string, idx: number) => {
            checkPageBreak(lineHeight)
            doc.text(textLine, currentX, yPosition)
            if (idx < textLines.length - 1) {
              yPosition += lineHeight
            }
          })
          yPosition += lineHeight
          prevLineType = lineType
          return
        } else {
          // Draw bullet point
          doc.circle(margin + 2, yPosition - 1, 1, 'F')
          const cleanedText = trimmedLine.replace(/^[•·-]\s*/, '')
          currentX = margin + 8
          const textLines = doc.splitTextToSize(cleanedText, maxWidth - 15)
          doc.setFontSize(fontSize)
          doc.setFont('helvetica', fontStyle)
          doc.setTextColor(...textColor)
          textLines.forEach((textLine: string, idx: number) => {
            checkPageBreak(lineHeight)
            doc.text(textLine, currentX, yPosition)
            if (idx < textLines.length - 1) {
              yPosition += lineHeight
            }
          })
          yPosition += lineHeight
          prevLineType = lineType
          return
        }

      case 'subbullet':
        fontSize = 10
        fontStyle = 'normal'
        lineHeight = 7
        textColor = COLORS.darkGray
        
        checkPageBreak(lineHeight + 2)
        doc.setFillColor(...COLORS.mediumGray)
        doc.circle(margin + 8, yPosition - 1, 0.8, 'F')
        
        const cleanedSub = trimmedLine.replace(/^[\s•·-]+/, '')
        currentX = margin + 14
        const subTextLines = doc.splitTextToSize(cleanedSub, maxWidth - 20)
        doc.setFontSize(fontSize)
        doc.setFont('helvetica', fontStyle)
        doc.setTextColor(...textColor)
        subTextLines.forEach((textLine: string, idx: number) => {
          checkPageBreak(lineHeight)
          doc.text(textLine, currentX, yPosition)
          if (idx < subTextLines.length - 1) {
            yPosition += lineHeight
          }
        })
        yPosition += lineHeight
        prevLineType = lineType
        return

      case 'text':
      default:
        fontSize = 11
        fontStyle = 'normal'
        lineHeight = 7
        textColor = COLORS.black
        currentX = margin
        break
    }

    // Set font and render text
    doc.setFontSize(fontSize)
    doc.setFont('helvetica', fontStyle)
    doc.setTextColor(...textColor)

    const textLines = doc.splitTextToSize(trimmedLine, maxWidth - (currentX - margin))
    
    textLines.forEach((textLine: string, idx: number) => {
      checkPageBreak(lineHeight)
      doc.text(textLine, currentX, yPosition)
      if (idx < textLines.length - 1) {
        yPosition += lineHeight
      }
    })

    yPosition += lineHeight
    prevLineType = lineType
  })

  // Update footer with total page count
  const totalPages = doc.internal.pages.length - 1
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    doc.setFillColor(...COLORS.lightGray)
    doc.rect(0, pageHeight - footerHeight, pageWidth, footerHeight, 'F')
    doc.setFontSize(8)
    doc.setTextColor(...COLORS.mediumGray)
    doc.text('ProvenAI - AI Safety & Compliance Certification', margin, pageHeight - 10)
    doc.text(`Page ${i}${totalPages > 1 ? ` of ${totalPages}` : ''}`, pageWidth - margin, pageHeight - 10, { align: 'right' })
    doc.text('www.provenai.com', pageWidth / 2, pageHeight - 10, { align: 'center' })
  }

  // Save the PDF
  const filename = guideKey.replace(/_/g, '-') + '.pdf'
  doc.save(filename)
}
