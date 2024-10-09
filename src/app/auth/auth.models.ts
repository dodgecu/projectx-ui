export interface UserLoginRequest {
    username: string;
    password: string;
}

export interface UserLoginResponse {
    token: string;
    username: string;
}