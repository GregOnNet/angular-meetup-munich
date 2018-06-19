import { EntityState } from '@ngrx/entity';

import { Note } from '../models/note';

export interface State extends EntityState<Note> {}
