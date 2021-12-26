import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  // icon variables
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;


  // getting elements
  @ViewChild('ResearchCarousel') researchCarousel!: ElementRef;




  // presentation variables
  curResearch!:number;
  totalResearch!:number;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

    // setting values for all the variables
    this.curResearch = 0;
    
  }
  
  
  ngAfterViewInit(){
    // set initial width for class 'research-carousel__research__OC__container'
    this.renderer.setStyle(this.researchCarousel.nativeElement,"width","360rem");

    //setting the number of child research has
    this.totalResearch = this.researchCarousel.nativeElement.childElementCount;
  }



  // methods called from html
  nextResearch(){
    this.curResearch += 1;

    if(this.curResearch > (this.totalResearch - 1)){
      this.curResearch = 0;
    }

    // moving the carousel
    this.renderer.setStyle(this.researchCarousel.nativeElement,"transform",`translateX(-${this.curResearch * 60}rem)`);

  }


  prevResearch(){
    this.curResearch -= 1;

    if(this.curResearch < 0){
      this.curResearch = this.totalResearch - 1;
    }

    // moving the carousel
    this.renderer.setStyle(this.researchCarousel.nativeElement,"transform",`translateX(-${this.curResearch * 60}rem)`);

  }




}
