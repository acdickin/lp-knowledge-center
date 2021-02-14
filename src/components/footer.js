import React from "react"
import Icons from "./icons"
const Footer = () => {
  //TODO
  //Import font awesome
  //Import the specific icons we want
  //Repalce the I tags
  return (
    <div className="footer flex align-center" id="defaultfooter">
      <div id="footerbottomrow" className="full-width">
        <div className="flex space-between" id="footertext">
          <span className="footerbottomspan">
            &copy; {new Date().getFullYear()} LivePerson Inc. All rights
            reserved.
          </span>
          <div className="footer-menu flex justify-between gap-4">
            <a href="https://www.liveperson.com/policies/copyright">
              Copyright
            </a>
            <a href="https://www.liveperson.com/policies/privacy">
              Privacy Policy
            </a>
            <a href="https://www.liveperson.com/policies/terms-of-use">
              Terms of Use
            </a>
            <Icons />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
