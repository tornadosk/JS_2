
class GoodsItem {
    constructor(title, price) {
      this.title = title;
      this.price = price;
    }
    render() {
      return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
  }
  

class GoodsList {
    constructor() {
      this.goods = [];
    }
    fetchGoods() {
      this.goods = [
        { title: 'Shirt', price: 150 },
        { title: 'Socks', price: 50 },
        { title: 'Jacket', price: 350 },
        { title: 'Shoes', price: 250 },
      ];
    }
    render() {
      let listHtml = '';
      this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.title, good.price);
        listHtml += goodItem.render();
      });
      document.querySelector('.goods-list').innerHTML = listHtml;
    }
    sumGoods() {
        let sum = 0;
        this.goods.forEach( good => {
            const goodsSum = new GoodsItem(good.price);
            sum += good.price;
        });
        document.querySelector('.sum-goods').innerHTML = `Sum of goods: ${sum}`;
    }
  }
window.onload = () => {
  const list = new GoodsList();
  list.fetchGoods();
  list.render();
  list.sumGoods();
}  



    class Cart {
        constructor() {
            this.items = [];
        }
        push(cartItem) {
            this.items.push(cartItem);
        }
        delete(cartItem) {
            this.items.filter(good => good.id !== cartItem.id) //deletes item by id
        }
        get totalPrice(){
         //   return this.totalPrice = ; // eval total price
        }
  
        
    }
    class CartItem {
        constructor(good) {
            this.good = good;
        }
    }
    const cart = new Cart();
    const addToCart = (good) => cart.push(new CartItem(good))

    const fetch = (method, url) => {
      let xhr;

      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest;
      } else if (window.ActiveXObject){
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }

      xhr.onreadystatechange = () => {
        //console.log('state', xhr.readyState);
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
          const images = JSON.parse(xhr.responseText);
          resolve(images);
        } else {
          reject('error with status code: ', + xhr.status);
        }
      }
    }



      xhr.open(method, url);
      xhr.timeout = 15000; //settings
      xhr.send();
    }
    const URL = 'https://jsonplaceholder.typicode.com/photos';
    fetch('GET', URL);
    .then((data) => {
      
    })