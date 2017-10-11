import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';

import { Task } from './shared/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
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
  constructor(private db: AngularFirestore) {
    this.taskCollection = db.collection('tasks');


    this.tasks$ = db.collection('tasks').valueChanges();

    this.tasks$.subscribe(taskList => {
      this.taskList = taskList;
      this.isTaskLoaded = true;
    },
    err  => {
      this.isTaskLoaded = true;
    });
  }

  ngOnInit() {
  }

  onSubmit(e) {
    e.preventDefault();
    if(this.searchForm.invalid) {
      return;
    }

    const task: Task = {
      id: this.guid(),
      desc: this.taskDesc,
      isCompleted: false
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
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

}
