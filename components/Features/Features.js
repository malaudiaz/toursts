import {BiRestaurant} from 'react-icons/bi';
import {AiFillCar} from 'react-icons/ai';
import {FaRoute} from 'react-icons/fa';

const Features = () => {
    return (
		<div className="gtco-section gto-features">
			<div className="gtco-container">
				<div className="row">
					<div className="col-md-4">
						<div className="feature-left">
							<FaRoute className='icon' size={32}/>
							<div className="copy">
								<h3>Itinerarios</h3>
								<p>Lorem ipsum dolor sit ameteista, consectetur adipiscing is not elitistaris.</p>
								<p><a href="#" className="gtco-more">Learn more</a></p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="feature-left">
							<AiFillCar className='icon' size={32}/>
							<div className="copy">
								<h3>Transporte</h3>
								<p>Lorem ipsum dolor sit ameteista, consectetur adipiscing is not elitistaris.</p>
								<p><a href="#" className="gtco-more">Learn more</a></p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="feature-left">
							<BiRestaurant className='icon' size={32}/>
							<div className="copy">
								<h3>Restaurantes</h3>
								<p>Lorem ipsum dolor sit ameteista, consectetur adipiscing is not elitistaris.</p>
								<p><a href="#" className="gtco-more">Learn more</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}
export default Features;