var React = require('react')
var FontAwesome = require('react-fontawesome')


const Icons = () => {
  return (
    <div id="footericons">
      <a href="http://twitter.com/liveperson"> <Twitter /></a>
      <a href="https://www.facebook.com/liveperson/"> <Facebook /> </a>
      <a href="https://www.youtube.com/MyLivePerson"><Youtube /> </a>
      <a href="https://www.linkedin.com/company/liveperson"> <LinkedIn /> </a>
      <a href="http://www.pinterest.com/liveperson/"><Pinterest /> </a>
    </div>
  );
}
const Twitter = () => {
  return (
    <FontAwesome
      className="fab fa-twitter"
      name="Twitter"
      size="1x"
    />
  );
}
const Facebook = () => {
  return (
    <FontAwesome
      className="fab fa-facebook"
      name="Facebook"
      size="1x"
    />
  );
}
const Youtube = () => {
  return (
    <FontAwesome
      className="fab fa-youtube"
      name="Youtube"
      size="1x"
    />
  );
}
const LinkedIn = () => {
  return (
    <FontAwesome
      className="fab fa-linkedin-in"
      name="LinkedIn"
      size="1x"
    />
  );
}
const Pinterest = () => {
  return (
    <FontAwesome
      className="fab fa-pinterest"
      name="Pinterest"
      size="1x"
    />
  );
}
export default Icons;