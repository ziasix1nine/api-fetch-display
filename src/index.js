import "./styles.css";

document.getElementById("app").innerHTML = `
<div id="DivParent" class="parent">
 </div>
 <div>
 <hr>
 <div>
  <table width=100%>
    <tr>
    <th>Name</th>
    <th>UID</th>
    <th>Category</th>
    <tr>
    <tr id ="tdID" style="text-align:center">
   
    </tr>
  </table>
 </div>
`;
var html = "";
var ItedID = 0;
fetch(
  "https://ychaube.github.io/frontend-expert-questions-ui/data/questions.json"
)
  .then((data) => data.json())
  .then((objData) => {
    const filterData = objData.filter(
      (item) => item.category === "HTML" || item.category === "CSS"
    );
    filterData.map((item) => {
      html +=
        ' <div id="ClassID" Category=' +
        item.category +
        " ui-id=" +
        item.uid +
        ' class="child" data-id=' +
        ItedID++ +
        ">" +
        item.name +
        "</div>";
    });

    document.getElementById("DivParent").innerHTML = html;
    var elements = document.getElementsByClassName("child");
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", getDetails);
    }
    function getDetails(e) {
      const id = this.getAttribute("data-id");
      const uId = this.getAttribute("ui-id");
      const Category = this.getAttribute("Category");

      var td = "";
      td += " <td>" + elements[id].innerText + "</td>";
      td += " <td>" + uId + "</td>";
      td += " <td>" + Category + "</td>";
      document.getElementById("tdID").innerHTML = td;
      console.log(td);
    }
  });
