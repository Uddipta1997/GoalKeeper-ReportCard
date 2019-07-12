	$( document ).ready(function() {

	
	
});
function goalsSum(){
	var ontarget = parseInt($('#onTargetGoals').val());
	var offtarget = parseInt($('#offTargetGoals').val());
	var total = ontarget + offtarget;
	if(!isNaN(total)){
		$('#totalGoals').val(total);
	}
}
function openTab(evt, tabReportName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabReportName).style.display = "block";
  evt.currentTarget.className += " active";
}