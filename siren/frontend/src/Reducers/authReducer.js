const TOKEN_KEY = localStorage.getItem("token");

export const isLogin = () => {
    if (TOKEN_KEY == "undefined" && TOKEN_KEY == null) {
        return false;
    }
    return true;
};

export const logout = () => {
    localStorage.removeItem("token");
};