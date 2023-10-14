function HomeContainer(){
	return(
		<section className="h-screen" id="home">
			<div className="flex flex-col justify-center items-left px-96 py-56 gap-4">
				<div className="font-bungee text-9xl">
					PROJFIND
				</div>
				<div className="font-jetbrains text-2xl">
					You bring the idea,<br/>
					We bring the people.
				</div>
				<button className="btn btn-wide font-jetbrains margin mt-10">Get Started!</button>
			</div>
		</section>
	)
}

export default HomeContainer;
