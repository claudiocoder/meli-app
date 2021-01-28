import { Component, OnInit } from '@angular/core';
import { labels } from '../../content/labels';
import { LabelsContent } from '../../interfaces/labels.interface';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  content: LabelsContent;

  constructor() {
    this.content = labels;
  }

  ngOnInit(): void {}
}
