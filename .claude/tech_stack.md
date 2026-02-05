# Tech Stack

## Package Manager
**bun** - Fast JavaScript runtime and package manager

## Framework & Runtime
- **Next.js 14+** - React framework with App Router
- **React 18+** - UI library
- **TypeScript** - Type safety

## Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Headless UI components built on Radix UI
- **Google Fonts** - Newsreader (display), Inter (body)

## Icons
- **Lucide React** - Modern icon library (consistent with shadcn)

## Project Structure
```
app/
├── layout.tsx              # Root layout with fonts, metadata
├── page.tsx                # Landing page
├── globals.css             # Global styles + Tailwind
├── produkt/
│   └── page.tsx
├── preis/
│   └── page.tsx
├── sicherheit/
│   └── page.tsx
├── ablauf/
│   └── page.tsx
├── faq/
│   └── page.tsx
└── components/
    ├── Navigation.tsx      # Fixed header with mobile menu
    ├── Footer.tsx          # Site footer
    └── ui/                 # shadcn components
```

## Commands
```bash
# Development
bun run dev

# Build
bun run build

# Install shadcn components
bunx shadcn add <component>

# Install packages
bun add <package>
```

## Design System

### Typography
- **Display**: `Newsreader` (serif) - elegant headlines
- **Body**: `Inter` (sans-serif) - clean readability

### Color Palette
```
--navy-900: #0f172a       (Primary text, headers)
--navy-800: #1e293b       (Secondary elements)
--navy-700: #334155       (Muted navy)
--slate-500: #64748b      (Secondary text)
--slate-200: #e2e8f0      (Borders)
--slate-50: #f8fafc       (Subtle backgrounds)
--white: #ffffff          (Primary background)
--accent: #3b82f6         (Subtle blue highlights)
```

## shadcn/ui Components Used
- `button` - Primary CTAs
- `accordion` - FAQ sections
- `card` - Feature/pricing cards
- `sheet` - Mobile navigation
- `separator` - Visual dividers

## Deployment
- Static export configured
- Output directory: `dist/`
