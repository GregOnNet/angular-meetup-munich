import { NoteColors } from './note-colors';

export class Note {
  constructor(
    public title = '',
    public text = '',
    public color = NoteColors.Default
  ) {}
}
