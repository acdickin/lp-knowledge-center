import React from "react"

const Footer = () => {

  //TODO
  //Import font awesome
  //Import the specific icons we want 
  //Repalce the I tags
  return (
    <div id="defaultfooter">
      <div id="footerbottomrow">
        <div id="footertext">
          <span className="footerbottomspan">&copy; {new Date().getFullYear()} LivePerson Inc. All rights reserved.</span>
          <a href="https://www.liveperson.com/policies/copyright">Copyright</a>
          <a href="https://www.liveperson.com/policies/privacy">Privacy Policy</a>
          <a href="https://www.liveperson.com/policies/terms-of-use">Terms of Use</a>
        </div>
        {/* <div id="footericons">
          <a href="http://twitter.com/liveperson"><i className="fab fa-twitter"></i></a>
          <a href="https://www.facebook.com/liveperson/"><i className="fab fa-facebook"></i></a>
          <a href="https://www.youtube.com/MyLivePerson"><i className="fab fa-youtube"></i></a>
          <a href="https://www.linkedin.com/company/liveperson"><i className="fab fa-linkedin-in"></i></a>
          <a href="http://www.pinterest.com/liveperson/"><i className="fab fa-pinterest"></i></a>
        </div> */}
      </div>
    </div>
  )
}

export default Footer