# React native WebView ft Pull To Refresh 

This project create simple app use Webview support pull to refresh<br/>
For simplicity I use Webview call this website https://picsum.photos/ because it will generate random image everytime we refresh the page 

# Requirement
```
 Node version >= 12
 ```

 ## Setup project:
 ```
 git clone https://github.com/hhqwerty/rn_webview_ptr.git

 yarn install
 ```
### Android
Define location with an ANDROID_SDK_ROOT environment variable or by setting the sdk.dir path in your project's local properties file at:
```
'<PATH_TO_YOUR_PROJECT>/android/local.properties'
```
### IOS
```
cd ios
pod install 
```
(For running on real device, you can go to XCODE to sign your provisioning )


## Run app:
from ROOT Project:
1. Run the packager:
 ```
 yarn start
```
2. Run the app:
```
 yarn android
 ```
or
```
 yarn ios
 ```
