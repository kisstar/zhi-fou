export interface ErrorProps {
  status: boolean;
  message?: string;
}

export interface UserProps {
  isLogin: boolean;
  id?: number;
  columnId?: number;
  nickName?: string;
  avatar?: string;
  des?: string;
  email?: string;
}

export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export interface PostInfo {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}

export interface ValidateFunction {
  (): boolean;
}

export interface RuleInfo {
  type: "required" | "email";
  message: string;
}

export type TagType = "input" | "textarea";

export interface LoginParams {
  email: string;
  password: string;
  [propertyName: string]: string;
}

export type MessageType = "success" | "error" | "default";

export interface AppState {
  token: string;
  user: UserProps;
  error: ErrorProps;
  columnList: ColumnProps[];
  currentColumn: ColumnProps | null;
  postList: PostInfo[];
  loading: boolean;
}
