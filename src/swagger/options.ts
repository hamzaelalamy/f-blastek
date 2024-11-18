export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "f'blastek",
      version: "0.1.0",
      description:
        "This is an E-commerce API for f'blastek. A website that provides multiple services to clients.",
    },
    servers: [
      {
        url: "http://localhost:8080/api",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};
