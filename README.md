# Jan Carlo Espiritu - Portfolio

A modern, beautiful portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design** - Beautiful animations and gradient effects
- **Fully Responsive** - Works perfectly on all devices
- **Smooth Animations** - Powered by Framer Motion
- **Contact Form** - Functional contact form with Web3Forms
- **SEO Optimized** - Proper meta tags and structure
- **Fast Performance** - Built with Next.js 15 and optimized for speed

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Form Handling:** Web3Forms

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🔧 Setup Contact Form

The contact form uses Web3Forms (free tier: 250 submissions/month).

### Steps to activate:

1. Go to [https://web3forms.com](https://web3forms.com)
2. Sign up for a free account
3. Create a new form and get your **Access Key**
4. Open `components/Contact.tsx`
5. Replace `YOUR_ACCESS_KEY_HERE` on line 29 with your actual access key:

```typescript
access_key: "YOUR_ACCESS_KEY_HERE", // Replace with your key
```

6. Save the file - your contact form is now functional!

### Alternative: Use environment variable (recommended)

1. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

2. Update `components/Contact.tsx`:

```typescript
access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
```

3. Restart your dev server

## 📝 Customization

### Update Your Information

- **Personal Details:** Edit `components/Hero.tsx`, `components/About.tsx`
- **Skills:** Edit `components/Skills.tsx` - Update skill names and percentages
- **Projects:** Edit `components/Projects.tsx` - Add your real projects
- **Social Links:** Edit `components/Contact.tsx` - Update social media URLs
- **Email:** Update in `components/Contact.tsx`

### Change Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  background: "var(--background)",
  foreground: "var(--foreground)",
  // Add your custom colors
},
```

## 📄 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx          # Main page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Navbar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Projects.tsx      # Projects section
│   └── Contact.tsx       # Contact section
├── public/               # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variable: `NEXT_PUBLIC_WEB3FORMS_KEY`
5. Deploy!

### Other Platforms

- **Netlify:** Works out of the box
- **Cloudflare Pages:** Supports Next.js
- **AWS Amplify:** Full Next.js support

## 📧 Contact

For any questions or suggestions, feel free to reach out!

---

Built with ❤️ using Next.js, TypeScript & Tailwind CSS
