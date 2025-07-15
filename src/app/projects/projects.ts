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
      thumbnail: 'assets/royal/cover.mp4',
      shortDescription: "drawing inspiration from the brand's initial and the cultural significance of the eye of horus. we combined these elements to develop a cohesive and powerful icon for the logo.",
      longDescription: 'we combined these elements to develop a cohesive and powerful icon for the logo.',
      images: [
        'assets/royal/Royal-Group-Presention-2024-5.jpg',
        'assets/royal/5.jpg',
        'assets/royal/RG-2.jpg',
        'assets/royal/RG-1.jpg'
      ]
    },
    {
      id: 2,
      title: 'Karim Aboutaleb',
      thumbnail: 'assets/karim/karim cover.mp4',
      shortDescription: 'Karim Aboutaleb General Contracting, a distinguished leader in contracting and interior design consultation, renowned for its unwavering reliability, meticulous precision, and cutting-edge designs. Transforming spaces with a modern touch is the brand passion.',
      longDescription: ' Inspired by the brand\'s initial identity, we aimed to concentrate on its core element: design. Our focus was on capturing the brand\'s visual essence, with the letter "K" serving as a motif that integrates seamlessly with the emblem. Through carefully crafted shapes, curves, and cohesive spaces, we created a dynamic element that enhances the brand identity to resonate with the niche market.',
      images: [
        'assets/karim/cover.jpg',
        'assets/karim/Debossed-Concrete-Logo-Mockup.jpg',
        'assets/karim/Artboard 24-100.jpg',
        'assets/karim/Stationary-3.jpg',
        'assets/karim/22.jpg',
        'assets/karim/23.jpg',
      ]
    },
    {
      id: 3,
      title: 'FLOWID',
      thumbnail: 'assets/flowid/flowid_resized_to_video_height.jpg',
      shortDescription: 'The project focuses on swimwear that fits you flawlessly, not just at the beach. HOW, you might wonder?',
      longDescription: 'The design, whether it\’s one - piece or two - piece, in corporate materials and style that can also be worn as casual clothing, in addition to serving as conventional swimwear.',
      images: [
        'assets/flowid/9.jpg',
        'assets/flowid/A4-Poster-Mockup.jpg',
        'assets/flowid/03-post-packaging-mockup.jpg',
        'assets/flowid/1105 (3) F.mp4',
        'assets/flowid/2_1.png',
        'assets/flowid/2_3.png',
        'assets/flowid/55_9.png',
        'assets/flowid/55_0.png',
        'assets/flowid/1_1.png',
        'assets/flowid/3_7.png',
        'assets/flowid/77_7.png',
        'assets/flowid/88_1.png'
      ]
    },
    {
      id: 4,
      title: 'NeSide',
      thumbnail: 'assets/neside/1_resized_to_video_height.jpg',
      shortDescription: 'Nsides is a trailblazing interior design brand that transforms spaces with a perfect blend of creativity, precision, and innovation.',
      longDescription: 'With a philosophy centered on balance and interconnectedness, Nsides creates environments that harmoniously fuse functionality and beauty, ensuring each design narrates its unique story. Core to Nsides’ identity is a strong commitment to structure and harmony. This is embodied in our branding, where the logo reflects cohesion and versatility—crucial elements of our design philosophy. The interwoven circular motifs symbolize the vibrant relationship between space and form, while the asymmetry infuses a daring, avant-garde flair that showcases our ability to push the boundaries of traditional design',
      images: [
        'assets/neside/Neside 2.jpg',
        'assets/neside/Neside 3.jpg',
        'assets/neside/Neside 4.jpg',
        'assets/neside/Neside 5.jpg',
        'assets/neside/Neside 6.jpg',
        'assets/neside/Neside 7.jpg',
        'assets/neside/Neside 8.jpg',
        'assets/neside/Neside 9.jpg',
        'assets/neside/Neside 10 (2).jpg',
        'assets/neside/Neside 11.jpg',
        'assets/neside/Neside 12.jpg',
        'assets/neside/Neside 13.jpg'
      ]
    },
    {
      id: 5,
      title: 'Beuverage',
      thumbnail: 'assets/bea/royal cover.mp4',
      shortDescription: 'A MASTERPIECE OF LUXURY CRAFTED FOR THE NILE',
      longDescription: 'Smart Luxurious Nile Cruise Our five-star Nile cruise invites you to explore the breathtaking landscapes and rich history of Egypt in unparalleled comfort. With opulent cabins, exquisite dining options, and a commitment to exceptional service, every moment spent on the Royal Beau Rivage is designed to create unforgettable memories',
      images: [
        'assets/bea/BEAURIVAGE 1.jpg',
        'assets/bea/BEAURIVAGE 2.jpg',
        'assets/bea/BEAURIVAGE 3.jpg',
        'assets/bea/BEAURIVAGE 4.jpg',
        'assets/bea/BEAURIVAGE 5.jpg'
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