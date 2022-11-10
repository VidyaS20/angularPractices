import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.css']
})
export class BestsellerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pizzas:any=[
    {
      img:'../../assets/PIZ0171.jpg',
      title: 'The 4 Cheese Pizza',
      description: 'Cheese Overloaded pizza with 4 different varieties of cheese and 4 times the cheese of a normal pizza, including a spicy hit of Ghost Pepper flavoured Cheese'
    },
    {
      img:'../../assets/PIZ0170.jpg',
      title:'The Cheese Dominator',
      description:'Loaded with 1 Pound of Mozzarella and gooey Liquid Cheese on a Classic Large Pizza topped with a generous helping of herb sprinkle'
    },
    {
      img:'../../assets/new_peppy_paneer.webp',
      title:'peppy Paneer',
      description:'Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika'
    },
    {
      img:'../../assets/new_margherita_2502.webp',
      title:'Margherit',
      description:'Classic delight with 100% real mozzarella cheese'
    },
    {
      img:'../../assets/4625-CMB1211.jpg',
      title:'Farmhouse',
      description:'Delightful combination of onion, capsicum, tomato & grilled mushroom'
    },
    {
      img:'../../assets/4623-CMB1210.jpg',
      title:'Indi Tandoori Paneer & Peppy Paneer Combo',
      description:'Med Indi Tandoori Paneer + Peppy Paneer + 2 Garlic Bread +2 Pepsi'
    }

  ]
  pizzaData:any;

  onAddtoCart(data:any){
    this.pizzaData=data

  }

  codata:any

  checkoutdataReceived(event:any){
    this.codata= event
  }

}
