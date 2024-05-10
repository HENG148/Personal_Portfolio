var DateTime = () => {
  var showdate = new Date();
  var displaytodaysdate = showdate.getDate() + '/' + showdate.getMonth() + '/' + showdate.getFullYear();
  // var dt = showdate.toDateString();
  return ( 
    <div>
      {/* <input type="text" value={displaytodaysdate} readOnly="true" /> */}
      {displaytodaysdate}

      {/* {dt} */}
    </div>
   );
}
 
export default DateTime;