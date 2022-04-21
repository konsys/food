import { jwtConstants } from "src/config";

export const getTokenExpire = () => {
    const expires = new Date();
    expires.setSeconds(expires.getSeconds() + jwtConstants.refreshExpires);
    return expires
}