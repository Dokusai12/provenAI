// Test script to verify Resend is working
require('dotenv').config();
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function testResend() {
  console.log('Testing Resend...');
  console.log('API Key:', process.env.RESEND_API_KEY ? 'Set' : 'NOT SET');
  console.log('Contact Email:', process.env.CONTACT_EMAIL || 'NOT SET');
  
  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || 'sofiane@provenai.org',
      subject: 'Test Email from ProvenAI',
      html: '<p>This is a test email to verify Resend is working.</p>',
    });

    console.log('\nResend Response:');
    console.log(JSON.stringify(result, null, 2));

    if (result.error) {
      console.error('\n❌ ERROR:', result.error);
      return false;
    }

    if (result.data) {
      console.log('\n✅ SUCCESS! Email sent with ID:', result.data.id);
      return true;
    }
  } catch (error) {
    console.error('\n❌ EXCEPTION:', error);
    return false;
  }
}

testResend();

