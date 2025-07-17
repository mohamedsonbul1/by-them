import { AfterViewInit, Component, ElementRef, ViewChild, OnInit  } from '@angular/core';
import { DiscoverMoreComponent } from '../discover-more/discover-more';
import { ProjectsComponent } from '../projects/projects';
import { LoadingComponent } from "../loading/loading"; // Adjust path as needed
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-start-page',
  imports: [CommonModule, DiscoverMoreComponent, ProjectsComponent, LoadingComponent],
  standalone: true,
  templateUrl: './start-page.html',
  styleUrls: ['./start-page.css'],  // fix plural here
  
})
export class StartPage implements AfterViewInit {

  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // 3 seconds
  }

  @ViewChild('trackContainer') trackContainer!: ElementRef;
  @ViewChild(DiscoverMoreComponent) discoverMoreRef!: DiscoverMoreComponent;
  @ViewChild(ProjectsComponent) projectsRef!: ProjectsComponent;  // <-- Add this


  activeBox: string | null = null;

  

  ngAfterViewInit(): void {
    const container = this.trackContainer.nativeElement;
    const firstItem = container.querySelector('.word');

    if (firstItem) {
      const scrollTo =
        firstItem.offsetLeft - (container.offsetWidth - firstItem.offsetWidth) / 2;
      container.scrollTo({ left: scrollTo, behavior: 'instant' });
    }

    const video: HTMLVideoElement | null = document.querySelector('.bg-video');
    if (video) {
      video.play().catch(() => {
        // Autoplay prevented by browser, optionally handle here
        console.log('Autoplay prevented');
      });
    }
  }

  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`Element with id ${sectionId} not found.`);
    }
  }
  

  activateSection(name: string) {
    this.scrollToSection('discover-more');
    setTimeout(() => {
      this.discoverMoreRef.setActive(name);
    }, 300); // wait a bit for scroll animation to finish
  }

  scrollToProjects() {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  
}
