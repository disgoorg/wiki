You can listen for following lavalink events

* `PlayerUpdateMessage` Emitted every x seconds (default 5) with the current player state
* `PlayerPause` Emitted when the player is paused
* `PlayerResume` Emitted when the player is resumed
* `TrackStart` Emitted when a track starts playing
* `TrackEnd` Emitted when a track ends
* `TrackException` Emitted when a track throws an exception
* `TrackStuck` Emitted when a track gets stuck
* `WebsocketClosed` Emitted when the voice gateway connection to lavalink is closed

for this add and event listener for each event to your `Client` instance when you create it or with `Client.AddEventListener`
```go
lavalinkClient := disgolink.New(userID,
    disgolink.WithListenerFunc(onPlayerUpdate),
    disgolink.WithListenerFunc(onPlayerPause),
	disgolink.WithListenerFunc(onPlayerResume),
	disgolink.WithListenerFunc(onTrackStart),
	disgolink.WithListenerFunc(onTrackEnd),
	disgolink.WithListenerFunc(onTrackException),
	disgolink.WithListenerFunc(onTrackStuck),
	disgolink.WithListenerFunc(onWebSocketClosed),
)

func onPlayerUpdate(player disgolink.Player, event lavalink.PlayerUpdateMessage) {
    // do something with the event
}

func onPlayerPause(player disgolink.Player, event lavalink.PlayerPauseEvent) {
    // do something with the event
}

func onPlayerResume(player disgolink.Player, event lavalink.PlayerResumeEvent) {
    // do something with the event
}

func onTrackStart(player disgolink.Player, event lavalink.TrackStartEvent) {
    // do something with the event
}

func onTrackEnd(player disgolink.Player, event lavalink.TrackEndEvent) {
    // do something with the event
}

func onTrackException(player disgolink.Player, event lavalink.TrackExceptionEvent) {
    // do something with the event
}

func onTrackStuck(player disgolink.Player, event lavalink.TrackStuckEvent) {
    // do something with the event
}

func onWebSocketClosed(player disgolink.Player, event lavalink.WebSocketClosedEvent) {
    // do something with the event
}
```
