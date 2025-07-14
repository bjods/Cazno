# Cazno Automations Website

A modern web application for Cazno Automations, specializing in AI workflow automation for home service businesses.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd cazno-automation
   ```

2. **Run the setup script**
   ```bash
   ./setup.sh
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Manual Setup (if setup.sh doesn't work)

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create environment file**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

3. **Clear cache and start**
   ```bash
   rm -rf .next
   npm run dev
   ```

## 🏗️ Project Structure

```
cazno-automation/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout with dark theme
│   │   ├── globals.css        # Global styles and Tailwind CSS
│   │   ├── login/             # Authentication page
│   │   ├── contact/           # Contact form page
│   │   └── dashboard/         # Protected dashboards
│   │       ├── admin/         # Admin portal
│   │       └── client/        # Client portal
│   ├── components/            # Reusable React components
│   └── lib/                   # Utilities and configurations
│       └── supabase/          # Supabase client setup
├── public/                    # Static assets
├── .env.local                 # Environment variables (create this)
├── package.json               # Dependencies
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── supabase-schema.sql        # Database schema
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **Backend**: Supabase (PostgreSQL)
- **Language**: TypeScript

## 🔧 Configuration

### Environment Variables

The app requires these environment variables in `.env.local`:

```env
# Required for forms and authentication
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Required for server-side operations
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

**Note**: The site will still load without Supabase credentials, but forms and authentication won't work.

### Supabase Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Go to SQL Editor in your Supabase dashboard
3. Run the SQL from `supabase-schema.sql`
4. Copy your project URL and keys to `.env.local`

## 🚨 Troubleshooting

### "This site can't be reached"
- Make sure the server is running (`npm run dev`)
- Check if port 3000 is already in use: `lsof -i :3000`
- Try a different port: `npm run dev -- -p 3001`

### CSS not loading
1. Clear Next.js cache: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Supabase errors
- The site works without Supabase credentials
- Forms will show success but won't save data
- To enable full functionality, add valid Supabase credentials

### Build errors
```bash
# Clear everything and start fresh
rm -rf node_modules .next
rm package-lock.json
npm install
npm run dev
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Pages

- `/` - Homepage with all sections
- `/contact` - Contact form
- `/login` - Authentication
- `/dashboard/admin` - Admin dashboard (requires auth)
- `/dashboard/client` - Client portal (requires auth)

## 🎨 Features

- Dark theme with Apple-like design
- Responsive layout
- Animated sections
- Contact form with Supabase integration
- Role-based authentication
- Admin dashboard with analytics
- Client portal for automation tracking

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Vercel (recommended):
   ```bash
   npx vercel
   ```

3. Set environment variables in your hosting platform

## 📄 License

This project is private and proprietary to Cazno Automations.