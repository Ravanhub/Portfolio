import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ScrollReveal } from '../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ScrollReveal
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  constructor(
    private http: HttpClient
  ) {}

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSending = false;

  sendMessage() {

    if (
      !this.formData.name ||
      !this.formData.email ||
      !this.formData.subject ||
      !this.formData.message
    ) {
      alert('Please fill all fields');
      return;
    }

    this.isSending = true;

    this.http.post(
      'https://email-sender-api-production.up.railway.app/api/contact',
      this.formData
    ).subscribe({

      next: (response) => {

        console.log(response);

        alert('Message sent successfully!');

        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };

        this.isSending = false;
      },

      error: (error) => {

        console.error(error);

        alert('Failed to send message');

        this.isSending = false;
      }
    });
  }
}