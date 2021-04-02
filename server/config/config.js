const config = {
    PORT: 4040,
    DB_URI: `mongodb+srv://normalguy:normalguy@cluster0.5t60k.mongodb.net/database?retryWrites=true&w=majority`,
    SALT_ROUNDS: 10,
    SECRET: 'MNOGOQKASOLBATE',
    COOKIE_NAME: 'TOKEN'
}

module.exports = config;