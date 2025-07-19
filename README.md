# Interior Design Student Portfolio

A modern, responsive portfolio website built for interior design students to showcase their projects, skills, and academic achievements.

## 🌟 Features

- **Modern Design**: Clean, professional layout with warm earth-tone color palette
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Student-Focused**: Sections for projects, resume, and contact information
- **Fast Performance**: Built with Next.js for optimal loading speed
- **SEO Optimized**: Static generation for better search engine visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Fonts**: Playfair Display (serif) + Inter (sans-serif)
- **Deployment**: Optimized for Vercel

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd miichan-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and fonts
│   ├── layout.tsx           # Root layout
│   └── page.tsx            # Home page
└── components/
    ├── Header.tsx          # Navigation component
    ├── Hero.tsx            # Landing section
    ├── About.tsx           # About section
    ├── Projects.tsx        # Projects showcase
    ├── Resume.tsx          # Resume/CV section
    ├── Contact.tsx         # Contact form
    └── Footer.tsx          # Footer component
```

## 🎨 Customization

### Updating Personal Information

1. **Header**: Change name in `src/components/Header.tsx`
2. **Hero**: Update title and description in `src/components/Hero.tsx`
3. **About**: Modify personal info and skills in `src/components/About.tsx`
4. **Projects**: Add your projects in `src/components/Projects.tsx`
5. **Resume**: Update education and experience in `src/components/Resume.tsx`
6. **Contact**: Update contact information in `src/components/Contact.tsx`

### Adding Images

Place your images in the `public/` folder and reference them in components:

```tsx
<img src="/your-image.jpg" alt="Description" />
```

### Color Customization

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  accent: {
    // Your accent colors
  }
}
```

## 📱 Sections Overview

- **Hero**: Eye-catching landing with call-to-action buttons
- **About**: Personal introduction, skills, and design philosophy
- **Projects**: Academic and personal design projects with details
- **Resume**: Education, experience, awards, and downloadable CV
- **Contact**: Contact form and professional information

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically deploy your site

### Build for Production

```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and pull requests to improve this portfolio template.

---

Built with ❤️ for interior design students
