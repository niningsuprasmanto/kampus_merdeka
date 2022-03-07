function angkaSatu(){
    let frm = document.getElementById("formulir")
    frm.a1.value ="";
}
function angkaDua(){
    let frm = document.getElementById("formulir")
    frm.a2.value ="";
}
function kosongAll(){
    let frm = document.getElementById ("formulir")
    frm.a1.value="";
    frm.a2.value="";
    frm.hasil.value="";
}
function tambahh(){
    let frm = document.getElementById("formulir")
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    let hasil = frm.hasil.value;
    if (isNaN(a1) || a1 == ''){
        alert ("Harap isi data berupa angka");
        
    }
    else if (isNaN (a2) || a2 ==''){
        alert ("Harap isi data berupa angka");
    }
    else {
    let tambah = Number (a1) +Number (a2) ;
    frm.hasil.value = tambah;
    }
}
function kurangg(){
    let frm = document.getElementById("formulir")
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    let hasil = frm.hasil.value;
    if (isNaN(a1) || a1 == ''){
        alert ("Harap isi data berupa angka");
    }
    else if (isNaN (a2) || a2 ==''){
        alert ("Harap isi data berupa angka");
    }
    else {
    let kurang = Number (a1) - Number (a2) ;
    frm.hasil.value = kurang;
    }
}
function bagii(){
    let frm = document.getElementById("formulir")
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    let hasil = frm.hasil.value;
    if (isNaN(a1) || a1 == ''){
        alert ("Data angka 1 salah");
    }
    else if (isNaN (a2) || a2 ==''){
        alert ("Harap isi data berupa angka");
    }
    else {
    let bagi = Number (a1) / Number (a2) ;
    frm.hasil.value = bagi;
    }
}
function kalii(){
    let frm = document.getElementById("formulir")
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    let hasil = frm.hasil.value;
    if (isNaN(a1) || a1 == ''){
        alert ("Harap isi data berupa angka");
    }
    else if (isNaN (a2) || a2 ==''){
        alert ("Harap isi data berupa angka");
    }
    else {
    let kali = Number (a1) * Number (a2) ;
    frm.hasil.value = kali;
    }
}
function pangkatt(){
    let frm = document.getElementById("formulir")
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    let hasil = frm.hasil.value;
    if (isNaN(a1) || a1 == ''){
        alert ("Harap isi data berupa angka");
    }
    else if (isNaN (a2) || a2 ==''){
        alert ("Harap isi data berupa angka");
    }
    else {
    let pangkat = Math.pow(Number (a1),Number (a2)) ;
    frm.hasil.value = pangkat;
    }
}