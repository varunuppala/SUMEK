# Quick Start - Email Configuration

Follow these 5 simple steps to enable the contact form:

## 1️⃣ Create EmailJS Account (2 minutes)
1. Go to https://www.emailjs.com/
2. Sign up with `karthik.gannaman@gmail.com`
3. Verify your email

## 2️⃣ Connect Gmail (1 minute)
1. In EmailJS dashboard → **Email Services** → **Add New Service**
2. Select **Gmail**
3. Click **Connect Account** and authorize

## 3️⃣ Create Template (2 minutes)
1. Go to **Email Templates** → **Create New Template**
2. Set **To Email**: `karthik.gannaman@gmail.com`
3. Set **Subject**: `New Contact Form - {{name}}`
4. Set **Reply-To**: `{{email}}`
5. Copy this template body:

```
New Contact Form Submission

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: {{name}}
Email: {{email}}
Company: {{company}}

Message:
{{message}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply directly to respond to the sender.
```

6. **Save** and copy the **Template ID**

## 4️⃣ Get Your Credentials (1 minute)
1. **Service ID**: From Email Services page (e.g., `service_abc1234`)
2. **Template ID**: From the template you just created (e.g., `template_xyz5678`)  
3. **Public Key**: Account → General → Public Key (e.g., `Ht4bN2kP9qL5mR8s`)

## 5️⃣ Update the Code (1 minute)
Open `src/components/Contact.jsx` and replace these lines (around line 33-35):

```javascript
const serviceId = 'service_abc1234';      // ← Paste your Service ID
const templateId = 'template_xyz5678';    // ← Paste your Template ID
const publicKey = 'Ht4bN2kP9qL5mR8s';     // ← Paste your Public Key
```

## ✅ Done!

Test the form:
```bash
npm run dev
```

Go to Contact page → Fill form → Click "Send Message"

Check `karthik.gannaman@gmail.com` inbox! 📧

---

## 🔒 For Production (GitHub Pages)

Add these as repository secrets:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Then update Contact.jsx to use:
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

---

## 📝 Notes

- Free tier: 200 emails/month (upgrade if needed)
- All emails go to: `karthik.gannaman@gmail.com`
- You can reply directly from your inbox
- Takes ~7 minutes total to set up

Need help? See `EMAILJS_SETUP.md` for detailed instructions.
