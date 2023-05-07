function clas(){
     // Classs
  class MenuCard{
    constructor(src,alt,title,descr,price){
      this.src = src;
      this.alt = alt;
      this.title =title;
      this.descr = descr;
      this.price = price;
      this.transfer = 11000;
      this.parent = document.querySelector('.menu .container');

      this.changeToUSZ();
    }

    changeToUSZ(){
      this.price = this.price * this.transfer;
    }

    render(){
      const element = document.createElement('div');

      element.innerHTML = `
                                    <div class="menu__item">
                                      <img src=${this.src} alt=${this.alt}/>
                                      <h3 class="menu__item-subtitle">${this.title}</h3>
                                      <div class="menu__item-descr">
                                        ${this.descr}
                                      </div>
                                      <div class="menu__item-devider"></div>
                                      <div class="menu__item-price">
                                        <div class="menu__item-cost">Price:</div>
                                        <div class="menu__item-total"><span>${this.price}</span> usz/month</div>
                                      </div>
                                    </div>`

      this.parent.append(element);
    }
  }

  async function getRecourses(url){
    const res = await fetch(url);

    return await res.json();
  }

  axios.get('http://localhost:3000/menu').then(data => {
    data.data.forEach((item) => {
      new MenuCard(item.img,item.altmg,item.title,item.descr,item.price).render();
    })
  })

 

}


export default clas;