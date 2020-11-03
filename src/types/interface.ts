export interface UserProps {
  id?: number;
  name?: string;
  isLogin: boolean;
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
