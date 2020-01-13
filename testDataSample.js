const testpaths = [
  {
    path: "/path/entity/:id", // the end point you want to mock
    method: "post",
    response: {
      status: 200,
      body: {
        // whatever details you want to mock.
      }
    }
  }
];

module.exports = {
  testpaths
};
