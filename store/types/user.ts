import user from '../user';

export interface UserState {
   user: {
    isloggedIn: boolean,
    data: object | null,
    ActiveUserUid: string |null | undefined,
    displayName: string | null
   },
   messages: Array<{
      id: string,
      userUid: string |null | undefined,
      content: string,
      msgSentTime: Date
    }>
}
