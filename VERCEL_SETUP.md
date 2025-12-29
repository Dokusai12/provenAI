# Vercel Environment Variables Setup

## Required Environment Variables

For the email functionality to work, you **MUST** set these environment variables in your Vercel project:

### 1. RESEND_API_KEY
- **Value**: `re_ZtbdUFUT_CkYUAqgpYk3n9rwpp8tZxvQP`
- **Purpose**: API key for Resend email service
- **Required for**: Contact form and Application form

### 2. CONTACT_EMAIL
- **Value**: `sofiane@provenai.org`
- **Purpose**: Email address where form submissions are sent
- **Required for**: Contact form and Application form

## How to Set Environment Variables in Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project (`provenAI`)
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Add each variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: `re_ZtbdUFUT_CkYUAqgpYk3n9rwpp8tZxvQP`
   - **Environment**: Select all (Production, Preview, Development)
   - Click **Save**
6. Repeat for `CONTACT_EMAIL`:
   - **Key**: `CONTACT_EMAIL`
   - **Value**: `sofiane@provenai.org`
   - **Environment**: Select all (Production, Preview, Development)
   - Click **Save**

## After Adding Variables

**IMPORTANT**: After adding environment variables, you **MUST** redeploy your application:

1. Go to **Deployments** tab
2. Click the **⋯** (three dots) menu on the latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger automatic redeploy

## Verification

After redeploying, check the Vercel function logs:
1. Go to **Deployments** → Select latest deployment
2. Click on a function (e.g., `/api/contact` or `/api/submit-application`)
3. Check the logs - you should see:
   - `RESEND_API_KEY exists: true`
   - `RESEND_API_KEY starts with "re_": true`

If you see `RESEND_API_KEY exists: false`, the variable is not set correctly.

## Troubleshooting

### Error: "Email service is not configured"
- **Cause**: `RESEND_API_KEY` is not set in Vercel
- **Solution**: Follow steps above to add the environment variable and redeploy

### Error persists after adding variables
- Make sure you selected **all environments** (Production, Preview, Development)
- Make sure you **redeployed** after adding the variables
- Check that the variable name is exactly `RESEND_API_KEY` (case-sensitive)
- Check that the value doesn't have extra spaces or quotes

### Still not working?
1. Check Vercel function logs for detailed error messages
2. Verify the API key is correct and active in Resend dashboard
3. Make sure you're checking the correct deployment (Production vs Preview)

