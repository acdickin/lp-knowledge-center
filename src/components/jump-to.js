import React, { useState, useEffect } from "react"
import $ from "jquery";
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
    return anchorList.map(anchor => <li><a className="anchoritem" key={anchor.id} data-scroll href={"#" + anchor.id}>{anchor.text}</a></li>)
  }
  return (
    <ul className="anchorlist">
      {(anchorList.length > 0) ? renderAnchorlist() : ""}
    </ul>
  )

}
export default JumpTo;