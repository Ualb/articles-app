import '../../assets/css/nav.css';

export default function Navegator(props) {

    const { setWindows } = props;

    const switchWindows = (phader) => {
        setWindows(phader);
    }

    return (
        <div className="navegator">
            <h2 onClick={() => switchWindows('articles')}>ARTICLES</h2>
            <h2 className="sales" onClick={() => switchWindows('sales')}>SALES</h2>
        </div>
    )
}