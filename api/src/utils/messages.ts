export const message = {
  Retrieve: "Retrieve",
  Create: "Create",
  Edit: "Edit",
  Delete: "Delete",
  Validation: "Validation",
  Email: "Send",
  Share: "Share"
}

const errorDictionary: { [key: string]: string } =
{
  [message.Retrieve]: "Error retrieving",
  [message.Create]: "Error creating",
  [message.Edit]: "Error editing",
  [message.Delete]: "Error deleting",
  [message.Validation]: "already exist",
  [message.Email]: "Error sending email",
  [message.Share]: "Error sharing",
};

const successDictionary: { [key: string]: string } =
{
  [message.Retrieve]: "Error retrieving",
  [message.Create]: "created successfully",
  [message.Edit]: "edited successfully",
  [message.Delete]: "deleted successfully",
  [message.Share]: "shared successfully",

};

export const GetErrorMessage = (key: any, message: string = "") => {
  return `${errorDictionary[key]} ${message}`;
}
export const GetSuccessMessage = (key: any, message: string) => {
  return `${message} ${successDictionary[key]} `;
}
export const GetValidationMessage = (key: any, message: string) => {
  return `${message} ${errorDictionary[key]} `;
}