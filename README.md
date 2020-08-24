# Test Hans Almeida

## Setup

The project runs entirely inside a Docker environment, so there's only one requirement.  
That is having Docker and Docker-compose installed.

### Run

To run the project execute the following command:

```sh
docker-compose -f docker-compose.dev.yml up
```

In case the project complains about permissions just add `sudo` in front of it and execute.

The project will run the back-end server at the port `3333` while the React application will run at the port `3000`
