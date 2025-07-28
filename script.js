const notif = document.getElementById("notif");


function showNotif(rang, yozuv){
    const div =document.createElement("div");
    div.classList.add("not");
    div.innerHTML = `
     <h2>${yozuv}</h2>
      <button onclick="del(this)">x</button>
    `
    div.style.display = "flex";
    div.style.backgroundColor = rang;
    notif.prepend(div);
    setTimeout(() => {
        notif.removeChild(div);
    }, 2000);
}
function del(e) {
notif.removeChild((e.parentNode));
}
