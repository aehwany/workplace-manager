const mutations = {
    setUser(state, user) {
        state.user = user;
        if (user == null) state.isLoggedIn = false;
        else state.isLoggedIn = true;
    },
};

export default mutations;
