import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';


interface Project {
  title: string;
  longDescription: string;
  images: string[];
  // add other properties as needed
}

@Component({
  selector: 'app-projects',
  standalone: true,  // if using standalone components
  imports: [NgForOf, NgIf],  // Add these here
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      title: 'Royal Group',
      thumbnail: 'assets/royal/royal cover.jpg',
      shortDescription: "drawing inspiration from the brand's initial and the cultural significance of the eye of horus. we combined these elements to develop a cohesive and powerful icon for the logo.",
      longDescription: 'we combined these elements to develop a cohesive and powerful icon for the logo.',
      images: [
        'assets/royal/1.jpg',
        'assets/royal/2.jpg',
        'assets/royal/3.jpg',
        'assets/royal/4.jpg',
        'assets/royal/5.jpg',
        'assets/royal/6.jpg',
        'assets/royal/7.jpg',
        'assets/royal/8.jpg'
      ]
    },
    {
      id: 2,
      title: 'Karim Abotaleb',
      thumbnail: 'assets/karim/karim cover.jpg',
      shortDescription: 'Karim Abotaleb General Contracting, a distinguished leader in contracting and interior design consultation, renowned for its unwavering reliability, meticulous precision, and cutting-edge designs. Transforming spaces with a modern touch is the brand passion.',
      longDescription: ' Inspired by the brand\'s initial identity, we aimed to concentrate on its core element: design. Our focus was on capturing the brand\'s visual essence, with the letter "K" serving as a motif that integrates seamlessly with the emblem. Through carefully crafted shapes, curves, and cohesive spaces, we created a dynamic element that enhances the brand identity to resonate with the niche market.',
      images: [
        'assets/karim/1.jpg',
        'assets/karim/2.jpg',
        'assets/karim/3.jpg',
        'assets/karim/4.jpg',
        'assets/karim/5.jpg',
        'assets/karim/6.jpg',
        'assets/karim/7.jpg'
      ]
    },
    {
      id: 3,
      title: 'FLOWID',
      thumbnail: 'assets/flowid/flowid cover.jpg',
      shortDescription: 'The project focuses on swimwear that fits you flawlessly, not just at the beach. HOW, you might wonder?',
      longDescription: 'The design, whether it\’s one - piece or two - piece, in corporate materials and style that can also be worn as casual clothing, in addition to serving as conventional swimwear.',
      images: [
        'assets/flowid/1.jpg',
        'assets/flowid/2.jpg',
        'assets/flowid/3.jpg',
        'assets/flowid/1105 (3) F.mp4',
        'assets/flowid/4.jpg',
        'assets/flowid/5.jpg',
        'assets/flowid/6.jpg',
        'assets/flowid/7.jpg',
        'assets/flowid/8.jpg',
        'assets/flowid/9.jpg',
        'assets/flowid/10.jpg',
        'assets/flowid/11.jpg',
        'assets/flowid/12.jpg',
        'assets/flowid/13.jpg'
      ]
    },
    {
      id: 4,
      title: 'Nsides',
      thumbnail: 'assets/neside/nsdie.jpg',
      shortDescription: 'Nsides is a trailblazing interior design brand that transforms spaces with a perfect blend of creativity, precision, and innovation.',
      longDescription: 'With a philosophy centered on balance and interconnectedness, Nsides creates environments that harmoniously fuse functionality and beauty, ensuring each design narrates its unique story. Core to Nsides’ identity is a strong commitment to structure and harmony. This is embodied in our branding, where the logo reflects cohesion and versatility—crucial elements of our design philosophy. The interwoven circular motifs symbolize the vibrant relationship between space and form, while the asymmetry infuses a daring, avant-garde flair that showcases our ability to push the boundaries of traditional design',
      images: [
        'assets/neside/1.jpg',
        'assets/neside/2.jpg',
        'assets/neside/3.jpg',
        'assets/neside/4.jpg',
        'assets/neside/5.jpg',
        'assets/neside/6.jpg',
        'assets/neside/7.jpg',
        'assets/neside/8.jpg',
        'assets/neside/9.jpg',
        'assets/neside/10.jpg',
        'assets/neside/11.jpg',
        'assets/neside/12.jpg',
        'assets/neside/13.jpg',
        'assets/neside/14.jpg'
      ]
    },
    {
      id: 5,
      title: 'Royal Beaurivage',
      thumbnail: 'assets/bea/bea cover.jpg',
      shortDescription: 'A MASTERPIECE OF LUXURY CRAFTED FOR THE NILE',
      longDescription: 'Smart Luxurious Nile Cruise Our five-star Nile cruise invites you to explore the breathtaking landscapes and rich history of Egypt in unparalleled comfort. With opulent cabins, exquisite dining options, and a commitment to exceptional service, every moment spent on the Royal Beau Rivage is designed to create unforgettable memories',
      images: [
        'assets/bea/1.jpg',
        'assets/bea/2.jpg',
        'assets/bea/3.jpg',
        'assets/bea/4.jpg'
      ]
    },
    // more projects
  ];

  selectedProject: Project | null = null; // explicitly typed, can be null initially
img: any;

  selectProject(project: any) {
    this.selectedProject = project;

    // Scroll to the project details smoothly
    setTimeout(() => {
      const details = document.querySelector('.project-details');
      if(details) {
        details.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}