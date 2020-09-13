export interface User {
  name: string;
  loginName: string;
  emailAddress: string;
  password?: string;
  role: [
    {
      name: string;
    }
  ];
}
