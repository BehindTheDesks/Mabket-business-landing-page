# 🚀 MABKET - Smart Business Management

MABKET is a high-performance, modern landing page for a business management platform designed specifically for SMEs. Built with a bold **Neo-Brutalist** aesthetic, it combines striking design with seamless user experiences to capture leads and showcase product value.

![MABKET Logo](public/image/logo.png)

## ✨ Features

- **🎯 Multi-Step Waitlist Funnel**: Interactive, GSAP-animated form for lead generation with database integration.
- **📧 Automated Email Pipeline**: Instant welcome emails via Resend and React Email.
- **📱 Mobile-First Design**: Fully responsive navigation and layout for all devices.
- **🎨 Neo-Brutalist Aesthetic**: Bold typography, sharp borders, and vibrant colors (Amber Flame, Sapphire, Cool Horizon).
- **📈 Business Insights**: Sections dedicated to showcasing order management, inventory tracking, and financial analytics.
- **⚖️ Privacy Centric**: Comprehensive Privacy Policy page included.
- **💬 Interactive FAQ**: Playful, accordion-style FAQ section.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [GSAP](https://greensock.com/gsap/) (GreenSock Animation Platform)
- **Database**: [Supabase](https://supabase.com/)
- **Email**: [Resend](https://resend.com/) & [React Email](https://react.email/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- A Supabase account
- A Resend API key

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BehindTheDesks/Mabket-business-landing-page.git
   cd Mabket-business-landing-page
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add your credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   RESEND_API_KEY=your_resend_api_key
   RESEND_FROM_EMAIL=hello@yourdomain.com
   CONTACT_DESTINATION_EMAIL=admin@yourdomain.com
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```text
├── src/
│   ├── app/            # Next.js App Router (Pages & API)
│   ├── component/      # Reusable UI components (Header, Footer, Hero, etc.)
│   ├── emails/         # React Email templates
│   ├── utils/          # Supabase client and utility functions
│   └── assets/         # Static assets and images
├── public/             # Publicly accessible images and icons
└── tailwind.config.ts  # Tailwind CSS configuration
```

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the site or add new features:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Built with ❤️ by the **Behind The Desks** team.
