import {useLocalStorage} from "@uidotdev/usehooks";
import * as types from "../types.ts";

export const useProfile = () => {
  const defaultProfile: types.Profile = {
    npln_user_id: "",
  }
  return useLocalStorage<types.Profile>("profile", defaultProfile)
}