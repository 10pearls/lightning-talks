import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teamMembers: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.teamMembers = db.collection('team').valueChanges();
  }

  ngOnInit() {
  }

}
