export const SAVE_NEW_ARTICLES = (articles) => ({ 
        type: "SAVE_NEW_ARTICLES",
        articles: articles
    });

export const PAGE_UP = () => ({
    type: "PAGE_UP"
})

export const NEW_DATE = (date) => ({
    type: "NEW_DATE",
    date
})

export const SAVE_HIGHLIGHTED_ARTICLES = (articles, date) => ({
    type: "SAVE_HIGHLIGHTED_ARTICLES",
    articles,
    date
})

export const WATCHED = (index) => ({
    type: "WATCHED",
    index
})

export const WATCH_LATER = (index, boolean) => ({
    type: "WATCH_LATER",
    index,
    boolean
})