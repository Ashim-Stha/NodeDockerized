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

docker logs cont_name
