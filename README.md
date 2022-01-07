# AWS connect
```bash
$ chmod 400 awskey.pem
$ ssh -i "awskey.pem" ubuntu@ec2-00-000-000-00.us-west-1.compute.amazonaws.com
```

# EC2 Setup
```bash
$ sudo apt-get update && sudo apt-get upgrade -y
$ curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
$ sudo apt-get install gcc g++ make
$ git clone https://github.com/vinicius5581/fogday.git
$ cd fogday
$ npm install
$ npm frontend:build
$ sudo npm install pm2 -g
$ pm2 start server/index.js
```


http://18.118.171.129/