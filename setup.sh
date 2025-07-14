#!/bin/bash

echo "🚀 Setting up Cazno Automations..."

# Remove old node_modules and lock files
echo "📦 Cleaning up old dependencies..."
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock
rm -f pnpm-lock.yaml

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create directories if they don't exist
echo "📁 Creating directories..."
mkdir -p src/components
mkdir -p src/lib/supabase
mkdir -p src/app/dashboard/admin
mkdir -p src/app/dashboard/client

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "🔐 Creating .env.local file..."
    cat > .env.local << EOL
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
EOL
    echo "⚠️  Please update .env.local with your actual Supabase credentials"
fi

# Clear Next.js cache
echo "🧹 Clearing cache..."
rm -rf .next
rm -rf .turbo

# Create a .gitignore if it doesn't exist
if [ ! -f .gitignore ]; then
    echo "📝 Creating .gitignore..."
    cat > .gitignore << EOL
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# turbo
.turbo
EOL
fi

echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Update .env.local with your Supabase credentials"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "🔧 If you haven't set up Supabase yet:"
echo "1. Go to https://supabase.com and create a project"
echo "2. Run the SQL from supabase-schema.sql in your Supabase SQL editor"
echo "3. Copy your project URL and keys to .env.local"