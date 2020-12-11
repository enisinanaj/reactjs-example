# pull official base image
FROM node:10-alpine3.10

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
# COPY yarn.lock ./

RUN npm install
RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./

# start app
CMD ["npm", "start"]