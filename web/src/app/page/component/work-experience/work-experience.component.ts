import { Component, OnInit } from '@angular/core';
import {Role} from '../../../model/Role.model';
import {RoleService} from '../../../service/role.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  roles: Observable<Role[]>;

  constructor(private roleService: RoleService) {
  }

  ngOnInit() {
    this.roles = this.roleService.getRoles();
  }

}
