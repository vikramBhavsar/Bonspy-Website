import { Component, OnInit } from '@angular/core';
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor() { }

  ngOnInit(): void {
  }

}
