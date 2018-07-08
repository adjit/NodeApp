# NodeApp for Assignment 5 CS 612
Aaron Tawil

This repository should have the ability to just be downloaded and run in docker. The node modules required are already present in the repository.

# Data
- `garage.json` contains a "garage" object with an array of cars in the garage
- `server.js` is the running point for the application, as stated in the `package.json`

# Running
- To run from within the `NodeApp` repository with `Docker` running run as follows
> `docker build -t <imageName> -f .\.Dockerfile .`
>
> `docker run --rm -d -p 8080:8080 <imageName>:latest`

Then open to `localhost:8080` to see "Hello World"

`localhost:8080/garage` will yield all cars in the garage

`localhost:8080/garage/{tagID}` will yield the car in the garage at the `tagID` index. If the `tagID` requested doesn't represent a car in the garage the application will send a `404` message saying that the `tagID` is out of bounds.
