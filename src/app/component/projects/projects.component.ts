import { Component, OnInit } from '@angular/core';
import {Project} from '../../model/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  private projects: Project[];
  constructor() { }
  ngOnInit() {
  }

}
