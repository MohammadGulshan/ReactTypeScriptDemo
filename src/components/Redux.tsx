import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { videoTableActions } from './redux/video-table/videoTableActions'
// import { getColors } from './redux/rainbow/rainbowActions'
import { getColors } from './redux/rainbow/rainbowReducer'

const Redux = () => {
	const noOfMov = useSelector((state: any) => {
		return state.videoTable.initNoOfMovies
	})
	const dispatchnoOfMov = useDispatch()
	const dispatchColor = useDispatch()

	const [changeMovieBy, setChangeMovieBy] = useState(1);

	useEffect(() => {
		console.log(getColors.type)
		dispatchColor(getColors()) // This will go to the rootSaga which will inturn go to saga handler.
	},
		[dispatchColor]
	)
	const s = useSelector((s: any) => s)
	console.log(s)
	
	return (
		<>
			<hr /><hr /><h4>** REDUX **</h4><hr /><hr />
			{/* ++++++++++ REDUX EXAMPLE ++++++++++ START */}


			{/* {`Number of Movies released (WTIHOUT HOOK useSelector() - ${props.initNoOfMovies}`} <br /> */}
			{`Number of Movies released (With HOOK useSelector() - ${noOfMov}`} <br />

			<input type="number" value={changeMovieBy} onChange={(e) => setChangeMovieBy(parseInt(e.target.value))} />

			{/* <button onClick={props.newRelease}>NEW RELEASE</button> */} <br />
			<button onClick={() => dispatchnoOfMov(videoTableActions(changeMovieBy))}>NEW RELEASE</button>
			<br /><br />

			<div>
				{s?.colors?.colors?.map((item: any) => <div style={{display: 'inline-block', height: '50px', width: '50px', margin: '20px', backgroundColor: item.title}} key={item.id}></div>)}
			</div>

			{/* ++++++++++ REDUX EXAMPLE ++++++++++ END */}
			<hr /><hr /><h4>** REDUX - END **</h4><hr /><hr />
		</>
	)
}

// const mapStateToProps = (state: any) => {
// 	return {
// 		initNoOfMovies: state
// 	}
// }

// const mapDispatchToProps = (dispatch: any) => {
// 	return {
// 		newRelease: () => dispatch(videoTableActions())
// 	}
// }


export default (Redux)
// connect(mapStateToProps, mapDispatchToProps)  <-- Put this before (Redux) for the old way!

