import { useStore } from "react-redux";
import { AppStore } from "../types";

export const useAppStore = useStore.withTypes<AppStore>();
