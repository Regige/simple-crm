import { Component, inject } from '@angular/core';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogRef, } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import {MatProgressBarModule} from '@angular/material/progress-bar';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButtonModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, FormsModule, MatProgressBarModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

   user: User = new User();
   birthDate: Date = new Date();
   loading = false;

   firestore: Firestore = inject(Firestore);

   constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {
      // const itemCollection = collection(this.firestore, 'items');
      // this.item$ = collectionData(itemCollection);
   }

   async saveUser() {
      this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user is', this.user);


      await addDoc(collection(this.firestore, 'users'), this.user.toJSON()).catch(
        (err) => { console.error(err) }
         ).then((result:any) => { this.loading = false; console.log('Adding user finished', result); this.dialogRef.close();})  
      }
}
