import './serviceCard.css';

const ServiceCard = ({ title , description}) => {
    return (
        <div className="container">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
export default ServiceCard;