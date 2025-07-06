import { Component } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common'; 

@Component({
  selector: 'app-discover-more',
  standalone: true,
  imports: [NgIf, NgStyle],
  templateUrl: './discover-more.html',
  styleUrls: ['./discover-more.css']
})

export class DiscoverMoreComponent {
  activeBox: string | null = null;

  // Define the color pairs for each box
  colorMap: Record<string, { bg: string; text: string }> = {
    contact: { bg: '#9BCCD0', text: '#E22028' },     // Contact box: bg yellow, text red
    services: { bg: '#E22028', text: '#B1D8B8' },     // Services box: light blue bg, red text
    philosophy: { bg: '#FBBA16', text: '#00492C' },   // Philosophy box: red bg, yellow text
    about: { bg: '#e2b2e4', text: '#1e4380' }         // About box: lavender bg, navy text
  };

  get activeColor() {
    if (!this.activeBox) {
      return { bg: '#FFEA35', text: '#000' }; // yellow bg, black text default
    }
    return this.activeBox ? {
      bg: this.colorMap[this.activeBox].text, // Flip background ↔ text
      text: this.colorMap[this.activeBox].bg
    } : { bg: 'transparent', text: '#000' };
  }

  setActive(box: string) {
    this.activeBox = box;
  }

  scrollToProjects() {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
}
