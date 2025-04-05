import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function InfoCard({ title, text, image, buttonText }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="info">{buttonText}</Button>


      </Card.Body>
    </Card>
  );
}

export default InfoCard;
