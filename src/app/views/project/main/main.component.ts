import { Component, OnInit } from '@angular/core';
import { itemCardProject  } from 'src/app/types/types';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  Projectdata :  itemCardProject [] = [
    {
      title: 'Advanced Wastewater Treatment for reuse',
      description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
      img: 'image1.jpeg',
      textcolor: 'text-blue-custom',
      author: 'Pcampus studio'
    },
    {
      title: 'Advanced Wastewater Treatment for reuse',
      description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
      img: 'sinking-water-molecule-139071587-5701713f5f9b5861953442bb.jpeg',
      textcolor: 'text-green-custom',
      author: 'Pcampus studio'
    },
    {
      title: 'Advanced Wastewater Treatment for reuse',
      description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
      img: 'shutterstock_469086584_CREDIT_Rudmer-ZwerverShutterstock-scaled.jpeg',
      textcolor: 'text-blue-custom',
      author: 'Pcampus studio'
    },
    {
      title: 'Advanced Wastewater Treatment for reuse',
      description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
      img: 'water-test-in-lab.jpeg',
      textcolor: 'text-green-custom',
      author: 'Pcampus studio'
    },
    {
      title: 'Advanced Wastewater Treatment for reuse',
      description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
      img: 'blueflag.jpeg',
      textcolor: 'text-blue-custom',
      author: 'Pcampus studio'
    },
    {
      title: 'Advanced Wastewater Treatment for reuse',
      description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
      img: 'Trees-Stormwater-Management.jpeg',
      textcolor: 'text-green-custom',
      author: 'Pcampus studio'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
