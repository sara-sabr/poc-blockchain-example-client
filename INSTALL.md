# Steps to host React App to Azure
A step by step guide on how to deploy a React App to Azure Cloud

Here are some of the tools needed:
+ Acess to Azure cloud service
+ Access to Visual Studio Code
+ Able to run npm or yarn 
+ Have react, react-router, react-bootstrap, styled-components installed through npm/yarn

## Create Azure Web App
Log-in to Azure portal from a browser and follow these steps:

+ Go to App Services
+ Click on the Add button
+ Select a resource group and give the app a name
+ Choose a Runtime Stack for the app, in this case Node 10 LTS
+ Leave Operating System as Linux
+ Select Canada Central as the Region
+ Leave the rest as default
+ Click on Review + Create, should take a minute or two for this process to complete


## Install React and Bootstrap

These step will allow you to build the frameworks to build a react bootstrap app. You will need to have all files in the same folder, so create
a folder for them. (eg. ../myApp) Also, most of these commands will be preform inside your terminal/command prompt

+ Create the react project with npm

```npx create-react-app my-app
cd my-app
```

+ Navigate to the my-app folder
+ Install React Router (this helps navigate through the web app)
```npm install react-router-dom
```

+ Install styled-components (Enables style change of the components within the javascript files)
```npm install --save styled-components
```

+ Install React Bootstrap (Enables bootstrap components to your react app)
```npm install react-bootstrap bootstrap
```

+ Copy and add the link to head of your index.html found in the my-app folder
```<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>```

+ Start the react app in localhost, back in terminal enter
```npm start```

Now your app should be up and running on your localhost. You can now add the logic and components to your app with [react](https://reactjs.org/docs/create-a-new-react-app.html) and [bootstrap](https://react-bootstrap.github.io/getting-started/introduction)


## Install Azure extensions in Visual Studio
+ Inside Visual Studio Code, click on the extensions tab, search for Azure App Service, download it and press on its icon
+ Click on Sign-in, enter your credentials and press submit
+ Now, inside of VS Code, click on the Azure Logo you should see your resource group, expend it and navigate to your newly created app service

Once you see the app service you created, STOP there for now, and return to your my-app workspace

## Build React App
After you've customized your app and made sure it still runs properly on localhost, it's time to prepare for deployment.

+ Inside terminal, navigate to your my-app folder, stop running localhost, and build the app
```npm run build```

Once the app is built it should be ready for deployment in Azure. 
Note that you'll have to run the build command every time you make changes to the local files. Otherwise, your changes wont be reflected when deployed on Azure.

## Deploy React App to Azure

Now that your app is ready for deployment, follow these steps:
+ Return to the Azure App Service extension, expend your app, above your app you should see a vertical blue arrow click on it
+ Select the workspace you want to deploy, in your case my-app, then click on deploy
+ You will be prompted a few times: 1) To update your configuration for npm install 2) To update your workspace so all your future deploys automatically target App Service : Say Yes to both
+ If is your first time deploying this may take a few minutes 
+ Once the deployment is complete a prompt will ask you to browse your website, click on open and your app should be there


## Open Web App through the browser
Once your app is done the deployment, you can either view it through the Azure Portal or once through VS Code

+ In the Azure portal, navigate to App Service, click on the name of your app, in the overview tab locate URL and press on the link to open your app

If you followed these steps thoroughly you should of been able to create, build and deploy a react-bootstrap app to your Azure App service.