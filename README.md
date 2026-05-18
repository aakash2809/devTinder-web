# DevTinder
- Created React + Vite Application
- Remove unneccessary code and files and create hello world app
- install telwindcss, daisyUI and configure
- sepearet NavrBar file
- install react-router-dom
- create routerbrowser  https://reactrouter.com/api/declarative-routers/BrowserRouter
- implement dummy routes and chileren route and outlet
- create login page and do data binding
- install axios
- setup CORS in backend
- call login api using backend
- install redux-toolkit 
- createStore --> provider --> create slice --> add reducer to store
- add redux-devtool in chrome
- login and see your data is comming properly in store
- navBar should update as soon as user logged in
- Refector code and create proper structured create component folder and move all components to this folder
- You should not be access other routes without login
- If the token is not present you should be redirect to login page
- logout feature
- get the feed and add the feed in the stroes
- build the user card on the field
- develop edit profile feature and add show toast feature
- feature to view all connections
- create a page of connection request
- develop accept/reject feature

# deployemenet
- SignUp on AWS
- Launch instance
- chmod 400 <secret>.pem
        chmod 400 "devTinder-secret.pem"
- then connect with aws ec2 ubuntu system with ssh command
- ssh -i "devTinder-secret.pem" ubuntu@ec2-67-202-53-125.compute-1.amazonaws.com
- install node 
- install v22.17.0 of node 
- clone app from git to ubuntu (ec2 instance
)
- install dependence for front-end
- build the procject using npm run build
- sudo apt update
- sudo apt install nginx
- sudo systemctl start nginx
- sudo systemctl enable nginx
- sudo systemctl status nginx
- sudo scp -r dist/* /var/www/html/
- enable port 80 for your instance