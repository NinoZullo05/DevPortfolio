@echo off
echo Starting Firebase deployment process...

:: Navigate to the project directory
cd /d "%~dp0"

:: Install dependencies if not already installed (optional)
echo Installing npm dependencies...
npm install

:: Build the project (if using a build system like React or Angular)
echo Building the project...
npm run build

:: Deploy to Firebase
echo Deploying to Firebase...
firebase deploy

echo Deployment completed!
pause
