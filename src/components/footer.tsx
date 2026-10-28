

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-base-300 bg-base-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          {/* Logo and tagline */}
          <div className="text-center sm:text-left">
            <a href="/" className="text-xl font-bold text-base-content">
              Dev<span className="text-blue-500">Jobs</span>
            </a>

            <p className="mt-1 text-sm text-base-content/60">
              Find your next opportunity in tech.
            </p>
          </div>

          {/* Footer links */}
          <div className="flex flex-wrap justify-center gap-5 text-sm text-base-content/70">
            <a href="/" className="transition hover:text-blue-500">
              Home
            </a>

            <a href="#jobs" className="transition hover:text-blue-500">
              Browse Jobs
            </a>

            <a
              href="mailto:contact@example.com"
              className="transition hover:text-blue-500"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-base-300 pt-5 text-center text-sm text-base-content/50">
          © {new Date().getFullYear()} DevJobs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
