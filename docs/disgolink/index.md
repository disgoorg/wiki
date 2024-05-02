DisGoLink is a [Lavalink](https://github.com/freyacodes/Lavalink) Client written in [Golang](https://golang.org/) which supports the latest Lavalink 4.0.0+ release and the new plugin system. 

While DisGoLink can be used with any [Discord](https://discord.com) Library [DisGo](https://github.com/disgoorg/disgo) is the best fit for it as usage with other Libraries can be a bit annoying due to different [Snowflake](https://github.com/disgoorg/snowflake) implementations.

* [DiscordGo](https://github.com/bwmarrin/discordgo) `string`
* [Arikawa](https://github.com/diamondburned/arikawa) `type Snowflake uint64`
* [Disgord](https://github.com/andersfylling/disgord) `type Snowflake uint64`
* [DisGo](https://github.com/disgoorg/disgo) `type ID uint64`

This Library uses the [Disgo Snowflake](https://github.com/disgoorg/snowflake) package like DisGo

## Getting Started

### Installing

```sh
go get github.com/disgoorg/disgolink/v3
```

## Usage

### Setup

First create a new lavalink instance. You can do this either with

```go
import (
	"github.com/disgoorg/snowflake/v2"
	"github.com/disgoorg/disgolink/v3/disgolink"
)

var userID = snowflake.ID(1234567890)
lavalinkClient := disgolink.New(userID)
```

You also need to forward the `VOICE_STATE_UPDATE` and `VOICE_SERVER_UPDATE` events to DisGoLink.
Just register an event listener for those events with your library and call `lavalinkClient.OnVoiceStateUpdate` (make sure to only forward your bots voice update event!) and `lavalinkClient.OnVoiceServerUpdate`


For DisGo this would look like this
```go
client, err := disgo.New(Token,
    bot.WithEventListenerFunc(b.onVoiceStateUpdate),
    bot.WithEventListenerFunc(b.onVoiceServerUpdate),
)

func onVoiceStateUpdate(event *events.GuildVoiceStateUpdate) {
    // filter all non bot voice state updates out
    if event.VoiceState.UserID != client.ApplicationID() {
        return
    }
    lavalinkClient.OnVoiceStateUpdate(context.TODO(), event.VoiceState.GuildID, event.VoiceState.ChannelID, event.VoiceState.SessionID)
}

func onVoiceServerUpdate(event *events.VoiceServerUpdate) {
    lavalinkClient.OnVoiceServerUpdate(context.TODO(), event.GuildID, event.Token, *event.Endpoint)
}
```

Then you add your lavalink nodes. This directly connects to the nodes and is a blocking call
```go
node, err := lavalinkClient.AddNode(context.TODO(), lavalink.NodeConfig{
		Name:      "test", // a unique node name
		Address:   "localhost:2333",
		Password:  "youshallnotpass",
		Secure:    false, // ws or wss
		SessionID: "", // only needed if you want to resume a previous lavalink session
})
```

after this you can play songs from lavalinks supported sources.

### Loading a track

To play a track you first need to resolve the song. For this you need to call the Lavalink rest `loadtracks` endpoint which returns a result with various track instances. Those tracks can then be played.
```go
query := "ytsearch:Rick Astley - Never Gonna Give You Up"

err := lavalinkClient.BestNode().LoadTracksHandler(context.TODO(), query, lavalink.NewResultHandler(
		func(track lavalink.AudioTrack) {
			// Loaded a single track
		},
		func(playlist lavalink.AudioPlaylist) {
			// Loaded a playlist
		},
		func(tracks []lavalink.AudioTrack) {
			// Loaded a search result
		},
		func() {
			// nothing matching the query found
		},
		func(ex lavalink.FriendlyException) {
			// something went wrong while loading the track
		},
))
```

### Playing a track

To play a track we first need to connect to the voice channel.
Connecting to a voice channel differs with every lib but here are some quick usages with some
```go
// DisGo
err := client.UpdateVoiceState(context.TODO(), guildID, channelID, false, false)

// DiscordGo
err := session.ChannelVoiceJoinManual(guildID, channelID, false, false)
```

after this you can get/create your player and play the track
```go
player := lavalinkClient.Player("guild_id") // This will either return an existing or new player

var track lavalink.Track // track from result handler before
err := player.Play(track)
```
now audio should start playing