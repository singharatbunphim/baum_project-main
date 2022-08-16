import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  products: any[] = [
    {
      id: '0',
      code: 'C-001',
      name: 'Apple',
      description: 'This is a apple',
      price: 300,
      quantity: 10,
      inventoryStatus:'STOCK',
      category: 'fruit',
      image: 'https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg',
      rating: 10,
    },
    {
      id: '0',
      code: 'C-002',
      name: 'Banana',
      description: 'This is a banana',
      price: 300,
      quantity: 10,
      inventoryStatus:'STOCK',
      category: 'fruit',
      image: 'https://joanfruit.com/imagecache/custom/ff86993f3754009600e9b9789a140e96.jpeg?w=600&h=400&fit=0',
      rating: 10,
    },
    {
      id: '0',
      code: 'C-003',
      name: 'Orange',
      description: 'This is a orange',
      price: 300,
      quantity: 10,
      inventoryStatus:'STOCK',
      category: 'fruit',
      image: 'https://envato-shoebox-0.imgix.net/3de2/a6a4-c604-4b82-adae-332bfef74989/_M2_9019.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=54c7d180307a289c503e93a54a7987a5',
      rating: 10,
    },
    {
      id: '0',
      code: 'C-003',
      name: 'Orange',
      description: 'This is a orange',
      price: 300,
      quantity: 10,
      inventoryStatus:'STOCK',
      category: 'fruit',
      image: 'https://envato-shoebox-0.imgix.net/3de2/a6a4-c604-4b82-adae-332bfef74989/_M2_9019.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=54c7d180307a289c503e93a54a7987a5',
      rating: 10,
    },
    {
      id: '0',
      code: 'C-003',
      name: 'Orange',
      description: 'This is a orange',
      price: 300,
      quantity: 10,
      inventoryStatus:'STOCK',
      category: 'fruit',
      image: 'https://envato-shoebox-0.imgix.net/3de2/a6a4-c604-4b82-adae-332bfef74989/_M2_9019.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=54c7d180307a289c503e93a54a7987a5',
      rating: 10,
    },
    {
      id: '0',
      code: 'C-003',
      name: 'Orange',
      description: 'This is a orange',
      price: 300,
      quantity: 10,
      inventoryStatus:'STOCK',
      category: 'fruit',
      image: 'https://envato-shoebox-0.imgix.net/3de2/a6a4-c604-4b82-adae-332bfef74989/_M2_9019.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=54c7d180307a289c503e93a54a7987a5',
      rating: 10,
    },
    {
      id: '0',
      code: 'C-003',
      name: 'Orange',
      description: 'This is a orange',
      price: 300,
      quantity: 10,
      inventoryStatus:'STOCK',
      category: 'fruit',
      image: 'https://envato-shoebox-0.imgix.net/3de2/a6a4-c604-4b82-adae-332bfef74989/_M2_9019.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=54c7d180307a289c503e93a54a7987a5',
      rating: 10,
    },
    {
      id: '0',
      code: 'C-003',
      name: 'Orange',
      description: 'This is a orange',
      price: 300,
      quantity: 10,
      inventoryStatus:'STOCK',
      category: 'fruit',
      image: 'https://envato-shoebox-0.imgix.net/3de2/a6a4-c604-4b82-adae-332bfef74989/_M2_9019.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=54c7d180307a289c503e93a54a7987a5',
      rating: 10,
    },
  ]

	responsiveOptions;

	constructor() {
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}


  ngOnInit(): void {
  }

}
