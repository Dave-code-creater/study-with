import ProgressBar from 'react-bootstrap/ProgressBar';


function ContextualExample() {
    return (
        <div>
            <ProgressBar variant="success py-5" now={40} />
            <br />
            <ProgressBar variant="info" now={20} />
            <br />
            <ProgressBar variant="warning" now={60} />
            <br />
            <ProgressBar variant="danger" now={80} />
        </div>
    );
}

export default ContextualExample;