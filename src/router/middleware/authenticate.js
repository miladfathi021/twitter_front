
export default function authenticate({next, store}) {

    if (!store.getters['auth/isAuthenticated']) {
        return next({ name: 'Welcome' });
    }

    return next();
}