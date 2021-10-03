import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-properties',
  templateUrl: './databinding-properties.component.html',
  styleUrls: ['./databinding-properties.component.scss'],
})
export class DatabindingPropertiesComponent implements OnInit {
  public name = 'Trương An Huy';
  public name2 = 'Trương Thế Hưng';
  public age = 20;

  public resetname(): void {
    console.log('resetname');
    this.name = '';
  }
  public traiCay = ['Táo', 'Xoài', 'Dưa', 'Bưởi', 'Cam'];

  public traiCay2 = [
    { ten: 'Mận', gia: 12 },
    { ten: 'Ổi', gia: 32 },
    { ten: 'Mơ', gia: 22 },
    { ten: 'Đào', gia: -12 },
    { ten: 'Mít', gia: 42 },
  ];

  constructor() {}

  public ngOnInit(): void {
    console.log('trai cay =', this.traiCay);
  }
}
