import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

//Setup Sanity Client
export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

/*imageUrlBuilder 
- is the function responsible 
- to turn the image into a string to be passed into the src
*/
export const urlFor = (source) => builder?.image(source);





//REFERENCES 
//https://create-react-app.dev/docs/adding-custom-environment-variables/
// ADD YARN PACKAGES 
// 1. yarn add @sanity/client
//  FROM : https://yarnpkg.com/package/@sanity/client
// 2.  yarn add @sanity/image-url 
//FROM : https://yarnpkg.com/package/@sanity/image-url
