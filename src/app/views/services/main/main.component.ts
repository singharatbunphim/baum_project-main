import { Component, OnInit } from '@angular/core';
import { itemCardList } from '../../../types/types';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  blogsData : itemCardList[] = [
    {
      title: "Consulting Services",
      description: "Baum offers consulting services for specialized areas within water, stormwater,  and advanced wastewater treatment for reuse. Our services are catering to industry, utilities, councils, and agriculture. Baum is specialized in the design, assessment, optimisation as well as proof of concept stage for CAPEX and OPEX.",
      img: "blog_1.jpeg",
    },
    {
      title: "Prove of Concepts",
      description: "We offer to prove new concepts in water technology based on literature review, laboratory, bench and pilot scale test as well as process modelling. Our collaboxrating laboratory is equipped with coagulation/flocculation jar test, advanced oxidation (O3, UV, H2O2 treatment), batch and flow-through adsorption, small scale membrane filtration plants – working individually and/or in the combined process trains, as well as biomethane potentials for biogas assessment.",
      img: "blog_2.jpeg",
    },
    {
      title: "Assessment, Modeling & Optimisations",
      description: "Weather it is individual unit or plant size, baum provides a detailed assessment of your plans with data driven solutions. baum employs mechanism models in the assessment and design of your water and wastewater treatment processes. The model allows the prediction of effluent water quality, as well as determination of the energy and chemical usage thus prevail the operational cost and this can be used for compliance, cost evaluation purpose as well as assist on your design.",
      img: "blog_3.jpeg",
    },
    {
      title: "Design, Construction & Commissioning",
      description: "Baum provide design of innovative solutions to solve your challenging problems. From on-site stormwater management to advanced wastewater treatment and beyond, our water specialists and engineers design practical, sustainable solutions that meet your unique requirement. We work collaboratively so that your water solution will work effectively.",
      img: "blog_4.jpeg",
    }
  ]

  constructor() { 
  }

  ngOnInit(): void {
  }

}


