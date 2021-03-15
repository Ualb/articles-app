import Article from "../tables/article.js"
import Billing from "../tables/billing.js"

export default function Detail(props) {

    const { windows } = props;

    return (
        <>
            {windows === 'articles' ?
                <Article /> :
                <Billing />
            }
        </>
    )
}