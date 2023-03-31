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
					<DataItem>
						<DataItemLabel>Expires</DataItemLabel>
						<DataItemContent>
							{signatureData &&
								new Date(Number(signatureData.expires + 1000)).toLocaleString('en-US', {
									weekday: 'long',
									day: 'numeric',
									month: '2-digit',
									year: 'numeric'
								})}
						</DataItemContent>
					</DataItem>
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
	gap: 1rem;
  padding-top: 2rem;
`

const DataItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	color: #fff;
`

const DataItemLabel = styled.span`
	padding: 0.25rem 0.5rem;
	font-size: 0.875rem;
	background-color: #f5f5f5;
	color: #303030;
	width: fit-content;
	border-radius: 0.25rem;
  pointer-events: none;
`

const DataItemContent = styled.p`
  font-size: 1rem;
`

const SignatureData = styled(DataItemContent)`
	font-family: monospace;
	word-break: break-all;
`
