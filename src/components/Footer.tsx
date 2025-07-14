import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CAZNO</h3>
            <p className="text-muted-foreground">
              AI Workflow Automation for Home Services
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/workflow-automation" className="text-muted-foreground hover:text-foreground transition">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-agents" className="text-muted-foreground hover:text-foreground transition">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="/solutions/dashboards" className="text-muted-foreground hover:text-foreground transition">
                  Custom Dashboards
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-muted-foreground hover:text-foreground transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Cazno Automations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}