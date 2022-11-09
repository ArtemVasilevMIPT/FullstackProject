import { NewsItem } from "./NewsItem";
import '../Styles/Community.css'

export function Community() {
    return (
        <div className="community-wrapper">
            <div className="news-list">
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
            </div>
            <div className="vertical-line">
                <button className="news-button">News</button>
                <button className="news-button">Forum</button>
                <button className="news-button">Guides</button>
                <button className="news-button">FAQ</button>
            </div>
        </div>
    );
}