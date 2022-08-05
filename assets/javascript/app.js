btn_Start.addEventListener('click', () =>{
    setTimeout(()=>{
        content_1.classList.add("show_content");
    }, 1000)
    setTimeout(()=>{
        content_2.classList.add("show_content");
    }, 2000)
    setTimeout(()=>{
        btnPrometo.style.display = "block";
        btnNao_Prometo.style.display = "block";
        content_3.classList.add("show_content");
    }, 3000)
});

btnNao_Prometo.addEventListener('click',()=>{
    modal.classList.remove('hidden');
    modal.classList.add('show');

    content.classList.remove('show');
    content.classList.add('hidden');
})

btnModal.addEventListener('click',()=>{
    content.classList.remove('hidden');
    content.classList.add('show');
    
    modal.classList.remove('show');
    modal.classList.add('hidden');
})

btnPrometo.addEventListener('click',()=>{
    setTimeout(()=>{
        content_1.classList.add("show_content");
    }, 1000)
    setTimeout(()=>{
        content_2.classList.add("show_content");
    }, 2000)
    setTimeout(()=>{
        content_3.classList.add("show_content");
    }, 3000)
    msg_1.textContent = "Eu";
    msg_2.textContent = "sempre";
    msg_3.textContent = "estarei aqui";
    btnGroup.classList.remove('show');
    btnGroup.classList.add('hidden');
    setTimeout(() => {
        window.location.reload()
    }, 8000);
});
