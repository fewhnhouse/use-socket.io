# use-socket.io

This repo provides a simple React Hook Wrapper around socket.io, providing the user with a reference to the `data` object and an `emit` function.

## Installation

This Repo is not publicly available yet, but will be made available on `npm` as soon as its API is finalized.

## Usage

You can currently use three different exported objects.

### SocketProvider

The `SocketProvider` should wrap your whole Application, which should be familiar from other libraries such as [react-redux](https://github.com/reduxjs/react-redux). It should be initialized with a `uri` and optionally an `options` object, as per [socket.io Documentation](https://socket.io/docs/client-api/#io-url-options).

```
const  App = () => {
	const options = {
		reconnectionDelay: 500
	}
	return (
		<SocketProvider  url="ws://localhost:4000" options={options}>
			<YourApp/>
		</SocketProvider>
	)
}

```

### useSocket

Once your socket is initialized with the Provider, you can use the `useSocket` hook to listen for a `message` and to get access to an `emit` function, allowing communication between client and server

```
const  YourApp = () => {
	const [data, emit] = useSocket('eventName') //The data property will be filled with data once the server emits an event with the event name "eventName"
	const  handleClick = () => {
		emit('message to server!') //The server will receive this event if he listens for an incoming event with the event name "eventName"
	}
	return (
		<div>
			<h1>{data}</h1>
			<button  onClick={handleClick}>
				Test Event
			</button>
		</div>
	)
}

```

### useClient

This simple hook gives you a reference to the `socket` object, in case you need to do any specific operations which are not covered by the hook provided above.

`const socket = useClient()`
