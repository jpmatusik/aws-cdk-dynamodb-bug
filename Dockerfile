FROM node:14.17-slim

RUN npm -g install typescript@4.3.2 && npm install -g aws-cdk@2.0.0-rc.6

CMD ["bash"]
