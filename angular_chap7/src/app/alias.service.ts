import { UseComponent } from './use.component';
import { UseService } from './use.service';

export class AliasService extends UseService {
  show() {
    return 'HogeHoge';
  }
}