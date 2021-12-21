import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  team_74:boolean = false;

  // accessing that modal from the html side.
  @ViewChild('modal_1') modal_1!: ElementRef;

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //  here the ElementRef are ready. 
  }


  modalOpen(modal_no:number){
    if(modal_no == 1){
      this.renderer.setStyle(this.modal_1.nativeElement,'display','block');
    }
  }

  modalClose(modal_no:number){
    if(modal_no==1){
      this.renderer.setStyle(this.modal_1.nativeElement,'display','none');
    }
  }

  goToResearch(){
    this.router.navigateByUrl('/conqueror-space/Research');
  }

}
