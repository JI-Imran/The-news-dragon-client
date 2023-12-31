import moment from 'moment/moment';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image className='mb-3' style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0  bold'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('yyyy-mm-d')}</small></p>
                </div>
                <div >
                    <FaRegBookmark />
                    <FaShareAlt className='ms-2' />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant='top' src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex ">
                <div className='flex-grow-1 d-flex align-items-center'>
                    {/* <Rating
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar className='text-warning' />}
                        placeholderSymbol={<FaStar className='text-warning' />}
                        fullSymbol={<FaStar className='text-warning' />}
                    /> */}
                    <Rating
                    style={{maxWidth: 150}}
                    value={Math.round(rating?.number || 0)}
                    readOnly
                    />
                    <span className='ms-1'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye />{total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;