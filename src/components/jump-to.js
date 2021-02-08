import React, { useState, useEffect } from "react"
import $ from "jquery";
import scrollTo from 'gatsby-plugin-smoothscroll';

const JumpTo = (props) => {
  console.log(props)
  const [anchorList, setAnchorList] = useState([])

  const populateAnchors = () => {
    setAnchorList([]);
    var anchorlinks = document.getElementsByTagName("h2");
    $.each(anchorlinks, function () {
      $(this).attr('id', $(this).text().replace(/[\W_]/g, "-").toLowerCase())
      setAnchorList(preArray => [...preArray, { text: $(this).text(), id: $(this).attr("id") }])
    })
  }

  useEffect(() => {
    populateAnchors();
  }, [])
  useEffect(() => {
    $(window).scroll(function () {
      //check the window's position and account for the header
      var position = $(this).scrollTop() + 140; // TODO FIX THIS
      var titles = document.getElementsByTagName('h2');
      //for each h2 in the article
      $.each(titles, function () {
        // get its position and id
        var target = $(this).offset().top;
        var id = $(this).attr('id');
        //if the position of the window is greater than the position of the title (that is, the title has scrolled out of view)
        if (position >= target) {
          //deactivate all other active links in the anchorlist
          $('.anchorlist > ul > li > a').removeClass('active');
          //find the matching link in the anchorlist
          var current = $('a[href="#' + id + '"]');
          //set it to active
          current.addClass('active');
        } else if (position === 140) { // TODO FIX THIS
          $('.anchorlist > ul > li > a').removeClass('active');
          $('.anchorlist > ul > #jumptotop > a').addClass('active');
        }
      });
      if ($(window).scrollTop() + $(window).height() === $(document).height()) {
        $('.anchorlist > ul > li ').removeClass('active');
        $('.anchoritem').last().addClass('active');
      };
    });
  })

  const renderAnchorlist = () => {
    console.log(anchorList)
    return anchorList.map(anchor => <li key={anchor.id} className="anchoritem" tabIndex="-1" onClick={() => { console.log("scroll"); scrollTo("#" + anchor.id) }}><a>{anchor.text}</a></li>)
  }

  const jumptoList = {
    position: "sticky",
    top: "200px"
  }

  return (
    <div className="jumpto">
      <ul style={jumptoList} className="anchorlist">

        {(anchorList.length > 0) ? <li id="jumptotop"><a className="active" href="#">{props.title}</a></li> : ""}
        {(anchorList.length > 0) ? renderAnchorlist() : ""}
      </ul>
    </div>
  )
}
export default JumpTo;