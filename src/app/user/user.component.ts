import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import {MatCardModule} from '@angular/material/card';
import { Firestore, collection, onSnapshot, doc } from '@angular/fire/firestore';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatDialogModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  user: User = new User();
  firestore: Firestore = inject(Firestore);
  allUsers = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    // onSnapshot(collection(this.firestore, 'users'), (changes:any) => {
    //   console.log('Received changes from DB', changes.data()); 
    //   this.allUsers = changes.data();
    // }) 


    onSnapshot(collection(this.firestore, 'users'), (changes) => {
      changes.forEach(element => {
        console.log('Received changes from DB', element.data()); 
        
        // this.allUsers.push(element.data()); // muss noch umgewandelt werden
      });
    }) 


//     const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
//     console.log("Current data: ", doc.data());
// });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}
