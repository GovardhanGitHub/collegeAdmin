import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from '../_services/toast.service';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.css'],
  host: { 'class': 'toast-container position-fixed top-0 end-0 p-3', 'style': 'z-index: 1200' }
})
export class ToastContainerComponent implements OnInit {

  constructor(public toastService: ToastService) { }
  ngOnInit(): void {

  }

  isTemplate(toast: any) { return toast.textOrTpl instanceof TemplateRef; }
}
