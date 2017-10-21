import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../shared/task.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthService } from '../../auth/shared/auth.service';


@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input() task: Task;
  taskCollection: AngularFirestoreCollection<Task>;


  constructor(private db: AngularFirestore, private authService: AuthService) {
    this.taskCollection = db.collection(`tasks-${this.authService.loginUser.email}`);
  }

  ngOnInit() {
  }

  onDeleteTask() {
    const taskRef = this.taskCollection.doc(this.task.id);
    taskRef.delete();
    // this.taskList.splice(this.taskList.indexOf(task), 1);
  }

  onUpdateTask() {
    const taskRef = this.taskCollection.doc(this.task.id);
    taskRef.update(this.task);
  }

}
