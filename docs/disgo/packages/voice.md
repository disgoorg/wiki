# Voice

```go
import "github.com/disgoorg/disgo/voice"
```

Package voice provides a high level client interface for interacting with Discord voice.

## Constants

<a name="OpusFrameSizeMs"></a>

```go
const (
    // OpusFrameSizeMs is the size of an opus frame in milliseconds.
    OpusFrameSizeMs int = 20

    // OpusFrameSize is the size of an opus frame in bytes.
    OpusFrameSize int = 960

    // OpusFrameSizeBytes is the size of an opus frame in bytes.
    OpusFrameSizeBytes = OpusFrameSize * 2 * 2
)
```

<a name="OpusPacketHeaderSize"></a>

```go
const (
    // OpusPacketHeaderSize is the size of the opus packet header.
    OpusPacketHeaderSize = 12

    // UDPTimeout is the timeout for UDP connections.
    UDPTimeout = 30 * time.Second
)
```

<a name="GatewayVersion"></a>GatewayVersion is the version of the voice gateway we are using.

```go
const GatewayVersion = 4
```

## Variables

<a name="ErrGatewayNotConnected"></a>

```go
var (
    // ErrGatewayNotConnected is returned when the gateway is not connected and a message is attempted to be sent.
    ErrGatewayNotConnected = fmt.Errorf("voice gateway not connected")

    // ErrGatewayAlreadyConnected is returned when the gateway is already connected and a connection is attempted to be opened.
    ErrGatewayAlreadyConnected = fmt.Errorf("voice gateway already connected")
)
```

<a name="GatewayCloseEventCodeHeartbeatTimeout"></a>

```go
var (
    GatewayCloseEventCodeHeartbeatTimeout = GatewayCloseEventCode{
        Code:        1000,
        Description: "Heartbeat timeout",
        Explanation: "We did not heartbeat in time.",
        Reconnect:   true,
    }

    GatewayCloseEventCodeUnknownError = GatewayCloseEventCode{
        Code:        4000,
        Description: "Unknown error",
        Explanation: "We're not sure what went wrong. Try reconnecting?",
        Reconnect:   true,
    }

    GatewayCloseEventCodeUnknownOpcode = GatewayCloseEventCode{
        Code:        4001,
        Description: "Unknown opcode",
        Explanation: "You sent an invalid opcode.",
        Reconnect:   true,
    }

    GatewayCloseEventCodeFailedDecode = GatewayCloseEventCode{
        Code:        4002,
        Description: "Failed to decode payload",
        Explanation: "You sent a invalid payload in your identifying to the Gateway.",
        Reconnect:   true,
    }

    GatewayCloseEventCodeNotAuthenticated = GatewayCloseEventCode{
        Code:        4003,
        Description: "Not authenticated",
        Explanation: "You sent a payload before identifying with the Gateway.",
        Reconnect:   false,
    }

    GatewayCloseEventCodeAuthenticationFailed = GatewayCloseEventCode{
        Code:        4004,
        Description: "Authentication failed",
        Explanation: "The token you sent in your identify payload is incorrect.",
        Reconnect:   false,
    }

    GatewayCloseEventCodeAlreadyAuthenticated = GatewayCloseEventCode{
        Code:        4005,
        Description: "Already authenticated",
        Explanation: "You sent more than one identify payload. Stahp.",
        Reconnect:   true,
    }

    GatewayCloseEventCodeSessionNoLongerValid = GatewayCloseEventCode{
        Code:        4006,
        Description: "Session no longer valid",
        Explanation: "Your session is no longer valid.",
        Reconnect:   false,
    }

    GatewayCloseEventCodeSessionTimeout = GatewayCloseEventCode{
        Code:        4009,
        Description: "Session timeout",
        Explanation: "Your session has timed out.",
        Reconnect:   false,
    }

    GatewayCloseEventCodeServerNotFound = GatewayCloseEventCode{
        Code:        4011,
        Description: "Server not found",
        Explanation: "We can't find the server you're trying to connect to.",
        Reconnect:   false,
    }

    GatewayCloseEventCodeUnknownProtocol = GatewayCloseEventCode{
        Code:        4012,
        Description: "Unknown protocol",
        Explanation: "We didn't recognize the protocol you sent.",
        Reconnect:   false,
    }

    GatewayCloseEventCodeDisconnected = GatewayCloseEventCode{
        Code:        4014,
        Description: "Disconnected",
        Explanation: "Channel was deleted, you were kicked, voice server changed, or the main voicegateway session was dropped. Don't reconnect.",
        Reconnect:   false,
    }

    GatewayCloseEventCodeVoiceServerCrash = GatewayCloseEventCode{
        Code:        4015,
        Description: "Voice server crashed",
        Explanation: "The server crashed. Our bad! Try resuming.",
        Reconnect:   true,
    }

    GatewayCloseEventCodeUnknownEncryptionMode = GatewayCloseEventCode{
        Code:        4016,
        Description: "Unknown encryption mode",
        Explanation: "We didn't recognize your encryption.",
        Reconnect:   false,
    }

    GatewayCloseEventCodeUnknown = GatewayCloseEventCode{
        Code:        0,
        Description: "Unknown",
        Explanation: "Unknown Voice Close Event Code",
        Reconnect:   true,
    }

    GatewayCloseEventCodes = map[int]GatewayCloseEventCode{
        GatewayCloseEventCodeHeartbeatTimeout.Code:      GatewayCloseEventCodeHeartbeatTimeout,
        GatewayCloseEventCodeUnknownError.Code:          GatewayCloseEventCodeUnknownError,
        GatewayCloseEventCodeUnknownOpcode.Code:         GatewayCloseEventCodeUnknownOpcode,
        GatewayCloseEventCodeFailedDecode.Code:          GatewayCloseEventCodeFailedDecode,
        GatewayCloseEventCodeNotAuthenticated.Code:      GatewayCloseEventCodeNotAuthenticated,
        GatewayCloseEventCodeAuthenticationFailed.Code:  GatewayCloseEventCodeAuthenticationFailed,
        GatewayCloseEventCodeAlreadyAuthenticated.Code:  GatewayCloseEventCodeAlreadyAuthenticated,
        GatewayCloseEventCodeSessionNoLongerValid.Code:  GatewayCloseEventCodeSessionNoLongerValid,
        GatewayCloseEventCodeSessionTimeout.Code:        GatewayCloseEventCodeSessionTimeout,
        GatewayCloseEventCodeServerNotFound.Code:        GatewayCloseEventCodeServerNotFound,
        GatewayCloseEventCodeUnknownProtocol.Code:       GatewayCloseEventCodeUnknownProtocol,
        GatewayCloseEventCodeDisconnected.Code:          GatewayCloseEventCodeDisconnected,
        GatewayCloseEventCodeVoiceServerCrash.Code:      GatewayCloseEventCodeVoiceServerCrash,
        GatewayCloseEventCodeUnknownEncryptionMode.Code: GatewayCloseEventCodeUnknownEncryptionMode,
    }
)
```

<a name="ErrDecryptionFailed"></a>ErrDecryptionFailed is returned when the packet decryption fails.

```go
var ErrDecryptionFailed = errors.New("decryption failed")
```

<a name="SilenceAudioFrame"></a>SilenceAudioFrame is a 20ms opus frame of silence.

```go
var SilenceAudioFrame = []byte{0xF8, 0xFF, 0xFE}
```

<a name="AudioReceiver"></a>
## type [AudioReceiver](<https://github.com/disgoorg/disgo/blob/master/voice/audio_receiver.go#L20-L29>)

AudioReceiver is used to receive audio from a voice connection and pass it to an OpusFrameReceiver.

```go
type AudioReceiver interface {
    // Open starts receiving audio from the voice connection.
    Open()

    // CleanupUser cleans up any audio resources for the given user.
    CleanupUser(userID snowflake.ID)

    // Close stops receiving audio from the voice connection.
    Close()
}
```

<a name="NewAudioReceiver"></a>
### func [NewAudioReceiver](<https://github.com/disgoorg/disgo/blob/master/voice/audio_receiver.go#L45>)

```go
func NewAudioReceiver(logger *slog.Logger, opusReceiver OpusFrameReceiver, conn Conn) AudioReceiver
```

NewAudioReceiver creates a new AudioReceiver reading audio to the given OpusFrameReceiver from the given Conn.

<a name="AudioReceiverCreateFunc"></a>
## type [AudioReceiverCreateFunc](<https://github.com/disgoorg/disgo/blob/master/voice/audio_receiver.go#L14>)

AudioReceiverCreateFunc is used to create a new AudioReceiver reading audio from the given Conn.

```go
type AudioReceiverCreateFunc func(logger *slog.Logger, receiver OpusFrameReceiver, connection Conn) AudioReceiver
```

<a name="AudioSender"></a>
## type [AudioSender](<https://github.com/disgoorg/disgo/blob/master/voice/audio_sender.go#L31-L34>)

AudioSender is used to send audio to a Conn.

```go
type AudioSender interface {
    Open()
    Close()
}
```

<a name="NewAudioSender"></a>
### func [NewAudioSender](<https://github.com/disgoorg/disgo/blob/master/voice/audio_sender.go#L47>)

```go
func NewAudioSender(logger *slog.Logger, opusProvider OpusFrameProvider, conn Conn) AudioSender
```

NewAudioSender creates a new AudioSender sending audio from the given OpusFrameProvider to the given Conn.

<a name="AudioSenderCreateFunc"></a>
## type [AudioSenderCreateFunc](<https://github.com/disgoorg/disgo/blob/master/voice/audio_sender.go#L28>)

AudioSenderCreateFunc is used to create a new AudioSender sending audio to the given Conn.

```go
type AudioSenderCreateFunc func(logger *slog.Logger, provider OpusFrameProvider, conn Conn) AudioSender
```

<a name="CloseHandlerFunc"></a>
## type [CloseHandlerFunc](<https://github.com/disgoorg/disgo/blob/master/voice/gateway.go#L51>)

CloseHandlerFunc is a function that handles a voice gateway close.

```go
type CloseHandlerFunc func(gateway Gateway, err error)
```

<a name="Conn"></a>
## type [Conn](<https://github.com/disgoorg/disgo/blob/master/voice/conn.go#L19-L58>)

Conn is a complete voice conn to discord. It holds the Gateway and voiceudp.UDPConn conn and combines them.

```go
type Conn interface {
    // Gateway returns the voice Gateway used by the voice Conn.
    Gateway() Gateway

    // UDP returns the voice UDPConn conn used by the voice Conn.
    UDP() UDPConn

    // ChannelID returns the ID of the voice channel the voice Conn is openedChan to.
    ChannelID() *snowflake.ID

    // GuildID returns the ID of the guild the voice Conn is openedChan to.
    GuildID() snowflake.ID

    // UserIDBySSRC returns the ID of the user for the given SSRC.
    UserIDBySSRC(ssrc uint32) snowflake.ID

    // SetSpeaking sends a speaking packet to the Conn socket discord.
    SetSpeaking(ctx context.Context, flags SpeakingFlags) error

    // SetOpusFrameProvider lets you inject your own OpusFrameProvider.
    SetOpusFrameProvider(handler OpusFrameProvider)

    // SetOpusFrameReceiver lets you inject your own OpusFrameReceiver.
    SetOpusFrameReceiver(handler OpusFrameReceiver)

    // SetEventHandlerFunc lets listen for voice gateway events.
    SetEventHandlerFunc(eventHandlerFunc EventHandlerFunc)

    // Open opens the voice conn. It will connect to the voice gateway and start the Conn conn after it receives the Gateway events.
    Open(ctx context.Context, channelID snowflake.ID, selfMute bool, selfDeaf bool) error

    // Close closes the voice conn. It will close the Conn conn and disconnect from the voice gateway.
    Close(ctx context.Context)

    // HandleVoiceStateUpdate provides the gateway.EventVoiceStateUpdate to the voice conn. Which is needed to connect to the voice Gateway.
    HandleVoiceStateUpdate(update botgateway.EventVoiceStateUpdate)

    // HandleVoiceServerUpdate provides the gateway.EventVoiceServerUpdate to the voice conn. Which is needed to connect to the voice Gateway.
    HandleVoiceServerUpdate(update botgateway.EventVoiceServerUpdate)
}
```

<a name="NewConn"></a>
### func [NewConn](<https://github.com/disgoorg/disgo/blob/master/voice/conn.go#L62>)

```go
func NewConn(guildID snowflake.ID, userID snowflake.ID, voiceStateUpdateFunc StateUpdateFunc, removeConnFunc func(), opts ...ConnConfigOpt) Conn
```

NewConn returns a new default voice conn.

<a name="ConnConfig"></a>
## type [ConnConfig](<https://github.com/disgoorg/disgo/blob/master/voice/conn_config.go#L19-L32>)

ConnConfig is used to configure a Conn.

```go
type ConnConfig struct {
    Logger *slog.Logger

    GatewayCreateFunc GatewayCreateFunc
    GatewayConfigOpts []GatewayConfigOpt

    UDPConnCreateFunc UDPConnCreateFunc
    UDPConnConfigOpts []UDPConnConfigOpt

    AudioSenderCreateFunc   AudioSenderCreateFunc
    AudioReceiverCreateFunc AudioReceiverCreateFunc

    EventHandlerFunc EventHandlerFunc
}
```

<a name="DefaultConnConfig"></a>
### func [DefaultConnConfig](<https://github.com/disgoorg/disgo/blob/master/voice/conn_config.go#L8>)

```go
func DefaultConnConfig() *ConnConfig
```

DefaultConnConfig returns a ConnConfig with sensible defaults.

<a name="ConnConfig.Apply"></a>
### func \(\*ConnConfig\) [Apply](<https://github.com/disgoorg/disgo/blob/master/voice/conn_config.go#L38>)

```go
func (c *ConnConfig) Apply(opts []ConnConfigOpt)
```

Apply applies the ConnConfigOpt\(s\) to the ConnConfig.

<a name="ConnConfigOpt"></a>
## type [ConnConfigOpt](<https://github.com/disgoorg/disgo/blob/master/voice/conn_config.go#L35>)

ConnConfigOpt is used to functionally configure a ConnConfig.

```go
type ConnConfigOpt func(connConfig *ConnConfig)
```

<a name="WithConnAudioReceiverCreateFunc"></a>
### func [WithConnAudioReceiverCreateFunc](<https://github.com/disgoorg/disgo/blob/master/voice/conn_config.go#L87>)

```go
func WithConnAudioReceiverCreateFunc(audioReceiverCreateFunc AudioReceiverCreateFunc) ConnConfigOpt
```

WithConnAudioReceiverCreateFunc sets the Conn\(s\) used AudioReceiverCreateFunc.

<a name="WithConnAudioSenderCreateFunc"></a>
### func [WithConnAudioSenderCreateFunc](<https://github.com/disgoorg/disgo/blob/master/voice/conn_config.go#L80>)

```go
func WithConnAudioSenderCreateFunc(audioSenderCreateFunc AudioSenderCreateFunc) ConnConfigOpt
```

WithConnAudioSenderCreateFunc sets the Conn\(s\) used AudioSenderCreateFunc.

<a name="WithConnEventHandlerFunc"></a>
### func [WithConnEventHandlerFunc](<https://github.com/disgoorg/disgo/blob/master/voice/conn_config.go#L94>)

```go
func WithConnEventHandlerFunc(eventHandlerFunc EventHandlerFunc) ConnConfigOpt
```

WithConnEventHandlerFunc sets the Conn\(s\) used EventHandlerFunc.

<a name="WithConnGatewayConfigOpts"></a>
### func [WithConnGatewayConfigOpts](<https://github.com/disgoorg/disgo/blob/master/voice/conn_config.go#L59>)

```go
func WithConnGatewayConfigOpts(opts ...GatewayConfigOpt) ConnConfigOpt
```

WithConnGatewayConfigOpts sets the Conn\(s\) used GatewayConfigOpt\(s\).

<a name="WithConnGatewayCreateFunc"></a>
### func [WithConnGatewayCreateFunc](<https://github.com/disgoorg/disgo/blob/master/voice/conn_config.go#L52>)

```go
func WithConnGatewayCreateFunc(gatewayCreateFunc GatewayCreateFunc) ConnConfigOpt
```

WithConnGatewayCreateFunc sets the Conn\(s\) used GatewayCreateFunc.

<a name="WithConnLogger"></a>
### func [WithConnLogger](<https://github.com/disgoorg/disgo/blob/master/voice/conn_config.go#L45>)

```go
func WithConnLogger(logger *slog.Logger) ConnConfigOpt
```

WithConnLogger sets the Conn\(s\) used Logger.

<a name="WithUDPConnConfigOpts"></a>
### func [WithUDPConnConfigOpts](<https://github.com/disgoorg/disgo/blob/master/voice/conn_config.go#L73>)

```go
func WithUDPConnConfigOpts(opts ...UDPConnConfigOpt) ConnConfigOpt
```

WithUDPConnConfigOpts sets the Conn\(s\) used UDPConnConfigOpt\(s\).

<a name="WithUDPConnCreateFunc"></a>
### func [WithUDPConnCreateFunc](<https://github.com/disgoorg/disgo/blob/master/voice/conn_config.go#L66>)

```go
func WithUDPConnCreateFunc(udpConnCreateFunc UDPConnCreateFunc) ConnConfigOpt
```

WithUDPConnCreateFunc sets the Conn\(s\) used UDPConnCreateFunc.

<a name="ConnCreateFunc"></a>
## type [ConnCreateFunc](<https://github.com/disgoorg/disgo/blob/master/voice/conn.go#L16>)

ConnCreateFunc is a type alias for a function that creates a new Conn.

```go
type ConnCreateFunc func(guildID snowflake.ID, userID snowflake.ID, voiceStateUpdateFunc StateUpdateFunc, removeConnFunc func(), opts ...ConnConfigOpt) Conn
```

<a name="EncryptionMode"></a>
## type [EncryptionMode](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L159>)

EncryptionMode is the encryption mode used for voice data.

```go
type EncryptionMode string
```

<a name="EncryptionModeNormal"></a>All possible EncryptionMode\(s\) https://discord.com/developers/docs/topics/voice-connections#establishing-a-voice-udp-connection-encryption-modes.

```go
const (
    EncryptionModeNormal EncryptionMode = "xsalsa20_poly1305"
    EncryptionModeSuffix EncryptionMode = "xsalsa20_poly1305_suffix"
    EncryptionModeLite   EncryptionMode = "xsalsa20_poly1305_lite"
)
```

<a name="EventHandlerFunc"></a>
## type [EventHandlerFunc](<https://github.com/disgoorg/disgo/blob/master/voice/gateway.go#L48>)

EventHandlerFunc is a function that handles a voice gateway event.

```go
type EventHandlerFunc func(opCode Opcode, data GatewayMessageData)
```

<a name="Gateway"></a>
## type [Gateway](<https://github.com/disgoorg/disgo/blob/master/voice/gateway.go#L72-L90>)

Gateway is a websocket connection to the Discord voice gateway.

```go
type Gateway interface {
    // SSRC returns the SSRC of the current voice connection.
    SSRC() uint32

    // Latency returns the current latency of the voice gateway connection.
    Latency() time.Duration

    // Open opens a new websocket connection to the voice gateway.
    Open(ctx context.Context, state State) error

    // Close closes the websocket connection to the voice gateway.
    Close()

    // CloseWithCode closes the websocket connection to the voice gateway with a specific close code.
    CloseWithCode(code int, message string)

    // Send sends a message to the voice gateway.
    Send(ctx context.Context, opCode Opcode, data GatewayMessageData) error
}
```

<a name="NewGateway"></a>
### func [NewGateway](<https://github.com/disgoorg/disgo/blob/master/voice/gateway.go#L93>)

```go
func NewGateway(eventHandlerFunc EventHandlerFunc, closeHandlerFunc CloseHandlerFunc, opts ...GatewayConfigOpt) Gateway
```

NewGateway creates a new voice Gateway.

<a name="GatewayCloseEventCode"></a>
## type [GatewayCloseEventCode](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_opcodes.go#L23-L28>)



```go
type GatewayCloseEventCode struct {
    Code        int
    Description string
    Explanation string
    Reconnect   bool
}
```

<a name="GatewayCloseEventCodeByCode"></a>
### func [GatewayCloseEventCodeByCode](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_opcodes.go#L154>)

```go
func GatewayCloseEventCodeByCode(code int) GatewayCloseEventCode
```



<a name="GatewayConfig"></a>
## type [GatewayConfig](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_config.go#L19-L23>)

GatewayConfig is used to configure a Gateway.

```go
type GatewayConfig struct {
    Logger        *slog.Logger
    Dialer        *websocket.Dialer
    AutoReconnect bool
}
```

<a name="DefaultGatewayConfig"></a>
### func [DefaultGatewayConfig](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_config.go#L10>)

```go
func DefaultGatewayConfig() *GatewayConfig
```

DefaultGatewayConfig returns a GatewayConfig with sensible defaults.

<a name="GatewayConfig.Apply"></a>
### func \(\*GatewayConfig\) [Apply](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_config.go#L29>)

```go
func (c *GatewayConfig) Apply(opts []GatewayConfigOpt)
```

Apply applies the GatewayConfigOpt\(s\) to the GatewayConfig.

<a name="GatewayConfigOpt"></a>
## type [GatewayConfigOpt](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_config.go#L26>)

GatewayConfigOpt is used to functionally configure a GatewayConfig.

```go
type GatewayConfigOpt func(config *GatewayConfig)
```

<a name="WithGatewayAutoReconnect"></a>
### func [WithGatewayAutoReconnect](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_config.go#L50>)

```go
func WithGatewayAutoReconnect(autoReconnect bool) GatewayConfigOpt
```

WithGatewayAutoReconnect sets the Gateway\(s\) used AutoReconnect.

<a name="WithGatewayDialer"></a>
### func [WithGatewayDialer](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_config.go#L43>)

```go
func WithGatewayDialer(dialer *websocket.Dialer) GatewayConfigOpt
```

WithGatewayDialer sets the Gateway\(s\) used websocket.Dialer.

<a name="WithGatewayLogger"></a>
### func [WithGatewayLogger](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_config.go#L36>)

```go
func WithGatewayLogger(logger *slog.Logger) GatewayConfigOpt
```

WithGatewayLogger sets the Gateway\(s\) used Logger.

<a name="GatewayCreateFunc"></a>
## type [GatewayCreateFunc](<https://github.com/disgoorg/disgo/blob/master/voice/gateway.go#L54>)

GatewayCreateFunc is a function that creates a new voice gateway.

```go
type GatewayCreateFunc func(eventHandlerFunc EventHandlerFunc, closeHandlerFunc CloseHandlerFunc, opts ...GatewayConfigOpt) Gateway
```

<a name="GatewayMessage"></a>
## type [GatewayMessage](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L9-L12>)

GatewayMessage represents a voice gateway message

```go
type GatewayMessage struct {
    Op  Opcode             `json:"op"`
    D   GatewayMessageData `json:"d,omitempty"`
}
```

<a name="GatewayMessage.UnmarshalJSON"></a>
### func \(\*GatewayMessage\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L15>)

```go
func (m *GatewayMessage) UnmarshalJSON(data []byte) error
```

UnmarshalJSON unmarshalls the GatewayMessage from json

<a name="GatewayMessageData"></a>
## type [GatewayMessageData](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L100-L102>)

GatewayMessageData represents a voice gateway message data.

```go
type GatewayMessageData interface {
    // contains filtered or unexported methods
}
```

<a name="GatewayMessageDataClientConnect"></a>
## type [GatewayMessageDataClientConnect](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L198-L202>)



```go
type GatewayMessageDataClientConnect struct {
    UserID     snowflake.ID `json:"user_id"`
    AudioCodec string       `json:"audio_codec"`
    VideoCodec string       `json:"video_codec"`
}
```

<a name="GatewayMessageDataClientDisconnect"></a>
## type [GatewayMessageDataClientDisconnect](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L206-L208>)



```go
type GatewayMessageDataClientDisconnect struct {
    UserID snowflake.ID `json:"user_id"`
}
```

<a name="GatewayMessageDataHeartbeat"></a>
## type [GatewayMessageDataHeartbeat](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L128>)



```go
type GatewayMessageDataHeartbeat int64
```

<a name="GatewayMessageDataHeartbeatACK"></a>
## type [GatewayMessageDataHeartbeatACK](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L194>)



```go
type GatewayMessageDataHeartbeatACK int64
```

<a name="GatewayMessageDataHello"></a>
## type [GatewayMessageDataHello](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L122-L124>)



```go
type GatewayMessageDataHello struct {
    HeartbeatInterval float64 `json:"heartbeat_interval"`
}
```

<a name="GatewayMessageDataIdentify"></a>
## type [GatewayMessageDataIdentify](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L104-L109>)



```go
type GatewayMessageDataIdentify struct {
    GuildID   snowflake.ID `json:"server_id"`
    UserID    snowflake.ID `json:"user_id"`
    SessionID string       `json:"session_id"`
    Token     string       `json:"token"`
}
```

<a name="GatewayMessageDataReady"></a>
## type [GatewayMessageDataReady](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L113-L118>)



```go
type GatewayMessageDataReady struct {
    SSRC  uint32   `json:"ssrc"`
    IP    string   `json:"ip"`
    Port  int      `json:"port"`
    Modes []string `json:"modes"`
}
```

<a name="GatewayMessageDataResume"></a>
## type [GatewayMessageDataResume](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L186-L190>)



```go
type GatewayMessageDataResume struct {
    GuildID   snowflake.ID `json:"server_id"` // wtf is this?
    SessionID string       `json:"session_id"`
    Token     string       `json:"token"`
}
```

<a name="GatewayMessageDataSelectProtocol"></a>
## type [GatewayMessageDataSelectProtocol](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L145-L148>)



```go
type GatewayMessageDataSelectProtocol struct {
    Protocol Protocol                             `json:"protocol"`
    Data     GatewayMessageDataSelectProtocolData `json:"data"`
}
```

<a name="GatewayMessageDataSelectProtocolData"></a>
## type [GatewayMessageDataSelectProtocolData](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L152-L156>)



```go
type GatewayMessageDataSelectProtocolData struct {
    Address string         `json:"address"`
    Port    int            `json:"port"`
    Mode    EncryptionMode `json:"mode"`
}
```

<a name="GatewayMessageDataSessionDescription"></a>
## type [GatewayMessageDataSessionDescription](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L132-L135>)



```go
type GatewayMessageDataSessionDescription struct {
    Mode      string   `json:"mode"`
    SecretKey [32]byte `json:"secret_key"`
}
```

<a name="GatewayMessageDataSpeaking"></a>
## type [GatewayMessageDataSpeaking](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L168-L173>)



```go
type GatewayMessageDataSpeaking struct {
    Speaking SpeakingFlags `json:"speaking"`
    Delay    int           `json:"delay"`
    SSRC     uint32        `json:"ssrc"`
    UserID   snowflake.ID  `json:"user_id,omitempty"`
}
```

<a name="GatewayMessageDataUnknown"></a>
## type [GatewayMessageDataUnknown](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L212>)



```go
type GatewayMessageDataUnknown json.RawMessage
```

<a name="GatewayMessageDataUnknown.MarshalJSON"></a>
### func \(GatewayMessageDataUnknown\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L216>)

```go
func (m GatewayMessageDataUnknown) MarshalJSON() ([]byte, error)
```



<a name="GatewayMessageDataUnknown.UnmarshalJSON"></a>
### func \(\*GatewayMessageDataUnknown\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L220>)

```go
func (m *GatewayMessageDataUnknown) UnmarshalJSON(data []byte) error
```



<a name="Manager"></a>
## type [Manager](<https://github.com/disgoorg/disgo/blob/master/voice/manager.go#L18-L39>)

Manager manages all voice connections.

```go
type Manager interface {
    // HandleVoiceStateUpdate handles a gateway.EventVoiceStateUpdate
    HandleVoiceStateUpdate(update gateway.EventVoiceStateUpdate)

    // HandleVoiceServerUpdate handles a gateway.EventVoiceServerUpdate
    HandleVoiceServerUpdate(update gateway.EventVoiceServerUpdate)

    // CreateConn creates a new voice connection for the given guild.
    CreateConn(guildID snowflake.ID) Conn

    // GetConn returns the voice connection for the given guild.
    GetConn(guildID snowflake.ID) Conn

    // ForEachCon runs the given function for each voice connection. This is thread-safe.
    ForEachCon(f func(connection Conn))

    // RemoveConn removes the voice connection for the given guild.
    RemoveConn(guildID snowflake.ID)

    // Close closes all voice connections.
    Close(ctx context.Context)
}
```

<a name="NewManager"></a>
### func [NewManager](<https://github.com/disgoorg/disgo/blob/master/voice/manager.go#L43>)

```go
func NewManager(voiceStateUpdateFunc StateUpdateFunc, userID snowflake.ID, opts ...ManagerConfigOpt) Manager
```

NewManager creates a new Manager.

<a name="ManagerConfig"></a>
## type [ManagerConfig](<https://github.com/disgoorg/disgo/blob/master/voice/manager_config.go#L14-L19>)

ManagerConfig is a function that configures a Manager.

```go
type ManagerConfig struct {
    Logger *slog.Logger

    ConnCreateFunc ConnCreateFunc
    ConnOpts       []ConnConfigOpt
}
```

<a name="DefaultManagerConfig"></a>
### func [DefaultManagerConfig](<https://github.com/disgoorg/disgo/blob/master/voice/manager_config.go#L6>)

```go
func DefaultManagerConfig() *ManagerConfig
```

DefaultManagerConfig returns the default ManagerConfig with sensible defaults.

<a name="ManagerConfig.Apply"></a>
### func \(\*ManagerConfig\) [Apply](<https://github.com/disgoorg/disgo/blob/master/voice/manager_config.go#L25>)

```go
func (c *ManagerConfig) Apply(opts []ManagerConfigOpt)
```

Apply applies the given ManagerConfigOpts to the ManagerConfig.

<a name="ManagerConfigOpt"></a>
## type [ManagerConfigOpt](<https://github.com/disgoorg/disgo/blob/master/voice/manager_config.go#L22>)

ManagerConfigOpt is used to functionally configure a ManagerConfig.

```go
type ManagerConfigOpt func(ManagerConfig *ManagerConfig)
```

<a name="WithConnConfigOpts"></a>
### func [WithConnConfigOpts](<https://github.com/disgoorg/disgo/blob/master/voice/manager_config.go#L46>)

```go
func WithConnConfigOpts(opts ...ConnConfigOpt) ManagerConfigOpt
```

WithConnConfigOpts sets the ConnConfigOpt\(s\) for the Manager

<a name="WithConnCreateFunc"></a>
### func [WithConnCreateFunc](<https://github.com/disgoorg/disgo/blob/master/voice/manager_config.go#L39>)

```go
func WithConnCreateFunc(connectionCreateFunc ConnCreateFunc) ManagerConfigOpt
```

WithConnCreateFunc sets the ConnCreateFunc for the Manager

<a name="WithLogger"></a>
### func [WithLogger](<https://github.com/disgoorg/disgo/blob/master/voice/manager_config.go#L32>)

```go
func WithLogger(logger *slog.Logger) ManagerConfigOpt
```

WithLogger sets the logger for the webhook client

<a name="Opcode"></a>
## type [Opcode](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_opcodes.go#L3>)



```go
type Opcode int
```

<a name="OpcodeIdentify"></a>

```go
const (
    OpcodeIdentify Opcode = iota
    OpcodeSelectProtocol
    OpcodeReady
    OpcodeHeartbeat
    OpcodeSessionDescription
    OpcodeSpeaking
    OpcodeHeartbeatACK
    OpcodeResume
    OpcodeHello
    OpcodeResumed

    OpcodeClientDisconnect
    OpcodeGuildSync
)
```

<a name="OpusFrameProvider"></a>
## type [OpusFrameProvider](<https://github.com/disgoorg/disgo/blob/master/voice/audio_sender.go#L37-L43>)

OpusFrameProvider is used to provide opus frames to an AudioSender.

```go
type OpusFrameProvider interface {
    // ProvideOpusFrame provides an opus frame to the AudioSender.
    ProvideOpusFrame() ([]byte, error)

    // Close closes the OpusFrameProvider.
    Close()
}
```

<a name="OpusFrameReceiver"></a>
## type [OpusFrameReceiver](<https://github.com/disgoorg/disgo/blob/master/voice/audio_receiver.go#L32-L41>)

OpusFrameReceiver is an interface used to receive opus frames from an AudioReceiver.

```go
type OpusFrameReceiver interface {
    // ReceiveOpusFrame receives an opus frame.
    ReceiveOpusFrame(userID snowflake.ID, packet *Packet) error

    // CleanupUser cleans up any audio resources for the given user.
    CleanupUser(userID snowflake.ID)

    // Close stops receiving audio from the voice connection.
    Close()
}
```

<a name="OpusReader"></a>
## type [OpusReader](<https://github.com/disgoorg/disgo/blob/master/voice/opus.go#L20-L24>)

OpusReader is an OpusFrameProvider that reads opus frames from the given io.Reader. Each opus frame is prefixed with a 4 byte little endian uint32 that represents the length of the frame.

```go
type OpusReader struct {
    // contains filtered or unexported fields
}
```

<a name="NewOpusReader"></a>
### func [NewOpusReader](<https://github.com/disgoorg/disgo/blob/master/voice/opus.go#L12>)

```go
func NewOpusReader(r io.Reader) *OpusReader
```

NewOpusReader returns a new OpusFrameProvider that reads opus frames from the given io.Reader.

<a name="OpusReader.Close"></a>
### func \(\*OpusReader\) [Close](<https://github.com/disgoorg/disgo/blob/master/voice/opus.go#L42>)

```go
func (*OpusReader) Close()
```

Close is a no\-op.

<a name="OpusReader.ProvideOpusFrame"></a>
### func \(\*OpusReader\) [ProvideOpusFrame](<https://github.com/disgoorg/disgo/blob/master/voice/opus.go#L27>)

```go
func (h *OpusReader) ProvideOpusFrame() ([]byte, error)
```

ProvideOpusFrame reads the next opus frame from the underlying io.Reader.

<a name="OpusWriter"></a>
## type [OpusWriter](<https://github.com/disgoorg/disgo/blob/master/voice/opus.go#L54-L57>)

OpusWriter is an OpusFrameReceiver that writes opus frames to the given io.Writer. Each opus frame is prefixed with a 4 byte little endian uint32 that represents the length of the frame.

```go
type OpusWriter struct {
    // contains filtered or unexported fields
}
```

<a name="NewOpusWriter"></a>
### func [NewOpusWriter](<https://github.com/disgoorg/disgo/blob/master/voice/opus.go#L45>)

```go
func NewOpusWriter(w io.Writer, userFilter UserFilterFunc) *OpusWriter
```

NewOpusWriter returns a new OpusFrameReceiver that writes opus frames to the given io.Writer.

<a name="OpusWriter.CleanupUser"></a>
### func \(\*OpusWriter\) [CleanupUser](<https://github.com/disgoorg/disgo/blob/master/voice/opus.go#L74>)

```go
func (*OpusWriter) CleanupUser(_ snowflake.ID)
```

CleanupUser is a no\-op.

<a name="OpusWriter.Close"></a>
### func \(\*OpusWriter\) [Close](<https://github.com/disgoorg/disgo/blob/master/voice/opus.go#L77>)

```go
func (*OpusWriter) Close()
```

Close is a no\-op.

<a name="OpusWriter.ReceiveOpusFrame"></a>
### func \(\*OpusWriter\) [ReceiveOpusFrame](<https://github.com/disgoorg/disgo/blob/master/voice/opus.go#L60>)

```go
func (r *OpusWriter) ReceiveOpusFrame(userID snowflake.ID, packet *Packet) error
```

ReceiveOpusFrame writes the given opus frame to the underlying io.Writer.

<a name="Packet"></a>
## type [Packet](<https://github.com/disgoorg/disgo/blob/master/voice/udp_conn.go#L79-L88>)

Packet is a voice packet received from discord.

```go
type Packet struct {
    // Sequence is the sequence number of the packet.
    Sequence uint16
    // Timestamp is the timestamp of the packet.
    Timestamp uint32
    // SSRC is the users SSRC of the packet.
    SSRC uint32
    // Opus is the actual opus data of the packet.
    Opus []byte
}
```

<a name="Protocol"></a>
## type [Protocol](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L139>)



```go
type Protocol string
```

<a name="ProtocolUDP"></a>

```go
const (
    ProtocolUDP Protocol = "udp"
)
```

<a name="SpeakingFlags"></a>
## type [SpeakingFlags](<https://github.com/disgoorg/disgo/blob/master/voice/gateway_messages.go#L177>)



```go
type SpeakingFlags int
```

<a name="SpeakingFlagMicrophone"></a>

```go
const (
    SpeakingFlagMicrophone SpeakingFlags = 1 << iota
    SpeakingFlagSoundshare
    SpeakingFlagPriority
    SpeakingFlagNone SpeakingFlags = 0
)
```

<a name="State"></a>
## type [State](<https://github.com/disgoorg/disgo/blob/master/voice/gateway.go#L61-L69>)

State is the current state of the voice conn.

```go
type State struct {
    GuildID snowflake.ID
    UserID  snowflake.ID

    ChannelID *snowflake.ID
    SessionID string
    Token     string
    Endpoint  string
}
```

<a name="StateProviderFunc"></a>
## type [StateProviderFunc](<https://github.com/disgoorg/disgo/blob/master/voice/gateway.go#L57>)

StateProviderFunc is a function that provides the current conn state of the voice gateway.

```go
type StateProviderFunc func() State
```

<a name="StateUpdateFunc"></a>
## type [StateUpdateFunc](<https://github.com/disgoorg/disgo/blob/master/voice/manager.go#L15>)

StateUpdateFunc is used to update the voice state of the bot from the Manager.

```go
type StateUpdateFunc func(ctx context.Context, guildID snowflake.ID, channelID *snowflake.ID, selfMute bool, selfDeaf bool) error
```

<a name="Status"></a>
## type [Status](<https://github.com/disgoorg/disgo/blob/master/voice/gateway.go#L33>)

Status returns the current status of the gateway.

```go
type Status int
```

<a name="StatusUnconnected"></a>

```go
const (
    StatusUnconnected Status = iota
    StatusConnecting
    StatusWaitingForHello
    StatusIdentifying
    StatusResuming
    StatusWaitingForReady
    StatusReady
    StatusDisconnected
)
```

<a name="UDPConn"></a>
## type [UDPConn](<https://github.com/disgoorg/disgo/blob/master/voice/udp_conn.go#L44-L76>)

UDPConn represents a UDP connection to discord voice servers. It is used to send/receive voice packets to/from discord. It implements the io.Reader, io.Writer and io.Closer interface.

```go
type UDPConn interface {
    // LocalAddr returns the local network address, if known.
    LocalAddr() net.Addr

    // RemoteAddr returns the remote network address, if known.
    RemoteAddr() net.Addr

    // SetSecretKey sets the secret key used to encrypt packets.
    SetSecretKey(secretKey [32]byte)

    SetDeadline(t time.Time) error

    // SetReadDeadline sets the read deadline for the UDPConn connection.
    SetReadDeadline(t time.Time) error

    // SetWriteDeadline sets the write deadline for the UDPConn connection.
    SetWriteDeadline(t time.Time) error

    // Open opens the UDPConn connection.
    Open(ctx context.Context, ip string, port int, ssrc uint32) (string, int, error)

    // Close closes the UDPConn connection.
    Close() error

    // Read reads a packet from the UDPConn connection. This implements the io.Reader interface.
    Read(p []byte) (int, error)

    // ReadPacket reads a packet from the UDPConn connection.
    ReadPacket() (*Packet, error)

    // Write writes a packet to the UDPConn connection. This implements the io.Writer interface.
    Write(p []byte) (int, error)
}
```

<a name="NewUDPConn"></a>
### func [NewUDPConn](<https://github.com/disgoorg/disgo/blob/master/voice/udp_conn.go#L92>)

```go
func NewUDPConn(opts ...UDPConnConfigOpt) UDPConn
```

NewUDPConn creates a new voice UDPConn with the given configuration.

<a name="UDPConnConfig"></a>
## type [UDPConnConfig](<https://github.com/disgoorg/disgo/blob/master/voice/udp_conn_config.go#L17-L20>)



```go
type UDPConnConfig struct {
    Logger *slog.Logger
    Dialer *net.Dialer
}
```

<a name="DefaultUDPConnConfig"></a>
### func [DefaultUDPConnConfig](<https://github.com/disgoorg/disgo/blob/master/voice/udp_conn_config.go#L8>)

```go
func DefaultUDPConnConfig() UDPConnConfig
```



<a name="UDPConnConfig.Apply"></a>
### func \(\*UDPConnConfig\) [Apply](<https://github.com/disgoorg/disgo/blob/master/voice/udp_conn_config.go#L24>)

```go
func (c *UDPConnConfig) Apply(opts []UDPConnConfigOpt)
```



<a name="UDPConnConfigOpt"></a>
## type [UDPConnConfigOpt](<https://github.com/disgoorg/disgo/blob/master/voice/udp_conn_config.go#L22>)



```go
type UDPConnConfigOpt func(config *UDPConnConfig)
```

<a name="WithUDPConnDialer"></a>
### func [WithUDPConnDialer](<https://github.com/disgoorg/disgo/blob/master/voice/udp_conn_config.go#L36>)

```go
func WithUDPConnDialer(dialer *net.Dialer) UDPConnConfigOpt
```



<a name="WithUDPConnLogger"></a>
### func [WithUDPConnLogger](<https://github.com/disgoorg/disgo/blob/master/voice/udp_conn_config.go#L30>)

```go
func WithUDPConnLogger(logger *slog.Logger) UDPConnConfigOpt
```



<a name="UDPConnCreateFunc"></a>
## type [UDPConnCreateFunc](<https://github.com/disgoorg/disgo/blob/master/voice/udp_conn.go#L40>)

UDPConnCreateFunc is a function that creates a UDPConn.

```go
type UDPConnCreateFunc func(opts ...UDPConnConfigOpt) UDPConn
```

<a name="UserFilterFunc"></a>
## type [UserFilterFunc](<https://github.com/disgoorg/disgo/blob/master/voice/audio_receiver.go#L17>)

UserFilterFunc is used as a filter for which users to receive audio from.

```go
type UserFilterFunc func(userID snowflake.ID) bool
```

Generated by [gomarkdoc](<https://github.com/princjef/gomarkdoc>)
