import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from "./components/about/about";
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import { Skills } from "./components/skills/skills";
import { Projects } from "./components/projects/projects";
import { Experience } from "./components/experience/experience";
import { Contact } from "./components/contact/contact";

@Component({
  selector: 'app-root',
  imports: [About, Navbar, Home, Skills, Projects, Experience, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
