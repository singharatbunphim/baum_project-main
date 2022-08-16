import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  data: any[] = [
  {
    title: "Opportunities for your Stormwater Projects through Sustainable Assessment",
    description: "Authored by Caleb Clarke and Greer Lees(Morphum Environment Ltd); for Water New Zealand’s 2015 Asia Pacific Stormwater Conferenc"
  },
  {
    title: "Opportunities for your Stormwater Projects through Sustainable Assessment",
    description: "Authored by Caleb Clarke and Greer Lees(Morphum Environment Ltd); for Water New Zealand’s 2015 Asia Pacific Stormwater Conferenc"
  },
  {
    title: "Opportunities for your Stormwater Projects through Sustainable Assessment",
    description: "Authored by Caleb Clarke and Greer Lees(Morphum Environment Ltd); for Water New Zealand’s 2015 Asia Pacific Stormwater Conferenc"
  },
  {
    title: "Opportunities for your Stormwater Projects through Sustainable Assessment",
    description: "Authored by Caleb Clarke and Greer Lees(Morphum Environment Ltd); for Water New Zealand’s 2015 Asia Pacific Stormwater Conferenc"
  },
  {
    title: "Opportunities for your Stormwater Projects through Sustainable Assessment",
    description: "Authored by Caleb Clarke and Greer Lees(Morphum Environment Ltd); for Water New Zealand’s 2015 Asia Pacific Stormwater Conferenc"
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
