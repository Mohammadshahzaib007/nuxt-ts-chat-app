import user from '../user';

export interface UserState {
   user: {
    isloggedIn: boolean,
    data: object | null,
    ActiveUserUid: string |undefined,
    displayName: string
   }
}
