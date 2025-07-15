#!/bin/bash

echo "🚀 Setting up Cazno Automations..."

# Clean up previous installations
echo "🧹 Cleaning up old files..."
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock
rm -f pnpm-lock.yaml
rm -rf .next

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run build to check for errors
echo "🔨 Building project..."
npm run build

echo "✅ Setup complete! Run 'npm run dev' to start the development server."