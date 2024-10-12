
// useUserInfo 用于获取用户信息
// export function useUserInfo() {
//   const {
//     common: { userInfo, userInfoLoaded },
//   } = useModule();

//   const refreshUserInfo = useRefreshUserInfo();

//   useEffect(() => {
//     refreshUserInfo();
//   }, [refreshUserInfo]);

//   return {
//     userInfo,
//     pending: !userInfoLoaded,
//     isLogin: userInfo.username !== '',
//   };
// }
