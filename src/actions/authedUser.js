export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(id) {
  console.log(`inside setAuthedUser action`)
  return {
    type: SET_AUTHED_USER,
    id,
  };
}
