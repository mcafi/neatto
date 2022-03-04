# Neatto

Back in the days I used to spend all day and night on Neat Chat to chat with random people and friends, It was a quick and portable way to communicate. Then Telegram and Discord and and basically Neat Chat had no reason to exist. But sometimes **nostalgia hits hard**, so i decided to create a web app that was as closer to Neat Chat as I can get.

This app doesn't want to be particularly _functional_, _responsive_ or _smart_, his goal is to recreate the Neat Chat experience with all its flaws.

## Tech stack

The app is a single page application built with pure **React**, helped by **Redux** to manage common resources between the components and **Redux Persist** to keep the user data saved on the browser.

Chat rooms, messages and user data are stored on **Firebase Firestore**, which is integrated in the app via the **react-firebase-hooks** library.

The style is managed by **Tailwind css**.

## Usage

Accessing the app via the [direct link](https://neatto-bba44.web.app/) automatically creates a new chat room with a random id and redirects you to that particular room. Opening a link with an id connects you to the given chat room, you can see an example of active chat room [here](https://neatto-bba44.web.app/?id=1CDbPDc7UajjwZrewTlK).

If you are using the app for the first time on a device, you'll get asked for the username which will be the same across all the chats accessed by the same device.

## Upcoming features

- Private chats
- Sound notifications
- Online users list
- Colored names in messages list

## Not upcoming features

- User authentication
- Mobile layout