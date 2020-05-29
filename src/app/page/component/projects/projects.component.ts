import { Component, OnInit } from '@angular/core';
import {Project} from '../../../model/project.model';
import {Observable} from 'rxjs';
import {ProjectService} from '../../../service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects$: Observable<Project[]>;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects$ = this.projectService.getProjects();
  }

}
