import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  arrWords = [
    {id: 1, en: 'action', vn: 'hành động', memorized: true},
    {id: 2, en: 'actor', vn: 'diễn viên', memorized: false},
    {id: 3, en: 'activity', vn: 'hoạt động', memorized: true},
    {id: 4, en: 'active', vn: 'chủ động', memorized: true},
    {id: 5, en: 'bath', vn: 'tắm', memorized: false},
    {id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true}
  ];
  newEn = '';
  newVn = '';
  updateEn = '';
  updateVn = '';
  hiddenForm = true;
  hiddenUpdate = true;
  filterStatus = 'XEM TAT CA';

  constructor() {
  }

  ngOnInit() {
  }

  addWord() {
    if (this.hiddenForm === false && this.newEn !== '') {
      this.arrWords.unshift({
        id: this.arrWords.length + 1,
        en: this.newEn,
        vn: this.newVn,
        memorized: false
      });
      this.hiddenForm = true;
      this.newEn = '';
      this.newVn = '';
    } else {
      this.hiddenForm = false;
    }
  }

  deleteWord(id) {
    const index = this.arrWords.findIndex(e => e.id === id);
    this.arrWords.splice(index, 1);
  }

  updateMorized(id) {
    const indexMemo = this.arrWords.findIndex(e => e.id === id);
    this.arrWords[indexMemo].memorized = !this.arrWords[indexMemo].memorized;
  }

  getShowStatus(memorized) {
    const xemTatCa = this.filterStatus === 'XEM TAT CA';
    const xemDaNho = this.filterStatus === 'DA NHO' && memorized;
    const xemChuaNho = this.filterStatus === 'CHUA HOC' && !memorized;
    return xemTatCa || xemDaNho || xemChuaNho;
  }
}
