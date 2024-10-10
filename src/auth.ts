// auth.ts
export function isAuthenticated(): boolean {
    const userData = localStorage.getItem('userData');
    return userData !== null;
}

export function redirectIfNotAuthenticated(redirectUrl: string): void {
    if (!isAuthenticated()) {
        window.location.href = redirectUrl;
    }
}
