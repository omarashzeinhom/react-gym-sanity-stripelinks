const membership = {
  name: "membership", //key id
  title: "Membership",
  type: "document",

  fields: [
    {
      //objects
      name: "title",
      title: "Name",
      type: "string",
    },
    {
      //objects
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      //objects
      name: "image",
      title: "Image",
      type: "image",
    },

    {
      //objects
      name: "price",
      title: "Price",
      type: "number",
    },
    //objects

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    //objects

    {
      name: "currency",

      title: "Currency",

      description: "Keep this 'usd' for the purposes of this tutorial",

      type: "string",
    },
  ],
  initalValue: {
    currency: "usd",
  },
};

export default membership;
