import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollReveal } from '../../shared/directives/scroll-reveal';
import emailjs from '@emailjs/browser';

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

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSending = false;

  sendMessage() {

    this.isSending = true;

    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      subject: this.formData.subject,
      message: this.formData.message
    };

    emailjs.send(
      'service_r0l23bw',
      'template_50n89ya',
      templateParams,
      'eOhc14LU0FQ4tydew'
    )
    .then(() => {

      alert('Message sent successfully!');

      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      this.isSending = false;

    })
    .catch((error) => {

      console.error(error);
      alert('Failed to send message');

      this.isSending = false;
    });
  }
}