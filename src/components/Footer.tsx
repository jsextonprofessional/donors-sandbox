import Copyright from "./Copyright";

export const Footer = () => {
  return (
    <footer className="bg-[#1269C1] mt-auto text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="border-2 border-yellow-500 flex flex-col mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h4 className="self-start">Support</h4>
        <div className="flex justify-between">
          <a href="">FAQ</a>
          <a href="">Give Feedback</a>
        </div>
        <div className="border-2 border-red-500">
          powered by... Snap! Raise asset
        </div>
        <h5 className="self-start">Snap! Mobile</h5>
        <p className="self-start">8300 7th Ave S Seattle, WA 98108</p>
        <p className="self-start">support@snap-raise.com</p>
        <p className="self-start">206.285.0906</p>
      </div>
      <Copyright />
    </footer>
  );
}

export default Footer;
