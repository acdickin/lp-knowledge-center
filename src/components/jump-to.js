import React, { useState, useEffect } from "react"
import $ from "jquery";
import scrollTo from 'gatsby-plugin-smoothscroll';

const JumpTo = (props) => {
  console.log(props)

  const [anchorList, setAnchorList] = useState([])

  const populateAnchors = () => {
    setAnchorList([]);
    let anchorlinks = document.getElementsByTagName("h2");
    $.each(anchorlinks, function () {
      $(this).attr('id', $(this).text().replace(/[\W_]/g, "-").toLowerCase())
      setAnchorList(preArray => [...preArray, { text: $(this).text(), id: $(this).attr("id") }])
    })
  }

  useEffect(() => {
    populateAnchors();
    $(window).scroll(function () {
      const mainTitlePostion = $('#maintitle').offsetTop;
      //check the window's position and account for the header
      let position = $(this).scrollTop() + mainTitlePostion;
      let titles = document.getElementsByTagName('h2');

      //for each h2 in the article
      $.each(titles, function () {
        // get its position and id
        let target = $(this).offsetTop;

        let id = $(this).attr('id');
        //if the position of the window is greater than the position of the title (that is, the title has scrolled out of view)
        if (position >= target) {
          //deactivate all other active links in the anchorlist
          $('.anchorlist > ul > li ').removeClass('active');
          //find the matching link in the anchorlist
          let current = $('a[href="#' + id + '"]');
          //set it to active
          current.addClass('active');
        } else if (position === mainTitlePostion) {
          $('.anchorlist > ul > li ').removeClass('active');
          $('.anchorlist > ul > #jumptotop ').addClass('active');
        }
      });
      if ($(window).scrollTop() + $(window).height() === $(document).height()) {
        $('.anchorlist > ul > li ').removeClass('active');
        $('.anchoritem').last().addClass('active');
      };
    });
  }, [])

  const renderAnchorlist = () => {
    console.log(anchorList)
    // cant have a tag as it breaks the onclick
    return anchorList.map(anchor => <li key={anchor.id} className="anchoritem" tabIndex="-1" onClick={() => { scrollTo("#" + anchor.id) }}>{anchor.text}</li>)
  }

  const jumptoList = {
    position: "sticky",
    top: "200px",
    listStyleType: "none"
  }

  return (
    <div className="jumpto">
      <ul style={jumptoList} className="anchorlist">

        {(anchorList.length > 0) ? <li className="active" id="jumptotop" onClick={() => { scrollTo("#maintitle") }}> {props.title}</li> : ""}
        {(anchorList.length > 0) ? renderAnchorlist() : ""}
      </ul>
    </div>
  )
}
export default JumpTo;