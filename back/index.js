// const config = require('./utils/config')

// const app = require('./app')

// const server = app.listen(config.PORT, () => {
//     let host = server.address().address
//     let port = server.address().port
//     console.log(`Server running on port ${port}`)
// })

// Imports the Google Cloud client library.
const {Storage} = require('@google-cloud/storage');

// Instantiates a client. If you don't specify credentials when constructing
// the client, the client library will look for credentials in the
// environment.
const storage = new Storage();

var bucketName = 'portfolio-alexsanor_bucket-1'; 
var fileName = 'projects/tfg/dfp_paper.pdf';
  
// Create a reference to the file to generate link
var fileRef = storage.bucket(bucketName).file(fileName);
  
// const files = storage.bucket(bucketName).getFiles({startOffset:"azure"}).then((res) =>
// console.log(res))



fileRef.exists().then(function(data) {
  console.log("File in database exists ");
});
  
const config = {
  action: 'read',
  
  // A timestamp when this link will expire
  expires: '01-01-2026',
};
  
// Get the link to that file
fileRef.getSignedUrl(config, function(err, url) {
  if (err) {
    console.error(err);
    return;
  }
    
  // The file is now available to
  // read from this URL
  console.log("Url is : " + url);
});