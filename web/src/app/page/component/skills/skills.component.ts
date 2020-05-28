import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {SkillsService} from '../../../service/skills.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  private skills: Observable<string[]>;
  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.skills = this.skillsService.getSkills();
  }

}
