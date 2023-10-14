function Post({Title, Description, Tags, PostedBy, MaxNumber, CurrentNumber}){
	return(
		<div className="card w-96 bg-base-100 shadow-xl font-jetbrains">
			<div className="card-body">
				<h2 className="card-title">{Title}</h2>
				<p>{Description}</p>
				<p>Spots Left: {MaxNumber-CurrentNumber}</p>
				<p>Posted by {PostedBy}</p>
				<p className="flex gap-px items-center">Tags: {Tags.map((tag,index)=>{
					return <div key={index} className="badge badge-neutral">{tag}</div>
				})}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-secondary">Join</button>
				</div>
			</div>
		</div>

	)
}

export default Post
