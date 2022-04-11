function load_page(){
qr=new XMLHttpRequest();
qr.open('get','YOUR_file_or_page.htm');
qr.send();
qr.onload=function(){YOUR_div_id.innerHTML=qr.responseText}
};load_page();