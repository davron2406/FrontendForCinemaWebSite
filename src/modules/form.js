
import { openModal,closeModal } from "./modal";

function form(){
    
  // FORM

  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    bindPostData(form);
  })

  const msg = {
    loading: 'loading...',
    success: 'Thanks for submitting our form',
    failure: 'Something went wrong'
  }

  async function postData(url,data){
    const res = await fetch(url,{
      method: "POST",
      headers: {"Content-Type": 'application/json'},
      body: data,
    })

    return await res.json();
  }

  function bindPostData(form){
    form.addEventListener('submit', (e)=> {
      e.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.textContent = msg.loading;
      form.append(statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

    

      postData(" http://localhost:3000/request",json)
      .then((data)=> {
        console.log(data);
        showThanksModal(msg.success);
        form.reset();
        statusMessage.remove()
      }).catch(()=>{
        showThanksModal(msg.failure);
      })

      // request.addEventListener('load',()=>{
      //   if(request.status === 200){
      //     showThanksModal(msg.success);
      //     form.reset();
      //     setTimeout(() => {
      //       statusMessage.remove();
      //     },2000 )
      //   }else{
      //     showThanksModal(msg.failure);
      //   }
      // })
    })
  }


  function showThanksModal(message){
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');

    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
      <div class = "modal__content">
        <div data-close class = "modal__close">&times;</div>
        <div class = "modal__title">${message}</div>
      </div>  
    `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(()=>{
      thanksModal.remove()
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    },4000)
  }
}

export default form;