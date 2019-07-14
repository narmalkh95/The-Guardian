const initialState = {
    api: "https://content.guardianapis.com/search?api-key=test&show-fields=thumbnail&show-blocks=body&use-date=first-publication",
    articles: [],
    page: 1,
    date: String
}



const HomePage = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_NEW_ARTICLES":
            return {...state, articles: [ ...state.articles,...action.articles ], page: state.page += 1};
        case "PAGE_UP":
            return {...state, page: state.page += 1};
        case "NEW_DATE":
            return {...state, date:  action.date};
        case "SAVE_HIGHLIGHTED_ARTICLES":
            return {...state, articles: [ ...action.articles, ...state.articles ], page: state.page += 1, date: action.date};
        case "WATCHED":
            return {...state, ...state.articles[action.index].highlighted = false, ...state.articles[action.index].watched += 1}
        case "WATCH_LATER":
                return {...state, ...state.articles[action.index].watch_later = action.boolean}
        default:
            return state;
      }
};

export default HomePage;