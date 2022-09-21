import Copyright from "./Copyright";

export const Footer = () => {
  return (
    <footer className="bg-[#1269C1] mt-auto text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="flex flex-col px-[16px] py-[24px] sm:px-6 lg:py-16 lg:px-8">
        <h4 className="font-semibold self-start text-[16px]">Support</h4>
        <div className="grid grid-cols-2">
          <a href="" className="justify-self-start text-[14px]">FAQ</a>
          <a href="" className="justify-self-start text-[14px]">Give Feedback</a>
        </div>
        <div className="border-2 border-red-500">
          powered by... Snap! Raise asset
        </div>
        <div className="flex flex-col self-start text-[14px]">
          <h5 className="self-start font-semibold">Snap! Mobile</h5>
          <p>8300 7th Ave S Seattle, WA 98108</p>
        </div>
        <p className="my-1 self-start text-[14px]">support@snap-raise.com</p>
        <p className="self-start text-[14px]">206.285.0906</p>
      </div>
      <Copyright />
    </footer>
  );
}

export default Footer;
 