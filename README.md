# Todolist App

The todolist website is a landing page for list of users name and their associated todolist with created date.

The todolist app offers organize and manage tasks more efficiently.

Users of this website will be able to create a list of todoitem that they need to complete within a certain timeframe.

It also allows assign them due dates and prioritize them so they stay focused on what todoitems most.

It enables cooperative planning, in this case, each user could have their own space with their indvidual todolists and possible

implementing shared todolists.

This site is targeted towards adults and young children who want to plan personal and work schedules.

![ppp5 landing page](https://github.com/Tamirucode/react-todoitem/assets/116649197/09032e11-1891-48bd-8916-8a30fb8dc131)

## How to use todolist app

 - In this version, first the user need to create an account by using sign up form.

    Once an account is created, they need to login with their password and username. Afterthat, the user can see top left navbar link

    there is a button addtodolist, then click that button, they will greet with blank form need to fill out todolist, after they completed, click the create button

    which takes them a new blank form used for to create todoitem, after they finished fill out the form click save and go back to ToDoItem navlink, they need 
   
    to open this page to see their created todoitem.

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

      6. the site has been tested in different devices provided below Samsung iPhone pro 12

![image](https://github.com/Tamirucode/react-todoitem/assets/116649197/66087c32-a007-4b4d-ad8f-239fef3abf16)

