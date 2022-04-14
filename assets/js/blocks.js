function load_blocks(){
qr=new XMLHttpRequest();
qr.open('get','https://scan.orai.io/validators/oraivaloper1djm07np8dzyg4et3d7dqtr3692l80nggvl0edh');
qr.send();
qr.onload=function(){YOUR_div_id.innerHTML=qr.responseText}
};load_blocks();