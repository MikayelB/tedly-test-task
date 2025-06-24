## How to run the project
### 1. Clone repo
```git clone ...```

### 2. Start services
Go to the project root and in terminal run:
```docker compose up --build```

Note: if you get an error like this 
```...tedly-test-task is not shared from the host and is not known to Docker```

Open your docker settings -> Resources -> File Sharing and in the "Virtual file shares" section add the project root folder to the list.

### 3. Tweak DB Permissions
To be able to create a project, you need to configure a couple things.

Go to ```http://localhost:1337/admin``` and login with some random credentials. (use 10 minute mail to get a temporary email)

In the Admin page go to:
1.  ```Settings``` tab
2. Under the ```Users & Permissions``` section, enter the ```Roles```
3. Click on the ```Public``` role
4. Click to expand ```Employee``` tab and enable "create" and "find" permissions
5. Click to expand ```Project``` tab and enable "create" and "find" permissions
6. Click ```Save``` on the right top corner

### 4. Start testing
Projects Dashboard: ```http://localhost:3000```

For the DB admin view: ```http://localhost:1337/admin``` 

---------------------------
# Initial Project Instructions
# What is it?
We prepared this minimal boilerplate, so you can start implementing the designs with all the required configs for code style and Next.js environment. 

Fork this repo and send us a link to the repo with your results.

**Figma Designs:** https://www.figma.com/design/kWCDsTa2RanRMgyynVWagA/Project-Table---Test-Task?node-id=0-1&p=f

## Task
 - Implement "Add Project" functionality 
 - Implement the provided UI as much as you can
 - Implement "Add Project" API request
 - Implement "Get Project" API request 

## Requirements
 - Use ReactJS (NextJS)
 - Use Node.js (preferred Stapi.JS, PostgresSQL)
 - Use Redux Toolkit as state management tool
 - will be a plus if you use Tailwind for styling
 - Show us best practices you know 
 - Will be a plus if you implement filters and search

 ## Do not do
 - Left menu functionality (only create ui)
 - Header functionality (only create ui)

## Anything else?
If you think that there are not enough details in some part of the task, just implement it the way you think it should be.

Be careful! We expect you to extract as much information from the designs as possible.

