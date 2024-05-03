
```go
import "github.com/disgoorg/disgo/oauth2"
```

## Variables

<a name="ErrStateNotFound"></a>

```go
var (
    // ErrStateNotFound is returned when the state is not found in the SessionController.
    ErrStateNotFound = errors.New("state could not be found")

    // ErrSessionExpired is returned when the Session has expired.
    ErrSessionExpired = errors.New("access token expired. refresh the session")

    // ErrMissingOAuth2Scope is returned when a specific OAuth2 scope is missing.
    ErrMissingOAuth2Scope = func(scope discord.OAuth2Scope) error {
        return fmt.Errorf("missing '%s' scope", scope)
    }
)
```

<a name="AuthorizationURLParams"></a>
## type [AuthorizationURLParams](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/client.go#L49-L56>)



```go
type AuthorizationURLParams struct {
    RedirectURI        string
    Permissions        discord.Permissions
    GuildID            snowflake.ID
    DisableGuildSelect bool
    IntegrationType    discord.ApplicationIntegrationType
    Scopes             []discord.OAuth2Scope
}
```

<a name="Client"></a>
## type [Client](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/client.go#L59-L94>)

Client is a high level wrapper around Discord's OAuth2 API.

```go
type Client interface {
    // ID returns the configured client ID.
    ID() snowflake.ID
    // Secret returns the configured client secret.
    Secret() string
    // Rest returns the underlying rest.OAuth2.
    Rest() rest.OAuth2

    // StateController returns the configured StateController.
    StateController() StateController

    // GenerateAuthorizationURL generates an authorization URL with the given authorization params. State is automatically generated.
    GenerateAuthorizationURL(params AuthorizationURLParams) string
    // GenerateAuthorizationURLState generates an authorization URL with the given authorization params. State is automatically generated & returned.
    GenerateAuthorizationURLState(params AuthorizationURLParams) (string, string)

    // StartSession starts a new Session with the given authorization code & state.
    StartSession(code string, state string, opts ...rest.RequestOpt) (Session, *discord.IncomingWebhook, error)
    // RefreshSession refreshes the given Session with the refresh token.
    RefreshSession(session Session, opts ...rest.RequestOpt) (Session, error)
    // VerifySession verifies the given Session & refreshes it if needed.
    VerifySession(session Session, opts ...rest.RequestOpt) (Session, error)

    // GetUser returns the discord.OAuth2User associated with the given Session. Fields filled in the struct depend on the Session.Scopes.
    GetUser(session Session, opts ...rest.RequestOpt) (*discord.OAuth2User, error)
    // GetMember returns the discord.Member associated with the given Session in a specific guild.
    GetMember(session Session, guildID snowflake.ID, opts ...rest.RequestOpt) (*discord.Member, error)
    // GetGuilds returns the discord.OAuth2Guild(s) the user is a member of. This requires the discord.OAuth2ScopeGuilds scope in the Session.
    GetGuilds(session Session, opts ...rest.RequestOpt) ([]discord.OAuth2Guild, error)
    // GetConnections returns the discord.Connection(s) the user has connected. This requires the discord.OAuth2ScopeConnections scope in the Session.
    GetConnections(session Session, opts ...rest.RequestOpt) ([]discord.Connection, error)
    // GetApplicationRoleConnection returns the discord.ApplicationRoleConnection for the given application. This requires the discord.OAuth2ScopeRoleConnectionsWrite scope in the Session.
    GetApplicationRoleConnection(session Session, applicationID snowflake.ID, opts ...rest.RequestOpt) (*discord.ApplicationRoleConnection, error)
    // UpdateApplicationRoleConnection updates the discord.ApplicationRoleConnection for the given application. This requires the discord.OAuth2ScopeRoleConnectionsWrite scope in the Session.
    UpdateApplicationRoleConnection(session Session, applicationID snowflake.ID, update discord.ApplicationRoleConnectionUpdate, opts ...rest.RequestOpt) (*discord.ApplicationRoleConnection, error)
}
```

<a name="New"></a>
### func [New](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/client_impl.go#L14>)

```go
func New(id snowflake.ID, secret string, opts ...ConfigOpt) Client
```

New returns a new OAuth2 client with the given ID, secret and ConfigOpt\(s\).

<a name="Config"></a>
## type [Config](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/config.go#L17-L24>)

Config is the configuration for the OAuth2 client

```go
type Config struct {
    Logger                    *slog.Logger
    RestClient                rest.Client
    RestClientConfigOpts      []rest.ConfigOpt
    OAuth2                    rest.OAuth2
    StateController           StateController
    StateControllerConfigOpts []StateControllerConfigOpt
}
```

<a name="DefaultConfig"></a>
### func [DefaultConfig](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/config.go#L10>)

```go
func DefaultConfig() *Config
```

DefaultConfig is the configuration which is used by default

<a name="Config.Apply"></a>
### func \(\*Config\) [Apply](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/config.go#L30>)

```go
func (c *Config) Apply(opts []ConfigOpt)
```

Apply applies the given ConfigOpt\(s\) to the Config

<a name="ConfigOpt"></a>
## type [ConfigOpt](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/config.go#L27>)

ConfigOpt can be used to supply optional parameters to New

```go
type ConfigOpt func(config *Config)
```

<a name="WithLogger"></a>
### func [WithLogger](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/config.go#L46>)

```go
func WithLogger(logger *slog.Logger) ConfigOpt
```

WithLogger applies a custom logger to the OAuth2 client

<a name="WithOAuth2"></a>
### func [WithOAuth2](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/config.go#L67>)

```go
func WithOAuth2(oauth2 rest.OAuth2) ConfigOpt
```

WithOAuth2 applies a custom rest.OAuth2 to the OAuth2 client

<a name="WithRestClient"></a>
### func [WithRestClient](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/config.go#L53>)

```go
func WithRestClient(restClient rest.Client) ConfigOpt
```

WithRestClient applies a custom rest.Client to the OAuth2 client

<a name="WithRestClientConfigOpts"></a>
### func [WithRestClientConfigOpts](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/config.go#L60>)

```go
func WithRestClientConfigOpts(opts ...rest.ConfigOpt) ConfigOpt
```

WithRestClientConfigOpts applies rest.ConfigOpt for the rest.Client to the OAuth2 client

<a name="WithStateController"></a>
### func [WithStateController](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/config.go#L74>)

```go
func WithStateController(stateController StateController) ConfigOpt
```

WithStateController applies a custom StateController to the OAuth2 client

<a name="WithStateControllerOpts"></a>
### func [WithStateControllerOpts](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/config.go#L81>)

```go
func WithStateControllerOpts(opts ...StateControllerConfigOpt) ConfigOpt
```

WithStateControllerOpts applies all StateControllerConfigOpt\(s\) to the StateController

<a name="Session"></a>
## type [Session](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/client.go#L28-L43>)

Session represents a discord access token response \(https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-access-token-response\)

```go
type Session struct {
    // AccessToken allows requesting user information
    AccessToken string `json:"access_token"`

    // RefreshToken allows refreshing the AccessToken
    RefreshToken string `json:"refresh_token"`

    // Scopes returns the discord.OAuth2Scope(s) of the Session
    Scopes []discord.OAuth2Scope `json:"scopes"`

    // TokenType returns the discord.TokenType of the AccessToken
    TokenType discord.TokenType `json:"token_type"`

    // Expiration returns the time.Time when the AccessToken expires and needs to be refreshed
    Expiration time.Time `json:"expiration"`
}
```

<a name="Session.Expired"></a>
### func \(Session\) [Expired](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/client.go#L45>)

```go
func (s Session) Expired() bool
```



<a name="StateController"></a>
## type [StateController](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/state_controller.go#L10-L16>)

StateController is responsible for generating, storing and validating states.

```go
type StateController interface {
    // NewState generates a new random state to be used as a state.
    NewState(redirectURI string) string

    // UseState validates a state and returns the redirect url or nil if it is invalid.
    UseState(state string) string
}
```

<a name="NewStateController"></a>
### func [NewStateController](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/state_controller.go#L19>)

```go
func NewStateController(opts ...StateControllerConfigOpt) StateController
```

NewStateController returns a new empty StateController.

<a name="StateControllerConfig"></a>
## type [StateControllerConfig](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/state_controller_config.go#L21-L26>)

StateControllerConfig is the configuration for the StateController

```go
type StateControllerConfig struct {
    Logger       *slog.Logger
    States       map[string]string
    NewStateFunc func() string
    MaxTTL       time.Duration
}
```

<a name="DefaultStateControllerConfig"></a>
### func [DefaultStateControllerConfig](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/state_controller_config.go#L11>)

```go
func DefaultStateControllerConfig() *StateControllerConfig
```

DefaultStateControllerConfig is the default configuration for the StateController

<a name="StateControllerConfig.Apply"></a>
### func \(\*StateControllerConfig\) [Apply](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/state_controller_config.go#L32>)

```go
func (c *StateControllerConfig) Apply(opts []StateControllerConfigOpt)
```

Apply applies the given StateControllerConfigOpt\(s\) to the StateControllerConfig

<a name="StateControllerConfigOpt"></a>
## type [StateControllerConfigOpt](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/state_controller_config.go#L29>)

StateControllerConfigOpt is used to pass optional parameters to NewStateController

```go
type StateControllerConfigOpt func(config *StateControllerConfig)
```

<a name="WithMaxTTL"></a>
### func [WithMaxTTL](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/state_controller_config.go#L60>)

```go
func WithMaxTTL(maxTTL time.Duration) StateControllerConfigOpt
```

WithMaxTTL sets the maximum time to live for a state

<a name="WithNewStateFunc"></a>
### func [WithNewStateFunc](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/state_controller_config.go#L53>)

```go
func WithNewStateFunc(newStateFunc func() string) StateControllerConfigOpt
```

WithNewStateFunc sets the function which is used to generate a new random state

<a name="WithStateControllerLogger"></a>
### func [WithStateControllerLogger](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/state_controller_config.go#L39>)

```go
func WithStateControllerLogger(logger *slog.Logger) StateControllerConfigOpt
```

WithStateControllerLogger sets the logger for the StateController

<a name="WithStates"></a>
### func [WithStates](<https://github.com/disgoorg/disgo/blob/master/disgo/oauth2/state_controller_config.go#L46>)

```go
func WithStates(states map[string]string) StateControllerConfigOpt
```

WithStates loads states from an existing map

Generated by [gomarkdoc](<https://github.com/princjef/gomarkdoc>)
