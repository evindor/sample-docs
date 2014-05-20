
## WD.App
Creates an App instance with the given accessToken.

All calls to the API using this instance will use the given accessToken.

```javascript
var app = WD.App(accessToken, [options]);
```

Type|Name|Description
-|-|-
string|accessToken|The getting started page details how to create access tokens.
Object|options| A map of options (optional)

### app.on

Subscribe to events.

```javascript
function handler(event) {
    // your code here
}

app.on(eventName, handler);
app.off(eventName, handler);
```

Type | Name | Description 
-|-|-
string | eventName | Event name from the list 

### app.off

Unsubscribe from events.

```javascript
function handler(event) {
    // your code here
}

app.off(eventName, handler);
```

Type | Name | Description 
-|-|-
string | eventName | Event name from the list 


### App events list
Name|Description
-|-
connected|after a successful connection attempt
disconnected|when the connection to the server was lost or after a unsuccessful connection attempt.
connecting|when the client is disconnected and an attempt is made to establish a connection.

## Channels

### Create channel
Opens a communication channel between clients that have an open channel with the same name.

Channels are the basis for real-time communication between multiple clients. Channels support the publish/subscribe messaging pattern via channel.publish() and channel.subscribe().

	var channel = app.Channel('/some-channel', {});

### Subscribe to channel
    channel.subscribe(function (message) {
        // ... your code here ...
    });

### Publish to channel

Publishes a message on a channel.
@param {string} message  message to publish on the given channel. Messages are Javascript objects that are serialized for transit.
@return {Channel}

    channel.publish(message);
