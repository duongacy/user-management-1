const initState = {
    userList: [
        {
            id: 1,
            name: "Dinh Phuc Nguyen",
            username: "dpnguyen",
            email: "dpnguyen@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP",
        },
        {
            id: 2,
            name: "hao",
            username: "nguyendp",
            email: "nguyendp@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP",
        },
    ]
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE":
            state.userList = state.userList.filter(item => item.id !== action.payload);
            break;

        case "ADD_USER":
            const newUser = {...action.payload, id: Date.now()}
            state.userList=[...state.userList, newUser];
        default:
            break;
    }
    return { ...state }
}
