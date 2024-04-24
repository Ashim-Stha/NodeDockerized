 docker ps
 docker ps -a

 docker image ls

 docker image rm image_name
 docker rm cont_name -f

 docker build -t image_name .

 docker exec -it cont_name bash
 to exit exit

### to sync container files and local files 
 docker run -v ${pwd}:/app -p 4000:3000 -d --rm --name cont_name image_name

### to sync but not to touch node_modules of container
 docker run -v ${pwd}:/app -v /app/node_modules -p 4000:3000 -d --name cont_name image_name

### changes in container file dont reflect on local files (read only)
docker run -v ${pwd}:/app:ro -v /app/node_modules -p 4000:3000 -d --name okay nodeapp

### to override default env 
docker run -v ${pwd}:/app -v /app/node_modules -d --env PORT=4000 -p 3000:4000 --name okay nodeapp

### to use env file
docker run -v ${pwd}:/app:ro -v /app/node_modules --env-file ./.env -p 4000:5000 -d --name okay nodeapp

docker logs cont_name

docker volume ls
docker volume prune
docker rm cont_name -fv

docker-compose up -d
docker-compose down -v

to rebuild image so to reflect changes
docker-compose up -d --build

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v

### dont delete volume for db to store persistent data
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down

docker logs fcc-docker-nodeapp-1
docker logs fcc-docker-nodeapp-1 -f

docker network ls
docker network inspect fcc-docker_default
docker inspect fcc-docker-nodeapp-1

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d nodeapp
 docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --no-deps nodeapp

### to scale
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --scale nodeapp=2


docker-compose logs service_name

docker image tag old_name new_name

docker push repo_name