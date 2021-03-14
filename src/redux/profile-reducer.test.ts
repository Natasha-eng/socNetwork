import profileReducer, {addPostAC, deletePost, InitialProfileState} from "./profile-reducer";

let state: InitialProfileState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 23},
        {id: 2, message: "It's my first post", likesCount: 14},
        {id: 3, message: "BalBla", likesCount: 14},
        {id: 4, message: "DaDa", likesCount: 14}
    ],
    profile: null,
    status: ""
}

test('new post should be added', () => {

    let newState = profileReducer(state, addPostAC('it-incubator.com'))
    expect(newState.posts.length).toBe(5);
    expect(newState.posts[4].message).toBe('it-incubator.com');
});

test('after deleting length of messages should be decremented', () => {

    let newStata = profileReducer(state, deletePost(1))

    expect(newStata.posts.length).toBe(3)
})

test("after deleting length shouldn't be decremented if id is incorrect", () => {

    let newStata = profileReducer(state, deletePost(1000))

    expect(newStata.posts.length).toBe(4)
})
