export interface Customer {
  id: number;
  email: string;
  firstName?: string;
  lastName?: string;
  avatarURL?: string | SvgIconComponent;
}
