Lavalink added [plugins](https://github.com/freyacodes/Lavalink/blob/master/PLUGINS.md) in `v3.5` . DisGoLink exposes a similar API for you to use. With that you can create plugins which require server & client work.
To see what you can do with plugins see [here](https://github.com/disgoorg/disgolink/blob/v2/disgolink/plugin.go)

You register plugins when creating the client instance like this
```go
lavalinkClient := disgolink.New(userID, disgolink.WithPlugins(yourPlugin))
```

Here is a list of plugins(you can pr your own to here):

* [sponsorblock](https://github.com/disgoorg/sponsorblock-plugin) adds payloads and listeners for [Lavalink Sponsorblock-Plugin](https://github.com/Topis-Lavalink-Plugins/Sponsorblock-Plugin)
