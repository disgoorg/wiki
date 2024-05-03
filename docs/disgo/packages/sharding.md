# Sharding

```go
import "github.com/disgoorg/disgo/sharding"
```

Package sharding is used to connect and interact with the Discord Gateway.

## Constants

<a name="MaxConcurrency"></a>MaxConcurrency is the default number of shards that can log in at the same time.

```go
const MaxConcurrency = 1
```

<a name="ShardSplitCount"></a>ShardSplitCount is the default count a shard should be split into when it needs re\-sharding.

```go
const ShardSplitCount = 2
```

<a name="ShardIDByGuild"></a>
## func [ShardIDByGuild](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_manager.go#L39>)

```go
func ShardIDByGuild(guildID snowflake.ID, shardCount int) int
```

ShardIDByGuild returns the shard ID for the given guildID and shardCount.

<a name="ShardMaxConcurrencyKey"></a>
## func [ShardMaxConcurrencyKey](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_rate_limiter.go#L25>)

```go
func ShardMaxConcurrencyKey(shardID int, maxConcurrency int) int
```

ShardMaxConcurrencyKey returns the bucket the given shardID with maxConcurrency belongs to.

<a name="Config"></a>
## type [Config](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_manager_config.go#L19-L38>)

Config lets you configure your ShardManager instance.

```go
type Config struct {
    // Logger is the logger of the ShardManager. Defaults to log.Default()
    Logger *slog.Logger
    // ShardIDs is a map of shardIDs the ShardManager should manage. Leave this nil to manage all shards.
    ShardIDs map[int]struct{}
    // ShardCount is the total shard count of the ShardManager. Leave this at 0 to let Discord calculate the shard count for you.
    ShardCount int
    // ShardSplitCount is the count a shard should be split into if it is too large. This is only used if AutoScaling is enabled.
    ShardSplitCount int
    // AutoScaling will automatically re-shard shards if they are too large. This is disabled by default.
    AutoScaling bool
    // GatewayCreateFunc is the function which is used by the ShardManager to create a new gateway.Gateway. Defaults to gateway.New.
    GatewayCreateFunc gateway.CreateFunc
    // GatewayConfigOpts are the ConfigOpt(s) which are applied to the gateway.Gateway.
    GatewayConfigOpts []gateway.ConfigOpt
    // RateLimiter is the RateLimiter which is used by the ShardManager. Defaults to NewRateLimiter()
    RateLimiter RateLimiter
    // RateLimiterConfigOpts are the RateLimiterConfigOpt(s) which are applied to the RateLimiter.
    RateLimiterConfigOpts []RateLimiterConfigOpt
}
```

<a name="DefaultConfig"></a>
### func [DefaultConfig](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_manager_config.go#L10>)

```go
func DefaultConfig() *Config
```

DefaultConfig returns a Config with sensible defaults.

<a name="Config.Apply"></a>
### func \(\*Config\) [Apply](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_manager_config.go#L44>)

```go
func (c *Config) Apply(opts []ConfigOpt)
```

Apply applies the given ConfigOpt\(s\) to the Config

<a name="ConfigOpt"></a>
## type [ConfigOpt](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_manager_config.go#L41>)

ConfigOpt is a type alias for a function that takes a Config and is used to configure your Server.

```go
type ConfigOpt func(config *Config)
```

<a name="WithAutoScaling"></a>
### func [WithAutoScaling](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_manager_config.go#L88>)

```go
func WithAutoScaling(autoScaling bool) ConfigOpt
```

WithAutoScaling sets whether the ShardManager should automatically re\-shard shards if they are too large. This is disabled by default.

<a name="WithGatewayConfigOpts"></a>
### func [WithGatewayConfigOpts](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_manager_config.go#L102>)

```go
func WithGatewayConfigOpts(opts ...gateway.ConfigOpt) ConfigOpt
```

WithGatewayConfigOpts lets you configure the gateway.Gateway created by the ShardManager.

<a name="WithGatewayCreateFunc"></a>
### func [WithGatewayCreateFunc](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_manager_config.go#L95>)

```go
func WithGatewayCreateFunc(gatewayCreateFunc gateway.CreateFunc) ConfigOpt
```

WithGatewayCreateFunc sets the function which is used by the ShardManager to create a new gateway.Gateway.

<a name="WithLogger"></a>
### func [WithLogger](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_manager_config.go#L54>)

```go
func WithLogger(logger *slog.Logger) ConfigOpt
```

WithLogger sets the logger of the ShardManager.

<a name="WithRateLimiter"></a>
### func [WithRateLimiter](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_manager_config.go#L109>)

```go
func WithRateLimiter(rateLimiter RateLimiter) ConfigOpt
```

WithRateLimiter lets you inject your own RateLimiter into the ShardManager.

<a name="WithRateLimiterConfigOpt"></a>
### func [WithRateLimiterConfigOpt](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_manager_config.go#L116>)

```go
func WithRateLimiterConfigOpt(opts ...RateLimiterConfigOpt) ConfigOpt
```

WithRateLimiterConfigOpt lets you configure the default RateLimiter used by the ShardManager.

<a name="WithShardCount"></a>
### func [WithShardCount](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_manager_config.go#L73>)

```go
func WithShardCount(shardCount int) ConfigOpt
```

WithShardCount sets the shard count of the ShardManager.

<a name="WithShardIDs"></a>
### func [WithShardIDs](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_manager_config.go#L61>)

```go
func WithShardIDs(shardIDs ...int) ConfigOpt
```

WithShardIDs sets the shardIDs the ShardManager should manage.

<a name="WithShardSplitCount"></a>
### func [WithShardSplitCount](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_manager_config.go#L81>)

```go
func WithShardSplitCount(shardSplitCount int) ConfigOpt
```

WithShardSplitCount sets the count a shard should be split into if it is too large. This is only used if AutoScaling is enabled.

<a name="RateLimiter"></a>
## type [RateLimiter](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_rate_limiter.go#L11-L22>)

RateLimiter limits how many shards can log in to Discord at the same time.

```go
type RateLimiter interface {
    // Close gracefully closes the RateLimiter.
    // If the context deadline is exceeded, the RateLimiter will be closed immediately.
    Close(ctx context.Context)

    // WaitBucket waits for the given shardID bucket to be available for new logins.
    // If the context deadline is exceeded, WaitBucket will return immediately and no login will be attempted.
    WaitBucket(ctx context.Context, shardID int) error

    // UnlockBucket unlocks the given shardID bucket.
    UnlockBucket(shardID int)
}
```

<a name="NewNoopRateLimiter"></a>
### func [NewNoopRateLimiter](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_rate_limiter_noop.go#L10>)

```go
func NewNoopRateLimiter() RateLimiter
```

NewNoopRateLimiter creates a new noop RateLimiter.

<a name="NewRateLimiter"></a>
### func [NewRateLimiter](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_rate_limiter_impl.go#L15>)

```go
func NewRateLimiter(opts ...RateLimiterConfigOpt) RateLimiter
```

NewRateLimiter creates a new default RateLimiter with the given RateLimiterConfigOpt\(s\).

<a name="RateLimiterConfig"></a>
## type [RateLimiterConfig](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_rate_limiter_config.go#L16-L19>)

RateLimiterConfig lets you configure your RateLimiter instance.

```go
type RateLimiterConfig struct {
    Logger         *slog.Logger
    MaxConcurrency int
}
```

<a name="DefaultRateLimiterConfig"></a>
### func [DefaultRateLimiterConfig](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_rate_limiter_config.go#L8>)

```go
func DefaultRateLimiterConfig() *RateLimiterConfig
```

DefaultRateLimiterConfig returns a RateLimiterConfig with sensible defaults.

<a name="RateLimiterConfig.Apply"></a>
### func \(\*RateLimiterConfig\) [Apply](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_rate_limiter_config.go#L25>)

```go
func (c *RateLimiterConfig) Apply(opts []RateLimiterConfigOpt)
```

Apply applies the given RateLimiterConfigOpt\(s\) to the RateLimiterConfig

<a name="RateLimiterConfigOpt"></a>
## type [RateLimiterConfigOpt](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_rate_limiter_config.go#L22>)

RateLimiterConfigOpt is a type alias for a function that takes a RateLimiterConfig and is used to configure your Server.

```go
type RateLimiterConfigOpt func(config *RateLimiterConfig)
```

<a name="WithMaxConcurrency"></a>
### func [WithMaxConcurrency](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_rate_limiter_config.go#L39>)

```go
func WithMaxConcurrency(maxConcurrency int) RateLimiterConfigOpt
```

WithMaxConcurrency sets the maximum number of concurrent identifies in 5 seconds.

<a name="WithRateLimiterLogger"></a>
### func [WithRateLimiterLogger](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_rate_limiter_config.go#L32>)

```go
func WithRateLimiterLogger(logger *slog.Logger) RateLimiterConfigOpt
```

WithRateLimiterLogger sets the logger for the RateLimiter.

<a name="ShardManager"></a>
## type [ShardManager](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_manager.go#L16-L36>)

ShardManager manages multiple gateway.Gateway connections. For more information on sharding see: https://discord.com/developers/docs/topics/gateway#sharding

```go
type ShardManager interface {
    // Open opens all configured shards.
    Open(ctx context.Context)
    // Close closes all shards.
    Close(ctx context.Context)

    // OpenShard opens a specific shard.
    OpenShard(ctx context.Context, shardID int) error

    // CloseShard closes a specific shard.
    CloseShard(ctx context.Context, shardID int)

    // ShardByGuildID returns the gateway.Gateway for the shard that contains the given guild.
    ShardByGuildID(guildId snowflake.ID) gateway.Gateway

    // Shard returns the gateway.Gateway for the given shard ID.
    Shard(shardID int) gateway.Gateway

    // Shards returns a copy of all shards as a map.
    Shards() map[int]gateway.Gateway
}
```

<a name="New"></a>
### func [New](<https://github.com/disgoorg/disgo/blob/master/sharding/shard_manager_impl.go#L19>)

```go
func New(token string, eventHandlerFunc gateway.EventHandlerFunc, opts ...ConfigOpt) ShardManager
```

New creates a new default ShardManager with the given token, eventHandlerFunc and ConfigOpt\(s\).

Generated by [gomarkdoc](<https://github.com/princjef/gomarkdoc>)
