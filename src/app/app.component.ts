import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cvfiras';

  hireMe() {
    // Replace 'your_email@example.com' with your actual email address
    window.location.href = 'firas.baklouti059@gmail.com';
  }

  downloadCV(): void {
    // Replace 'path_to_your_pdf' with the actual path to your PDF file
    const pdfUrl = 'https://drive.google.com/file/d/1ykCmnvMJYsyiEt_DsfpmPw3RASJuWo2u/view?usp=sharing';

    // Create an anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;

    // Set the download attribute to force download
    link.download = 'Cover Letter_Firas Baklouti.pdf';

    // Append the anchor element to the body
    document.body.appendChild(link);

    // Trigger the click event to start downloading
    link.click();

    // Clean up: remove the anchor element
    document.body.removeChild(link);
  }

  toggleNavbar() {
    const navbar = document.querySelector('.custom-navbar');
    if (navbar) {
      navbar.classList.toggle('active'); // Assuming 'active' class controls the visibility
    }
  }
}
