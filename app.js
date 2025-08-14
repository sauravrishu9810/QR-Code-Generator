const qr_text = document.querySelector("#qr-text");
const select = document.querySelector("#sizes");
const generate = document.querySelector("#generateqr");
const download = document.querySelector("#downloadbtn");
const qr_body = document.querySelector(".qr-body");

generate.addEventListener('click', (e) => {
    e.preventDefault(); // stops page refresh
    if(qr_text.value.length>0){
        generateQr();
    }
    else{
        alert("Enter thr text or URL to generate");
    }
});


select.addEventListener('change',(e)=>{
    isEmptyinput();
    size = e.target.value;
});

download.addEventListener('click',()=>{
    let img = document.querySelector(".qr_body img");
    if(img!== null){
        let imgAttr = img.getAttribute('src')
        download.setAttribute("href",imgAttr);
    }else{
        download.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyinput(){
    // if(qr_text.value.length>0){
    //     generateQr();
    // }
    // else{
    //     alert("Enter thr text or URL to generate"); 
    // }

    qr_text.value.length>0?generateQr() : alert("Enter thr text or URL to generate");
}


function generateQr() {
    // Get the latest selected size
    let sizes = select.value;

    // Clear old QR before generating new
    qr_body.innerHTML = "";

    new QRCode(qr_body, { // we have used this input from qr-js library which is especially designed to fetch qr 
        text: qr_text.value,
        height: sizes,
        width: sizes,
        colorDark: "#000000",
        colorLight: "#ffffff",
    });
};


