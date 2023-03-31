import React from 'react'
import styled from 'styled-components'

export default function Verified({ result }) {
	const { verified, name, signatureData } = result

	return (
		<Wrapper>
			{verified ? (
				<>
					<DataItem>
						<DataItemLabel>{name}</DataItemLabel>
						<DataItemContent>Verified! 🎉</DataItemContent>
					</DataItem>
					<DataItem>
						<DataItemLabel>Signature</DataItemLabel>
						<SignatureData>{signatureData.signature}</SignatureData>
					</DataItem>
					<DataItem>
						<DataItemLabel>Domain</DataItemLabel>
						<DataItemContent>{signatureData && signatureData.domain}</DataItemContent>
					</DataItem>
					{signatureData && signatureData.expires && <DataItem>
						<DataItemLabel>Expires</DataItemLabel>
						<DataItemContent>
							{new Date(Number(signatureData.expires + 1000)).toLocaleString('en-US', {
								weekday: 'long',
								day: 'numeric',
								month: '2-digit',
								year: 'numeric'
							})}
						</DataItemContent>
					</DataItem>}
				</>
			) : (
        <DataItem>
          <DataItemLabel>{name}</DataItemLabel>
          <DataItemContent>Not verified 😔</DataItemContent>
        </DataItem>
			)}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  padding-top: 2rem;
	gap: 1.25rem;
`

const DataItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: .75rem;
`

const DataItemLabel = styled.span`
	padding: 0.4rem .75rem;
	font-size: .75rem;
	color: #fff;
	width: fit-content;
	border-radius: 0.25rem;
  pointer-events: none;
	font-weight: 400;
	background-color: #1e1e20;
`

const DataItemContent = styled.p`
  font-size: 1rem;
	color: #8c8e90;
`

const SignatureData = styled(DataItemContent)`
	font-family: monospace;
	word-break: break-all;
`
