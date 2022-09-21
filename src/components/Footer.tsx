import Copyright from "./Copyright";
import { SnapLogo } from "../suit";

export const Footer = () => {
  return (
    <footer
      className="bg-[#1269C1] mt-auto text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="flex flex-col sm:flex-row sm:justify-between px-[16px] py-[24px]">
        <div className="flex flex-col">
          <h4 className="font-semibold self-start text-[16px]">Support</h4>
          <div className="grid grid-cols-2 sm:grid-cols-1 my-2">
            <a href="" className="justify-self-start text-[14px]">
              FAQ
            </a>
            <a href="" className="justify-self-start sm:mt-2 text-[14px]">
              Give Feedback
            </a>
          </div>
        </div>
        <div className="sm:flex sm:flex-row sm:mr-[40px]">
          <div className="flex flex-col my-4 sm:mr-8 sm:my-0">
            <div className="font-medium italic mb-1 self-start text-[14px]">
              powered by...
            </div>
            <div className="w-[140px]">
              {/* white="true" property from SUIT causes typescript error, hence the following ts-ignore */}
              {/*
                // @ts-ignore */}
              <SnapLogo product="snap-logo-raise" white="true" variant="stacked" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col self-start text-[14px]">
              <h5 className="self-start font-semibold">Snap! Mobile</h5>
              <p className="whitespace-nowrap">8300 7th Ave S Seattle, WA 98108</p>
            </div>
            <p className="my-1 sm:my-2 self-start text-[14px]">support@snap-raise.com</p>
            <p className="self-start text-[14px]">206.285.0906</p>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
