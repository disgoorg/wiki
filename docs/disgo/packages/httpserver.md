
```go
import "github.com/disgoorg/disgo/httpserver"
```

## Variables

<a name="Verify"></a>

```go
var (
    // Verify reports whether sig is a valid signature of message by publicKey. It
    Verify = func(publicKey PublicKey, message []byte, sig []byte) bool {
        return ed25519.Verify(publicKey, message, sig)
    }

    // SignatureSize is the size, in bytes, of signatures generated and verified by this package.
    SignatureSize = ed25519.SignatureSize
)
```

<a name="HandleInteraction"></a>
## func [HandleInteraction](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/server.go#L105>)

```go
func HandleInteraction(publicKey PublicKey, logger *slog.Logger, handleFunc EventHandlerFunc) http.HandlerFunc
```

HandleInteraction handles an interaction from Discord's Outgoing Webhooks. It verifies and parses the interaction and then calls the passed EventHandlerFunc.

<a name="VerifyRequest"></a>
## func [VerifyRequest](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/server.go#L55>)

```go
func VerifyRequest(r *http.Request, key PublicKey) bool
```

VerifyRequest implements the verification side of the discord interactions api signing algorithm, as documented here: https://discord.com/developers/docs/interactions/slash-commands#security-and-authorization Credit: https://github.com/bsdlp/discord-interactions-go/blob/main/interactions/verify.go

<a name="Config"></a>
## type [Config](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/config.go#L20-L28>)

Config lets you configure your Server instance.

```go
type Config struct {
    Logger     *slog.Logger
    HTTPServer *http.Server
    ServeMux   *http.ServeMux
    URL        string
    Address    string
    CertFile   string
    KeyFile    string
}
```

<a name="DefaultConfig"></a>
### func [DefaultConfig](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/config.go#L9>)

```go
func DefaultConfig() *Config
```

DefaultConfig returns a Config with sensible defaults.

<a name="Config.Apply"></a>
### func \(\*Config\) [Apply](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/config.go#L34>)

```go
func (c *Config) Apply(opts []ConfigOpt)
```

Apply applies the given ConfigOpt\(s\) to the Config

<a name="ConfigOpt"></a>
## type [ConfigOpt](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/config.go#L31>)

ConfigOpt is a type alias for a function that takes a Config and is used to configure your Server.

```go
type ConfigOpt func(config *Config)
```

<a name="WithAddress"></a>
### func [WithAddress](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/config.go#L69>)

```go
func WithAddress(address string) ConfigOpt
```

WithAddress sets the Address of the Config.

<a name="WithHTTPServer"></a>
### func [WithHTTPServer](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/config.go#L48>)

```go
func WithHTTPServer(httpServer *http.Server) ConfigOpt
```

WithHTTPServer sets the http.Server of the Config.

<a name="WithLogger"></a>
### func [WithLogger](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/config.go#L41>)

```go
func WithLogger(logger *slog.Logger) ConfigOpt
```

WithLogger sets the Logger of the Config.

<a name="WithServeMux"></a>
### func [WithServeMux](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/config.go#L55>)

```go
func WithServeMux(serveMux *http.ServeMux) ConfigOpt
```

WithServeMux sets the http.ServeMux of the Config.

<a name="WithTLS"></a>
### func [WithTLS](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/config.go#L76>)

```go
func WithTLS(certFile string, keyFile string) ConfigOpt
```

WithTLS sets the CertFile of the Config.

<a name="WithURL"></a>
### func [WithURL](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/config.go#L62>)

```go
func WithURL(url string) ConfigOpt
```

WithURL sets the URL of the Config.

<a name="EventHandlerFunc"></a>
## type [EventHandlerFunc](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/server.go#L20>)

EventHandlerFunc is used to handle events from Discord's Outgoing Webhooks

```go
type EventHandlerFunc func(responseFunc RespondFunc, event EventInteractionCreate)
```

<a name="EventInteractionCreate"></a>
## type [EventInteractionCreate](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/server.go#L27-L29>)

EventInteractionCreate is the event payload when an interaction is created via Discord's Outgoing Webhooks

```go
type EventInteractionCreate struct {
    discord.Interaction
}
```

<a name="EventInteractionCreate.MarshalJSON"></a>
### func \(EventInteractionCreate\) [MarshalJSON](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/server.go#L40>)

```go
func (e EventInteractionCreate) MarshalJSON() ([]byte, error)
```



<a name="EventInteractionCreate.UnmarshalJSON"></a>
### func \(\*EventInteractionCreate\) [UnmarshalJSON](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/server.go#L31>)

```go
func (e *EventInteractionCreate) UnmarshalJSON(data []byte) error
```



<a name="PublicKey"></a>
## type [PublicKey](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/ed25519.go#L16>)

PublicKey is the type of Ed25519 public keys.

```go
type PublicKey = []byte
```

<a name="RespondFunc"></a>
## type [RespondFunc](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/server.go#L23>)

RespondFunc is used to respond to Discord's Outgoing Webhooks

```go
type RespondFunc func(response discord.InteractionResponse) error
```

<a name="Server"></a>
## type [Server](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/server.go#L45-L51>)

Server is used for receiving Discord's interactions via Outgoing Webhooks

```go
type Server interface {
    // Start starts the Server
    Start()

    // Close closes the Server
    Close(ctx context.Context)
}
```

<a name="New"></a>
### func [New](<https://github.com/disgoorg/disgo/blob/master/disgo/httpserver/server_impl.go#L14>)

```go
func New(publicKey string, eventHandlerFunc EventHandlerFunc, opts ...ConfigOpt) Server
```

New creates a new Server with the given publicKey eventHandlerFunc and ConfigOpt\(s\)

Generated by [gomarkdoc](<https://github.com/princjef/gomarkdoc>)
