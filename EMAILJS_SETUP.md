# EmailJS Setup Guide

Follow these steps to set up email functionality for the contact form:

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## 2. Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** as your email provider
4. Click **Connect Account** and sign in with `karthik.gannaman@gmail.com`
5. Authorize EmailJS to send emails on your behalf
6. Note down your **Service ID** (e.g., `service_xxxxxxx`)

**Important**: The emails will be sent TO `karthik.gannaman@gmail.com` (configured in the template) and FROM the connected Gmail account.

## 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Configure the template:

**To Email**: `karthik.gannaman@gmail.com` (or use your connected email service's address)

**Subject**: `New Contact Form Submission from {{name}}`

**Content/Body**:
```
New message from S & U MEK Engineers website contact form:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM: {{name}}
EMAIL: {{email}}
COMPANY: {{company}}

MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sent via: S & U MEK Engineers Website
Time: {{date}}
```

**Reply-To**: `{{email}}` (This allows you to reply directly to the sender)

4. Save the template and note down your **Template ID**

## 4. Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. Copy it

## 5. Configure the Application

### Option A: Using Environment Variables (Recommended for Production)

1. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

2. Edit `.env` and add your credentials:
```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

3. Update `src/components/Contact.jsx` to use environment variables:
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

### Option B: Direct Configuration (Quick Start)

Open `src/components/Contact.jsx` and replace the placeholders:

```javascript
const serviceId = 'service_xxxxxxx'; // Your Service ID
const templateId = 'template_xxxxxxx'; // Your Template ID
const publicKey = 'xxxxxxxxxxxxxxx'; // Your Public Key
```

## 6. Test the Form

1. Start the development server:
```bash
npm run dev
```

2. Go to the Contact page
3. Fill out the form and click "Send Message"
4. Check your email inbox for the message

## 7. Email Template Variables

Make sure your EmailJS template includes these variables:
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email
- `{{company}}` - Sender's company (optional)
- `{{message}}` - The message content

## 8. Email Flow

Here's how it works:
1. User fills out the contact form on your website
2. EmailJS sends the form data to your template
3. Email is sent TO: `karthik.gannaman@gmail.com`
4. Email is FROM: Your connected Gmail account
5. Reply-To is set to the user's email ({{email}})
6. You can reply directly to the sender from your inbox

**All contact form submissions will be sent to `karthik.gannaman@gmail.com`**

## 9. For GitHub Pages Deployment

For the live site on GitHub Pages, you'll need to add environment variables:

1. Go to your repository Settings
2. Navigate to **Secrets and variables** → **Actions**
3. Add the three environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

4. Update your GitHub Actions workflow to use these secrets

## Troubleshooting

### Email not sending?
- Check browser console for errors
- Verify all three IDs are correct
- Make sure your EmailJS service is active
- Check EmailJS dashboard for error logs

### Rate limiting?
- Free tier: 200 emails/month
- Upgrade to paid plan if needed

### Emails going to spam?
- Add your domain to EmailJS
- Configure SPF/DKIM records (advanced)

## Security Note

⚠️ **Important**: Never commit your `.env` file to Git. It's already in `.gitignore`.

For production, use environment variables or a secrets management service.

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/
