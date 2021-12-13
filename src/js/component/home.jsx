import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
// import SkylineImage from "src/img/Skyline_UrbanPardise_0.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid d-flex justify-content-between">
					<div>
						<a className="navbar-brand" href="#">
							Welcome to My Blog
						</a>
					</div>
					<div>
						<div
							className="collapse çnavbar-collapse"
							id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a
										className="nav-link active"
										aria-current="page"
										href="#">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Fans
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Help
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Contact us
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<div className="container">
				<div className="jumbotron">
					<h1 className="display-4">Hi this is my first blog!</h1>
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
					<hr className="my-4" />
					<p>
						Vitae et leo duis ut diam quam nulla porttitor. Urna
						neque viverra justo nec ultrices dui sapien eget. At
						consectetur lorem donec massa sapien faucibus et.
					</p>
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Contact us
					</a>
				</div>

				<div className="container-fluid d-flex justify-content-between">
					<div className="card" style={{ width: "18rem" }}>
						<img
							src="https://1.bp.blogspot.com/-33yWnmi1pDs/UQfUtNjwhOI/AAAAAAAAg08/xzu7cauygLY/s1600/TatraPhotographylake2534671.jpg"
							className="card-img-top"
							alt="Prometeo facha"
						/>
						<div className="card-body">
							<h5 className="card-title">First Card</h5>
							<p className="card-text">
								Erat nam at lectus urna. Facilisis mauris sit
								amet massa vitae tortor condimentum lacinia
							</p>
							<a href="#" className="btn btn-primary">
								Original Lenses
							</a>
						</div>
					</div>

					<div className="card" style={{ width: "18.15rem" }}>
						<img
							src="https://wonderfulengineering.com/wp-content/uploads/2014/07/Landscape-pictures-35.jpg"
							className="card-img-top"
							alt="Prometeo ama su mantita"
						/>
						<div className="card-body">
							<h5 className="card-title">Nature </h5>
							<p className="card-text">
								Mientras se van los fríos aprovecha a dormir la
								siesta.
							</p>
							<a href="#" className="btn btn-primary">
								Blue Sky{" "}
							</a>
						</div>
					</div>

					<div className="card" style={{ width: "18rem" }}>
						<img
							src="https://wallsdesk.com/wp-content/uploads/2018/03/Pictures-of-Elk.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Big Elk</h5>
							<p className="card-text">
								Etiam sit amet nisl purus in. Enim nec dui nunc
								mattis enim ut tellus elementum sagittis
							</p>
							<a href="#" className="btn btn-primary">
								Wild Animal
							</a>
						</div>
					</div>

					<div className="card" style={{ width: "18rem" }}>
						<img
							src="https://jooinn.com/images/valley-landscape-3.jpg"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Green Earth </h5>
							<p className="card-text">
								Ornare suspendisse sed nisi lacus. Purus sit
								amet volutpat consequat mauris nunc congue nisi
								vitae. Ipsum dolor sit amet consectetur.
							</p>
							<a href="#" className="btn btn-primary">
								Nature Valley
							</a>
						</div>
					</div>
				</div>
			</div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid d-flex justify-content-between">
					<div>
						<a className="navbar-brand" href="#"></a>
					</div>
					<div></div>
				</div>
			</nav>
		</div>
	);
};

export default Home;
