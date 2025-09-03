export function Footer() {
  return (
    <footer id="contact" className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
                <div className="flex items-center space-x-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                </div>
              </div>
              <span className="font-space-grotesk font-bold text-xl">
                /# SlashHash
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              AI-powered creator discovery through natural language chat
              interface.
            </p>
          </div>

          <div className="text-muted-foreground space-y-1 text-right">
            <p className="font-semibold">SlashHash B.V.</p>
            <p>Newday Offices Amsterdam Zuid</p>
            <p>Apollolaan 151</p>
            <p>1077 AR Amsterdam</p>
            <p>Netherlands</p>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 /# SlashHash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
