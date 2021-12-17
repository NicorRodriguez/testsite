FROM node
COPY . .
EXPOSE 5000
RUN npm i
ENTRYPOINT ["node", "index.js"]