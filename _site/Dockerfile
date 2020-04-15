FROM ubuntu
WORKDIR /app
#from where to where
COPY package.json /app 
RUN npm install
COPY . /app
CMD node app.js
EXPOSE 3000


