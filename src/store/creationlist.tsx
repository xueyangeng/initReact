import { TCreation } from '@/types/creation';
import { action, makeObservable, observable } from 'mobx';

export const initInfo: TCreation[] = [];

export default class CreationList {
  constructor() {
    makeObservable(this);
  }

  @observable
  list: TCreation[] = [...initInfo];

  @observable
  loaded = false;

  @observable
  loading = false;

  @action.bound
  setList(list: TCreation[]) {
    console.log('setCreationList', list);
    this.list = [...list];
  }

  @action.bound
  setLoaded(loaded: boolean) {
    this.loaded = loaded;
  }
  @action.bound
  setLoading(loading: boolean) {
    this.loading = loading;
  }
}
