export interface NewUser {
  name: string;
  loginName?: string;
  emailAddress: string;
  password?: string;
  roles: [
    {
      name: string;
    }
  ];
}
