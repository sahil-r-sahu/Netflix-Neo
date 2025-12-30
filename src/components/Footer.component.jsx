const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 md:-mt-10 md:pt-20 px-6 py-10 -z-10">
      <hr />
      <br />
      <div className="max-w-6xl mx-auto">
        <p className="mb-6 text-sm">
          Questions? Call{" "}
          <span className="hover:underline cursor-pointer">
            000-800-919-1694
          </span>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          <span className="hover:underline cursor-pointer">FAQ</span>
          <span className="hover:underline cursor-pointer">Help Centre</span>
          <span className="hover:underline cursor-pointer">Account</span>
          <span className="hover:underline cursor-pointer">Media Centre</span>

          <span className="hover:underline cursor-pointer">
            Investor Relations
          </span>
          <span className="hover:underline cursor-pointer">Jobs</span>
          <span className="hover:underline cursor-pointer">Ways to Watch</span>
          <span className="hover:underline cursor-pointer">Terms of Use</span>

          <span className="hover:underline cursor-pointer">Privacy</span>
          <span className="hover:underline cursor-pointer">
            Cookie Preferences
          </span>
          <span className="hover:underline cursor-pointer">
            Corporate Information
          </span>
          <span className="hover:underline cursor-pointer">Contact Us</span>
        </div>

        <p className="mt-8 text-xs text-red-500 text-center">
          Netflix Neo • Built for learning purposes Only
        </p>
      </div>
    </footer>
  );
};

export default Footer;
