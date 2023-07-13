# Click Coordinates

![image](https://github.com/arbelatech/ClickCoordinates/assets/45325566/af7697b5-6f64-440e-9350-1f876e29597c)


### Getting Started
This repository contains a Power Apps Component Framework (PCF) component that allows us to capture coordintes of a location where user click or touches on an app screen and store them in its attributes 'XAxis' and 'YAxis'. This can be useful in scenarios where you need to track user interactions or gather data related to mouse clicks within your Power Apps.

## 1. Deploying Component in Power Apps
### 1.1 Download and Build
1. Download the Zip folder from this repository
2. Unzip and open the folder
3. Hit the following commands to build the component
```
    - To install all dependencies
      npm install 
      
    - To build the component
      npm run build
      
    - To start and preview the component in action
      npm start  
 ```

### 1.2 Packaging the component
1. Create a new folder and navigate into it
2. Create new solutions project using the following command
```
  pac solution init --publisher-name <> --publisher-prefix <> 
```
3. Now add refernce by locating the component (In our case: The root folder)
```
  pac solution add-reference --path <> 
```
4. Now open up the visual studio in the same location of your created folder use the following command to package the component
```
  msbuild /t:build 
```
5. Go to bin > Debug to have the packaged component

### 1.3 Import the Component
1. Go to Power Apps
2. Click on Import Solution and select the packaged folder

### 1.4 Add Component to your App
1. Go to Insert and click on Get more components
2. At the top, click on Code tab
3. Select the component package you imported in prior step and Import

## 2. How to use
1. Just Insert the component to your Canvas
2. Adjust the size of the component you require
3. Click anywhere on the components space to capture coordinates of the mouse click.
4. You could access the values by setting up labels and set their Text attribute to PoCClickCoordinates1.XAxis and PoCClickCoordinates1.YAxis

![XY Axis Coordinate Assist - Power Apps - Argano - Microsoft_ Edge 2023-06-08 20-55-50](https://github.com/arbelatech/ClickCoordinates/assets/45325566/baa17f53-a833-4868-8f38-0f1997570863)


---


