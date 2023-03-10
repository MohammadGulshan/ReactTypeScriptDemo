export const Table = ({ sortArray }: any) => {
	return (
		<div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
			<table style={{ margin: '0 auto' }} border={1}>
				<thead>
					<tr style={{ color: 'red', fontWeight: 'bolder' }}>
						<td>
							Name
						</td>
						<td>
							Date of Birth
						</td>
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
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export type sortTableType = {
	id: number,
	first: string,
	last: string,
	dateOfBirth: string
}