```go
import "github.com/disgoorg/disgolink/v3/lavalink"
```

## Constants

<a name="Millisecond"></a>

```go
const (
    Millisecond Duration = 1
    Second               = 1000 * Millisecond
    Minute               = 60 * Second
    Hour                 = 60 * Minute
    Day                  = 24 * Hour
)
```

## Variables

<a name="DefaultFilters"></a>

```go
var DefaultFilters = []string{"volume", "equalizer", "timescale", "tremolo", "vibrato", "rotation", "karaoke", "distortion", "channelMix", "lowPass"}
```

<a name="CPU"></a>
## type [CPU](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/stats.go#L26-L30>)



```go
type CPU struct {
    Cores        int     `json:"cores"`
    SystemLoad   float64 `json:"systemLoad"`
    LavalinkLoad float64 `json:"lavalinkLoad"`
}
```

<a name="ChannelMix"></a>
## type [ChannelMix](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/filters.go#L27-L32>)



```go
type ChannelMix struct {
    LeftToLeft   float32 `json:"leftToLeft"`
    LeftToRight  float32 `json:"leftToRight"`
    RightToLeft  float32 `json:"rightToLeft"`
    RightToRight float32 `json:"rightToRight"`
}
```

<a name="Distortion"></a>
## type [Distortion](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/filters.go#L34-L43>)



```go
type Distortion struct {
    SinOffset float32 `json:"sinOffset"`
    SinScale  float32 `json:"sinScale"`
    CosOffset float32 `json:"cosOffset"`
    CosScale  float32 `json:"cosScale"`
    TanOffset float32 `json:"tanOffset"`
    TanScale  float32 `json:"tanScale"`
    Offset    float32 `json:"offset"`
    Scale     float32 `json:"scale"`
}
```

<a name="Duration"></a>
## type [Duration](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/duration.go#L7>)



```go
type Duration int64
```

<a name="Duration.Days"></a>
### func \(Duration\) [Days](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/duration.go#L49>)

```go
func (d Duration) Days() int64
```



<a name="Duration.Hours"></a>
### func \(Duration\) [Hours](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/duration.go#L41>)

```go
func (d Duration) Hours() int64
```



<a name="Duration.HoursPart"></a>
### func \(Duration\) [HoursPart](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/duration.go#L45>)

```go
func (d Duration) HoursPart() int64
```



<a name="Duration.Milliseconds"></a>
### func \(Duration\) [Milliseconds](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/duration.go#L17>)

```go
func (d Duration) Milliseconds() int64
```



<a name="Duration.MillisecondsPart"></a>
### func \(Duration\) [MillisecondsPart](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/duration.go#L21>)

```go
func (d Duration) MillisecondsPart() int64
```



<a name="Duration.Minutes"></a>
### func \(Duration\) [Minutes](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/duration.go#L33>)

```go
func (d Duration) Minutes() int64
```



<a name="Duration.MinutesPart"></a>
### func \(Duration\) [MinutesPart](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/duration.go#L37>)

```go
func (d Duration) MinutesPart() int64
```



<a name="Duration.Seconds"></a>
### func \(Duration\) [Seconds](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/duration.go#L25>)

```go
func (d Duration) Seconds() int64
```



<a name="Duration.SecondsPart"></a>
### func \(Duration\) [SecondsPart](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/duration.go#L29>)

```go
func (d Duration) SecondsPart() int64
```



<a name="Duration.String"></a>
### func \(Duration\) [String](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/duration.go#L53>)

```go
func (d Duration) String() string
```



<a name="Empty"></a>
## type [Empty](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/load_result.go#L76>)



```go
type Empty struct{}
```

<a name="EqBand"></a>
## type [EqBand](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/filters.go#L76-L79>)



```go
type EqBand struct {
    Band int     `json:"band"`
    Gain float32 `json:"gain"`
}
```

<a name="Equalizer"></a>
## type [Equalizer](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/filters.go#L74>)



```go
type Equalizer [15]float32
```

<a name="Equalizer.MarshalJSON"></a>
### func \(Equalizer\) [MarshalJSON](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/filters.go#L93>)

```go
func (e Equalizer) MarshalJSON() ([]byte, error)
```

MarshalJSON marshals the map as object array

<a name="Equalizer.UnmarshalJSON"></a>
### func \(\*Equalizer\) [UnmarshalJSON](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/filters.go#L81>)

```go
func (e *Equalizer) UnmarshalJSON(data []byte) error
```



<a name="Error"></a>
## type [Error](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/error.go#L7-L14>)



```go
type Error struct {
    Timestamp   Timestamp `json:"timestamp"`
    Status      int       `json:"status"`
    StatusError string    `json:"error"`
    Trace       string    `json:"trace"`
    Message     string    `json:"message"`
    Path        string    `json:"path"`
}
```

<a name="Error.Error"></a>
### func \(Error\) [Error](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/error.go#L16>)

```go
func (e Error) Error() string
```



<a name="Event"></a>
## type [Event](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L144-L148>)



```go
type Event interface {
    Op() Op
    Type() EventType
    GuildID() snowflake.ID
}
```

<a name="EventType"></a>
## type [EventType](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L17>)



```go
type EventType string
```

<a name="EventTypeTrackStart"></a>

```go
const (
    EventTypeTrackStart      EventType = "TrackStartEvent"
    EventTypeTrackEnd        EventType = "TrackEndEvent"
    EventTypeTrackException  EventType = "TrackExceptionEvent"
    EventTypeTrackStuck      EventType = "TrackStuckEvent"
    EventTypeWebSocketClosed EventType = "WebSocketClosedEvent"
    EventTypePlayerPause     EventType = "PlayerPauseEvent"  // not actually sent by lavalink
    EventTypePlayerResume    EventType = "PlayerResumeEvent" // not actually sent by lavalink
)
```

<a name="Exception"></a>
## type [Exception](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/load_result.go#L80-L84>)



```go
type Exception struct {
    Message  string   `json:"message"`
    Severity Severity `json:"severity"`
    Cause    *string  `json:"cause,omitempty"`
}
```

<a name="Exception.Error"></a>
### func \(Exception\) [Error](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/load_result.go#L88>)

```go
func (e Exception) Error() string
```



<a name="Filters"></a>
## type [Filters](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/filters.go#L9-L21>)



```go
type Filters struct {
    Volume        *Volume        `json:"volume,omitempty"`
    Equalizer     *Equalizer     `json:"equalizer,omitempty"`
    Timescale     *Timescale     `json:"timescale,omitempty"`
    Tremolo       *Tremolo       `json:"tremolo,omitempty"`
    Vibrato       *Vibrato       `json:"vibrato,omitempty"`
    Rotation      *Rotation      `json:"rotation,omitempty"`
    Karaoke       *Karaoke       `json:"karaoke,omitempty"`
    Distortion    *Distortion    `json:"distortion,omitempty"`
    ChannelMix    *ChannelMix    `json:"channelMix,omitempty"`
    LowPass       *LowPass       `json:"lowPass,omitempty"`
    PluginFilters map[string]any `json:"pluginFilters,omitempty"`
}
```

<a name="FrameStats"></a>
## type [FrameStats](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/stats.go#L32-L36>)



```go
type FrameStats struct {
    Sent    int `json:"sent"`
    Nulled  int `json:"nulled"`
    Deficit int `json:"deficit"`
}
```

<a name="Git"></a>
## type [Git](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/info.go#L22-L26>)



```go
type Git struct {
    Branch     string    `json:"branch"`
    Commit     string    `json:"commit"`
    CommitTime Timestamp `json:"commitTime"`
}
```

<a name="Info"></a>
## type [Info](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/info.go#L3-L12>)



```go
type Info struct {
    Version        Version   `json:"version"`
    BuildTime      Timestamp `json:"buildTime"`
    Git            Git       `json:"git"`
    JVM            string    `json:"jvm"`
    Lavaplayer     string    `json:"lavaplayer"`
    SourceManagers []string  `json:"sourceManagers"`
    Filters        []string  `json:"filters"`
    Plugins        []Plugin  `json:"plugins"`
}
```

<a name="Karaoke"></a>
## type [Karaoke](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/filters.go#L50-L55>)



```go
type Karaoke struct {
    Level       float32 `json:"level"`
    MonoLevel   float32 `json:"monoLevel"`
    FilterBand  float32 `json:"filterBand"`
    FilterWidth float32 `json:"filterWidth"`
}
```

<a name="LoadResult"></a>
## type [LoadResult](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/load_result.go#L23-L26>)



```go
type LoadResult struct {
    LoadType LoadType       `json:"loadType"`
    Data     LoadResultData `json:"data"`
}
```

<a name="LoadResult.UnmarshalJSON"></a>
### func \(\*LoadResult\) [UnmarshalJSON](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/load_result.go#L28>)

```go
func (r *LoadResult) UnmarshalJSON(data []byte) error
```



<a name="LoadResultData"></a>
## type [LoadResultData](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/load_result.go#L19-L21>)



```go
type LoadResultData interface {
    // contains filtered or unexported methods
}
```

<a name="LoadType"></a>
## type [LoadType](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/load_result.go#L9>)



```go
type LoadType string
```

<a name="LoadTypeTrack"></a>

```go
const (
    LoadTypeTrack    LoadType = "track"
    LoadTypePlaylist LoadType = "playlist"
    LoadTypeSearch   LoadType = "search"
    LoadTypeEmpty    LoadType = "empty"
    LoadTypeError    LoadType = "error"
)
```

<a name="LowPass"></a>
## type [LowPass](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/filters.go#L23-L25>)



```go
type LowPass struct {
    Smoothing float64 `json:"smoothing"`
}
```

<a name="Memory"></a>
## type [Memory](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/stats.go#L19-L24>)



```go
type Memory struct {
    Free       int `json:"free"`
    Used       int `json:"used"`
    Allocated  int `json:"allocated"`
    Reservable int `json:"reservable"`
}
```

<a name="Message"></a>
## type [Message](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L102-L104>)



```go
type Message interface {
    Op() Op
}
```

<a name="UnmarshalMessage"></a>
### func [UnmarshalMessage](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L29>)

```go
func UnmarshalMessage(data []byte) (Message, error)
```



<a name="Op"></a>
## type [Op](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L8>)



```go
type Op string
```

<a name="OpReady"></a>

```go
const (
    OpReady        Op  = "ready"
    OpStats        Op  = "stats"
    OpPlayerUpdate Op  = "playerUpdate"
    OpEvent        Op  = "event"
)
```

<a name="Player"></a>
## type [Player](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player.go#L9-L17>)



```go
type Player struct {
    GuildID snowflake.ID `json:"guildId"`
    Track   *Track       `json:"track"`
    Volume  int          `json:"volume"`
    Paused  bool         `json:"paused"`
    State   PlayerState  `json:"state"`
    Voice   VoiceState   `json:"voice"`
    Filters Filters      `json:"filters"`
}
```

<a name="PlayerPauseEvent"></a>
## type [PlayerPauseEvent](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L219-L221>)



```go
type PlayerPauseEvent struct {
    GuildID_ snowflake.ID `json:"guildId"`
}
```

<a name="PlayerPauseEvent.GuildID"></a>
### func \(PlayerPauseEvent\) [GuildID](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L225>)

```go
func (e PlayerPauseEvent) GuildID() snowflake.ID
```



<a name="PlayerPauseEvent.Op"></a>
### func \(PlayerPauseEvent\) [Op](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L223>)

```go
func (PlayerPauseEvent) Op() Op
```



<a name="PlayerPauseEvent.Type"></a>
### func \(PlayerPauseEvent\) [Type](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L224>)

```go
func (PlayerPauseEvent) Type() EventType
```



<a name="PlayerResumeEvent"></a>
## type [PlayerResumeEvent](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L227-L229>)



```go
type PlayerResumeEvent struct {
    GuildID_ snowflake.ID `json:"guildId"`
}
```

<a name="PlayerResumeEvent.GuildID"></a>
### func \(PlayerResumeEvent\) [GuildID](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L233>)

```go
func (e PlayerResumeEvent) GuildID() snowflake.ID
```



<a name="PlayerResumeEvent.Op"></a>
### func \(PlayerResumeEvent\) [Op](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L231>)

```go
func (PlayerResumeEvent) Op() Op
```



<a name="PlayerResumeEvent.Type"></a>
### func \(PlayerResumeEvent\) [Type](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L232>)

```go
func (PlayerResumeEvent) Type() EventType
```



<a name="PlayerState"></a>
## type [PlayerState](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player.go#L25-L30>)



```go
type PlayerState struct {
    Time      Timestamp `json:"time"`
    Position  Duration  `json:"position"`
    Connected bool      `json:"connected"`
    Ping      int       `json:"ping"`
}
```

<a name="PlayerUpdate"></a>
## type [PlayerUpdate](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player_update.go#L15-L24>)



```go
type PlayerUpdate struct {
    Track     *PlayerUpdateTrack `json:"track,omitempty"`
    Position  *Duration          `json:"position,omitempty"`
    EndTime   *Duration          `json:"endTime,omitempty"`
    Volume    *int               `json:"volume,omitempty"`
    Paused    *bool              `json:"paused,omitempty"`
    Voice     *VoiceState        `json:"voice,omitempty"`
    Filters   *Filters           `json:"filters,omitempty"`
    NoReplace bool               `json:"-"`
}
```

<a name="DefaultPlayerUpdate"></a>
### func [DefaultPlayerUpdate](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player_update.go#L5>)

```go
func DefaultPlayerUpdate() *PlayerUpdate
```



<a name="PlayerUpdate.Apply"></a>
### func \(\*PlayerUpdate\) [Apply](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player_update.go#L28>)

```go
func (u *PlayerUpdate) Apply(opts []PlayerUpdateOpt)
```



<a name="PlayerUpdateMessage"></a>
## type [PlayerUpdateMessage](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L113-L116>)



```go
type PlayerUpdateMessage struct {
    State   PlayerState  `json:"state"`
    GuildID snowflake.ID `json:"guildId"`
}
```

<a name="PlayerUpdateMessage.Op"></a>
### func \(PlayerUpdateMessage\) [Op](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L118>)

```go
func (PlayerUpdateMessage) Op() Op
```



<a name="PlayerUpdateOpt"></a>
## type [PlayerUpdateOpt](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player_update.go#L26>)



```go
type PlayerUpdateOpt func(update *PlayerUpdate)
```

<a name="WithEncodedTrack"></a>
### func [WithEncodedTrack](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player_update.go#L47>)

```go
func WithEncodedTrack(encodedTrack string) PlayerUpdateOpt
```



<a name="WithEndTime"></a>
### func [WithEndTime](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player_update.go#L89>)

```go
func WithEndTime(endTime Duration) PlayerUpdateOpt
```



<a name="WithFilters"></a>
### func [WithFilters](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player_update.go#L113>)

```go
func WithFilters(filters Filters) PlayerUpdateOpt
```



<a name="WithNoReplace"></a>
### func [WithNoReplace](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player_update.go#L34>)

```go
func WithNoReplace(noReplace bool) PlayerUpdateOpt
```



<a name="WithNullTrack"></a>
### func [WithNullTrack](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player_update.go#L56>)

```go
func WithNullTrack() PlayerUpdateOpt
```



<a name="WithPaused"></a>
### func [WithPaused](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player_update.go#L101>)

```go
func WithPaused(paused bool) PlayerUpdateOpt
```



<a name="WithPosition"></a>
### func [WithPosition](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player_update.go#L83>)

```go
func WithPosition(position Duration) PlayerUpdateOpt
```



<a name="WithTrack"></a>
### func [WithTrack](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player_update.go#L40>)

```go
func WithTrack(track Track) PlayerUpdateOpt
```



<a name="WithTrackIdentifier"></a>
### func [WithTrackIdentifier](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player_update.go#L65>)

```go
func WithTrackIdentifier(identifier string) PlayerUpdateOpt
```



<a name="WithTrackUserData"></a>
### func [WithTrackUserData](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player_update.go#L74>)

```go
func WithTrackUserData(userData any) PlayerUpdateOpt
```



<a name="WithVoice"></a>
### func [WithVoice](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player_update.go#L107>)

```go
func WithVoice(voice VoiceState) PlayerUpdateOpt
```



<a name="WithVolume"></a>
### func [WithVolume](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player_update.go#L95>)

```go
func WithVolume(volume int) PlayerUpdateOpt
```



<a name="PlayerUpdateTrack"></a>
## type [PlayerUpdateTrack](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player_update.go#L9-L13>)



```go
type PlayerUpdateTrack struct {
    Encoded    *json.Nullable[string] `json:"encoded,omitempty"`
    Identifier *string                `json:"identifier,omitempty"`
    UserData   any                    `json:"userData,omitempty"`
}
```

<a name="Players"></a>
## type [Players](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player.go#L7>)



```go
type Players []Player
```

<a name="Playlist"></a>
## type [Playlist](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/playlist.go#L3-L7>)



```go
type Playlist struct {
    Info       PlaylistInfo `json:"info"`
    PluginInfo RawData      `json:"pluginInfo"`
    Tracks     []Track      `json:"tracks"`
}
```

<a name="PlaylistInfo"></a>
## type [PlaylistInfo](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/playlist.go#L11-L14>)



```go
type PlaylistInfo struct {
    Name          string `json:"name"`
    SelectedTrack int    `json:"selectedTrack"`
}
```

<a name="Plugin"></a>
## type [Plugin](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/plugin.go#L9-L12>)



```go
type Plugin struct {
    Name    string `json:"name"`
    Version string `json:"version"`
}
```

<a name="Plugins"></a>
## type [Plugins](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/plugin.go#L7>)



```go
type Plugins []Plugin
```

<a name="RawData"></a>
## type [RawData](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/plugin.go#L14>)



```go
type RawData json.RawMessage
```

<a name="RawData.MarshalJSON"></a>
### func \(RawData\) [MarshalJSON](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/plugin.go#L28>)

```go
func (p RawData) MarshalJSON() ([]byte, error)
```



<a name="RawData.String"></a>
### func \(RawData\) [String](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/plugin.go#L16>)

```go
func (p RawData) String() string
```



<a name="RawData.Unmarshal"></a>
### func \(RawData\) [Unmarshal](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/plugin.go#L20>)

```go
func (p RawData) Unmarshal(v any) error
```



<a name="RawData.UnmarshalJSON"></a>
### func \(\*RawData\) [UnmarshalJSON](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/plugin.go#L24>)

```go
func (p *RawData) UnmarshalJSON(data []byte) error
```



<a name="ReadyMessage"></a>
## type [ReadyMessage](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L106-L109>)



```go
type ReadyMessage struct {
    Resumed   bool   `json:"resumed"`
    SessionID string `json:"sessionId"`
}
```

<a name="ReadyMessage.Op"></a>
### func \(ReadyMessage\) [Op](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L111>)

```go
func (ReadyMessage) Op() Op
```



<a name="Rotation"></a>
## type [Rotation](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/filters.go#L57-L59>)



```go
type Rotation struct {
    RotationHz int `json:"rotationHz"`
}
```

<a name="Search"></a>
## type [Search](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/load_result.go#L72>)



```go
type Search []Track
```

<a name="SearchType"></a>
## type [SearchType](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/search_type.go#L3>)



```go
type SearchType string
```

<a name="SearchTypeYouTube"></a>search prefixes

```go
const (
    SearchTypeYouTube      SearchType = "ytsearch"
    SearchTypeYouTubeMusic SearchType = "ytmsearch"
    SearchTypeSoundCloud   SearchType = "scsearch"
)
```

<a name="SearchType.Apply"></a>
### func \(SearchType\) [Apply](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/search_type.go#L12>)

```go
func (t SearchType) Apply(searchString string) string
```



<a name="Session"></a>
## type [Session](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/session.go#L3-L6>)



```go
type Session struct {
    Resuming bool `json:"resuming"`
    Timeout  int  `json:"timeout"`
}
```

<a name="SessionUpdate"></a>
## type [SessionUpdate](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/session.go#L8-L11>)



```go
type SessionUpdate struct {
    Resuming *bool `json:"resuming,omitempty"`
    Timeout  *int  `json:"timeout,omitempty"`
}
```

<a name="Severity"></a>
## type [Severity](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/load_result.go#L92>)



```go
type Severity string
```

<a name="SeverityCommon"></a>

```go
const (
    SeverityCommon     Severity = "common"
    SeveritySuspicious Severity = "suspicious"
    SeverityFault      Severity = "fault"
)
```

<a name="Stats"></a>
## type [Stats](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/stats.go#L3-L10>)



```go
type Stats struct {
    Players        int         `json:"players"`
    PlayingPlayers int         `json:"playingPlayers"`
    Uptime         Duration    `json:"uptime"`
    Memory         Memory      `json:"memory"`
    CPU            CPU         `json:"cpu"`
    FrameStats     *FrameStats `json:"frameStats"`
}
```

<a name="Stats.Better"></a>
### func \(Stats\) [Better](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/stats.go#L12>)

```go
func (s Stats) Better(stats Stats) bool
```



<a name="StatsMessage"></a>
## type [StatsMessage](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L120>)



```go
type StatsMessage Stats
```

<a name="StatsMessage.Op"></a>
### func \(StatsMessage\) [Op](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L122>)

```go
func (StatsMessage) Op() Op
```



<a name="Timescale"></a>
## type [Timescale](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/filters.go#L61-L65>)



```go
type Timescale struct {
    Speed float64 `json:"speed"`
    Pitch float64 `json:"pitch"`
    Rate  float64 `json:"rate"`
}
```

<a name="Timestamp"></a>
## type [Timestamp](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/timestamp.go#L14-L16>)



```go
type Timestamp struct {
    time.Time
}
```

<a name="Now"></a>
### func [Now](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/timestamp.go#L8>)

```go
func Now() Timestamp
```



<a name="Timestamp.MarshalJSON"></a>
### func \(Timestamp\) [MarshalJSON](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/timestamp.go#L18>)

```go
func (t Timestamp) MarshalJSON() ([]byte, error)
```



<a name="Timestamp.UnmarshalJSON"></a>
### func \(\*Timestamp\) [UnmarshalJSON](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/timestamp.go#L22>)

```go
func (t *Timestamp) UnmarshalJSON(data []byte) error
```



<a name="Track"></a>
## type [Track](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/track.go#L17-L22>)



```go
type Track struct {
    Encoded    string    `json:"encoded"`
    Info       TrackInfo `json:"info"`
    PluginInfo RawData   `json:"pluginInfo"`
    UserData   RawData   `json:"userData"`
}
```

<a name="Track.Scan"></a>
### func \(\*Track\) [Scan](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/track.go#L40>)

```go
func (t *Track) Scan(value interface{}) error
```



<a name="Track.Value"></a>
### func \(Track\) [Value](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/track.go#L36>)

```go
func (t Track) Value() (driver.Value, error)
```



<a name="Track.WithUserData"></a>
### func \(Track\) [WithUserData](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/track.go#L25>)

```go
func (t Track) WithUserData(userData any) (Track, error)
```

WithUserData returns a copy of the Track with the given userData.

<a name="TrackEndEvent"></a>
## type [TrackEndEvent](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L159-L163>)



```go
type TrackEndEvent struct {
    Track    Track          `json:"track"`
    Reason   TrackEndReason `json:"reason"`
    GuildID_ snowflake.ID   `json:"guildId"`
}
```

<a name="TrackEndEvent.GuildID"></a>
### func \(TrackEndEvent\) [GuildID](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L167>)

```go
func (e TrackEndEvent) GuildID() snowflake.ID
```



<a name="TrackEndEvent.Op"></a>
### func \(TrackEndEvent\) [Op](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L165>)

```go
func (TrackEndEvent) Op() Op
```



<a name="TrackEndEvent.Type"></a>
### func \(TrackEndEvent\) [Type](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L166>)

```go
func (TrackEndEvent) Type() EventType
```



<a name="TrackEndReason"></a>
## type [TrackEndReason](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L169>)



```go
type TrackEndReason string
```

<a name="TrackEndReasonFinished"></a>

```go
const (
    TrackEndReasonFinished   TrackEndReason = "finished"
    TrackEndReasonLoadFailed TrackEndReason = "loadFailed"
    TrackEndReasonStopped    TrackEndReason = "stopped"
    TrackEndReasonReplaced   TrackEndReason = "replaced"
    TrackEndReasonCleanup    TrackEndReason = "cleanup"
)
```

<a name="TrackEndReason.MayStartNext"></a>
### func \(TrackEndReason\) [MayStartNext](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L179>)

```go
func (e TrackEndReason) MayStartNext() bool
```



<a name="TrackExceptionEvent"></a>
## type [TrackExceptionEvent](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L188-L192>)



```go
type TrackExceptionEvent struct {
    Track     Track        `json:"track"`
    Exception Exception    `json:"exception"`
    GuildID_  snowflake.ID `json:"guildId"`
}
```

<a name="TrackExceptionEvent.GuildID"></a>
### func \(TrackExceptionEvent\) [GuildID](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L196>)

```go
func (e TrackExceptionEvent) GuildID() snowflake.ID
```



<a name="TrackExceptionEvent.Op"></a>
### func \(TrackExceptionEvent\) [Op](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L194>)

```go
func (TrackExceptionEvent) Op() Op
```



<a name="TrackExceptionEvent.Type"></a>
### func \(TrackExceptionEvent\) [Type](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L195>)

```go
func (TrackExceptionEvent) Type() EventType
```



<a name="TrackInfo"></a>
## type [TrackInfo](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/track.go#L49-L60>)



```go
type TrackInfo struct {
    Identifier string   `json:"identifier"`
    Author     string   `json:"author"`
    Length     Duration `json:"length"`
    IsStream   bool     `json:"isStream"`
    Title      string   `json:"title"`
    URI        *string  `json:"uri"`
    SourceName string   `json:"sourceName"`
    Position   Duration `json:"position"`
    ArtworkURL *string  `json:"artworkUrl"`
    ISRC       *string  `json:"isrc"`
}
```

<a name="TrackStartEvent"></a>
## type [TrackStartEvent](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L150-L153>)



```go
type TrackStartEvent struct {
    Track    Track        `json:"track"`
    GuildID_ snowflake.ID `json:"guildId"`
}
```

<a name="TrackStartEvent.GuildID"></a>
### func \(TrackStartEvent\) [GuildID](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L157>)

```go
func (e TrackStartEvent) GuildID() snowflake.ID
```



<a name="TrackStartEvent.Op"></a>
### func \(TrackStartEvent\) [Op](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L155>)

```go
func (TrackStartEvent) Op() Op
```



<a name="TrackStartEvent.Type"></a>
### func \(TrackStartEvent\) [Type](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L156>)

```go
func (TrackStartEvent) Type() EventType
```



<a name="TrackStuckEvent"></a>
## type [TrackStuckEvent](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L198-L202>)



```go
type TrackStuckEvent struct {
    Track     Track        `json:"track"`
    Threshold Duration     `json:"thresholdMs"`
    GuildID_  snowflake.ID `json:"guildId"`
}
```

<a name="TrackStuckEvent.GuildID"></a>
### func \(TrackStuckEvent\) [GuildID](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L206>)

```go
func (e TrackStuckEvent) GuildID() snowflake.ID
```



<a name="TrackStuckEvent.Op"></a>
### func \(TrackStuckEvent\) [Op](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L204>)

```go
func (TrackStuckEvent) Op() Op
```



<a name="TrackStuckEvent.Type"></a>
### func \(TrackStuckEvent\) [Type](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L205>)

```go
func (TrackStuckEvent) Type() EventType
```



<a name="Tremolo"></a>
## type [Tremolo](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/filters.go#L67-L70>)



```go
type Tremolo struct {
    Frequency float32 `json:"frequency"`
    Depth     float32 `json:"depth"`
}
```

<a name="UnknownEvent"></a>
## type [UnknownEvent](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L235-L239>)



```go
type UnknownEvent struct {
    Type_    EventType       `json:"type"`
    GuildID_ snowflake.ID    `json:"guildId"`
    Data     json.RawMessage `json:"-"`
}
```

<a name="UnknownEvent.GuildID"></a>
### func \(UnknownEvent\) [GuildID](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L256>)

```go
func (e UnknownEvent) GuildID() snowflake.ID
```



<a name="UnknownEvent.MarshalJSON"></a>
### func \(UnknownEvent\) [MarshalJSON](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L250>)

```go
func (e UnknownEvent) MarshalJSON() ([]byte, error)
```



<a name="UnknownEvent.Op"></a>
### func \(UnknownEvent\) [Op](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L254>)

```go
func (UnknownEvent) Op() Op
```



<a name="UnknownEvent.Type"></a>
### func \(UnknownEvent\) [Type](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L255>)

```go
func (e UnknownEvent) Type() EventType
```



<a name="UnknownEvent.UnmarshalJSON"></a>
### func \(\*UnknownEvent\) [UnmarshalJSON](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L241>)

```go
func (e *UnknownEvent) UnmarshalJSON(data []byte) error
```



<a name="UnknownMessage"></a>
## type [UnknownMessage](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L124-L127>)



```go
type UnknownMessage struct {
    Op_  Op              `json:"op"`
    Data json.RawMessage `json:"-"`
}
```

<a name="UnknownMessage.MarshalJSON"></a>
### func \(UnknownMessage\) [MarshalJSON](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L138>)

```go
func (m UnknownMessage) MarshalJSON() ([]byte, error)
```



<a name="UnknownMessage.Op"></a>
### func \(UnknownMessage\) [Op](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L142>)

```go
func (m UnknownMessage) Op() Op
```



<a name="UnknownMessage.UnmarshalJSON"></a>
### func \(\*UnknownMessage\) [UnmarshalJSON](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L129>)

```go
func (m *UnknownMessage) UnmarshalJSON(data []byte) error
```



<a name="Version"></a>
## type [Version](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/info.go#L14-L20>)



```go
type Version struct {
    Semver     string `json:"semver"`
    Major      int    `json:"major"`
    Minor      int    `json:"minor"`
    Patch      int    `json:"patch"`
    PreRelease string `json:"preRelease"`
}
```

<a name="Vibrato"></a>
## type [Vibrato](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/filters.go#L45-L48>)



```go
type Vibrato struct {
    Frequency float32 `json:"frequency"`
    Depth     float32 `json:"depth"`
}
```

<a name="VoiceState"></a>
## type [VoiceState](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/player.go#L19-L23>)



```go
type VoiceState struct {
    Token     string `json:"token"`
    Endpoint  string `json:"endpoint"`
    SessionID string `json:"sessionId"`
}
```

<a name="Volume"></a>
## type [Volume](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/filters.go#L72>)



```go
type Volume float32
```

<a name="WebSocketClosedEvent"></a>
## type [WebSocketClosedEvent](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L208-L213>)



```go
type WebSocketClosedEvent struct {
    Code     int          `json:"code"`
    Reason   string       `json:"reason"`
    ByRemote bool         `json:"byRemote"`
    GuildID_ snowflake.ID `json:"guildId"`
}
```

<a name="WebSocketClosedEvent.GuildID"></a>
### func \(WebSocketClosedEvent\) [GuildID](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L217>)

```go
func (e WebSocketClosedEvent) GuildID() snowflake.ID
```



<a name="WebSocketClosedEvent.Op"></a>
### func \(WebSocketClosedEvent\) [Op](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L215>)

```go
func (WebSocketClosedEvent) Op() Op
```



<a name="WebSocketClosedEvent.Type"></a>
### func \(WebSocketClosedEvent\) [Type](<https://github.com/disgoorg/disgolink/blob/v3/disgolink/lavalink/messages.go#L216>)

```go
func (WebSocketClosedEvent) Type() EventType
```