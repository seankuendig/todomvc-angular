import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';
import { TaskService } from './shared/task.service';
import { AuthService } from '../auth/shared/auth.service';
import { MatDialog } from '@angular/material';
import { TodoDiagramComponent } from './todo-diagram/todo-diagram.component';

import { Task } from './shared/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  taskDesc: string;
  taskList: Task[] = [];
  filter = 'all';
  selectAll = false;
  search = '';
  isTaskLoaded = false;
  @ViewChild('searchForm') searchForm: NgForm;

  taskCollection: AngularFirestoreCollection<Task>;

  tasks$: Observable<any[]>;
  constructor(private db: AngularFirestore,
    public taskService: TaskService,
    private authService: AuthService,
    private dialog: MatDialog) {

    this.taskCollection = db.collection(`tasks-${this.authService.loginUser.email}`);


    this.tasks$ = this.taskCollection.valueChanges();

    this.tasks$.subscribe(taskList => {
      this.taskList = taskList;
      this.isTaskLoaded = true;
    },
      err => {
        this.isTaskLoaded = true;
      });
  }

  ngOnInit() {
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.searchForm.invalid) {
      return;
    }
    if (this.taskDesc.trim() === '') {
      return;
    }

    const task: Task = {
      id: this.guid(),
      desc: this.taskDesc,
      isCompleted: false,
      created: new Date(),
      userEmail: this.authService.loginUser.email
    };

    // this.db.collection('tasks').add(task),
    this.taskCollection.doc(task.id).set(task);
    // this.taskList.push(task);
    document.getElementById('search-input').blur();
    this.searchForm.reset();
    this.taskDesc = '';
  }

  onDeleteTask(task) {
    const taskRef = this.taskCollection.doc(task.id);
    taskRef.delete();
    // this.taskList.splice(this.taskList.indexOf(task), 1);
  }

  onUpdateTask(task) {
    const taskRef = this.taskCollection.doc(task.id);
    taskRef.update(task);
  }

  clearCompleted() {
    this.taskList.forEach(task => {
      if (task.isCompleted) {
        this.onDeleteTask(task);
      }
    });

    // this.taskList = this.taskList.filter(task => !task.isCompleted);
    this.selectAll = false;
  }

  toggleSelectAll() {
    this.taskList.forEach(task => {
      task.isCompleted = this.selectAll;
      this.onUpdateTask(task);
    });
  }

  get completedTaskList() {

    return this.taskList.filter(task => task.isCompleted);
  }

  get activeTaskList() {
    return this.taskList.filter(task => !task.isCompleted);
  }

  guid() {
    const s4 = function () {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  openDialog() {
    const dialogRef = this.dialog.open(TodoDiagramComponent, {
      width: '800px',
      data: { taskList: this.taskList }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }


}
