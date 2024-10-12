// import { action, makeObservable, observable } from 'mobx';

// export const initInfo: User = {
//   username: '',
//   nickname: '',
//   role: Role.User,
// };

// export default class Common {
//   constructor() {
//     makeObservable(this);
//   }

//   @observable
//   userInfo: User = { ...initInfo };

//   @observable
//   userInfoLoaded = false;

//   @action.bound
//   setUserInfo(userInfo: User) {
//     this.userInfo = { ...userInfo };
//   }

//   @action.bound
//   setUserInfoLoaded(loaded: boolean) {
//     this.userInfoLoaded = loaded;
//   }

//   @observable
//   config: AogGlobal = JSON.parse(JSON.stringify(aogGlobal));

//   @observable
//   configLoaded = false;

//   @action.bound
//   setConfig(config: AogGlobal) {
//     this.config = JSON.parse(JSON.stringify(config));
//   }

//   @action.bound
//   setConfigLoaded(loaded: boolean) {
//     this.configLoaded = loaded;
//   }
// }
