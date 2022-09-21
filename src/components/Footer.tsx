import Copyright from "./Copyright";

export const Footer = () => {
  return (
    <footer className="bg-[#1269C1] mt-auto" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      </div>
      <Copyright />
    </footer>
  );
}

export default Footer;
