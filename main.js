const form = document.querySelector("form")


form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email= document.getElementById("email").value;
  form.classList.add("smaller-form");
  form.innerHTML=`<p><span>Success! </span> ${name}</P><p>You\'re all set</p>`;

})
