function generateRandomKey() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const keyLength = 16; // adjust the length of the key as needed
    let randomKey = '';

    for (let i = 0; i < keyLength; i++) {
        randomKey += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return randomKey;
}

// Example usage:
const userKey = generateRandomKey();
console.log(userKey); // Output: a random key, e.g. "4SdJ8LpQaRtYbGn"

// Store user data in local storage using the generated key
localStorage.setItem(`user-${userKey}`, JSON.stringify({
    username: 'John Doe',
    email: 'johndoe@example.com',
    // ...
}));