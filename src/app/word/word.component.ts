import { Component } from '@angular/core';

@Component({
    selector: 'app-word',
    templateUrl: './word.component.html'
})

export class WordComponent {
    isDisabled = false;
    title = 'Hello Khoa Pham.';
    name = '';
    imageSrc = 'https://www.google.com.vn/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png';
    isAdmin = false;
    toggle() {
        this.isDisabled = !this.isDisabled;
    }
}
