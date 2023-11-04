# Todolist App

The todolist website is a landing page for list of users name and their associated todolist with created date.

The todolist app offers organize and manage tasks more efficiently.

Users of this website will be able to create a list of todoitem that they need to complete within a certain timeframe.

It also allows assign them due dates and prioritize them so they stay focused on what todoitems most.

It enables cooperative planning, in this case, each user could have their own space with their 

indvidual todolists and possible implementing shared todolists.

This site is targeted towards adults and young children who want to plan personal and work schedules.

![ppp5 landing page](https://github.com/Tamirucode/react-todoitem/assets/116649197/09032e11-1891-48bd-8916-8a30fb8dc131)

## How to use todolist app

 - In this version, first the user need to create an account by using sign up form.

    Once an account is created, they need to login with their password and username. Afterthat, the user can see top left navbar link

    there is a button addtodolist, then click that button, they will greet with blank form need to fill out todolist, after they completed, click the create button

    which takes them a new blank form used for to create todoitem, after they finished fill out the form click save and go back to ToDoItem navlink, they need 
   
    to open this page to see their created todoitem.

## User Story
       
  - Navigation
          
    - As a user I can view a navbar from every page sothat I can navigate easily between pages.

    - As logged out user I can see sign in and sign up options sothat I can sign in/sign up.

  - Authetication

    - As a user I can sign in to the app sothat I can access functionality for logged in users.

    - As a user I can maintain my logged-in status until I choose to logout sothat my user experience is not compromised.

    - As a user I can create a new account sothat I can access all the features for signed up users.
   
    - As a user I can tell if I am logged in or not sothat I can login if I need to.
   
  - Routing

     - As a user I can navigate through pages quickly sothat I can view content seamlessly without page refresh.
   
  - Avatar

     - As a user I can view users avatars sothat I can easily identify users of the application.
   
  - User profile

     - As a user I can view statistics about a specific user todolists and todoitems sothat I can learn more about them.
   
     - As a user I can view others profile sothat I can see their todolists, todoitem and learn more about them.

  - Edit Profile

     - As a logged in user I can edit my profile sothat I can change my profile image.

  - Update username and password

     - As a logged in user I can update my username and password sothat I can change my display name and keep my profile secure.
   
  - Create todolist

     - As a logged in user I can create todolists sothat I can share my todolists with the world.
   
  - View a todolist

     - As a user I can view the details of a single todolist sothat I can learn more about it. 
  
  - Create todoitem

     - As a logged in user I can create todoitems sothat I can share my todoitem with the world.
   
  - View todoitem

     - As a user I can view the details of a single todoitem sothat I can learn more about it.

  - View todoitem by due_date

    - As a user I can view all the most recent todoitems by due_date sothat I can notice when specific task should be finalized.

  - Search /filter todolist, todoitem

    - As a user I can search /filter for todolist, todoitem by key words, owner sothat I can find most interesting user

      profile/view specific user intended to accomplish.
 
 - Delete todolist

    - As a todolist owner I can delete my todolist title sothat I can remove it from the app.
  
 - Edit todolist

    - As a todolist owner I can edit my todolist title sothat I can make corrections or update my todolist after it was created.

 - Edit todoitem

    - As a todoitem owner I can edit my todoitem so that I can fix or update my existing todoitem.
  
 - Delete todoitem

    - As an owner of a todoitem I can delete my todoitem sothat I can manage/control todoitem.
 
 - View todoitem by completion
  
    - As a logged in user I can view todoitems completed sothat I can distingush between completed and those still need action.

## Features

 - Navigation
    
    - featured at the top of the page, the navigation shows the todo name logo in the left corner: next to that Add todolist that
      links to the form to add todolists if logged in users
    
    - The  other navigation links are to the right: Home, signin and sign up which link to different section of the page.
       there is two link inside if logged in users, namely todoitem and profile.
    
    -  The navigation clearly tells the user the todo name logo and website and makes of information easy to find.
       
 ![ppp5 navlink](https://github.com/Tamirucode/react-todoitem/assets/116649197/c9568d6d-b3a6-4363-b6e3-3ad634487beb)
    

- The Home Section

    - The home section gives list of users name and their respective todolist

    - This section shows todolist and date created by users.
 
    
![ppp5 home](https://github.com/Tamirucode/react-todoitem/assets/116649197/ac543c00-0b0b-4ffa-bde3-76f9a9c2296a)


 - The home section includes search bar to users can find specific todolist title or filter todolists by user name
  
![ppp 5 filter  user name](https://github.com/Tamirucode/react-todoitem/assets/116649197/30797281-51b9-40f4-9622-99e9e8af0720)

- The Sign Up Form
    
    - The sign up section has a form to collect user information so they can sign up to the todolist site
 
    - The form collects user name and password name
 
    - The sign up form is valuable to the user as it gives them the ability to sign up to join the todolist site.

![ppp5 sign up from ](https://github.com/Tamirucode/react-todoitem/assets/116649197/410ce379-92cf-4120-ba6f-73e80821ff53)

- The Sign in Form

    - The sign in section has a form to login to the todolist site.
 
    - The sign in form request valid username and password.
 
![sign in  form](https://github.com/Tamirucode/react-todoitem/assets/116649197/f67fe527-1a8a-4cc5-b44f-0b1dfdde5df6)

- The ToDoItem Section

    - The ToDoItem section gives list of users name and their respective todoitem

    - This section shows todoitem and date created by users.
 
![ppp5 todoitem](https://github.com/Tamirucode/react-todoitem/assets/116649197/b5731ba3-27fb-4ed1-b107-e44fd5c25ce7)

- The todoitem section includes search bar to users can find specific todoitem title or filter todoitem by username

![ppp5 filter  management](https://github.com/Tamirucode/react-todoitem/assets/116649197/5b89ff58-4d52-4ad2-9222-2327bf6c8db4)


- The The Profile Section

    - The profile section shows how many to todolists and todoitems are created by user

![ppp5 ho many todolist](https://github.com/Tamirucode/react-todoitem/assets/116649197/4217e624-31c3-4c7e-ac9f-ed9da2d7843e)


## Future Features 

 - There are  plenty of useful features that i could add to this application. one obvious improvement would be add logic to send

   email reminders if they miss due dates.

## React Component

 - In the project, I used functional component with hooks. The components are provided by below

    - ToDoList :-            which returns individual todolist created by user with delete and edit button functionality
       
   - ToDoListCreateForm:-    returns newly created todolist with form

   - ToDoListEditForm:-      returns updated/edited todolist with form

   - ToDoListPage:-          returns all created todolist by different user presenting in one page

   - ToDoListsPage:-         returns search and filter form, used help user filter/search todolists by title or username.
    
   - ToDoItem :-            which returns individual todoitem created by user with delete and edit button functionality
       
   - ToDoItemCreateForm:-    returns newly created todoitem with form

   - ToDoItemEditForm:-      returns updated/edited todoitem with form

   - ToDoItemPage:-          returns all created todoitem by different user presenting in one page

   - ToDoItemPage:-         returns search and filter form, used help user filter/search todoitem by title or username.
  
   - Profile:-               which returns individual avatar with owner name with link functionality

   - ProfilePage:-           returns user name with todolist, todoitem counts in single page
       
    
## Fronted Libraries

  - React-Bootstrap

     - importing Button component:- provides different styles, sizes of button 

     - importing Col, Row component:- used to build layouts of all shape and size,  align content
    
     - importing Form component:-provides classes to create a variety of forms with varied control styles, layouts and custom components 

     - importing ListGroup component:- used for displaying series of content in my site

     - importing Alert component:- provides contextual feedback messages for users action in my site

     - importing Media component:- helps construct repetitive todolist components

     - importing Card component:- is flexible and extensible content container.

                                 A wide variety of content, headers, footers and more ... display options

     - importing Nav component:- is built using the flexbox to align the navigation items

     - importing Navbar component:- provide responsive navigation header and more 

     - importing Container component:- provide a means to center and horizontaly pad my sites contents

     - importing Dropdown component:- are toggleable, contextual overlays for displaying lists of links and more 
    
 - React Router Dom
     
     - routing my web application
  
     - handle navigation, define routes and render components based on the current url
  
 -  React Dom

     - render components and elements on the web
  
     - used create user interfaces and dynamic web application
  
 -  Axios

     - offers me handling HTTP request client and server side
 
 -  Mock Service Worker

     - an Api mocking tool that lets you mock by intercepting requests on the network level
  
 -  JWT (JSON Web Token)

     - securely transmitting information  between parties as a JSON object

## Testing

  I have manually tested this project by doing the following

    1. I checked sign in /up features by creating more than 10 users in the site

    2. I checked user can accomplished CRUDE functionality and form has error handling 
    
![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/67f19246-21ea-4c6a-a1e1-b30a6346182e)

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/8e5680b2-d736-496d-890f-283de15a0fdf)
![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/ea90caa2-b1d2-49e6-b7e2-c99d7cdab9b1)

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/1cb66bf1-14e8-4a39-87a7-7aceb6f33e3e)

    
       2.1  A user can created todolist :- Below screen shot

 ![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/b81d2c4c-c542-4898-b575-cb22c9e707b2)


        2.1  A user can edited todolist :- Below screen shot

 ![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/3610fce0-2465-4d1a-9b5c-f7842f04b531)

 ![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/24973fe7-c83d-455b-af1b-bf7db5f4b707)

       2.2  A user can delete todolist :- Below screen shot

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/e7594364-7833-400b-a462-7cd9ea77ae2a)

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/593e6cba-2004-40ef-912a-3dc7a0e307b9)

       2.3  A user can filter todolist by name or title :- Below screen shot

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/4c41ed6b-4660-4633-9648-e776ae8b4192)

       2.4  A user can create todoitem under specific todolist :- Below screen shot


![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/19ecf511-74a4-494c-96d1-50d5109362dd)
![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/45743cac-de47-4a52-8921-956941978a04)

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/444bc4fd-856d-46b4-8530-1fb58b65fb20)

      2.5  A user can edit todoitem  :- Below screen shot

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/3ec9eaf4-d1ae-42b9-9118-dd55de687ac5)

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/ecb2ae99-b1ee-4166-a97a-a044ba3e4506)

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/d6322705-e2c9-4706-b311-276116abf471)

      2.6  A user can delet todoitem  :- Below screen shot

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/0d87f9d1-2d90-4f3e-8bc1-b1b69ca33a95)

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/0df13fb0-082a-4b2c-8832-1937aa13446e)
      
      
      2.7  A user can filter todoitem by name or title :- Below screen shot

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/319e9cd6-b297-404c-85f0-6e56491c41eb)


      3. the site has been tested in different devices provided below iPad Air

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/ffcfa242-00ee-42b3-8663-0c8bdfe59616)

      4. the site has been tested in different devices provided below iPhone 6/7/8 plus

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/3e2451b1-8abd-4e8b-b0ae-929a924fe539)

      5. the site has been tested in different devices provided below Samsung Galaxy 20/ultra

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/ce98a82a-346d-42bf-bb8b-e15b88f3a31e)

      6. the site has been tested in different devices provided below Samsung iPhone 12  Pro

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/66087c32-a007-4b4d-ad8f-239fef3abf16)

## Validator Testing 

 - Passed the css code through W3C and cofirmed there are no problems

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/1c5dc69f-07f8-4d3f-b6c4-4fa39d9d926c)

 - No significant errors were returned from JSLint

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/1f8c3e20-2988-4bf4-859a-fba74da29b2a)


 - Significant info and a few errors were returned from W3C HTML Checker especially react index.html file

## Bugs

 ### solved bugs
 
   - when I tested the project, I was getting module not found error because I had forgotten that the module isn't imported properly.

     I fixed this by importing the module appropriately 

 ### Remaining bugs

   - After  deployment i have noticed that todoitem pk value not automatically inserted when the user created todolist

   - After a user delete todoitem "due" and avatar remain there
  
## Technologies

   - HTML, CSS, JavaScript
   
   - React.js
   
   - Bootstrap.js
   
   - Django REST Framework

## Deployment  React App


   - I set up initial deployment of this project, Here are the steps:

     1. My app react-todo2023 is created in Heroku, let's

     2. then connect it to my Github repository (react-todoitem).  

     3. From the “Deploy” tab, I click on “Github”  in the “Deployment method” section,  

     4. I enter the name of the repository I  just created, and then click “Connect”.
      
     5. At last, I can click “deploy  branch” which will trigger Heroku to deploy
    
     6. When you see the message “deployed to Heroku” in the build log, click the “open app” button at the top of the page.

   - React App Deployment steps

1. Log in to heroku.com and open the dashboard  react-todo2023 application

2. Select the “Deploy” tab in the dashboard

3. Scroll down to the bottom and then select “Deploy Branch”

4. Wait for my build to complete (you can click “view build log” to watch the process in a larger window)

5. When you see the message “deployed to Heroku” in the build log, click the “open app” button at the top of the page.


## Deployment  Combined Frontend and Backend

  - Adding the React files to the DRF project

     1.Go to the GitHub repository for your React project

     2.Click the “Code” button, select the HTTPS tab, and copy the URL provided

     3.Open the workspace for your DRF project

     4.open the terminal window and type the below command

        git clone <react_repo_url> frontend

        This will create a new folder in your DRF workspace called frontend that contains all the files from your React project.

     5.1 Removing unnecessary files

        5.1  In the terminal window, change directory to the frontend folder with the following command

                   cd frontend

        5.2  Enter the following command to remove the .git folder, .gitignore file and README.md from the frontend folder

                   rm -rf .git .gitignore README.md

        5.3 Install the npm packages required for developing with React using the following command

                   npm install

        5.4  Move back to the root directory of your project with the following command

                    cd ..

        5.5  git add,  git commit  and git push changes sofar

    6. Changes to the React project

        6.1  Open the package.json file in the frontend directory, and at the bottom of the file, add a new key to the JSON object.

             This will allow the preview to run within your development environment

              "proxy": "http://localhost:8000/"

        6.2 Open the axiosDefaults.js file and comment out the baseURL setting

        6.3 git add,  git commit  and git push changes sofar

    7. Preparing the Django API for development
   
        7.1 In your env.py file, make the following changes:

           7.1.1 Comment out the DEV environment variable. This ensures that the application will respond with JSON

           7.1.2 Remove the CLIENT_ORIGIN_DEV environment variable, if you have it

           7.1.3 Add a new key DEBUG with a value of ‘1’

           7.1.4 Add a new key ALLOWED_HOST with the value of your development environment URL, wrapped in quotes

            - Ensure you remove the https:// from the beginning, and the trailing slash / from the end of the development environment URL.

           7.1.5 Add a new key CLIENT_ORIGIN with the value of your development environment URL, wrapped in quotes

            - This string should include the https:// at the beginning, but the trailing slash / should be removed.

           7.1.6 Ensure you have a key for DATABASE_URL set to the value of your ElephantSQL database URL

           7.1.7 Ensure you have a key for CLOUDINARY_URL set to the value of your Cloudinary URL

       7.2 Updating settings.py

           7.2.1 Set DEBUG to the value of the DEBUG environment variable and update ALLOWED_HOSTS to include

                  the ALLOWED_HOST environment variable added to your env.py file

           7.2.2 In your settings.py file remove the line containing the import re

           7.2.3 Remove all the CORS code, leaving only the CORS_ALLOWED_ORIGINS list

    8. Open two terminals, side by side

       8.1 First should be in the root directory where the Django API will run. From here, type the command to run the Django API

            python3 manage.py runserver

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/fd0a9f61-c9fd-462d-aaeb-0b04a60a019b)

       8.2 Second should be in the frontend directory. To enter that directory from the root, type the following command

            cd frontend

            Then run the React server with the following command:

            npm start

       8.3 I open port 3000 or 8080 to see my React app and checked that the functionality all works

       8.4 Git add,  git commit  and git push changes sofar

## Deployment of both applications

   1.Setting up WhiteNoise for static files: In the terminal

       1.1 Ensure your terminal location is in the root directory, then install whitenoise with the following command

            pip3 install whitenoise==6.4.0

       1.2 Add this dependency to your requirements.txt file with the following command

           pip3 freeze > requirements.txt

       1.3 Create a new empty folder called staticfiles in the root directly with the following command

           mkdir staticfiles

    2. Setting.py

        2.1 In the INSTALLED_APPS list, ensure that the ‘cloudinary_storage’ app name is below ‘django.contrib.staticfiles’. 
        
            This ensures that Cloudinary will not attempt to intervene with staticfiles, and 
            
            allows whitenoise to become the primary package responsible for static files

        2.2 In the MIDDLEWARE list, add WhiteNoise below the SecurityMiddleware and above the SessionMiddleware

           'whitenoise.middleware.WhiteNoiseMiddleware', 

        2.3 In the TEMPLATES list at the DIRS key, add the following code to the DIRS list, to tell Django and 
        
             WhiteNoise where to look for Reacts index.html file in deployment os.path.join(BASE_DIR, 'staticfiles', 'build')

        2.4 In the static files section, add the STATIC_ROOT and WHITENOISE_ROOT variables and values to tell Django and WhiteNoise
         
             where to look for the admin static files and Reacts static files during deployment

     3.In the urls.py file of your Django Rest Framework application:

             3.1 Remove the root_route view from the .views imports

             3.2 Import the TemplateView from the generic Django views from django.views.generic import TemplateView

             3.3 In the url_patterns list, remove the root_route code and replace it with the TemplateView pointing to the index.html file

                 path('', TemplateView.as_view(template_name='index.html')),

             3.4 At the bottom of the file, add the 404 handler to allow React to handle 404 errors

                 handler404 = TemplateView.as_view(template_name='index.html')

             3.5 Add api/ to the beginning of all the API URLs, excluding the path for the home page and admin panel

 ![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/83c731d9-807f-4eb3-948a-95955b13993d)

     4. In axiosDefault.js:

             4.1 Now that we have changed the base path for the API route, we need to prepend all API requests in our react application with /api. 
               
                  Open the axiosDefaults.js file, comment back in the axios.defaults.baseURL and set it to "/api"
     
     5. Git add,  git commit  and git push changes sofar

     6. Compiling the static files

             6.1 Collect the admin and DRF staticfiles to the empty staticfiles directory you created earlier, with the following command in the terminal

                    python3 manage.py collectstatic

             6.2 Next, we will compile the React application and move its files to the staticfiles folder. In another terminal, cd into the frontend directory

                    cd frontend

             6.3 Then run the command to compile and move the React files

                    npm run build && mv build ../staticfiles/.

                     NB:-you will need to re-run this command any time you want to deploy changes to the static files in your project, including the React code. 
                     
                     To do this, you need to delete the existing build folder and rebuild it.

                     This command will delete the old folder and replace it with the new one: npm run build && rm -rf ../staticfiles/build && mv build ../staticfiles/.

              6.4 Now your staticfiles folder should be filled with all the static files needed for deployment

   ![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/61a038e9-d9f1-4c23-82b0-323cb4c5ac11)
   
      7. Adding a runtime.txt file

              7.1 In the root directory of your project, create a new file named runtime.txt

              7.2 Inside the runtime.txt, add the following line:

                   python-3.9.16

       8. Testing the Build

              8.1 Ensure all running servers are terminated. In any running terminals press Ctrl+C#

              8.2 In your env.py file, ensure that both the DEBUG and DEV environment variables are commented out

              8.3 Run the Django server, in the terminal type

                   python3 manage.py runserver

              8.4 open the preview on port 8000 to check that your application is running, it works

              8.5 Git add,  git commit  and git push changes sofar

      9. Preparing your existing Heroku app for deployment

              9.1 Log into your Heroku account and access the dashboard for your DRF application

              9.2 Go to Settings and open the Config Vars

              9.3 Add ALLOWED_HOST key, set to the URL of my combined project,

               - I removed the https:// from the beginning, and the trailing slash / from the end URL.

              9.4 Add CLIENT_ORIGIN key, set to the URL of my combined project,

               - This string should include the https:// at the beginning, but the trailing slash / should be removed.

              9.5 Git add, git commit  and git push changes sofar

              9.6 Select the “Deploy” tab in the dashboard

              9.7 Scroll down to the bottom and then select “Deploy Branch”

              9.8 Wait for my build to complete (you can click “view build log” to watch the process in a larger window)

              9.9  When you see the message “deployed to Heroku” in the build log, click the “open app” button at the top of the page.

- The live link can be found here:- [drf-todo](https://drf-todo2023-76af1f9fdada.herokuapp.com/)

## Credits

  ##### Content

   - The code to make the layout was taken from the moment walk through project

   - The logo in the top left Navlink was taken free web source

   - Fronted Libraries explanation referenced from

     - [ReactBootstrap docmentation](https://react-bootstrap-v4.netlify.app/components/forms/)
    
     - [Wikipedia](https://en.wikipedia.org/wiki/React_(software))

   - The text for the Home page I created, but modified and polished by fellow student
   
   - The icons in the navlink were taken from Font Awesome
   
   - The instructions deployment steps were taken from moments walk through project

