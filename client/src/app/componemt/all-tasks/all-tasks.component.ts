import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss'],
})
export class AllTasksComponent implements OnInit {
  number1 = 1;
  tasks;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {
    this.taskService.getTasks().subscribe((res) => (this.tasks = res));
  }
  remove(id: string) {
    this.taskService.removeTask(id).subscribe(() => this.getAllTasks());
  }
  edit(id: string) {
    this.router.navigateByUrl(`app-edit/${id}`);
  }
  currentAudio: HTMLAudioElement;
  playAudio(audioName) {
    if (this.currentAudio) {
      this.currentAudio.pause();
    }
    let audio = new Audio();
    audio.src = `../../../assets/audio/${audioName}`;
    audio.load();
    audio.play();
    this.currentAudio = audio;
  }
}
