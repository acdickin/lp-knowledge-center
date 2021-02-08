import React, { useState, useEffect } from "react"
import $ from "jquery";
import scrollTo from 'gatsby-plugin-smoothscroll';

const JumpTo = () => {

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


  const renderAnchorlist = () => {
    console.log(anchorList)
    return anchorList.map(anchor => <li key={anchor.id} className="anchoritem" tabIndex="-1" onClick={() => { console.log("scroll"); scrollTo("#" + anchor.id) }}>{anchor.text}</li>)
  }

  const jumptoList = {
    position: "sticky",
    top: "200px"
  }

  return (
    <div className="jumpto">
      <ul style={jumptoList}>
        {(anchorList.length > 0) ? renderAnchorlist() : ""}
      </ul>
    </div>
  )
}
export default JumpTo;