import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nt-color-tag',
  template: `
    <svg height="32" width="32">
      <circle
        cx="16"
        cy="16"
        r="8"
        [attr.fill]="color" />
    </svg>
    {{ text }}
  `,
  styleUrls: ['./color-tag.component.scss']
})
export class ColorTagComponent {
  @Input() color = '#000000';
  @Input() text = '';
}
