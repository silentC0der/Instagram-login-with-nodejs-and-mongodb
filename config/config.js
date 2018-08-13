var in_client_id = '492d2d55b8c94579a3738731fec6bf88',
    in_client_secret = '768aefe9848247a39259001a376b426b',
    in_redirect_uri = 'http://localhost:3000/auth',
    redirect_uri = 'http://localhost:3000/auth',
    in_auth_url = 'https://api.instagram.com/oauth/authorize/?client_id='
        + in_client_id + '&redirect_uri='
        + in_redirect_uri + '&response_type=code';

var db_user = 'user',
    db_password = 'pass',
    db_uri = 'mongodb://127.0.0.1:27017/db_test-insta-login';

module.exports = {
    port: process.env.PORT || 3000,
    db: {
        uri: db_uri
    },
    instagram: {
        client_id: in_client_id,
        client_secret: in_client_secret,
        auth_url: in_auth_url,
        redirect_uri: redirect_uri
    }
};