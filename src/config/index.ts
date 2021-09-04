import { IS_DEVELOPMENT } from "@/lib/constants";

export const baseURL = IS_DEVELOPMENT ? "http://localhost:8080/" : "";
