import { useState } from "react"

export const Table = ({ sortArray }: any) => {
	const [videoSrc, setVideoSrc] = useState('')
	return (
		<div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<div>
				<table style={{ margin: '0 auto' }} border={1}>
					<thead>
						<tr style={{ color: 'red', fontWeight: 'bolder' }}>
							<td>
								Name
							</td>
							<td>
								Date of Birth
							</td>
							<td>Play Video</td>
						</tr>
					</thead>
					<tbody>
						{sortArray.map((item: sortTableType) => {
							return (
								<tr key={item.id}>
									<td>
										{item.first}
									</td>
									<td>
										{item.dateOfBirth}
									</td>
									<td>
										<button onClick={() => {
											setVideoSrc(item.videoUrl)
										}}>Play</button>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
			<div style={{marginLeft: '50px'}}>
				<iframe title='youtubeVideo' src={videoSrc.length ? `https://www.youtube.com/embed/${videoSrc}` : ''}></iframe>
			</div>
		</div>
	)
}

export type sortTableType = {
	id: number,
	first: string,
	last: string,
	dateOfBirth: string,
	videoUrl: string
}