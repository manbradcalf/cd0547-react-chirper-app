export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers(users) {
  console.log(`inside receiveUsers action`)
  return {
    type: RECEIVE_USERS,
    users,
  };
}
