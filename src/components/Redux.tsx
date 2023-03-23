import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { videoTableActions } from './redux/video-table/videoTableActions'

const Redux = () => {
	const noOfMov = useSelector((state: any) => {
		return state.videoTable.initNoOfMovies
	})
	const dispatchnoOfMov = useDispatch()
	const [changeMovieBy, setChangeMovieBy] = useState(1);
	
	return (
		<>
			<hr /><hr /><h4>** REDUX **</h4><hr /><hr />
			{/* ++++++++++ REDUX EXAMPLE ++++++++++ START */}


			{/* {`Number of Movies released (WTIHOUT HOOK useSelector() - ${props.initNoOfMovies}`} <br /> */}
			{`Number of Movies released (With HOOK useSelector() - ${noOfMov}`} <br />

			<input type="number" value={changeMovieBy} onChange={(e) => setChangeMovieBy(parseInt(e.target.value))} />

			{/* <button onClick={props.newRelease}>NEW RELEASE</button> */} <br />
			<button onClick={() => dispatchnoOfMov(videoTableActions(changeMovieBy))}>NEW RELEASE</button>


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

