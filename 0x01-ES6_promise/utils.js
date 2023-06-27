function uploadPhoto() {
  // Your code for uploading a photo here
  return {
    status: 200,
    body: 'photo-profile-1',
  };
}

module.exports.uploadPhoto = uploadPhoto;

function createUser() {
  // Your code for creating a user here
  return {
    firstName: 'Guillaume',
    lastName: 'Salva',
  };
}

module.exports.createUser = createUser;

