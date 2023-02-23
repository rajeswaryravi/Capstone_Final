import Card from "react-bootstrap/Card";
import "bootstrap-icons/font/bootstrap-icons.css";
import ".././Style/Jobs.css";
import { Link } from "react-router-dom";

function Jobs() {
  return (
    <div class="container">
      <div class="row justify-content-md-center card-container">
        <div class="col-md-auto">
          <Card className="singleCardJob">
            <Card.Body>
            <Card.Title>1</Card.Title>
              <Card.Title>Sales Manager</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                SRG International
              </Card.Subtitle>
              <Card.Text className="cardtxt">
                <i class="bi bi-briefcase">5-8 Yrs</i>{" "}
                <i class="bi bi-currency-rupee">Not disclosed</i>{" "}
                <i class="bi bi-geo-alt">Faridabad</i>
              </Card.Text>
              <Link to={"/apply/"+ 1 }  className="cardsLink">Apply Here</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div class="row justify-content-md-center card-container">
        <div class="col-md-auto">
          <Card className="singleCardJob">
            <Card.Body>
            <Card.Title>2</Card.Title>
              <Card.Title>Accounts Officer - Banking</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                KAYPEE FOOD PRODUCTS
              </Card.Subtitle>
              <Card.Text className="cardtxt">
                <i class="bi bi-briefcase">4-9 Yrs</i>{" "}
                <i class="bi bi-currency-rupee">2,75,000-4,00,000</i>{" "}
                <i class="bi bi-geo-alt">Gualior</i>
              </Card.Text>
              <Link to={"/apply/"+ 2 }  className="cardsLink">Apply Here</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div class="row justify-content-md-center card-container">
        <div class="col-md-auto">
          <Card className="singleCardJob">
            <Card.Body>
            <Card.Title>3</Card.Title>
              <Card.Title>SPA FICO Consultant</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Bhavana Balkrishna Goaker
              </Card.Subtitle>
              <Card.Text className="cardtxt">
                <i class="bi bi-briefcase">10-15 Yrs</i>{" "}
                <i class="bi bi-currency-rupee">10,00,000-12,00,000</i>{" "}
                <i class="bi bi-geo-alt">Mumbai</i>
              </Card.Text>
              <Link to={"/apply/"+ 3 }  className="cardsLink">Apply Here</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div class="row justify-content-md-center card-container cards-container">
        <div class="col-md-auto">
          <Card className="singleCardJob">
            <Card.Body>
            <Card.Title>4</Card.Title>
              <Card.Title>Assistant Manager - PLA</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Indigo Airline
              </Card.Subtitle>
              <Card.Text className="cardtxt">
                <i class="bi bi-briefcase">1-6 Yrs</i>{" "}
                <i class="bi bi-currency-rupee">Not disclosed</i>{" "}
                <i class="bi bi-geo-alt">Remote</i>
              </Card.Text>
              <Link to={"/apply/"+ 4 }  className="cardsLink">Apply Here</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div class="row justify-content-md-center card-container">
        <div class="col-md-auto">
          <Card className="singleCardJob">
            <Card.Body>
            <Card.Title>5</Card.Title>
              <Card.Title>Web Logic Portal</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                ezProHub LLC
              </Card.Subtitle>
              <Card.Text className="cardtxt">
                <i class="bi bi-briefcase">2-5 Yrs</i>{" "}
                <i class="bi bi-currency-rupee">Not disclosed</i>{" "}
                <i class="bi bi-geo-alt">Coimbatore</i>
              </Card.Text>
              <Link to={"/apply/"+ 5 }  className="cardsLink">Apply Here</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div class="row justify-content-md-center card-container">
        <div class="col-md-auto">
          <Card className="singleCardJob">
            <Card.Body>
            <Card.Title>6</Card.Title>
              <Card.Title>Account Execute</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Hitech Information Fast Service
              </Card.Subtitle>
              <Card.Text className="cardtxt">
                <i class="bi bi-briefcase">4-6 Yrs</i>{" "}
                <i class="bi bi-currency-rupee">3,00,000-5,00,000</i>{" "}
                <i class="bi bi-geo-alt">Pune</i>
              </Card.Text>
              <Link to={"/apply/"+ 6 }  className="cardsLink">Apply Here</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
