# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a Next.js portfolio website for an interior design student. The project uses:

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom color palette
- **Responsive design** optimized for portfolio showcase

## Design System

### Colors

- Primary: Warm earth tones (#a68470 and variations)
- Accent: Complementary warm tones (#966f61 and variations)
- Typography: Dark neutrals for readability

### Typography

- **Serif font (Playfair Display)**: Used for headings and brand elements
- **Sans-serif font (Inter)**: Used for body text and UI elements

## Component Structure

The portfolio is organized into these main sections:

- `Header`: Fixed navigation with mobile menu
- `Hero`: Landing section with call-to-action
- `About`: Personal introduction and skills
- `Projects`: Academic and personal design projects
- `Resume`: Education, experience, and achievements
- `Contact`: Contact form and information
- `Footer`: Links and contact details

## Key Features

- **Student-focused content**: Emphasizes academic projects and learning
- **Mobile-first responsive design**
- **Smooth scrolling navigation**
- **Contact form** for inquiries
- **Resume download** functionality
- **Project showcase** with categorization

## Development Notes

- All components are in `/src/components/`
- Custom Tailwind colors defined in `tailwind.config.js`
- Smooth animations using CSS and Tailwind utilities
- Optimized for static generation and deployment on Vercel
