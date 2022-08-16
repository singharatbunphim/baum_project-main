import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {
    metarial: any[];
    selectedMetarial: any[];
    text: any;
    coursename: string;
    urls: any[] = [];






//   public elements:Array<unknown> = [];

//   public appendElement():void {
//      this.elements = [...this.elements, this.elements.length + 1]; // Just append anything, since you are not using the values otherwise, appending a generic ID here
//   }

//   public removeElement():void {
//     this.elements = [...this.elements, this.elements.length - 1]; // Just append anything, since you are not using the values otherwise, appending a generic ID here
//  }

//   public caller():void {
//      // Do whatever you want when your appended elements are clicked
//   }
  constructor() {
    this.metarial = [
      {name: 'PHP', code: ''},
      {name: 'JAVA', code: ''},
      {name: 'NODE JS', code: ''},
      {name: 'REACT', code: ''},
      {name: 'ANGULAR', code: ''}
  ];

   }
   

  ngOnInit(): void {
  }

  SelectedFiles(event: any){
    if(event.target.files){
      for(let i = 0; i < File.length; i++){
          this.urls.push(event.target.file[i])
          console.log(this.urls)
        }
      }

  }

  

}
