//your JS code here. If required.
function time(){
	const newTime=document.getElementById("timer");
	let date=new Date();
 newTime.innerText=date.toLocaleDateString()+","+date.toLocaleTimeString();
	setTimeout(time,1000);
}
time();