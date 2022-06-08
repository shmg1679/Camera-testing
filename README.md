# Camera-testing
## To start using it, it requires to install react-native image crop picker by entering this in the terminal:
```sh
  npm i react-native-image-crop-picker --save
  ```
  If npm doesn't work try yarn.
  
Most of the other codes from [here](https://github.com/ivpusic/react-native-image-crop-picker) is already implemented so theres no need to add them into the files.

I'm not entirely sure how it would work on an actual android device but for android studio emulator it requires some path environment creation with a guide [here](https://reactnative.dev/docs/environment-setup#:~:text=3.%20Configure%20the,your%20Android%20SDK%3A). Its mainly creating the path to andriod studio SDK files and tools and requires [chocolatey](https://chocolatey.org/install) for android studio. Or by entering this into powershell.

```sh 
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1')) 
  ```

And then this into the terminal which is the recommended way to install node for this:
```sh 
choco install -y nodejs-lts openjdk11 
  ```

## Running the app would requires Android studio to be running as well or connented to an android device(not entirely sure how that will go)
Now to actually run the app, cd into the folder(Camera2) in terminal where it shows all the files and enter:

```sh
  npx react-native start
  ```
In another terminal, cd into the same folder and enter this while connected to an android device or android studio with an android phone emulator to start running it:

```sh
  npx react-native run-android
  ```
# Android studio configuration

This [video](https://www.youtube.com/watch?v=LiHkAGyNSJU) can help do them step by step for Android studio if what I said isn't clear. 

When android studio is downloaded, most of the SDK settings and tools are already set for this to work aside from the paths that needed to be create.
The easiest way to find the paths would be opening up SDK manage to find the first path where it says Android SDK Location.

![image](https://user-images.githubusercontent.com/91004979/172686681-c0329299-7019-4685-bbdb-9eb83e9099da.png)

The others you can find by clicking on the blue text Edit option and on the bottom here and click on the folder icon:

![image](https://user-images.githubusercontent.com/91004979/172687220-f0317f8e-cde5-45dc-9526-cfdf366e9baa.png)

Here you will scroll down to select tools or platform tools and get the location of these two files to create the paths by copy and pasting the top part. Here in my case, it is ``` C:\Users\shimi\AppData\Local\Android\Sdk\tools ``` for the ANDROID_TOOLS path and the platform tools should be the one above in the list you can see here.

![image](https://user-images.githubusercontent.com/91004979/172687512-a9568d6e-fd28-42f5-8dde-a10e8982631c.png)

## Creating the phone emulator 

When creating the phone, I pick this 

![image](https://user-images.githubusercontent.com/91004979/172690688-212ceaf1-e860-47f1-beb5-c3383a5af4b3.png)

And here you have to make sure to download one of these by clicking the blue download option, I picked the R system image so here you won't see it since I already downloaded it.

![image](https://user-images.githubusercontent.com/91004979/172690979-4ed78d8c-bffd-42e5-9bae-d7b763b45563.png)

All thats left is clicking finish on the next page and it should create the emulator for you. 
