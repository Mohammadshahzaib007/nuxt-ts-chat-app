import user from '../user';

export interface UserState {
   user: {
    isloggedIn: boolean,
    data: object | null,
    ActiveUserUid: string |null | undefined,
    displayName: string | null
   }
}
