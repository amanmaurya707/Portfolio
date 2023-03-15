
//function downloadCVPDF()
//{

$(document).ready(function(){

  $("#clickDownload_CV").click(function(){
       
    alert("Official Use Only!!!fine");
   var restorePage=$("#view_profile_data").html();
   alert(restorePage);
   var printContent=$("#download_cv").html();
   alert(printContent);
   document.body.innerHTML=printContent;
   //alert("@@");
   window.print();
   document.body.innerHTML=restorePage;
  
});
});

//}
